<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import axios from 'axios';

export default {
  props: ['msg'],
  data() {
    return {
      epgData: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:1337/epg')
        .then((response) => {
          console.log("response: ", response);
        })
  }
}
</script>
