<template>
  <img :src="getImgUrl(icon)" v-bind:alt="icon" class="icon" />
  <!-- <TestSvg /> -->
</template>
<script lang="ts">
import { defineComponent, Component } from "vue";
export default defineComponent({
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      picUrl: "",
    };
  },
  methods: {
    getImgUrl() {
      this.picUrl = require("../assets/" + this.icon + ".svg");
      return this.picUrl;
    },
  },
});
</script>
<style>
.icon {
  width: 50px;
}
</style>
