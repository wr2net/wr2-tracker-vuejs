<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MyBox'
})
</script>

<style scoped>
.box {
  background: #b8c1c1;
}
</style>