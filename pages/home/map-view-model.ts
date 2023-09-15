import { ChartData } from "chart.js";
import { mapTypes } from "components/map/Component";
import _ from "lodash";
import { ILocationPointProps, LocationPoint } from "mock/location-point";
import numeral from "numeral";
import { useCallback, useEffect, useState } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { authStoreImplementation } from "src/data/store-implementation/auth-store-implementation";
import { locationStoreImplementation } from "src/data/store-implementation/location-store-implementation";
import { resultDapilStoreImplementation } from "src/data/store-implementation/result-dapil-store-implementation";
import { resultProvinceStoreImplementation } from "src/data/store-implementation/result-province-store-implementation";
import { resultRegencyStoreImplementation } from "src/data/store-implementation/result-regency-store-implementation";
import { resultWinnerStoreImplementation } from "src/data/store-implementation/result-winner-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { LinearBarEntity } from "src/domain/entity/linear-bar-entity";
import {
  MapResultDapilRegionEntity,
  MapResultEntity,
  MapResultPartyEntity,
  MapResultRegionEntity,
} from "src/domain/entity/map-result-entity";
import { getResultDapilPartyUseCase } from "src/use-case/result-dapil/get-result-dapil-party-use-case";
import { getResultDapilRegionUseCase } from "src/use-case/result-dapil/get-result-dapil-region-use-case";
import { getResultProvinceUseCase } from "src/use-case/result-province/get-result-province-use-case";
import { getResultRegencyUseCase } from "src/use-case/result-regency/get-result-regency-use-case";
import { getResultWinnerUseCase } from "src/use-case/result-winner/get-result-winner-use-case";
import { setLoadingUseCase } from "src/use-case/setting/set-loading-use-case";
import { setMapResultAllTypeUseCase } from "src/use-case/setting/set-map-result-all-type-use-case";

