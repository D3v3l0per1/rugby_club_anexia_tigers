import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedPosts: [
      { title: 'Anexia Tiger & lol', id: 'gtdf2689vdeiv', imageUrl: 'http://www.insiderunning.com/portals/1/images/b2.png', date: '2017-07-17' },
      { title: 'Anexia tigers VS Lolmania', id: '8724gbvf', imageUrl: 'https://www.mizuno.eu/images/content/106183_11677_3_C_1000_562_0_2299289/b80i4479.jpg', date: '2017-03-12' },
      { title: 'sdfgsfdgsfdg', id: 'b79zf93zfb397b', imageUrl: 'http://www.edinburghrugby.org/sites/default/files/editor/images/13868149.jpg', date: '2017-07-19' },
      { title: 'sdfgsfdgsfdg', id: 'b79zf93zfb397b', imageUrl: 'http://www.edinburghrugby.org/sites/default/files/editor/images/13868149.jpg', date: '2017-07-19' },
      { title: 'sdfgsfdgsfdg', id: 'b79zf93zfb397b', imageUrl: 'http://www.edinburghrugby.org/sites/default/files/editor/images/13868149.jpg', date: '2017-12-15' }
    ],
    user: {
      id: 'u6b5u4b6',
      likes: ['asdas3']
    }
  },
  mutations: {},
  actions: {},
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
    }
  }
})
