<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <h1>{{ $filters.formatYYYYMMDD(time) }}</h1>
  <h3>{{ $filters.currencyText(value) }}</h3>
<!--  <div>{{$filters.currencyText()}}</div>-->
  <router-link to="/about">about</router-link>
  <router-link to="/login">login</router-link>
  <router-link to="/home">home</router-link>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const time = ref(1629448496)
    const value = ref(2000)
    return { time, value }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
