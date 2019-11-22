<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/todomvc">Todomvc</router-link>|
      <router-link to="/users">Users</router-link>|
      <router-link to="/followers">{{$store.state.nb_followers.length || 0 }} followers</router-link>
    </div>
    <div v-if="$store.state.user">
      <h1>{{$store.state.user.name}}</h1>
      <button @click="$store.dispatch('logout')">logout</button>
    </div>
    <div v-else>
      <button @click="$store.dispatch('login')">login</button>
    </div>
    <transition name="slide-fade" appear>
      <router-view/>
    </transition>
  </div>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>


