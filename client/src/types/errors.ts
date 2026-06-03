export interface ApiError {
  message: string
  status: number
}

type ErrorStatus = `${number}` | 'AXIOS_ERROR' | 'UNKNOWN'

export interface LoadingError {
  message: string
  status: ErrorStatus
}
