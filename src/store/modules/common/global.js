const global = {
  namespaced: true,
  state: {
    isLogin: false,
  },
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value
    }
  },
  actions: {
    
  }
}

export default global