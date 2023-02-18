<template>
  <div class="profile" style="margin: 0 auto; padding: 16px">
    <div class="avatar">
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <div class="title">
      <h1>申屠志刚</h1>
    </div>
    <div class="description">
      你已经是一个成熟的程序猿了，要学会自己DEBUG了。
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
.profile {
  .avatar {
    width: 50%;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .profile {
    font-size: 8px;
  }
}
</style>
