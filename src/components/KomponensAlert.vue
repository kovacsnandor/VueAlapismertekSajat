<template>
  <div class="alert alert-danger" role="alert" v-if="openAlert">
    <div class="d-flex justify-content-between">
      <slot></slot>
      <i class="bi bi-x-lg" @click="onClickClose()"></i>
    </div>
  </div>
</template>

<script>
export default {
    props: ['openAlert'],
    methods: {
        onClickClose(){
            this.$emit('closeAlert')
        }
    }
}
</script>

<style>

</style>