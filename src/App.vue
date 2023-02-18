<template>
  <Background class="background">
    <CodeFalls />
  </Background>

  <Layout class="layout" />

  <Foreground class="foreground" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CodeFalls } from "@/components/code-falls";
import Background from "@/layouts/Background.vue";
import Foreground from "@/layouts/Foreground.vue";
import Layout from "@/layouts/Layout.vue";

@Options({
  components: {
    CodeFalls,
    Layout,
    Foreground,
    Background,
  },
})
export default class App extends Vue {}
</script>
