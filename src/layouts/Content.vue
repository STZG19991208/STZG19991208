<template>
  <main>
    <div class="main-container">
      <aside class="container-aside">
        <Profile />
      </aside>
      <main class="container-main">
        <div style="text-align: left; padding: 1rem">
          <p>👋 Hi, I’m @shentuzhigang</p>
          <p>👀 I’m interested in coding</p>
          <p>🔭 I’m currently working on weidian</p>
          <p>🌱 I’m currently learning ABC (AI、BIG DATA、CLOUD)</p>
          <p>👯 I’m looking to collaborate on full stack</p>
          <p>🤔 I’m looking for help with study</p>
          <p>💬 Ask me about ...</p>
          <p>📫 How to reach me: shentuzhigang@shentuzhigang.cn</p>
          <p>😄 Pronouns: ...</p>
          <p>⚡ Fun fact: ...</p>
        </div>
        <div></div>
      </main>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Profile } from "@/components/profile";

@Options({
  components: {
    Profile,
  },
})
export default class Content extends Vue {}
</script>

<style lang="scss" scoped>
.main-container {
  aspect-ratio: 1/0.618;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 1px #fff, 0 1px 2px rgb(0 0 0 / 10%);

  display: flex;
  overflow: hidden;

  .container-aside {
    height: 100%;
    width: calc(100% - 61.8%);
    background: #999999;

    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container-main {
    height: 100%;
    width: 61.8%;
  }
}

@media screen and (orientation: portrait) {
  .main-container {
    width: 61.803vh;
  }
}

@media screen and (orientation: landscape) {
  .main-container {
    height: 61.803vh;
  }
}

@media screen and (max-width: 768px) {
  .main-container {
    height: 100%;
    width: 100% !important;
    flex-direction: column;

    .container-aside {
      height: calc(100% - 61.8%);
      width: 100%;
    }

    .container-main {
      height: 61.8%;
      width: 100%;

      p {
        margin: 0;
      }
    }
  }
}
</style>
