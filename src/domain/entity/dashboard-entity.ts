export interface DashboardEntity {
  total_candidate: number;
  total_document_uploaded: number;
  total_document_complete: number;
  sum_document_per_type: SumDocumentEntity[];
  dapil_document_uploaded: DapilDocumentEntity[];
}

export interface SumDocumentEntity {
  doc_type: string;
  total_doc: number;
}

export interface DapilDocumentEntity {
  dapil_id: number;
  dapil_name: string;
  total_doc: number;
  percent_uploaded: number;
}
