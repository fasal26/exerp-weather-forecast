import { createStore } from 'vuex'

export interface IState {
  loader: boolean,
  error: boolean,
  currentLoc: string
}

export default createStore<IState>({
  state: {
    loader: false,
    error: false,
    currentLoc: ''
  },
  getters: {
    isLoading: (state) => state.loader,
    hasError: (state) => state.error,
    currentLoc: (state) => state.currentLoc
  },
  mutations: {
    SET_LOADER(state, status) {
      state.loader = status
    },
    SET_ERROR(state) {
      state.error = true;
    },
    CLEAR_ERROR(state) {
      state.error = false;
    },
    SET_CURRENT_ADDRESS(state, address: string) {
      state.currentLoc = address;
    },
  },
  actions: {
  },
  modules: {
  }
})
