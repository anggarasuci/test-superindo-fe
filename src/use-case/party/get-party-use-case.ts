import { PartyStore } from "src/domain/store/party-store";

const getPartyUseCase = async (
  store: PartyStore,
  name?: string | ""
) => {
  await store.getParties(name);
};

export { getPartyUseCase };
