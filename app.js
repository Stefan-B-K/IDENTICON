
new Vue({
  el: '#app',
  data() {
    return { textInput: '' }
  },
  computed: {
    identicon() {
      return jdenticon.toSvg(this.textInput, 200)
    },
    reverse() {
      return this.textInput.split('').reverse().join('')
    }
  },
  methods: {
    onInput(event) {
      this.textInput = event.target.value
    }
  }
})