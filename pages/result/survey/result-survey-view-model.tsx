import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { baseDapilStoreImplementation } from "src/data/store-implementation/base-dapil-implementation";
import { dapilStoreImplementation } from "src/data/store-implementation/dapil-store-implementation";
import { locationStoreImplementation } from "src/data/store-implementation/location-store-implementation";
import { partyStoreImplementation } from "src/data/store-implementation/party-store-implementation";
import { resultDapilStoreImplementation } from "src/data/store-implementation/result-dapil-store-implementation";
import { resultWinnerStoreImplementation } from "src/data/store-implementation/result-winner-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import {
  MapResultDapilRegionEntity,
  MapResultEntity,
} from "src/domain/entity/map-result-entity";
import { getBaseDapilUseCase } from "src/use-case/base-dapil/get-base-dapil-use-case";
import { getDapilByIdUseCase } from "src/use-case/dapil/get-dapil-by-id-use-case";
import { getLocationUseCase } from "src/use-case/location/get-location-use-case";
import { getDapilUseCase } from "src/use-case/dapil/get-dapil-use-case";
import { getPartyUseCase } from "src/use-case/party/get-party-use-case";
import { getResultDapilRegionUseCase } from "src/use-case/result-dapil/get-result-dapil-region-use-case";
import { DapilEntity } from "src/domain/entity/dapil-entity";
import { CandidateResultDapilXRegencyEntity } from "src/domain/entity/candidate-entity";
import { getResultSurveyUseCase } from "src/use-case/result-survey/get-result-survey-use-case";
import { resultSurveyStoreImplementation } from "src/data/store-implementation/result-survey-store-implementation";
import { DateConverter } from "src/helpers/date-converter";
import numeral from "numeral";
import { uploadSurveysStoreImplementation } from "src/data/store-implementation/upload-surveys-store-implementation";
import { getUploadSurveysUseCase } from "src/use-case/upload-surveys/get-upload-surveys-use-case";
import {
  DataSetSurveyEntity,
  ResultSurveyByPeriodEntity,
} from "src/domain/entity/result-survey-entity";

