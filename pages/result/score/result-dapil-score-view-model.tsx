import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { baseDapilStoreImplementation } from "src/data/store-implementation/base-dapil-implementation";
import { candidateDocumentStoreImplementation } from "src/data/store-implementation/candidate-document-store-implementation";
import { documentTypeStoreImplementation } from "src/data/store-implementation/document-type-store-implementation";
import { locationStoreImplementation } from "src/data/store-implementation/location-store-implementation";
import { resultDapilStoreImplementation } from "src/data/store-implementation/result-dapil-store-implementation";
import { resultStoreImplementation } from "src/data/store-implementation/result-store-implementation";
import { scoreTypeStoreImplementation } from "src/data/store-implementation/score-type-store-implementation";
import { Sort } from "src/domain/entity/base-dapil-entity";
import { ProvinceEntity } from "src/domain/entity/location-entity";
import {
  AdditionalFieldScoreEntity,
  DrillDownCandidateScore,
  ResultScoreEntity,
} from "src/domain/entity/result-score-entity";
import { UploadDataScoreEntity } from "src/domain/entity/upload-entity";
import { updateAdditionalFieldUseCase } from "src/use-case/base-dapil/update-additional-field-use-case";
import { getDocumentByCandidateUseCase } from "src/use-case/candidate-document/get-document-by-candidate-use-case";
import { getDocumentTypesUseCase } from "src/use-case/document-type/get-document-types-use-case";
import { getLocationUseCase } from "src/use-case/location/get-location-use-case";
import { getResultCandidateScoreUseCase } from "src/use-case/result-dapil/get-result-candidate-score-use-case";
import { getResultDapilScoreUseCase } from "src/use-case/result-dapil/get-result-dapil-score-use-case";
import { removeResultCandidateScoreUseCase } from "src/use-case/result-dapil/remove-result-candidate-score-use-case";
import { syncScoreDataUseCase } from "src/use-case/result/sync-score-data-use-case";
import { uploadScoreUseCase } from "src/use-case/result/upload-score-use-case";
import { getScoreTypesUseCase } from "src/use-case/score-type/get-score-types-use-case";

