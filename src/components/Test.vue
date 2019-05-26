<template lang="html">
  <div>
    <h2>test {{ $route.params.id }}</h2>
    <ul id="example-2">
      <li v-for="(item, index) in history">
        {{ item.c }}
      </li>
    </ul>
    <router-link :to="{ path: '/' }">go home</router-link>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {

    data() {
      return {
        history: []
      }
    },

    methods: {

      getHistory(){
        axios.get(`https://gaterest.fxclub.org/real/restapi/quotes/historyquotes?symbol=AAPL&interval=M1`).then(res => {
          this.history = res.data.Result.RateHistory
        })
      }

    },

    created() {
      this.getHistory()
    }

  }
</script>

<style lang="css">
</style>