const ResultSurveyViewModel = () => {
  const locationStore = locationStoreImplementation();
  const partyStore = partyStoreImplementation();
  const settingStore = settingStoreImplementation();
  const baseDapilStore = baseDapilStoreImplementation();
  const dapilStore = dapilStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();
  const resultWinnerStore = resultWinnerStoreImplementation();
  const resultSurveyStore = resultSurveyStoreImplementation();
  const uploadSurveysStore = uploadSurveysStoreImplementation();
  const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false);
  const [mapResult, setMapResult] = useState<MapResultEntity>();
  const [resultDapils, setResultDapils] =
    useState<MapResultDapilRegionEntity[]>();
  const [dapils, setDapils] = useState<DapilEntity[]>([]);
  const [showCandidateModal, setShowCandidateModal] = useState<boolean>(false);
  const [candidateDataModal, setCandidateDataModal] =
    useState<CandidateResultDapilXRegencyEntity>();
  const [resultMapped, setResultMapped] = useState<any[]>([]);
  const [dataInfo, setDataInfo] = useState<ResultSurveyByPeriodEntity[]>();
  const [dataBar, setDataBar] = useState<any>({});
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {}, [isLoadingModal, candidateDataModal, dataBar]);

  useEffect(() => {
    mapDataGroupBarChart();

    let tmpLabels = dataInfo?.map((item) =>
      item.candidate
        ? `${item.candidate?.name} - ${item.party?.short_name}`
        : item?.party?.short_name
    );

    setOptions(tmpLabels);
  }, [dataInfo]);

  useEffect(() => {
    mapDataByPeriod();
  }, [resultSurveyStore?.resultSurveys]);

  useEffect(() => {
    if (dapilStore?.dapils) {
      const result = dapilStore?.dapils?.map((item) => ({
        name: item?.dapil?.name,
        id: item?.dapil?.id?.toString(),
      }));
      setDapils(_.uniqBy(result, "id"));
    }
  }, [dapilStore?.dapils]);

  const initProvince = useCallback(async () => {
    await getLocationUseCase(locationStore, "province", "", false, "", false);
    setMapResult(null);
  }, [locationStore]);

  const initBaseDapil = useCallback(async () => {
    await getBaseDapilUseCase(baseDapilStore, "");
  }, [baseDapilStore]);

  const initDapil = useCallback(
    async (provinceId: string) => {
      await getLocationUseCase(locationStore, "dapil", "", true, provinceId);
    },
    [locationStore]
  );

  const initParty = useCallback(async () => {
    await getPartyUseCase(partyStore, "");
  }, [partyStore]);

  const getDapilById = useCallback(
    async (dapilId: string) => {
      await getDapilByIdUseCase(dapilStore, dapilId);
    },
    [dapilStore]
  );

  const getDapilRegion = async (code: string) => {
    await getResultDapilRegionUseCase(
      resultDapilStore,
      code,
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId
    );
  };

  const handleGetDapils = async (property: string) => {
    setIsLoadingModal(true);
    await getDapils(property);
    setIsLoadingModal(false);
  };

  const getDapils = useCallback(
    async (property: string) => {
      await getDapilUseCase(
        dapilStore,
        "",
        property == "-1" ? "" : property,
        appStoreImplementation.getState().setting?.globalTypeId,
        appStoreImplementation.getState().setting?.globalPeriodId
      );
    },
    [dapilStore?.dapils]
  );

  const getUploadSurveys = useCallback(
    async (dapil: string) => {
      await getUploadSurveysUseCase(uploadSurveysStore, dapil);
    },
    [uploadSurveysStore.uploadSurveys]
  );

  const mapDataByPeriod = () => {
    const isParty = resultSurveyStore?.resultSurveys?.[0]?.party;
    const sortByPartyId = _.orderBy(
      resultSurveyStore?.resultSurveys,
      isParty ? "party.id" : "candidate.party.id",
      "asc"
    );
    const sortByPeriod = _.orderBy(sortByPartyId, "period_survey", "asc");
    const result = _(sortByPeriod)
      .groupBy(isParty ? "party.id" : "candidate.id")
      .map((items, objGroupId) => ({
        party: isParty
          ? items.filter((item) => item?.party?.id == objGroupId)?.[0]?.party
          : items.filter(
              (item) => item?.candidate?.id.toString() == objGroupId
            )?.[0]?.candidate?.party,
        candidate: !isParty
          ? items.filter(
              (item) => item?.candidate?.id.toString() == objGroupId
            )?.[0]?.candidate
          : null,
        lineDataSeries: items.map((groupItems) => ({
          x: `${DateConverter.getDisplayMonthYear(
            groupItems?.period_survey
          )} - ${groupItems?.institution?.name}`,
          y: groupItems?.result,
          color: isParty
            ? groupItems?.party?.color
            : groupItems?.candidate?.party?.color,
          secondary_color: isParty
            ? groupItems?.party?.secondary_color
            : groupItems?.candidate?.party?.secondary_color,
        })),
        data: items.map((groupItems) => ({
          institution: groupItems?.institution,
          total_kursi: groupItems?.total_kursi,
          result: groupItems?.result,
          total_pengguna_hak_pilih: groupItems?.total_pengguna_hak_pilih,
          total_sah: groupItems?.total_sah,
          position: groupItems?.position,
          period_survery: DateConverter.getDisplayMonthYear(
            groupItems?.period_survey
          ),
        })),
      }))
      .value();
    console.log("wulu survey bersih", result);
    setDataInfo(result);
  };

  const mapDataGroupBarChart = () => {
    const dataSet: DataSetSurveyEntity[] = [];
    dataInfo?.map((items) => {
      items?.lineDataSeries?.map((itemLineData) => {
        const idx = dataSet?.findIndex(
          (filterItem) => filterItem?.label == itemLineData?.x
        );

        if (idx < 0) {
          dataSet.push({
            label: itemLineData?.x,
            backgroundColor: [itemLineData?.color],
            data: [itemLineData?.y],
            borderColor: [itemLineData?.secondary_color],
            borderWidth: 1,
            hoverBackgroundColor: [`${itemLineData?.color}80`],
          });
        } else {
          dataSet?.[idx]?.data?.push(itemLineData?.y);
          dataSet?.[idx]?.backgroundColor?.push(itemLineData?.color);
          dataSet?.[idx]?.borderColor?.push(itemLineData?.secondary_color);
          dataSet?.[idx]?.hoverBackgroundColor?.push(
            `${itemLineData?.color}80`
          );
        }
      });
    });

    const result = {
      data: {
        labels: dataInfo?.map((item) =>
          item.candidate
            ? `${item.candidate?.name} - ${item.party?.short_name}`
            : item?.party?.short_name
        ),
        datasets: dataSet,
      },
    };

    console.log("wulu survey bersih data setttt", result);
    setDataBar(result);
  };

  const getResultSurvey = async (
    provinceId: string,
    dapilId: string,
    resultType: "party" | "candidate"
  ) => {
    await getResultSurveyUseCase(
      resultSurveyStore,
      resultType,
      provinceId,
      dapilId,
      "",
      "",
      appStoreImplementation.getState().setting?.globalPeriodId, //selectedPeriod ?? "",
      appStoreImplementation.getState().setting?.globalTypeId //selectedType ?? ""
    );
  };

  useEffect(() => {
    // const isParty = resultSurveyStore?.resultSurveys?.[0]?.party;

    // const resultOrdered = _.orderBy(
    //   resultSurveyStore?.resultSurveys,
    //   isParty ? "party.id" : "candidate.party.id",
    //   "asc"
    // );

    // console.log("resultOrdered", resultOrdered);

    // const periodGrouped = _.groupBy(
    //   resultOrdered,
    //   isParty ? "party.short_name" : "candidate.name"
    // );

    // console.log("periodGrouped", periodGrouped);

    // let tmp = [];

    // for (const [key, value] of Object.entries(periodGrouped)) {
    //   const orderedResult = _.orderBy(value, "period_survey", "asc");
    //   const results = orderedResult?.map((row) => {
    //     return {
    //       name:
    //         DateConverter.getDisplayMonthYear(row?.period_survey) +
    //         " - " +
    //         row?.institution?.name,
    //       value: row?.result,
    //       detail:
    //         row?.party === null
    //           ? `Estimasi mendapatkan ${numeral(row?.total_sah ?? 0).format(
    //               "0,0"
    //             )} suara sah`
    //           : `Estimasi mendapatkan ${numeral(row?.total_sah ?? 0).format(
    //               "0,0"
    //             )} suara sah - ${row?.total_kursi} kursi`,
    //       color:
    //         row?.party === null
    //           ? row?.candidate?.party?.color
    //           : row?.party?.color,
    //       secondary_color:
    //         row?.party === null
    //           ? row?.candidate?.party?.secondary_color
    //           : row?.party?.secondary_color,
    //       logo:
    //         row?.party === null
    //           ? row?.candidate?.party?.logo
    //           : row?.party?.logo,
    //     };
    //   });

    //   let obj = {
    //     name: key,
    //     color: isParty
    //       ? value[0]?.party?.color
    //       : value[0]?.candidate?.party?.color,
    //     results,
    //   };

    //   tmp.push(obj);
    // }

    const isParty = resultSurveyStore?.resultSurveys?.[0]?.party;

    const resultOrdered = _.orderBy(
      resultSurveyStore?.resultSurveys,
      "period_survey",
      "asc"
    );

    console.log("resultOrdered", resultOrdered);

    const periodGrouped = _.groupBy(resultOrdered, "period_survey");

    console.log("periodGrouped", periodGrouped);

    let tmp = [];

    for (const [key, value] of Object.entries(periodGrouped)) {
      const orderedResult = _.orderBy(
        value,
        isParty ? "party.short_name" : "candidate.name",
        "asc"
      );
      const results = orderedResult?.map((row) => {
        return {
          name:
            row?.party === null
              ? row?.candidate?.party?.name
              : row?.party?.short_name,
          value: row?.result,
          detail:
            row?.party === null
              ? `Estimasi mendapatkan ${numeral(row?.total_sah ?? 0).format(
                  "0,0"
                )} suara sah`
              : `Estimasi mendapatkan ${numeral(row?.total_sah ?? 0).format(
                  "0,0"
                )} suara sah - ${row?.total_kursi} kursi`,
          color:
            row?.party === null
              ? row?.candidate?.party?.color
              : row?.party?.color,
          secondary_color:
            row?.party === null
              ? row?.candidate?.party?.secondary_color
              : row?.party?.secondary_color,
          logo:
            row?.party === null
              ? row?.candidate?.party?.logo
              : row?.party?.logo,
        };
      });

      let obj = {
        name:
          DateConverter.getDisplayMonthYear(value[0]?.period_survey) +
          " - " +
          value[0]?.institution?.name,
        color: isParty
          ? value[0]?.party?.color
          : value[0]?.candidate?.party?.color,
        results,
      };

      tmp.push(obj);
    }

    setResultMapped(tmp);
  }, [resultSurveyStore?.resultSurveys]);

  return {
    locations: locationStore,
    parties: partyStore.parties,
    settings: settingStore,
    resultDapil: resultDapilStore,
    resultWinner: resultWinnerStore,
    resultSurvey: resultSurveyStore,
    resultSurveyMapped: resultMapped,
    basedapils: baseDapilStore,
    dapil: dapilStore.dapilById,
    uploadSurveys: uploadSurveysStore,
    dapils,
    mapResult: mapResult,
    resultDapils: resultDapils,
    isLoading: settingStore.isLoading,
    showCandidateModal: showCandidateModal,
    candidateDataModal: candidateDataModal,
    isLoadingModal: isLoadingModal,
    dataInfo: dataInfo,
    dataBar: dataBar,
    options,
    initProvince,
    initParty,
    initBaseDapil,
    initDapil,
    getDapilRegion,
    handleGetDapils,
    getDapilById,
    getResultSurvey,
    getUploadSurveys,
  };
};

export default ResultSurveyViewModel;
