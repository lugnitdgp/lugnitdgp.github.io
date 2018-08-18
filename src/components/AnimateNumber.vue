<template>
  <h3>{{ displaynumber(displayNumber).first }}<span class="highlighted">{{ displaynumber(displayNumber).second }}</span></h3>
</template>

<script>
export default {
  props: {
    'number': {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      displayNumber: 10,
      interval: false
    }
  },

  ready: function () {
    console.log(this.number)
    this.displayNumber = this.number ? this.number : 0
  },

  watch: {
    number: function () {
      clearInterval(this.interval)
      if (this.number === this.displayNumber) {
        return
      }

      this.interval = window.setInterval(function () {
        if (this.displayNumber !== this.number) {
          var change = (this.number - this.displayNumber) / 30
          change = change >= 0 ? Math.ceil(change) : Math.floor(change)
          this.displayNumber = this.displayNumber + change
        }
      }.bind(this), 80)
    }
  },

  methods: {
    displaynumber (num) {
      num = num.toString()
      return {
        first: num.substr(0, 1),
        second: num.substr(1, num.length)
      }
    }
  }
}
</script>

<style scoped>
.highlighted {
  color: #fa631c;
}
h3 {
  color: white;
  margin: 0;
}
</style>
