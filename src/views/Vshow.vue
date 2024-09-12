<template>
  <div>
    <h2>v-show</h2>
    <div class="alert alert-primary" role="alert" v-show="show1" id="show1">
      <div class="d-flex justify-content-between">
        Eltüntetés v-show-val. Ilyenkor csak a láthatóság tűnik el, marad
        DOM-ban
        <i class="bi bi-x-lg my-pointer" @click="onClickX1()"></i>
      </div>
    </div>
    <div class="alert alert-success" role="alert" v-if="show2" id="show2">
      <div class="d-flex justify-content-between">
        Eltüntetés v-if-el. Ilyenkor kiveszi DOM-ból
        <i class="bi bi-x-lg my-pointer" @click="onClickX2()"></i>
      </div>
    </div>

    <div
      class="alert alert-danger"
      role="alert"
      v-if="showAutoMessage"
      id="show3"
    >
      <div class="d-flex justify-content-between">
        {{ showAutoMessage }}
        <i class="bi bi-x-lg my-pointer" @click="onClickX3()"></i>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-primary"
      @click="uzenetIndit('Ez egy üzenet')"
    >
      üzenet
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      showAutoMessage: null,
      showTime: 3000,
      setTimeutId: null,
    };
  },
  methods: {
    onClickX1() {
      this.show1 = false;
    },
    onClickX2() {
      this.show2 = false;
    },
    onClickX3() {
      this.showAutoMessage = null;
      clearTimeout(this.setTimeutId);
      this.setTimeutId = null;
    },
    uzenetIndit(uzenet) {
      if (this.setTimeutId) {
        return;
      }
      this.showAutoMessage = uzenet;
      this.setTimeutId = setTimeout(() => {
        this.showAutoMessage = null;
        this.setTimeutId = null;
      }, this.showTime);
    //   console.log(this.setTimeutId);
    },
  },
};
</script>

<style>
</style>