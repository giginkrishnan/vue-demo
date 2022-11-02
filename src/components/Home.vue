<template>
  <div class="events">
    <SvgIcon icon="test" />
    <EventList v-for="event in events" :key="event.id" :eventData="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventList from "./EventList.vue";
import { EventCard } from "../interfaces";
import SvgIcon from "./SvgIcon.vue";
import EventService from "../services/EventService";
export default defineComponent({
  name: "App",
  components: {
    EventList,
  },
  data() {
    return {
      events: {} as EventCard,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => (this.events = response.data))
      .catch((err) => console.log(err));
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h4 {
  font-size: 20px;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
