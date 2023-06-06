<template>
  <div>
    <input type="text" v-model="value1" />
    <input type="text" v-model="value2" />
    <button @click="clickButton()">CLICK</button>
    <div>SUM:{{ sum }}</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return { value1: null, value2: null, sum: null };
  },
  methods: {
    clickButton() {
      this.sum = Number(this.value1) + Number(this.value2);
    },
  },
};
</script>
