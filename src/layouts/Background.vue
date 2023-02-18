<template>
  <div class="background">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Background extends Vue {}
</script>

<style lang="scss" scoped></style>
