import { PartyService } from "src/data/service/party-service";
import { mapResponse } from "src/helpers/map-response";
import { PartyEntity, RequestPartyEntity } from "../entity/party-entity";
import { ResponseEntity } from "../entity/response-entity";

const getParties = async (
  name?: string,
): Promise<ResponseEntity<[PartyEntity]>> => {
  return mapResponse(await PartyService.getParties(name));
};

const getPartyById = async (
  id: number
): Promise<ResponseEntity<PartyEntity>> => {
  return mapResponse(
    await PartyService.getPartyById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestPartyEntity,
): Promise<ResponseEntity<PartyEntity>> => {
  return mapResponse(await PartyService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<PartyEntity>> => {
  return mapResponse(await PartyService.remove(id));
};

export const PartyRepository = {
  getParties,
  getPartyById,
  submit,
  remove
};
