import _ from "lodash";
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { dapilStoreImplementation } from "src/data/store-implementation/dapil-store-implementation";
import { locationStoreImplementation } from "src/data/store-implementation/location-store-implementation";
import { partyStoreImplementation } from "src/data/store-implementation/party-store-implementation";
import { resultDapilStoreImplementation } from "src/data/store-implementation/result-dapil-store-implementation";
import { resultRegencyStoreImplementation } from "src/data/store-implementation/result-regency-store-implementation";
import { resultWinnerStoreImplementation } from "src/data/store-implementation/result-winner-store-implementation";
import { BaseEntity } from "src/domain/entity/base-entity";
import { CandidateResultDapilXRegencyEntity } from "src/domain/entity/candidate-entity";
import { DapilEntity } from "src/domain/entity/dapil-entity";
import { ProvinceEntity } from "src/domain/entity/location-entity";
import { PartyEntity } from "src/domain/entity/party-entity";
import {
  ResultWinnerSeatByPartyEntity,
  ResultWinnerSeatEntity,
  WinnerSeatPartyEntity,
} from "src/domain/entity/result-winner-seat-entity";
import { Utils } from "src/helpers/utils";
import { getDapilUseCase } from "src/use-case/dapil/get-dapil-use-case";
import { getLocationUseCase } from "src/use-case/location/get-location-use-case";
import { getPartyUseCase } from "src/use-case/party/get-party-use-case";
import { getResultDapilPartyUseCase } from "src/use-case/result-dapil/get-result-dapil-party-use-case";
import { getResultDapilPerCandidateUseCase } from "src/use-case/result-dapil/get-result-dapil-per-candidate-use-case";
import { getResultRegencyPerCandidateUseCase } from "src/use-case/result-regency/get-result-regency-per-candidate-use-case";
import { getResultWinnerUseCase } from "src/use-case/result-winner/get-result-winner-use-case";

