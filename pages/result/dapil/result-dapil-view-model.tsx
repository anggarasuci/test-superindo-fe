import _ from "lodash";
import numeral from "numeral";
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
import { getResultDapilCandidateUseCase } from "src/use-case/result-dapil/get-result-dapil-candidate-use-case";
import { getResultDapilPartyUseCase } from "src/use-case/result-dapil/get-result-dapil-party-use-case";
import { getResultDapilRegionUseCase } from "src/use-case/result-dapil/get-result-dapil-region-use-case";
import { getResultWinnerUseCase } from "src/use-case/result-winner/get-result-winner-use-case";
import { DapilEntity } from "src/domain/entity/dapil-entity";
import { CandidateResultDapilXRegencyEntity } from "src/domain/entity/candidate-entity";
import { resultRegencyStoreImplementation } from "src/data/store-implementation/result-regency-store-implementation";
import { getResultDapilPerCandidateUseCase } from "src/use-case/result-dapil/get-result-dapil-per-candidate-use-case";
import { getResultRegencyPerCandidateUseCase } from "src/use-case/result-regency/get-result-regency-per-candidate-use-case";
import { getUploadSurveysUseCase } from "src/use-case/upload-surveys/get-upload-surveys-use-case";
import { uploadSurveysStoreImplementation } from "src/data/store-implementation/upload-surveys-store-implementation";
import {
  DataSetSurveyEntity,
  ResultSurveyByPeriodEntity,
} from "src/domain/entity/result-survey-entity";
import { resultSurveyStoreImplementation } from "src/data/store-implementation/result-survey-store-implementation";
import { DateConverter } from "src/helpers/date-converter";
import { getResultSurveyUseCase } from "src/use-case/result-survey/get-result-survey-use-case";

