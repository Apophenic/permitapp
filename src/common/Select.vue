<template>
  <select class="select" :value="modelValue" @change="update">
    <option v-for="i in items" :value="valueFn(i)" :key="i">{{labelFn(i)}}</option>
  </select>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: ['modelValue', '_items', '_labelgetter', '_valuegetter'],
    emits: ['update:modelValue'],
    data () {
      return {
        items: this._items as string[],
        labelgetter: this._labelgetter as (e: any) => string | null,
        valuegetter: this._valuegetter as (e: any) => string | null
      }
    },
    methods: {
      labelFn(e: any) { return !!this.labelgetter ? this.labelgetter(e) : e },
      valueFn(e: any) { return !!this.valuegetter ? this.valuegetter(e) : e },
      update(e: any) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  })
</script>

<style scoped lang="scss">
  @import "../theme/variables.scss";
  @import "../theme/display.scss";

  .select {
    @extend .border;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    background: $background;
    color: $light;
    outline: none;
  }
</style>
