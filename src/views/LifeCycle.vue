<template>
  <div>
    <h2>Life cycle</h2>

    <button type="button" class="btn btn-primary"
      @click="onClickButton()"
    >
      {{ counter }}
    </button>
  </div>
</template>

<script>
export default{

  data(){
    return {
      counter: 0
    }
  },
  methods: {
    onClickButton(){
      this.counter++;
    }
  }


} 

</script>


<style>

</style>
