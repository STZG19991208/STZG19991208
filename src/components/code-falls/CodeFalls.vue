<template>
  <canvas id="canvas-hack" ref="renderCanvas" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { nextTick, ref } from "vue";
import { useEventListener, useInterval } from "@vueuse/core";

export default class CodeFalls extends Vue {
  mounted() {
    nextTick(() => {
      const renderCanvas = ref<HTMLCanvasElement>(
        this.$refs.renderCanvas as HTMLCanvasElement
      );
      if (!renderCanvas.value) {
        return;
      }
      const ctx = renderCanvas.value.getContext("2d");

      const yPositions: number[] = Array(500);
      for (let i = 0; i < 500; i++) {
        yPositions[i] = 0;
      }

      let width = (renderCanvas.value.width = window.innerWidth);
      let height = (renderCanvas.value.height = window.innerHeight);

      useInterval(30, {
        callback: () => {
          if (ctx != null) {
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = "green";
            ctx.font = "10pt Georgia";

            // eslint-disable-next-line array-callback-return
            yPositions.map((y, index) => {
              const text = String.fromCharCode(1e2 + Math.random() * 33);
              const x = index * 10 + 10;
              ctx.fillText(text, x, y);
              if (y > Math.random() * 1e4) {
                yPositions[index] = 0;
              } else {
                yPositions[index] = y + 10;
              }
            });
          }
        },
      });

      useEventListener("resize", () => {
        if (!renderCanvas.value) {
          return;
        }
        width = renderCanvas.value.width = window.innerWidth;
        height = renderCanvas.value.height = window.innerHeight;
      });
    });
  }
}
</script>

<style lang="scss" scoped></style>
