import _ from "lodash";
import numeral from "numeral";
import { useCallback, useEffect, useState } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { locationStoreImplementation } from "src/data/store-implementation/location-store-implementation";
import { partyStoreImplementation } from "src/data/store-implementation/party-store-implementation";
import { resultDapilStoreImplementation } from "src/data/store-implementation/result-dapil-store-implementation";
import { resultProvinceStoreImplementation } from "src/data/store-implementation/result-province-store-implementation";
import { resultRegencyStoreImplementation } from "src/data/store-implementation/result-regency-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import {
  MapResultEntity,
  MapResultDapilRegionEntity,
  MapResultDapilRegencyEntity,
  MapResultPartyEntity,
} from "src/domain/entity/map-result-entity";
import { getLocationUseCase } from "src/use-case/location/get-location-use-case";
import { getPartyUseCase } from "src/use-case/party/get-party-use-case";
import { getResultDapilRegionUseCase } from "src/use-case/result-dapil/get-result-dapil-region-use-case";
import { getResultProvinceUseCase } from "src/use-case/result-province/get-result-province-use-case";
import { getResultRegencyUseCase } from "src/use-case/result-regency/get-result-regency-use-case";

const ResultProvinceViewModel = () => {
  const locationStore = locationStoreImplementation();
  const partyStore = partyStoreImplementation();
  const settingStore = settingStoreImplementation();
  const resultProvinceStore = resultProvinceStoreImplementation();
  const resultRegencyStore = resultRegencyStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();
  const [mapResult, setMapResult] = useState<MapResultEntity>();
  const [resultDapils, setResultDapils] =
    useState<MapResultDapilRegionEntity[]>();
  const [resultRegencies, setResultRegencies] =
    useState<MapResultDapilRegencyEntity[]>();
  const [resultParties, setResultParties] = useState<MapResultPartyEntity[]>();

  const initProvince = useCallback(async () => {
    await getLocationUseCase(locationStore, "province", "", false, "", false);
  }, [locationStore]);

  const initParty = useCallback(async () => {
    await getPartyUseCase(partyStore, "");
  }, [partyStore]);

  const getResultProvince = useCallback(
    async (province: string, period: string, type: string) => {
      await getResultProvinceUseCase(
        resultProvinceStore,
        province,
        period,
        type
      );
    },
    [resultProvinceStore]
  );

  const generateResultPartyPerProvince = (results) => {
    const total = _.sumBy(results, "total_suara");
    const rp = _.orderBy(results, ["total_suara"], ["desc"]);

    const tmpLabels = rp?.map(
      (item) =>
        `${item?.party?.short_name} ${
          item?.dapil?.total_kursi
        } kursi (${numeral(item?.total_suara).format("0,0")} suara)`
    );
    const tmpData = rp?.map((item) => item?.total_suara);
    const tmpBackground = rp?.map((item) => item?.party?.color);
    const tmpBorder = rp?.map((item) => item?.party?.secondary_color);
    const tmpParty = results?.map((item) => item?.party);
    const tmpCandidate = results?.map((item) => item?.candidate);
    const tmpProvince = results?.map((item) => item?.province);
    const tmpRegency = results?.map((item) => item?.regency);
    const tmpDapil = results?.map((item) => item?.dapil);
    const tmpLink = rp?.map(
      (item) => window.location.origin + "/result/party?id=" + item?.party?.id
    );

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Total Suara",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 0,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
          link: tmpLink,
        },
      ],
    };
  };

  const getResultRegency = useCallback(
    async (province: string, regency: string, period: string, type: string) => {
      await getResultRegencyUseCase(
        resultRegencyStore,
        province,
        regency,
        period,
        type
      );
    },
    [resultRegencyStore]
  );

  const generateResultPartyPerRegency = (results, id) => {
    const filteredResult = _.filter(results, (o) => {
      return o.party?.id === id;
    });
    const total = _.sumBy(filteredResult, "total_suara");
    const rp = _.orderBy(filteredResult, ["total_suara"], ["desc"]);

    const tmpLabels = rp?.map(
      (item) =>
        `${item?.regency?.name} ${item?.dapil?.total_kursi} kursi (${numeral(
          item?.total_suara
        ).format("0,0")} suara)`
    );
    const tmpData = rp?.map((item) => item?.total_suara);
    const tmpBackground = rp?.map((item) => item?.party?.color);
    const tmpBorder = rp?.map((item) => item?.party?.secondary_color);
    const tmpParty = results?.map((item) => item?.party);
    const tmpCandidate = results?.map((item) => item?.candidate);
    const tmpProvince = results?.map((item) => item?.province);
    const tmpRegency = results?.map((item) => item?.regency);
    const tmpDapil = results?.map((item) => item?.dapil);
    const tmpLink = rp?.map(
      (item) => window.location.origin + "/result/party?id=" + item?.party?.id
    );

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Total Suara per Kabupaten/Kota",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 1,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
          link: tmpLink,
        },
      ],
    };
  };

  const generateResultPerDapil = (results) => {
    const tmpLabels = results?.map(
      (item) =>
        `${item?.dapil?.name} - ${item?.dapil?.total_kursi} kursi (${
          item?.winner?.party?.short_name
        } - ${numeral(item?.winner?.total_suara).format("0,0")} suara)`
    );
    const tmpData = results?.map((item) => item?.winner?.total_suara);
    const tmpBackground = results?.map((item) => item?.winner?.party?.color);
    const tmpBorder = results?.map(
      (item) => item?.winner?.party?.secondary_color
    );
    const tmpParty = results?.map((item) => item?.winner?.party);
    const tmpCandidate = results?.map((item) => item?.candidate);
    const tmpProvince = results?.map((item) => item?.province);
    const tmpRegency = results?.map((item) => item?.regency);
    const tmpDapil = results?.map((item) => item?.dapil);
    const tmpLink = results?.map(
      (item) =>
        window.location.origin +
        "/result/dapil?province=" +
        item?.regencies?.[0].regency?.province?.id +
        "&dapil=" +
        item?.dapil?.id
    );

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Partai Dengan Suara Terbanyak Per Dapil",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 1,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
          link: tmpLink,
        },
      ],
    };
  };

  const generateResultPerRegency = (results) => {
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
          label: "Partai Dengan Suara Terbanyak Per Kabupaten/Kota",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 1,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
          link: tmpLink,
        },
      ],
    };
  };

  const generateResultPerParty = (results) => {
    const tmpLabels = results?.map(
      (item) =>
        `${item?.party?.short_name} (${numeral(item?.total).format(
          "0,0"
        )} suara)`
    );
    const tmpData = results?.map((item) => item?.total);
    const tmpBackground = results?.map((item) => item?.party?.color);
    const tmpBorder = results?.map((item) => item?.party?.secondary_color);
    const tmpParty = results?.map((item) => item?.party);
    const tmpCandidate = results?.map((item) => item?.candidate);
    const tmpProvince = results?.map((item) => item?.province);
    const tmpRegency = results?.map((item) => item?.regency);
    const tmpDapil = results?.map((item) => item?.dapil);
    const tmpLink = results?.map(
      (item) => window.location.origin + "/result/party?id=" + item?.party?.id
    );

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Partai Dengan Suara Terbanyak Per Provinsi",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 1,
          party: tmpParty,
          candidate: tmpCandidate,
          province: tmpProvince,
          regency: tmpRegency,
          dapil: tmpDapil,
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

  const mapDapilRegency = () => {
    let groupByRegency = _(resultDapilStore?.resultDapilRegions)
      .groupBy("dapil.regency.id")
      .map((childItems, regencyId) => ({
        regency: childItems.filter(
          (item) => item.dapil.regency.id == regencyId
        )?.[0]?.dapil.regency,
        party: _.maxBy(childItems, "total_suara").party,
        total_suara: _.maxBy(childItems, "total_suara").total_suara,
      }))
      .value();

    let orderedGroup = _(groupByRegency).orderBy("total_suara", "desc").value();

    setResultRegencies(orderedGroup);
  };

  const mapDapilParty = () => {
    let groupByParty = _(resultDapilStore?.resultDapilRegions)
      .groupBy("party.id")
      .map((childItems, partyId) => ({
        party: childItems.filter(
          (item) => item.party.id == parseInt(partyId)
        )?.[0]?.party,
        total: _.sumBy(childItems, "total_suara"),
        percent: "",
      }))
      .value();

    let orderedGroup = _(groupByParty).orderBy("total", "desc").value();

    setResultParties(orderedGroup);
  };

  useEffect(() => {
    if (!mapResult) return;
  }, [mapResult]);

  useEffect(() => {
    mapDapilRegion();
    mapDapilRegency();
    mapDapilParty();
  }, [resultDapilStore.resultDapilRegions]);

  useEffect(() => {
    // create function here
  }, [resultDapils]);

  return {
    locations: locationStore,
    parties: partyStore.parties,
    settings: settingStore,
    mapResult: mapResult,
    resultDapils: resultDapils,
    resultRegencies: resultRegencies,
    resultParties: resultParties,
    isLoading: settingStore.isLoading,
    resultProvince: resultProvinceStore,
    resultRegency: resultRegencyStore,
    initProvince,
    initParty,
    getResultProvince,
    getResultRegency,
    generateResultPartyPerProvince,
    generateResultPartyPerRegency,
    generateResultPerParty,
    generateResultPerDapil,
    generateResultPerRegency,
    getDapilRegion,
    onRegionSelected,
  };
};

export default ResultProvinceViewModel;