const ResultDapilViewModel = () => {
  const locationStore = locationStoreImplementation();
  const partyStore = partyStoreImplementation();
  const settingStore = settingStoreImplementation();
  const baseDapilStore = baseDapilStoreImplementation();
  const dapilStore = dapilStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();
  const resultWinnerStore = resultWinnerStoreImplementation();
  const resultRegencyStore = resultRegencyStoreImplementation();
  const uploadSurveysStore = uploadSurveysStoreImplementation();
  const resultSurveyStore = resultSurveyStoreImplementation();
  const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false);
  const [mapResult, setMapResult] = useState<MapResultEntity>();
  const [resultDapils, setResultDapils] =
    useState<MapResultDapilRegionEntity[]>();
  const [dapils, setDapils] = useState<DapilEntity[]>([]);
  const [showCandidateModal, setShowCandidateModal] = useState<boolean>(false);
  const [candidateDataModal, setCandidateDataModal] =
    useState<CandidateResultDapilXRegencyEntity>();
  const [dataInfo, setDataInfo] = useState<ResultSurveyByPeriodEntity[]>();
  const [dataBar, setDataBar] = useState<any>({});
  const [resultMapped, setResultMapped] = useState<any[]>([]);

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

  const getUploadSurveys = useCallback(
    async (dapil: string) => {
      await getUploadSurveysUseCase(uploadSurveysStore, dapil);
    },
    [uploadSurveysStore.uploadSurveys]
  );

  const getResultDapilParty = useCallback(
    async (dapil: string) => {
      await getResultDapilPartyUseCase(
        resultDapilStore,
        dapil,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId
      );
    },
    [resultDapilStore?.results_dapil_parties]
  );

  const generateKursiSequence = (sequences: any) => {
    let result = "";
    sequences.map((seq) => {
      result += seq + ",";
    });
    if (sequences.length > 0) {
      result = result.substring(0, result.length - 1);
    }
    return result;
  };

  const generateResultDapilPerParty = (results: any, winners: any) => {
    const rp = _.orderBy(results, ["total_suara"], ["desc"]);

    const tmpLabels = rp?.map((item) => {
      const currentChair = winners.filter(
        (chair) => chair.party?.id == item.party?.id && chair.flag_win === true
      );

      console.log("currentChair", currentChair);

      const sequences = currentChair.map((current) => {
        return current.sequence;
      });

      const printSequence =
        sequences.length > 0 ? `(${generateKursiSequence(sequences)})` : ``;

      return `${item?.party?.short_name} (${numeral(item?.total_suara).format(
        "0,0"
      )} suara) - ${currentChair.length} kursi ${printSequence}`;
    });
    const tmpData = rp?.map((item) => item?.total_suara);
    const tmpBackground = rp?.map((item) => item?.party?.color);
    const tmpBorder = rp?.map((item) => item?.party?.secondary_color);
    const tmpParty = rp?.map((item) => item?.party);
    const tmpCandidate = rp?.map((item) => item?.candidate);
    const tmpProvince = rp?.map((item) => item?.province);
    const tmpRegency = rp?.map((item) => item?.regency);
    const tmpDapil = rp?.map((item) => item?.dapil);
    const tmpLink = rp?.map(
      (item) => window.location.origin + "/result/party?id=" + item?.party?.id
    );
    const tmpId = rp?.map((item) => item?.party?.id);

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Total Suara per Partai",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 4,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
          link: tmpLink,
          id: tmpId,
        },
      ],
    };
  };

  const getResultDapilCandidate = useCallback(
    async (province: string, dapil: string) => {
      await getResultDapilCandidateUseCase(
        resultDapilStore,
        dapil,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId,
        province,
        ""
      );
    },
    [resultDapilStore?.results_dapil_candidates]
  );

  const generateResultDapilPerCandidate = (results, top, winners) => {
    const total = _.sumBy(results, "total_suara");
    const rp = _.orderBy(results, ["total_suara"], ["desc"]).slice(0, top);

    const tmpLabels = rp?.map((item) => {
      let status = "";

      winners.forEach((w) => {
        if (item?.candidate?.id == w?.candidate?.id && w?.flag_win === true) {
          status = " - W";
        }
      });

      return `${item?.candidate?.name} - ${
        item?.candidate?.party?.short_name
      } (${numeral(item?.total_suara).format("0,0")} suara) ${status}`;
    });
    const tmpData = rp?.map((item) => item?.total_suara);
    const tmpBackground = rp?.map((item) => item?.candidate?.party?.color);
    const tmpBorder = rp?.map(
      (item) => item?.candidate?.party?.secondary_color
    );
    const tmpParty = rp?.map((item) => item?.candidate?.party);
    const tmpCandidate = rp?.map((item) => item?.candidate);
    const tmpProvince = rp?.map((item) => item?.province);
    const tmpRegency = rp?.map((item) => item?.regency);
    const tmpDapil = rp?.map((item) => item?.dapil);
    const tmpLink = rp?.map(
      (item) =>
        window.location.origin + "/result/candidate?id=" + item?.candidate?.id
    );
    const tmpId = rp?.map((item) => item?.candidate?.id);

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: `${top} Kandidat dengan Total Suara Terbanyak`,
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 4,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
          id: tmpId,
          link: tmpLink,
        },
      ],
    };
  };

  const getDapilRegion = async (code: string) => {
    await getResultDapilRegionUseCase(
      resultDapilStore,
      code,
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId
    );
  };

  const getResultWinner = async (dapil: string) => {
    await getResultWinnerUseCase(
      resultWinnerStore,
      dapil,
      false,
      "",
      "",
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

  useEffect(() => {}, [isLoadingModal]);
  useEffect(() => {}, [candidateDataModal]);

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
    mapDataGroupBarChart();
  }, [dataInfo]);

  useEffect(() => {
    mapDataByPeriod();
  }, [resultSurveyStore?.resultSurveys]);

  const onCloseModalCandidate = useCallback(() => {
    setShowCandidateModal(false);
  }, [showCandidateModal]);

  const onCandidateClicked = useCallback(
    async (candidate: string) => {
      await handleGetCandidateModalData(candidate);
      setShowCandidateModal(true);
    },
    [showCandidateModal]
  );

  const handleGetCandidateModalData = async (candidate: string) => {
    setIsLoadingModal(true);
    await getResultDapilByCandidate(candidate);
    await getResultRegencyByCandidate(candidate);
    setIsLoadingModal(false);
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

  useEffect(() => {
    if (dapilStore?.dapils) {
      const result = dapilStore?.dapils?.map((item) => ({
        name: item?.dapil?.name,
        id: item?.dapil?.id?.toString(),
      }));
      setDapils(_.uniqBy(result, "id"));
    }
  }, [dapilStore?.dapils]);

  const onRegionSelected = useCallback(
    (code: string) => {
      getDapilRegion(code);
    },
    [mapResult]
  );

  const mapDapilRegion = () => {
    let groupByDapil = _(resultDapilStore?.resultDapilRegions)
      .groupBy("dapil.dapil.id")
      .map((items, dapilId) => ({
        dapil: items.filter((item) => item.dapil.dapil.id == dapilId)?.[0]
          ?.dapil.dapil,
        regencies: _(items)
          .groupBy("dapil.regency.id")
          .map((childItems, regencyId) => ({
            regency: childItems.filter(
              (item) => item.dapil.regency.id == regencyId
            )?.[0]?.dapil.regency,
            party: _.maxBy(childItems, "total_suara").party,
            total_suara: _.maxBy(childItems, "total_suara").total_suara,
          }))
          .value(),
        winner: _(items)
          .groupBy("party.id")
          .mapValues((arr) => _.sumBy(arr, "total_suara"))
          .entries()
          .map((values) => ({
            party: items.filter(
              (item) => item.party.id.toString() == values[0]
            )?.[0].party,
            total_suara: values[1],
          }))
          .maxBy("total_suara"),
      }))
      .value();
    setResultDapils(groupByDapil);
  };

  const generateResultPerKabupatenKota = (results) => {
    const tmpLabels = results?.map(
      (item) =>
        `${item?.regency?.name} (${item?.party?.short_name} - ${numeral(
          item?.total_suara
        ).format("0,0")} suara)`
    );
    const tmpData = results?.map((item) => item?.total_suara);
    const tmpBackground = results?.map((item) => item?.party?.color);
    const tmpBorder = results?.map((item) => item?.party?.secondary_color);
    const tmpParty = results?.map((item) => item?.party);
    const tmpCandidate = results?.map((item) => item?.candidate);
    const tmpProvince = results?.map((item) => item?.province);
    const tmpRegency = results?.map((item) => item?.regency);
    const tmpDapil = results?.map((item) => item?.dapil);
    const tmpId = results?.map((item) => item?.party?.id);
    const tmpLink = results?.map(
      (item) =>
        window.location.origin +
        "/result/city?province=" +
        item?.regency?.province?.id +
        "&regency=" +
        item?.regency?.id
    );

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Total Suara per Kabupaten/Kota",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 4,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
          id: tmpId,
          link: tmpLink,
        },
      ],
    };
  };

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

  useEffect(() => {
    const isParty = resultSurveyStore?.resultSurveys?.[0]?.party;

    const resultOrdered = _.orderBy(
      resultSurveyStore?.resultSurveys,
      isParty ? "party.id" : "candidate.party.id",
      "asc"
    );

    const periodGrouped = _.groupBy(
      resultOrdered,
      isParty ? "party.short_name" : "candidate.name"
    );

    let tmp = [];

    for (const [key, value] of Object.entries(periodGrouped)) {
      const orderedResult = _.orderBy(value, "period_survey", "asc");
      const results = orderedResult?.map((row) => {
        return {
          name:
            DateConverter.getDisplayMonthYear(row?.period_survey) +
            " - " +
            row?.institution?.name,
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
        name: key,
        color: isParty
          ? value[0]?.party?.color
          : value[0]?.candidate?.party?.color,
        results,
      };

      tmp.push(obj);
    }

    setResultMapped(tmp);
  }, [resultSurveyStore?.resultSurveys]);

  useEffect(() => {
    if (!mapResult) return;
  }, [mapResult]);

  useEffect(() => {
    mapDapilRegion();
  }, [resultDapilStore.resultDapilRegions]);

  useEffect(() => {}, [resultDapils]);

  return {
    locations: locationStore,
    parties: partyStore.parties,
    settings: settingStore,
    resultDapil: resultDapilStore,
    resultWinner: resultWinnerStore,
    basedapils: baseDapilStore,
    dapil: dapilStore.dapilById,
    dapils,
    mapResult: mapResult,
    resultDapils: resultDapils,
    isLoading: settingStore.isLoading,
    showCandidateModal: showCandidateModal,
    candidateDataModal: candidateDataModal,
    uploadSurveys: uploadSurveysStore,
    isLoadingModal: isLoadingModal,
    dataInfo: dataInfo,
    dataBarSurvey: dataBar,
    resultSurveyMapped: resultMapped,
    onCandidateClicked,
    onCloseModalCandidate,
    initProvince,
    initParty,
    initBaseDapil,
    initDapil,
    getResultDapilParty,
    generateResultDapilPerParty,
    getResultDapilCandidate,
    generateResultDapilPerCandidate,
    getDapilRegion,
    handleGetDapils,
    onRegionSelected,
    generateResultPerKabupatenKota,
    getDapilById,
    getResultWinner,
    getUploadSurveys,
    getResultSurvey,
  };
};

export default ResultDapilViewModel;
