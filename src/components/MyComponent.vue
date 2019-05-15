<template>
  <div>
    <h1>{{titulo}}</h1>
    hora certa: {{ hora }}
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: `my-component`,
  props: { titulo: { type: String, default: "titulo" } },
  data() {
    return {
      hora: null,
      interval: null
    };
  },
  mounted() {
    this.hora = moment().format("L LTS");
    this.interval = setInterval(() => {
      this.hora = moment().format("L LTS");
    }, 1000);
  },
  unmount() {
    clearInterval(this.interval);
  }
};
</script>
