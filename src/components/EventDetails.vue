<template>
  <div v-if="eventDetails">
    <SvgIcon icon="test" />
    <h3>{{ eventDetails.title }}</h3>
    <p>{{ eventDetails.description }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import EventService from "../services/EventService";
import { EventCard } from "../interfaces";
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  name: "EventDetails",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      eventDetails: {} as EventCard,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.eventDetails = response.data;
      })
      .catch((err) => console.log(err));
    let product = { quantity: 3, price: 5 };
    let proxiedProject = new Proxy(product, {});
    console.log(proxiedProject.quantity);
  },
  components: { SvgIcon },
});
</script>
