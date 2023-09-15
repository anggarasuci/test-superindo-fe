import {
  RequestPartyEntity
} from "src/domain/entity/party-entity";
import { PartyStore } from "src/domain/store/party-store";

const submitPartyUseCase = async (
  store: PartyStore,
  isEdit: boolean,
  id: number | null,
  counter_no: number | null,
  name: string | "",
  short_name: string | "",
  logo: string | "",
  color: string | "",
  secondary_color: string | "",
  textColor: string | ""
) => {
  await store.submit(
    isEdit,
    createParams(
      id,
      counter_no,
      name,
      short_name,
      logo,
      color,
      secondary_color,
      textColor
    )
  );
};

const createParams = (
  id: number,
  counter_no: number,
  name: string,
  short_name: string,
  logo: string,
  color: string,
  secondary_color: string,
  textColor: string
): RequestPartyEntity => {
  let result: RequestPartyEntity = {
    id: id,
    counter_no: counter_no,
    name: name,
    short_name: short_name,
    logo: logo,
    color: color,
    secondary_color: secondary_color,
    text_color: textColor,
  };
  return result;
};

export { submitPartyUseCase };
