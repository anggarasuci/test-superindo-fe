import { useCallback, useEffect, useState } from "react";
import { userStoreImplementation } from "src/data/store-implementation/user-store-implementation";
import { groupStoreImplementation } from "src/data/store-implementation/group-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { GroupEntity } from "src/domain/entity/group-entity";
import { getUserUseCase } from "src/use-case/user/get-user-use-case";
import { removeUserUseCase } from "src/use-case/user/remove-user-use-case";
import { submitUserUseCase } from "src/use-case/user/submit-user-use-case";
import { getGroupUseCase } from "src/use-case/group/get-group-use-case";

const UserViewModel = () => {
  const userStore = userStoreImplementation();
  const groupStore = groupStoreImplementation();
  const settingStore = settingStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [groupData, setGroupData] = useState<Array<GroupEntity>>([]);

  useEffect(() => {
    setGroupData(groupStore?.groups);
  }, [groupStore?.groups]);

  const onSearchClicked = useCallback(
    async (name?: string) => {
      await getUserUseCase(userStore, name ?? "");
    },
    [userStore]
  );

  const onSubmitClicked = useCallback(
    async (
      isEdit: boolean,
      id: number,
      username: string,
      email: string,
      is_staff: boolean,
      is_superuser: boolean,
      is_active: boolean,
      password: string,
      groups: Array<GroupEntity>
    ) => {
      await submitUserUseCase(
        userStore,
        isEdit,
        id,
        username,
        email,
        is_staff,
        is_superuser,
        is_active,
        password,
        groups
      );
      setShowAlert(true);
      await getUserUseCase(userStore, "");
    },
    [userStore]
  );

  const onRemoveClicked = useCallback(
    async (id: number) => {
      await removeUserUseCase(userStore, id);
      setShowAlert(true);
      await getUserUseCase(userStore, "");
    },
    [userStore]
  );

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  const onGetGroup = useCallback(
    async (name?: string) => {
      await getGroupUseCase(groupStore, name ?? "");
    },
    [groupStore?.groups]
  );

  return {
    isShowAlert: showAlert,
    isLoading: settingStore.isLoading,
    users: userStore.users,
    status: userStore.status,
    groups: groupData,
    onSearchClicked,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
    onGetGroup,
  };
};

export default UserViewModel;
