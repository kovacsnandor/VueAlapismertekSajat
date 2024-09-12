<template>
  <div>
    <h2>css Binding (css adatkötés)</h2>
    <h3>Szövegközi stílus</h3>
    <input type="range" class="form-range" id="range"
        :min="min" :max="max" :step="step"
        v-model="opacity"
    />
    <div :style="{backgroundColor: 'rgba(115,20,20,' + opacity + ')'}">
        szövegközi stílus
    </div>
  </div>

</template>

<script>
export default {
    data(){
        return {
            min: 0,
            max: 1,
            step: 0.01,
            opacity: 0.5
        }
    }
}
</script>

<style>

</style>