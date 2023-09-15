import { ResultWinnerService } from "src/data/service/result-winner-service";
import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { ResultWinnerEntity } from "../entity/result-winner-entity";

const getResultWinner = async (
  dapil?: string,
  includeProvince?: boolean,
  province?: string,
  party?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultWinnerEntity]>> => {
  return mapResponse(
    await ResultWinnerService.getResultWinner(
      dapil,
      includeProvince,
      province,
      party,
      period,
      type
    )
  );
};

export const ResultWinnerRepository = {
  getResultWinner,
};
