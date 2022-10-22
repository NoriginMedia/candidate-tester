<template>
  <h1 class="m-3">{{ msg }}</h1>
  <div class="text-center bg-red-500">1111</div>

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
