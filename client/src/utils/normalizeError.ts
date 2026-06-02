import axios from 'axios'

export function normalizeError (err) {
  if (axios.isAxiosError(err)) {
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
