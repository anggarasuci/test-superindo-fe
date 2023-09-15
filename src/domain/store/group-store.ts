import { GroupEntity, RequestGroupEntity } from "../entity/group-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface GroupStore extends BaseStore {
    groups: [GroupEntity];
    groupById: GroupEntity;
    getGroups(
        name?:string
    ): Promise<ResponseEntity<[GroupEntity]>>;
    submit(isEdit:boolean, request: RequestGroupEntity): Promise<ResponseEntity<GroupEntity>>;
    remove(id: number): Promise<ResponseEntity<GroupEntity>>;
}

export type { GroupStore };