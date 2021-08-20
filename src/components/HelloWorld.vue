<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>Edit<code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    let count = ref(0)
    return { count }
  }
})
</script>
