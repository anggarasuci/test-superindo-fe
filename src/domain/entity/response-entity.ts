export interface ResponseEntity<T> {
    validation: any[] | [],
    status: ResponseStatusEntity,
    data: T
}

export interface ResponseEntityList<T> {
    validation: [any],
    status: ResponseStatusEntity,
    data: [T]
}

export interface ResponseStatusEntity {
    isError: boolean | false,
    code: number,
    message: string
}
