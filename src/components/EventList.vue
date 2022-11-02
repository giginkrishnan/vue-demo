<template>
  <router-link
    class="nav-link"
    :to="{ name: 'EventDetails', params: { id: eventData.id } }"
  >
    <div class="event-card">
      <span>@{{ eventData.title }} on {{ eventData.date }}</span>
      <h4>{{ eventData.title }}</h4>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EventCard",
  props: {
    eventData: {
      type: Object,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.nav-link {
  padding: 10px;
  text-decoration: none;
}
</style>
