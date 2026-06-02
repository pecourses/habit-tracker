import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { normalizeError } from '../../utils/normalizeError'
import * as API from '../../api'

const HABITS_SLICE_NAME = 'habits'

const initialState = {
  habits: [],
  error: null,
  isFetching: false
}

export const getHabitThunk = createAsyncThunk(
  `${HABITS_SLICE_NAME}/get`,
  async (_, { rejectWithValue }) => {
    try {
      return await API.getHabits()
    } catch (err) {
      return rejectWithValue(normalizeError(err))
    }
  }
)

export const createHabitThunk = createAsyncThunk(
  `${HABITS_SLICE_NAME}/create`,
  async (newHabit, { rejectWithValue }) => {
    try {
      return await API.createHabit(newHabit)
    } catch (err) {
      return rejectWithValue(normalizeError(err))
    }
  }
)

export const updateHabitThunk = createAsyncThunk(
  `${HABITS_SLICE_NAME}/update`,
  async ({ id, updatedHabit }, { rejectWithValue }) => {
    try {
      return await API.updateHabit(id, updatedHabit)
    } catch (err) {
      return rejectWithValue(normalizeError(err))
    }
  }
)

export const deleteHabitThunk = createAsyncThunk(
  `${HABITS_SLICE_NAME}/delete`,
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteHabit(id)
      return id
    } catch (err) {
      return rejectWithValue(normalizeError(err))
    }
  }
)

const habitsSlice = createSlice({
  name: HABITS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: buidler => {
    buidler.addCase(getHabitThunk.pending, state => {
      state.isFetching = true
      state.error = null
    })
    buidler.addCase(getHabitThunk.fulfilled, (state, action) => {
      const { payload } = action
      state.isFetching = false
      state.habits = [...payload]
    })
    buidler.addCase(getHabitThunk.rejected, (state, action) => {
      const { payload } = action
      state.isFetching = false
      if (payload) {
        state.error = payload
      } else {
        state.error = {
          status: 'UNKNOWN',
          message: action.error.message || 'Something went wrong'
        }
      }
    })

    buidler.addCase(createHabitThunk.pending, state => {
      state.isFetching = true
      state.error = null
    })
    buidler.addCase(createHabitThunk.fulfilled, (state, action) => {
      const { payload } = action
      state.isFetching = false
      state.habits.push(payload)
    })
    buidler.addCase(createHabitThunk.rejected, (state, action) => {
      const { payload } = action
      state.isFetching = false
      if (payload) {
        state.error = payload
      } else {
        state.error = {
          status: 'UNKNOWN',
          message: action.error.message || 'Something went wrong'
        }
      }
    })

    buidler.addCase(updateHabitThunk.pending, state => {
      state.isFetching = true
      state.error = null
    })
    buidler.addCase(updateHabitThunk.fulfilled, (state, action) => {
      const { payload } = action
      state.isFetching = false
      let updatingHabit = state.habits.find(h => h.id === payload.id)
      if (updatingHabit) {
        Object.assign(updatingHabit, payload)
      }
    })
    buidler.addCase(updateHabitThunk.rejected, (state, action) => {
      const { payload } = action
      state.isFetching = false
      if (payload) {
        state.error = payload
      } else {
        state.error = {
          status: 'UNKNOWN',
          message: action.error.message || 'Something went wrong'
        }
      }
    })

    buidler.addCase(deleteHabitThunk.pending, state => {
      state.isFetching = true
      state.error = null
    })
    buidler.addCase(deleteHabitThunk.fulfilled, (state, action) => {
      const { payload } = action
      state.isFetching = false
      state.habits = state.habits.filter(h => h.id !== payload)
    })
    buidler.addCase(deleteHabitThunk.rejected, (state, action) => {
      const { payload } = action
      state.isFetching = false
      if (payload) {
        state.error = payload
      } else {
        state.error = {
          status: 'UNKNOWN',
          message: action.error.message || 'Something went wrong'
        }
      }
    })
  }
})

const { reducer } = habitsSlice
export default reducer
