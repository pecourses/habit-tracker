import axios from 'axios'

import type { ApiError, LoadingError } from '../types'

export function normalizeError (err: unknown): LoadingError {
  // typeguard
  if (axios.isAxiosError<ApiError>(err)) {
    return {
      message: err.response?.data?.message ?? err.message,
      status: err.response ? `${err.response.status}` : 'AXIOS_ERROR'
    }
  }
  if (err instanceof Error) {
    return {
      status: 'UNKNOWN',
      message: err.message
    }
  }
  return {
    status: 'UNKNOWN',
    message: 'Unexpected error'
  }
}