const MapViewModel = () => {
  const locationStore = locationStoreImplementation();
  const settingStore = settingStoreImplementation();
  const authStore = authStoreImplementation();
  const resultProvinceStore = resultProvinceStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();
  const resultRegencyStore = resultRegencyStoreImplementation();
  const resultWinnerStore = resultWinnerStoreImplementation();

  const [mapResult, setMapResult] = useState<MapResultEntity>();
  const [mapResultRegency, setMapResultRegency] = useState<MapResultEntity>();
  const [isCollected, setIsCollected] = useState<boolean>(false);
  const [locationPoint, setLocationPoint] = useState<ILocationPointProps>(
    LocationPoint.INDONESIA
  );
  const [chartData, setChartData] = useState<ChartData<any>>();
  const [winner, setWinner] = useState<MapResultPartyEntity>();
  const [resultParties, setResultParties] = useState<MapResultPartyEntity[]>();
  const [resultDapils, setResultDapils] =
    useState<MapResultDapilRegionEntity[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showWarning, setWarning] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [resultDapilWithChair, setResultDapilWithChair] =
    useState<MapResultDapilRegionEntity[]>();
  const [linearBarData, setLinearBarData] = useState<LinearBarEntity[]>();
  const [clickedRegency, setClickedRegency] = useState<string>("");

  useEffect(() => {
    if (!resultProvinceStore?.results_province) return;
    if (resultProvinceStore?.results_province.length > 0)
      mappingResultProvinceToMap();
  }, [resultProvinceStore?.results_province]);

  useEffect(() => {
    if (
      clickedRegency != "" &&
      resultRegencyStore?.results_regency?.length > 0
    ) {
      mapToLinearBarData(true);
      setClickedRegency("");
      return;
    }
    if (resultRegencyStore?.results_regency?.length > 0 && !clickedRegency) {
      mappingResultRegencyToMap();
      return;
    }
  }, [resultRegencyStore?.results_regency]);

  useEffect(() => {
    if (!mapResult || !mapResultRegency) return;
    setIsCollected(true);
  }, [mapResult, mapResultRegency]);

  useEffect(() => {}, [chartData]);

  useEffect(() => {
    setMapResult(null);
    setMapResultRegency(null);
    initResult();
  }, [
    appStoreImplementation.getState().setting?.globalPeriodId,
    appStoreImplementation.getState().setting?.globalTypeId,
  ]);

  useEffect(() => {
    mapDapilRegion();
  }, [resultDapilStore.resultDapilRegions]);

  useEffect(() => {
    let temp = resultDapils?.map((item) => item.dapil.id)?.join(",");
    temp ? getResultWinnerByDapil(temp) : null;
  }, [resultDapils]);
  useEffect(() => {}, [isLoading]);
  useEffect(() => {}, [resultDapilWithChair]);

  useEffect(() => {
    mapWinnerChair();
  }, [resultWinnerStore.results_winners]);

  useEffect(() => {
    mapToLinearBarData(false);
  }, [resultDapilStore.results_dapil_parties]);
  useEffect(() => {}, [linearBarData]);
  useEffect(() => {}, [showModal]);
  useEffect(() => {}, [clickedRegency]);

  const initResult = async () => {
    setIsLoading(true);
    const provinceMap = isHaveMapResult("province");
    const regencyMap = isHaveMapResult("city");
    !regencyMap ? await getResultRegency() : setMapResultRegency(regencyMap);
    !provinceMap ? await getResultProvince() : setMapResult(provinceMap);
    setIsLoading(false);
  };

  const isHaveMapResult = (mapType: "province" | "city"): MapResultEntity => {
    const period = appStoreImplementation.getState().setting?.globalPeriodId;
    const type = appStoreImplementation.getState().setting?.globalTypeId;
    const temp = appStoreImplementation.getState().setting?.mapResultsAllType;
    const result = temp.find(
      (item: {
        mapType: string;
        period: any;
        type: any;
        data: string | any[];
      }) =>
        item?.mapType == mapType &&
        item?.period == period &&
        item?.type == type &&
        item?.data.length > 0
    );
    return result;
  };

  const handleGetResultDapilParty = async (dapil: string) => {
    setIsLoading(true);
    await getDapilParty(dapil);
    setIsLoading(false);
  };

  const setLoading = (isLoading: boolean) => {
    setLoadingUseCase(settingStore, isLoading);
  };

  const getResultProvince = useCallback(async () => {
    await getResultProvinceUseCase(
      resultProvinceStore,
      "",
      appStoreImplementation.getState().setting?.globalPeriodId?.toString() ??
        "",
      appStoreImplementation.getState().setting?.globalTypeId?.toString() ?? ""
    );
  }, []);

  const getResultRegency = useCallback(
    async (regency?: string) => {
      await getResultRegencyUseCase(
        resultRegencyStore,
        "",
        regency ?? "",
        appStoreImplementation.getState().setting?.globalPeriodId?.toString() ??
          "",
        appStoreImplementation.getState().setting?.globalTypeId?.toString() ??
          "",
        !regency
      );
    },
    [resultRegencyStore?.results_regency]
  );

  const mappingResultProvinceToMap = () => {
    let result: MapResultEntity = {
      data: [],
      period: "",
      type: "",
      grandTotal: 0,
    };
    let rootResult = resultProvinceStore?.results_province?.[0];
    result.period = rootResult?.period ?? "";
    result.type = rootResult?.type ?? "";
    let groupByProvince = _(resultProvinceStore?.results_province)
      .groupBy("province.id")
      .map((items, province) => ({
        province_code: province,
        data: items.map((item) => ({
          party: item.party,
          total: item.total_suara,
          percent: `${numeral(
            (item.total_suara / _.sumBy(items, "total_suara")) * 100
          )
            .format("0.00")
            .replace(".", ",")}%`,
        })),
      }))
      .value();
    groupByProvince?.map((item) => {
      let dataProvince: MapResultRegionEntity = {
        provinceCode: item.province_code,
        winner: _.maxBy(item.data, "total"),
        parties: item.data,
        total: _.sumBy(item.data, "total"),
      };
      result.data.push(dataProvince);
    });
    result.grandTotal = _.sumBy(result.data, "total");
    if (result) {
      setMapResultToSettingStore(result, "province");
      setMapResult(result);
    }
  };

  const setMapResultToSettingStore = (
    mapResult: MapResultEntity,
    mapType: "province" | "city"
  ) => {
    let period = appStoreImplementation.getState().setting?.globalPeriodId;
    let type = appStoreImplementation.getState().setting?.globalTypeId;
    setMapResultAllTypeUseCase(settingStore, mapResult, mapType, period, type);
  };

  const mappingResultRegencyToMap = () => {
    let result: MapResultEntity = {
      data: [],
      period: "",
      type: "",
      grandTotal: 0,
    };
    let rootResult = resultRegencyStore?.results_regency?.[0];
    result.period = rootResult?.period ?? "";
    result.type = rootResult?.type ?? "";
    let groupByRegency = _(resultRegencyStore?.results_regency)
      .groupBy("regency.id")
      .map((items, regency) => ({
        regency_code: regency,
        data: items.map((item) => ({
          party: item.party,
          total: item.total_suara,
          percent: `${numeral(
            (item.total_suara / _.sumBy(items, "total_suara")) * 100
          )
            .format("0.00")
            .replace(".", ",")}%`,
        })),
      }))
      .value();
    groupByRegency?.map((item) => {
      let dataRegency: MapResultRegionEntity = {
        regencyCode: item.regency_code,
        winner: _.maxBy(item.data, "total"),
        parties: item.data,
        total: _.sumBy(item.data, "total"),
      };
      result.data.push(dataRegency);
    });
    result.grandTotal = _.sumBy(result.data, "total");
    if (result) {
      setMapResultToSettingStore(result, "city");
      setMapResultRegency(result);
    }
  };

  const mapProvince = (code: string) => {
    let data = mapResult?.data.find((item) => item.provinceCode == code);
    const result = data ? generateProvinceChartResult(data?.parties) : null;
    const winnerResult = data ? data?.winner : null;
    setResultParties(data?.parties);
    setChartData(result);
    setWinner(winnerResult);
  };

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
            partyMember: {
              parties: _(childItems)
                .map("party")
                .flatten()
                .orderBy("total_suara", "desc")
                .take(5)
                .value(),
              total_suara: _(childItems)
                .map("total_suara")
                .flatten()
                .orderBy("total_suara", "desc")
                .take(5)
                .value(),
            },
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

    console.log("wulu ", JSON.stringify(groupByDapil));
    setResultDapils(groupByDapil);
  };

  const getDapilRegion = async (code: string, mapType: mapTypes) => {
    await getResultDapilRegionUseCase(
      resultDapilStore,
      mapType == "province" ? code : "",
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId,
      "0",
      mapType == "city" ? code : ""
    );
  };

  const getDapilParty = useCallback(
    async (dapil: string) => {
      await getResultDapilPartyUseCase(
        resultDapilStore,
        dapil,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId
      );
    },
    [resultDapilStore.results_dapil_parties]
  );

  const onRegionSelected = useCallback((code: string, mapType: mapTypes) => {
    !code ? setWarning(true) : getDapilRegion(code, mapType);
  }, []);

  const generateProvinceChartResult = (
    parties: MapResultPartyEntity[]
  ): ChartData<any> => {
    const total = _.sumBy(parties, "total");
    const rp = _.orderBy(parties, ["total"], ["desc"]);

    const tmpLabels = rp?.map(
      (item) =>
        `${item?.party?.name} (${numeral(item?.total).format(
          "0,0"
        )} suara - ${numeral((item?.total / total) * 100).format("0.00")}%)`
    );
    const tmpData = rp?.map((item) => item?.total);
    const tmpBackground = rp?.map((item) => item?.party?.color);
    const tmpBorder = rp?.map((item) => item?.party?.secondary_color);
    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Total Suara",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 0,
        },
      ],
    };
  };

  const mapWinnerChair = () => {
    let temp: any[] = [];
    resultDapils?.map((item) => {
      let totalChair =
        resultWinnerStore?.results_winners?.filter(
          (chair) =>
            chair.dapil.id.toString() == item.dapil.id &&
            chair.party.id == item.winner.party.id
        )?.length ?? 0;
      let result = {
        ...item,
        winner: {
          ...item.winner,
          total_kursi: totalChair,
        },
      };
      temp.push(result);
    });
    setResultDapilWithChair(temp);
  };

  const mapToLinearBarData = (isRegencyClicked: boolean) => {
    const data: any[] = isRegencyClicked
      ? resultRegencyStore?.results_regency
      : resultDapilStore?.results_dapil_parties;

    const headTitle = isRegencyClicked
      ? resultRegencyStore?.results_regency?.[0]?.regency?.name
      : resultDapilStore?.results_dapil_parties?.[0]?.dapil?.name;

    const totalBarValue = _.sumBy(data, "total_suara");
    const result: LinearBarEntity[] = data?.map((item) => ({
      title: item?.party?.short_name,
      color: item?.party?.color,
      icon: item?.party?.logo,
      total: item?.total_suara,
      headTitle: headTitle,
      barValue: totalBarValue,
    }));
    setLinearBarData(result);
  };

  // const mapRegencyToLinearBarData = () => {
  //   const totalBarValue = _.sumBy(
  //     resultDapilStore?.results_dapil_parties,
  //     "total_suara"
  //   );
  //   const result: LinearBarEntity[] =
  //     resultDapilStore?.results_dapil_parties?.map((item) => ({
  //       title: item?.party?.short_name,
  //       color: item?.party?.color,
  //       icon: item?.party?.logo,
  //       total: item?.total_suara,
  //       headTitle: item?.dapil?.name,
  //       barValue: totalBarValue,
  //     }));
  //   setLinearBarData(result);
  // };

  const onCloseWarning = useCallback(() => {
    setWarning(false);
    setShowModal(false);
  }, []);

  const getResultWinnerByDapil = async (dapils: string) => {
    await getResultWinnerUseCase(
      resultWinnerStore,
      dapils ?? "",
      true,
      "",
      "",
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId
    );
  };

  const onDapilClicked = useCallback(async (dapil: string) => {
    await handleGetResultDapilParty(dapil);
    setShowModal(true);
  }, []);

  const onRegencyClicked = useCallback(
    async (regency: string) => {
      setClickedRegency(regency);
      setLoading(true);
      await getResultRegency(regency);
      setLoading(false);
      setShowModal(true);
    },
    [clickedRegency]
  );

  return {
    token: authStore?.auth?.access,
    provinces: locationStore?.provinces,
    locationPoint: locationPoint,
    mapResult: mapResult,
    mapResultRegency: mapResultRegency,
    isCollected: isCollected,
    chartData: chartData,
    winner: winner,
    resultParties: resultParties,
    isLoading: settingStore.isLoading || isLoading,
    resultDapils: resultDapilWithChair,
    linearBarData: linearBarData,
    isShowWarning: showWarning,
    showModal: showModal,
    onRegionSelected,
    onDapilClicked,
    onRegencyClicked,
    onCloseWarning,
  };
};

export default MapViewModel;
