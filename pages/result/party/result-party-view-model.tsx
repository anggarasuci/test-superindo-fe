import _ from "lodash";
import numeral from "numeral";
import { useCallback } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { locationStoreImplementation } from "src/data/store-implementation/location-store-implementation";
import { partyStoreImplementation } from "src/data/store-implementation/party-store-implementation";
import { resultProvinceStoreImplementation } from "src/data/store-implementation/result-province-store-implementation";
import { resultRegencyStoreImplementation } from "src/data/store-implementation/result-regency-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { getLocationUseCase } from "src/use-case/location/get-location-use-case";
import { getPartyUseCase } from "src/use-case/party/get-party-use-case";
import { getResultProvinceCandidatePerPartyUseCase } from "src/use-case/result-province/get-result-province-candidate-per-party-use-case";
import { getResultProvinceCandidateUseCase } from "src/use-case/result-province/get-result-province-candidate-use-case";
import { getResultProvincePerPartyUseCase } from "src/use-case/result-province/get-result-province-per-party-use-case";
import { getResultRegencyCandidatePerPartyUseCase } from "src/use-case/result-regency/get-result-regency-candidate-per-party-use-case";
import { getResultProvinceUseCase } from "src/use-case/result-province/get-result-province-use-case";
import { getResultRegencyUseCase } from "src/use-case/result-regency/get-result-regency-use-case";
import { getResultRegencyPerPartyUseCase } from "src/use-case/result-regency/get-result-regency-per-party-use-case";

