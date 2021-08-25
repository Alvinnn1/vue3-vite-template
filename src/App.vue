<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <h1>{{ $filters.formatYYYYMMDD(time) }}</h1>
  <h3>{{ $filters.currencyText(value) }}</h3>
  <h1>{{ $t('world') }}</h1>
  <h2>{{ t('world')}} 123</h2>
<!--  <div>{{$filters.currencyText()}}</div>-->
  <router-link to="/about">about</router-link>
  <router-link to="/login">login</router-link>
  <router-link to="/home">home</router-link>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const { t } = useI18n()
    const time = ref(1629448496)
    const value = ref(2000)
    return { time, value, t }
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