const ResultDapilScoreViewModel = () => {
  const locationStore = locationStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();
  const scoreTypeStore = scoreTypeStoreImplementation();
  const documentTypeStore = documentTypeStoreImplementation();
  const baseDapilStore = baseDapilStoreImplementation();
  const candidateDocumentStore = candidateDocumentStoreImplementation();
  const resultStore = resultStoreImplementation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [data, setData] = useState<ResultScoreEntity[]>();
  const [province, setProvince] = useState<ProvinceEntity[]>([
    { name: "Pilih Semua Provinsi", id: "-1" },
  ]);

  const [orderBy, setOrderBy] = useState<Sort>({
    name: "dapil.province.id",
    orderBy: "asc",
  });
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [drillDownData, setDrillDownData] = useState<DrillDownCandidateScore[]>(
    []
  );
  const [additionalField, setAdditionalField] = useState<
    AdditionalFieldScoreEntity[]
  >([]);
  const [showDocumentModal, setShowDocumentModal] = useState<boolean>(false);

  const isValidSelectedProvince =
    selectedProvince != "-1" && selectedProvince != "";

  useEffect(() => {
    initResult();
    getMasterDocument();
  }, []);
  useEffect(() => {
    setDisplayData(selectedProvince);
  }, [province]);
  useEffect(() => {}, [isLoading]);
  useEffect(() => {
    setDisplayData("");
    initDrillDownData();
    initValueAdditionalField(resultDapilStore?.resutScores);
  }, [resultDapilStore?.resutScores]);

  useEffect(() => {
    setDisplayDrillDown();
  }, [resultDapilStore?.resultCandidateScore]);

  useEffect(() => {
    if (locationStore?.provinces) {
      const result = [{ name: "Pilih Semua Provinsi", id: "-1" }].concat(
        locationStore?.provinces
      );
      setProvince(result);
    }
  }, [locationStore?.provinces]);
  useEffect(() => {
    setDisplayData(selectedProvince);
  }, [orderBy]);
  useEffect(() => {}, [data]);
  useEffect(() => {}, [drillDownData]);
  useEffect(() => {}, [additionalField]);
  useEffect(() => {}, [showDocumentModal]);
  useEffect(() => {}, [candidateDocumentStore.candidateDocuments]);
  useEffect(() => {}, [scoreTypeStore.scoreTypes]);

  const initResult = async () => {
    setIsLoading(true);
    getMasterScore();
    await getResultScore();
    await initProvince();
    setIsLoading(false);
  };

  const initProvince = useCallback(async () => {
    await getLocationUseCase(locationStore, "province", "", false, "", false);
  }, [locationStore?.provinces]);

  const getMasterDocument = useCallback(() => {
    getDocumentTypesUseCase(documentTypeStore, "");
  }, [documentTypeStore]);

  const setDisplayData = (selectedProvince: string) => {
    let tempData = resultDapilStore?.resutScores;
    const sortDapil = _.orderBy(tempData, "dapil.name", "asc");
    tempData = sortDapil;

    if (isValidSelectedProvince) {
      const filter = tempData.filter(
        (item) => item.dapil.province.id === selectedProvince
      );
      tempData = filter;
    }
    tempData = _.orderBy(tempData, orderBy.name, orderBy.orderBy);
    setData(tempData);
  };

  const setDisplayDrillDown = () => {
    const dapilId = resultDapilStore?.resultCandidateScore?.[0]?.dapil?.id ?? 0;
    if (dapilId === 0) return;
    const temp = drillDownData.filter((item) => item.dapilId !== dapilId);
    temp.push({
      dapilId: dapilId,
      expanded: true,
      sort: {
        name: "candidate.name",
        orderBy: "asc",
      },
      data: _.orderBy(
        resultDapilStore?.resultCandidateScore,
        "candidate.name",
        "asc"
      ),
    });
    setDrillDownData(temp);
  };

  const initDrillDownData = () => {
    const temp: DrillDownCandidateScore[] = [];
    resultDapilStore?.resutScores?.forEach((item) => {
      temp.push({
        dapilId: item.dapil.id,
        expanded: false,
        sort: {
          name: "candidate.name",
          orderBy: "asc",
        },
      });
    });
    setDrillDownData(temp);
  };

  const initValueAdditionalField = (data: ResultScoreEntity[]) => {
    const temp: AdditionalFieldScoreEntity[] = [];
    data?.forEach((item) => {
      temp.push({
        dapilId: item.dapil.id,
        dapil: item.dapil.name,
        province: item.dapil.province.id,
        indeksValue: item.dapil.indeks_value ?? "",
        target: item.dapil.target_kursi.toString(),
        dprt: item.dapil.struktur_dprt ?? "",
      });
    });
    setAdditionalField(temp);
  };

  const getResultScore = async () => {
    await getResultDapilScoreUseCase(
      resultDapilStore,
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId,
      "0",
      "1" // NASDEM
    );
  };

  const getResultCandidateScore = async (dapilId: number) => {
    setIsLoading(true);
    await getResultCandidateScoreUseCase(
      resultDapilStore,
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId,
      dapilId + "",
      "",
      "",
      "1" // NASDEM
    );
    setIsLoading(false);
  };

  const getMasterScore = useCallback(() => {
    getScoreTypesUseCase(scoreTypeStore, "");
  }, [scoreTypeStore]);

  const onProvinceSelected = useCallback(
    (id: string) => {
      setSelectedProvince(id == "-1" ? "" : id);
    },
    [selectedProvince]
  );

  const onButtonClicked = useCallback(async () => {
    if (!isValidSelectedProvince || !resultDapilStore?.resutScores) {
      setIsLoading(true);
      await getResultScore();
      setIsLoading(false);
    }
    setDisplayData(selectedProvince);
  }, [selectedProvince, resultDapilStore?.resutScores]);

  const onSortClicked = useCallback(
    (name: string, orderBy: "asc" | "desc") => {
      let data = {
        name: name,
        orderBy: orderBy,
      };
      setOrderBy(data);
    },
    [orderBy]
  );

  const onExpandedByDapil = useCallback(
    (dapilId: number, isExpanded: boolean) => {
      if (isExpanded) {
        getResultCandidateScore(dapilId);
        return;
      }

      const selectedDrilldown = drillDownData.find(
        (item) => item.dapilId == dapilId
      );
      const temp = drillDownData.filter((item) => item.dapilId !== dapilId);
      temp.push({
        dapilId: dapilId,
        expanded: false,
        sort: selectedDrilldown.sort,
        data: selectedDrilldown.data,
      });
      setDrillDownData(temp);
    },
    [drillDownData]
  );

  const onSortDrilldown = useCallback(
    (dapilId: number, name: string, orderBy: "asc" | "desc") => {
      let selectedDrilldown = drillDownData.find(
        (item) => item.dapilId == dapilId
      );
      let temp = drillDownData.filter((item) => item.dapilId !== dapilId);
      temp.push({
        dapilId: dapilId,
        expanded: true,
        sort: {
          name: name,
          orderBy: orderBy,
        },
        data: _.orderBy(selectedDrilldown.data, name, orderBy),
      });
      setDrillDownData(temp);
    },
    [drillDownData]
  );

  const onUpdateAdditionalField = useCallback(
    async (item: AdditionalFieldScoreEntity) => {
      setIsLoading(true);
      await updateAdditionalFieldUseCase(
        baseDapilStore,
        item.dapil,
        item.province,
        item.dapilId,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId,
        item.dprt,
        item.indeksValue,
        item.target
      );
      const filtered = additionalField.filter(
        (it) => item.dapilId != it.dapilId
      );
      filtered.push(item);
      setAdditionalField(filtered);
      setIsLoading(false);
    },
    [baseDapilStore]
  );

  const getCandidateDocuments = useCallback(
    (candidateId: number) => {
      getDocumentByCandidateUseCase(candidateDocumentStore, candidateId);
    },
    [candidateDocumentStore.candidateDocuments]
  );

  const onDocumentClicked = useCallback(
    (candidateId: number) => {
      getCandidateDocuments(candidateId);
      setShowDocumentModal(true);
    },
    [showDocumentModal, candidateDocumentStore.candidateDocuments]
  );

  const onCloseDocumentModal = useCallback(() => {
    setShowDocumentModal(false);
  }, [showDocumentModal]);

  const onSubmitNewCandidate = useCallback(
    async (dapil: string, candidate: string, gender: string) => {
      const temp: UploadDataScoreEntity[] = [];
      scoreTypeStore.scoreTypes.map((item) => {
        temp.push({
          id: 0,
          dapil: dapil.toUpperCase(),
          candidate: candidate.toUpperCase(),
          gender: gender.toUpperCase(),
          party: "PARTAI NASIONAL DEMOKRAT",
          score_type: parseInt(item.id),
          score: 0,
          notes: "",
        });
      });
      await uploadScoreUseCase(
        resultStore,
        appStoreImplementation.getState().setting?.globalTypeId,
        appStoreImplementation.getState().setting?.globalPeriodId,
        temp
      );
      await syncScoreDataUseCase(resultStore);
      window.location.reload();
    },
    [scoreTypeStore.scoreTypes]
  );

  const onDeleteCandidateClicked = useCallback(async (id: number) => {
    await removeResultCandidateScoreUseCase(resultDapilStore, id);
    await syncScoreDataUseCase(resultStore);
    window.location.reload();
  }, []);

  return {
    provinces: province,
    isLoading: isLoading,
    data: data,
    maxScore:
      scoreTypeStore.scoreTypes
        ?.map((item) => item.max_point)
        ?.reduce((a, b) => a + b) ?? 0,
    orderBy: orderBy,
    drillDownData: drillDownData,
    maxDocument: documentTypeStore?.documentTypes?.length ?? 0,
    additionalField: additionalField,
    trigger: trigger,
    masterDocuments: documentTypeStore?.documentTypes,
    documents: candidateDocumentStore.candidateDocuments,
    showDocumentModal,
    onCloseDocumentModal,
    onUpdateAdditionalField,
    onSortDrilldown,
    onExpandedByDapil,
    onProvinceSelected,
    onButtonClicked,
    onSortClicked,
    onDocumentClicked,
    onSubmitNewCandidate,
    onDeleteCandidateClicked,
  };
};
export default ResultDapilScoreViewModel;
