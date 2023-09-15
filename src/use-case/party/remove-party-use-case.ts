import { PartyStore } from "src/domain/store/party-store";

const removePartyUseCase = async (
  store: PartyStore,
  id: number
) => {
  await store.remove(id);
};

export { removePartyUseCase };
