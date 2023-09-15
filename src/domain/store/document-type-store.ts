import { ResponseEntity } from "../entity/response-entity";
import { DocumentTypeEntity, RequestDocumentTypeEntity } from "../entity/document-type-entity";
import { BaseStore } from "./base-store";

interface DocumentTypeStore extends BaseStore {
    documentTypes: [DocumentTypeEntity];
    documentType: DocumentTypeEntity;

    getDocumentTypes(name?: string): Promise<ResponseEntity<[DocumentTypeEntity]>>;

    getDocumentTypeById(id: number): Promise<ResponseEntity<DocumentTypeEntity>>;

    submit(isEdit: boolean, request: RequestDocumentTypeEntity): 
        Promise<ResponseEntity<DocumentTypeEntity>>;

    remove(
        id: number
    ): Promise<ResponseEntity<DocumentTypeEntity>>;
}

export type { DocumentTypeStore };