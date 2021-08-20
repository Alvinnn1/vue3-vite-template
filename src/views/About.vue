<template>
  <div>
    <div>About</div>
    <div>{{vuexText}}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('account', ['vuexText'])
}
</script>