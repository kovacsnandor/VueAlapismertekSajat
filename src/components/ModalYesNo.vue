<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalYesNo"
    ref="modalYesNo"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
          <button
            type="button"
            class="btn-close"
            @click="hide(); $event.target.blur()"
          ></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary"
            @click="hide(); $event.target.blur()"
          >
            {{ no }}
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="onClickYes(); $event.target.blur()"
          >
            {{ yes }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  props: {
    title: { type: String, default: "El akarod tüntetni?" },
    yes: { type: String, default: "yes" },
    no: { type: String, default: "no" },
  },
  data() {
    return {
      modal: null,
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.modalYesNo);
  },
  methods: {
    onClickYes() {
      this.$emit("valamilyenAkcio");
      this.hide();
    },
    show() {
      this.modal.show();
    },
    hide() {
      this.modal.hide();
    },
  },
};
</script>

<style></style>
