import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedPosts: [
      { title: 'Anexia Tiger & lol', id: 'gtdf2689vdeiv', imageUrl: 'http://www.insiderunning.com/portals/1/images/b2.png', date: new Date(), location: 'fdg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis.' },
      { title: 'Anexia tigers VS Lolmania', id: '8724gbvf', imageUrl: 'https://www.mizuno.eu/images/content/106183_11677_3_C_1000_562_0_2299289/b80i4479.jpg', date: new Date(), location: 'Munic', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis.' },
      { title: 'sdfgsfdgsfdg', id: 'b79zf93zfb397b', imageUrl: 'http://www.edinburghrugby.org/sites/default/files/editor/images/13868149.jpg', date: '2017-07-19', location: new Date(), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a quis eaque, impedit, totam provident quisquam sint delectus debitis quasi neque harum reiciendis repellendus nihil ea similique, nostrum deserunt facilis.' }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createPost (state, payload) {
      state.loadedPosts.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    createPost ({commit}, payload) {
      const post = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'u43vzu43vv3'
      }
      // Reach out to firebase and store it
      commit('createPost', post)
    },
    SignUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          likes: []
        }
        commit('setUser', newUser)
      }).catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
    },
    SignUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
        const newUser = {
          id: user.uid,
          like: []
        }
        commit('setUser', newUser)
      }).catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedPosts (state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    latestPosts (state, getters) {
      return getters.loadedPosts.slice(0, 3)
    },
    featuredPosts (state, getters) {
      return getters.loadedPosts.slice(0, 5)
    },
    loadedPost (state) {
      return (postId) => {
        return state.loadedPosts.find((post) => {
          return post.id === postId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
