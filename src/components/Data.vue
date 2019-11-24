<template>
  <div>
    <div
      style="text-align: left"
      v-for="item in items"
      :key="item.name"
    >
      <ul style="border: 1px solid #bada55; margin: 20px;">
        <li>eye's: {{ item.eye_color }}</li>
        <li>birth-year: {{ item.birth_year }}</li>
        <li>gender: {{ item.gender }}</li>
        <li>har: {{ item.hair_color }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      type: this.$route.params.type,
      items: []
    };
  },

  methods: {
    fetchItems() {
      Promise.all([1, 13, 14].map(id => axios.get(`https://swapi.co/api/${this.type}/${id}/`))).then(res => {
        this.items = res.map(res => res.data);
      });
    },
  },

  mounted(){
      this.fetchItems();
  },
};
</script>

<style>

</style>