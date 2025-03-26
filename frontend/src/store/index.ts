import { createStore } from 'vuex'

export interface IState {
  loader: boolean,
  error: boolean,
  currentLoc: string,
  toastObj : {
    message: string,
    status: boolean
  }
}

export default createStore<IState>({
  state: {
    loader: false,
    error: false,
    currentLoc: '',
    toastObj: {
      message: '',
      status: false
    }
  },
  getters: {
    isLoading: (state) => state.loader,
    hasError: (state) => state.error,
    currentLoc: (state) => state.currentLoc,
    getToast: (state) => state.toastObj,
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
    SHOW_TOAST(state, message) {
      state.toastObj = {
        message,
        status: true
      }
      setTimeout(() => {
        state.toastObj = {
          message,
          status: false
        }
      }, 3000);
    },
  },
  actions: {
  },
  modules: {
  }
})
