<template>
  <h1 class="m-3">home page</h1>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
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
