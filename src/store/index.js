import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    products: [],
    nb_followers: []
  },
  getters: {
    getDiscounProducts(state) {
      return state.products.filter();
    },
    get_followers(state) {
      return state.nb_followers;
    },

    isFollower: state => id => {
      return state.nb_followers.find(follow => follow.id === id);
    }
  },
  mutations: {
    set_user(state, value) {
      state.user = value;
    },
    set_followers(state, nb_followers) {
      state.nb_followers.push(nb_followers);
    }
  },
  actions: {
    login({ commit }) {
      commit("set_user", { name: "alex" });
      //API
      //Mutation user
      //cookie
    },
    logout({ commit }) {
      commit("set_user", null);
    },
    follow({ commit }, user) {
      commit("set_followers", user);
    },
    unfollow({ commit }, user) {
      this.state.nb_followers = this.state.nb_followers.filter(
        follow => follow.id !== user.id
      );
    }
  },
  modules: {}
});
