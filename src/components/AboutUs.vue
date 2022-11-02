<template>
  <div>
    <h3>About Us</h3>
    <p>Some text will be here</p>
    <SvgIcon icon="user" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SvgIcon from "./SvgIcon.vue";
export default defineComponent({
  name: "AboutUs",
  components: { SvgIcon },
});
</script>
