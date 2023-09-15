import { BaseEntity } from "./base-entity";

export interface DocumentTypeEntity extends BaseEntity {
    description: string;
}

export interface RequestDocumentTypeEntity extends BaseEntity {
    description: string;
}