const ResultPartyViewModel = () => {
  const locationStore = locationStoreImplementation();
  const partyStore = partyStoreImplementation();
  const settingStore = settingStoreImplementation();
  const resultProvinceStore = resultProvinceStoreImplementation();
  const resultRegencyStore = resultRegencyStoreImplementation();

  const initParty = useCallback(async () => {
    await getPartyUseCase(partyStore, "");
  }, [partyStore]);

  const initProvince = useCallback(async () => {
    await getLocationUseCase(locationStore, "province", "", false, "", false);
  }, [locationStore]);

  const initCity = useCallback(
    async (provinceId: string) => {
      await getLocationUseCase(locationStore, "regency", "", true, provinceId);
    },
    [locationStore]
  );

  const getPartyById = (partyId: string) => {
    return partyStore?.parties?.filter((item) => item.id == parseInt(partyId));
  };

  const getResultProvincePerParty = useCallback(
    async (partyId, provinceId) => {
      await getResultProvincePerPartyUseCase(
        resultProvinceStore,
        provinceId,
        partyId,
        appStoreImplementation.getState().setting?.globalPeriodId?.toString() ??
          "",
        appStoreImplementation.getState().setting?.globalTypeId?.toString() ??
          ""
      );
    },
    [resultProvinceStore]
  );

  const getResultRegencyPerParty = useCallback(
    async (partyId, regencyId, provinceId?) => {
      await getResultRegencyPerPartyUseCase(
        resultRegencyStore,
        provinceId,
        regencyId,
        partyId,
        appStoreImplementation.getState().setting?.globalPeriodId?.toString() ??
          "",
        appStoreImplementation.getState().setting?.globalTypeId?.toString() ??
          ""
      );
    },
    [resultRegencyStore]
  );

  const generateLinkProvince = (results) => {
    return results?.map(
      (item) =>
        window.location.origin +
        "/result/province?province=" +
        item?.province?.id
    );
  };

  const generateLinkRegency = (results) => {
    return results?.map(
      (item) =>
        window.location.origin +
        "/result/city?province=" +
        item?.regency?.province?.id +
        "&regency=" +
        item?.regency?.id
    );
  };

  const generateResultPartyPerProvince = (results) => {
    const total = _.sumBy(results, "total_suara");
    const rp = _.orderBy(results, ["total_suara"], ["desc"]);

    const tmpLabels = rp?.map(
      (item) =>
        `${item?.province?.name} (${numeral(item?.total_suara).format(
          "0,0"
        )} suara - ${numeral((item?.total_suara / total) * 100).format(
          "0.00"
        )}%)`
    );
    const tmpData = rp?.map((item) => item?.total_suara);
    const tmpBackground = rp?.map((item) => item?.party?.color);
    const tmpBorder = rp?.map((item) => item?.party?.secondary_color);
    const tmpParty = rp?.map((item) => item?.party);
    const tmpLink = generateLinkProvince(rp);

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Total Suara per Provinsi",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 0,
          party: tmpParty,
          link: tmpLink,
        },
      ],
    };
  };

  const generateResultPartyPerRegency = (results) => {
    const total = _.sumBy(results, "total_suara");
    const rp = _.orderBy(results, ["total_suara"], ["desc"]);

    const tmpLabels = rp?.map(
      (item) =>
        `${item?.regency?.name} (${numeral(item?.total_suara).format(
          "0,0"
        )} suara - ${numeral((item?.total_suara / total) * 100).format(
          "0.00"
        )}%)`
    );
    const tmpData = rp?.map((item) => item?.total_suara);
    const tmpBackground = rp?.map((item) => item?.party?.color);
    const tmpBorder = rp?.map((item) => item?.party?.secondary_color);
    const tmpParty = rp?.map((item) => item?.party);
    const tmpLink = generateLinkRegency(rp);

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: "Total Suara per Kabupaten/Kota",
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 0,
          party: tmpParty,
          link: tmpLink,
        },
      ],
    };
  };

  const getResultProvinceCandidatePerParty = useCallback(
    async (partyId, provinceId) => {
      await getResultProvinceCandidatePerPartyUseCase(
        resultProvinceStore,
        provinceId,
        partyId,
        appStoreImplementation.getState().setting?.globalPeriodId?.toString() ??
          "",
        appStoreImplementation.getState().setting?.globalTypeId?.toString() ??
          ""
      );
    },
    [resultProvinceStore]
  );

  const generateResultCandidatePerParty = (results, top) => {
    const rp = _.orderBy(results, ["total_suara"], ["desc"]).slice(0, top);

    const tmpLabels = rp?.map(
      (item) =>
        `${item?.candidate?.name} - ${numeral(item?.total_suara).format(
          "0,0"
        )} suara`
    );
    const tmpData = rp?.map((item) => item?.total_suara);
    const tmpBackground = rp?.map((item) => item?.candidate?.party?.color);
    const tmpBorder = rp?.map(
      (item) => item?.candidate?.party?.secondary_color
    );
    const tmpParty = rp?.map((item) => item?.candidate?.party);
    const tmpLink = rp?.map(
      (item) =>
        window.location.origin + "/result/candidate?id=" + item?.candidate?.id,
      "_blank"
    );

    return {
      labels: tmpLabels,
      datasets: [
        {
          label: `${top} Kandidat dengan Total Suara Terbanyak`,
          data: tmpData,
          backgroundColor: tmpBackground,
          borderColor: tmpBorder,
          borderWidth: 1,
          party: tmpParty,
          link: tmpLink,
        },
      ],
    };
  };

  const getResultRegencyCandidatePerParty = useCallback(
    async (partyId, regencyId) => {
      await getResultRegencyCandidatePerPartyUseCase(
        resultRegencyStore,
        regencyId,
        partyId,
        appStoreImplementation.getState().setting?.globalPeriodId?.toString() ??
          "",
        appStoreImplementation.getState().setting?.globalTypeId?.toString() ??
          ""
      );
    },
    [resultRegencyStore]
  );

  return {
    locations: locationStore,
    parties: partyStore.parties,
    settings: settingStore,
    resultProvinces: resultProvinceStore,
    resultRegencies: resultRegencyStore,
    initParty,
    initProvince,
    initCity,
    getResultProvincePerParty,
    getResultRegencyPerParty,
    getResultProvinceCandidatePerParty,
    getResultRegencyCandidatePerParty,
    generateResultPartyPerProvince,
    generateResultCandidatePerParty,
    generateResultPartyPerRegency,
    generateLinkProvince,
    generateLinkRegency,
    getPartyById,
  };
};

export default ResultPartyViewModel;
