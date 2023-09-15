import {
  RequestLocationEntity
} from "src/domain/entity/location-entity";
import { LocationStore } from "src/domain/store/location-store";

const submitLocationUseCase = async (
  store: LocationStore,
  locationTypeKey: string,
  isEdit: boolean,
  code: string | "",
  name: string | "",
  referenceProvinceId: string | "",
  referenceRegencyId: string | "",
  referenceDistrictId: string | "",
  referenceVillageId: string | ""
) => {
  await store.submit(
    locationTypeKey,
    isEdit,
    createParams(
      code,
      name,
      referenceProvinceId,
      referenceRegencyId,
      referenceDistrictId,
      referenceVillageId
    )
  );
};

const createParams = (
  code: string,
  name: string,
  referenceProvinceId: string,
  referenceRegencyId: string,
  referenceDistrictId: string,
  referenceVillageId: string
): RequestLocationEntity => {
  let result: RequestLocationEntity = {
    id: code,
    name: name,
    village: referenceVillageId,
    district: referenceDistrictId,
    regency: referenceRegencyId,
    province: referenceProvinceId,
  };
  return result;
};

export { submitLocationUseCase };
