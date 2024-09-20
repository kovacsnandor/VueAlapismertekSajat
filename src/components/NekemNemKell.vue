<template>
    <div class="my-doboz">

        <h3>Nekem nem kell semmi</h3>
        <NekemKell />
    </div>
</template>

<script>
import NekemKell from './NekemKell.vue';

NekemKell
export default {
    components: {
        NekemKell
    }
}
</script>

<style scoped>
.my-doboz{
    border: 1px dashed black;
    background: lightgreen;
    width: 600px;
    padding: 20px;
}
</style>