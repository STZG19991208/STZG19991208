<template>
  <div>
    <Header class="header" />

    <Content class="content" />

    <Footer class="footer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import Content from "@/layouts/Content.vue";

@Options({
  components: {
    Header,
    Footer,
    Content,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped></style>
