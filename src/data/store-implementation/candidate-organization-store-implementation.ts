import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestOrganizationEntity } from "src/domain/entity/candidate-organization-entity";
import { OrganizationStore } from "src/domain/store/candidate-organization-store";
import { OrganizationAction } from "../action/candidate-organization-action";
import { OrganizationStoreState } from "../reducer/candidate-organization-reducer";
import type { AppRootState } from "./app-store-implementation";

const organizationSelector = (state: AppRootState) => state.organization;

const organizationStoreImplementation = (): OrganizationStore => {
  const { organization, validation, organizations, status } = useSelector<
    AppRootState,
    OrganizationStoreState
  >(organizationSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getOrganizations = useCallback(
    (name?: string) => OrganizationAction.getOrganizationAction(name)(dispatch),
    [dispatch]
  );

  const getOrganizationById = useCallback(
    (id: string) => OrganizationAction.getOrganizationByIdAction(id)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestOrganizationEntity) =>
      OrganizationAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) => OrganizationAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    organization,
    organizations,
    validation,
    status,
    getOrganizations,
    getOrganizationById,
    submit,
    remove,
  };
};

export { organizationStoreImplementation, organizationSelector };
