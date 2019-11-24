<template>
  <div>
      type: {{ type }}
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
        //   this.items = []
        //   let initial_ids = [1, 13, 14]

        //   for( let i in initial_ids){
        //       let id = initial_ids[i]
        //       console.log('id', id)
        axios.get(`https://swapi.co/api/people/`)
        .then(res => console.log(res));
            //   .then(json => this.items.push(json))
            //   .catch(error => console.log(error))
        },
  },

  mounted(){
      this.fetchItems();
  },
};
</script>

<style>

</style>