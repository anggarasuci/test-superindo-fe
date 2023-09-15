import { ResponseEntity } from "../entity/response-entity";
import { ResultWinnerEntity } from "../entity/result-winner-entity";
import { BaseStore } from "./base-store";

interface ResultWinnerStore extends BaseStore {
  results_winners: [ResultWinnerEntity];
  getResultWinner(
    dapil?: string,
    includeProvince?: boolean,
    province?: string,
    party?: string,
    period?: string,
    type?: string
  ): Promise<ResponseEntity<[ResultWinnerEntity]>>;
}

export type { ResultWinnerStore };