const ResultSeatViewModel = () => {
  const locationStore = locationStoreImplementation();
  const partyStore = partyStoreImplementation();
  const resultWinnerStore = resultWinnerStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();
  const dapilStore = dapilStoreImplementation();
  const resultRegencyStore = resultRegencyStoreImplementation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCandidateModal, setShowCandidateModal] = useState<boolean>(false);
  const [data, setData] = useState<ResultWinnerSeatEntity>();
  const [displayData, setDisplayData] = useState<ResultWinnerSeatEntity>();
  const [dataByParty, setDataByParty] =
    useState<ResultWinnerSeatByPartyEntity>();
  const [displayDataByParty, setDisplayDataByParty] =
    useState<ResultWinnerSeatByPartyEntity>();
  const [candidateDataModal, setCandidateDataModal] =
    useState<CandidateResultDapilXRegencyEntity>();
  const [province, setProvince] = useState<ProvinceEntity[]>([
    { name: "Pilih Semua Provinsi", id: "-1" },
  ]);

  const [party, setParty] = useState<PartyEntity[]>([
    { name: "Pilih Semua Partai", id: "-1", logo: "" },
  ]);

  const [dapils, setDapils] = useState<DapilEntity[]>([
    { name: "Pilih Semua Dapil", id: "-1" },
  ]);

  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedParty, setSelectedParty] = useState<string>("");
  const [selectedDapil, setSelectedDapil] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterData: BaseEntity[] = [
    { name: "Semua", id: "all" },
    { name: "Pemenang", id: "winner" },
    { name: "Potensial", id: "potential" },
  ];

  const isValidSelectedProvince =
    selectedProvince != "-1" && selectedProvince != "";
  const isByParty = selectedParty != "" && selectedParty != "-1";

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");
    initResult();
  }, []);

  useEffect(() => {
    if (isByParty) mapToDataByParty();
    mapToData();
  }, [resultWinnerStore?.results_winners]);

  useEffect(() => {
    selectedFilter == "all" ? setDisplayData(data) : mapDisplayData();
    if (isByParty)
      selectedFilter == "all"
        ? setDisplayDataByParty(dataByParty)
        : mapDisplayDataByParty();
  }, [data, selectedFilter, dataByParty]);
  useEffect(() => {}, [displayData]);
  useEffect(() => {}, [province]);
  useEffect(() => {}, [party]);
  useEffect(() => {
    setSelectedDapil("");
  }, [dapils]);
  useEffect(() => {}, [isLoading]);
  useEffect(() => {}, [selectedParty]);
  useEffect(() => {
    isValidSelectedProvince
      ? handleGetDapils(selectedProvince)
      : setDapils([{ name: "Pilih Semua Dapil", id: "-1" }]);
  }, [selectedProvince]);
  useEffect(() => {}, [selectedDapil]);
  useEffect(() => {}, [resultDapilStore?.results_dapil_parties]);
  useEffect(() => {}, [showModal, showCandidateModal]);
  useEffect(() => {}, [candidateDataModal]);
  useEffect(() => {}, [displayDataByParty]);

  useEffect(() => {
    if (!isValidSelectedProvince) {
      setDapils([{ name: "Pilih Semua Dapil", id: "-1" }]);
    }

    if (locationStore?.provinces) {
      const result = [{ name: "Pilih Semua Provinsi", id: "-1" }].concat(
        locationStore?.provinces
      );
      setProvince(result);
    }
  }, [locationStore?.provinces]);

  useEffect(() => {
    if (dapilStore?.dapils) {
      const result = [{ name: "Pilih Semua Dapil", id: "-1" }].concat(
        dapilStore?.dapils?.map((item) => ({
          name: item?.dapil?.name,
          id: item?.dapil?.id?.toString(),
        }))
      );
      setDapils(_.uniqBy(result, "id"));
    }
  }, [dapilStore?.dapils]);

  useEffect(() => {
    if (partyStore?.parties) {
      const result = [
        { name: "Pilih Semua Partai", id: "-1", logo: "" },
      ].concat(
        partyStore?.parties?.map((item) => ({
          name: item.short_name,
          id: item.id,
          logo: item.logo,
        }))
      );
      setParty(result);
    }
  }, [partyStore?.parties]);

  useEffect(() => {
    if (resultDapilStore?.results_dapil_candidate?.length < 1) return;
    const result = {
      ...candidateDataModal,
      resultDapil: resultDapilStore?.results_dapil_candidate?.[0],
    };
    setCandidateDataModal(result);
  }, [resultDapilStore?.results_dapil_candidate]);

  useEffect(() => {
    if (resultRegencyStore?.results_regency_per_candidate?.length < 1) return;
    const result = {
      ...candidateDataModal,
      resultRegencies: resultRegencyStore?.results_regency_per_candidate,
    };
    setCandidateDataModal(result);
  }, [resultRegencyStore?.results_regency_per_candidate]);

  useEffect(() => {
    setSelectedDapil(dapils[1]?.id);
  }, [dapils]);

  const initResult = async () => {
    setIsLoading(true);
    await initProvince();
    await initParty();
    setIsLoading(false);
  };

  const handleGetDapils = async (property: string) => {
    setIsLoading(true);
    await getDapils(property);
    setIsLoading(false);
  };

  const initProvince = useCallback(async () => {
    await getLocationUseCase(locationStore, "province", "", false, "", false);
  }, [locationStore?.provinces]);

  const handleGetCandidateModalData = async (candidate: string) => {
    setIsLoading(true);
    await getResultDapilByCandidate(candidate);
    await getResultRegencyByCandidate(candidate);
    setIsLoading(false);
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

  const initParty = useCallback(async () => {
    await getPartyUseCase(partyStore, "");
  }, [partyStore?.parties]);

  const getResultWinner = async () => {
    await getResultWinnerUseCase(
      resultWinnerStore,
      selectedDapil ?? "",
      true,
      selectedProvince ?? "",
      selectedParty ?? "",
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId
    );
  };

  const getResultDapilByCandidate = useCallback(
    async (candidate: string) => {
      await getResultDapilPerCandidateUseCase(
        resultDapilStore,
        candidate,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId
      );
    },
    [resultDapilStore?.results_dapil_candidate]
  );

  const getResultRegencyByCandidate = useCallback(
    async (candidate: string) => {
      await getResultRegencyPerCandidateUseCase(
        resultRegencyStore,
        "",
        candidate,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId
      );
    },
    [resultRegencyStore?.results_regency_per_candidate]
  );

  const mapDisplayData = () => {
    const isWinnerFilter = selectedFilter == "winner";
    const result = data?.provinces?.map((item) => ({
      province: item?.province,
      dapils: item?.dapils?.map((itemDapil) => ({
        dapil: itemDapil?.dapil,
        candidates: itemDapil?.candidates
          ?.map((itemCandidate, index) =>
            itemDapil?.winner[index] == isWinnerFilter ? itemCandidate : null
          )
          ?.filter((it) => it != null),
        winner: itemDapil?.winner
          ?.map((itemWinner) =>
            itemWinner == isWinnerFilter ? itemWinner : null
          )
          ?.filter((it) => it != null),
        rank: itemDapil?.rank
          ?.map((itemRank, index) =>
            itemDapil?.winner[index] == isWinnerFilter ? itemRank : null
          )
          ?.filter((it) => it != null),
        total_suara: itemDapil?.total_suara
          ?.map((itemTotal, index) =>
            itemDapil?.winner[index] == isWinnerFilter ? itemTotal : null
          )
          ?.filter((it) => it != null),
        saint_laguages: itemDapil?.saint_laguages
          ?.map((itemSaint, index) =>
            itemDapil?.winner[index] == isWinnerFilter ? itemSaint : null
          )
          ?.filter((it) => it != null),
      })),
    }));
    setDisplayData({
      type: "",
      period: "",
      provinces: result,
    });
  };

  const mapDisplayDataByParty = () => {
    const isWinnerFilter = selectedFilter == "winner";
    const data: WinnerSeatPartyEntity[] = dataByParty?.data?.filter(
      (item) => item?.flag_win == isWinnerFilter
    );
    saveDataByParty(data, true);
  };

  const mapToDataByParty = () => {
    const data: WinnerSeatPartyEntity[] =
      resultWinnerStore?.results_winners?.map((item) => ({
        ...item,
        status: item?.flag_win
          ? "winner"
          : item?.sequence > item?.dapil?.total_kursi
          ? "potential"
          : "tracehold",
      }));
    saveDataByParty(data, false);
  };

  const saveDataByParty = (
    data: WinnerSeatPartyEntity[],
    isSaveToDisplay: boolean
  ) => {
    const result = {
      period: data?.[0]?.period,
      type: data?.[0]?.type,
      data: data,
      total_winner: data?.filter((item) => item?.status == "winner")?.length,
      total_potential: data?.filter((item) => item?.status == "potential")
        ?.length,
      total_tracehold: data?.filter((item) => item?.status == "tracehold")
        ?.length,
    };
    isSaveToDisplay ? setDisplayDataByParty(result) : setDataByParty(result);
  };

  const mapToData = () => {
    let groupByProvince = _(resultWinnerStore?.results_winners)
      .groupBy("province.id")
      .map((items, provinceId) => ({
        province: items.filter((item) => item.province.id == provinceId)?.[0]
          ?.province,
        dapils: _(items)
          .groupBy("dapil.id")
          .map((dapilGroupItems, dapilId) => ({
            dapil: dapilGroupItems.filter(
              (item) => item.dapil.id.toString() == dapilId
            )?.[0]?.dapil,
            candidates: _(dapilGroupItems)
              .map("candidate")
              .flatten()
              .orderBy("sequence", "asc")
              .value(),
            saint_laguages: _(dapilGroupItems)
              .map("total_suara_saint_lague")
              .flatten()
              .orderBy("sequence", "asc")
              .value(),
            total_suara: _(dapilGroupItems)
              .map("total_suara")
              .flatten()
              .orderBy("sequence", "asc")
              .value(),
            rank: _(dapilGroupItems)
              .map("sequence")
              .flatten()
              .orderBy("sequence", "asc")
              .value(),
            winner: _(dapilGroupItems)
              .map("flag_win")
              .flatten()
              .orderBy("sequence", "asc")
              .value(),
          }))
          .value(),
      }))
      .value();

    const rootResult = resultWinnerStore?.results_winners?.[0];
    const result: ResultWinnerSeatEntity = {
      provinces: groupByProvince ?? [],
      period: rootResult?.period ?? "",
      type: rootResult?.type ?? "",
    };
    setData(result);
  };

  const onProvinceSelected = useCallback(
    (id: string) => {
      setSelectedProvince(id == "-1" ? "" : id);
    },
    [selectedProvince, selectedDapil]
  );

  const onPartySelected = useCallback(
    (id: string) => {
      setSelectedParty(id == "-1" ? "" : id);
    },
    [selectedParty]
  );

  const onDapilSelected = useCallback(
    (id: string) => {
      setSelectedDapil(id == "-1" ? "" : id);
    },
    [selectedDapil]
  );

  const onButtonClicked = useCallback(async () => {
    setIsLoading(true);
    await getResultWinner();
    setIsLoading(false);
  }, [selectedProvince, selectedParty, selectedDapil]);

  const onDapilClicked = useCallback(
    async (regency: string) => {
      await getResultDapilPartyUseCase(
        resultDapilStore,
        regency,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId
      );
      setShowModal(true);
    },
    [resultDapilStore?.results_dapil_parties, showModal]
  );

  const onCandidateClicked = useCallback(
    async (candidate: string) => {
      await handleGetCandidateModalData(candidate);
      setShowCandidateModal(true);
    },
    [showCandidateModal]
  );

  const onCloseModal = useCallback(() => {
    setShowModal(false);
    setShowCandidateModal(false);
  }, [showModal, showCandidateModal]);

  const onFilterSelected = useCallback(
    (filterId: string) => {
      setSelectedFilter(filterId);
    },
    [selectedFilter]
  );

  return {
    provinces: province,
    parties: party,
    dapils: dapils,
    isLoading: isLoading,
    data: displayData?.provinces,
    candidateDataModal: candidateDataModal,
    selectedParty: selectedParty,
    showModal: showModal,
    showCandidateModal: showCandidateModal,
    dataDapil: resultDapilStore?.results_dapil_parties,
    filterData: filterData,
    dataByParty: displayDataByParty,
    selectedDapil,
    onFilterSelected,
    onProvinceSelected,
    onPartySelected,
    onDapilSelected,
    onButtonClicked,
    onDapilClicked,
    onCandidateClicked,
    onCloseModal,
  };
};
export default ResultSeatViewModel;
