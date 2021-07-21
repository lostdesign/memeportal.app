<template>
  <section class="text-white">
    <input
      type="text"
      v-model="input"
      @input="updateValue"
      class="w-full bg-gray-900 focus:outline-none focus:ring-gray-800 focus:ring-2 rounded py-1 px-2 text-white"
    />
    <div class="flex items-center space-x-4 mt-2">
      <div>
        <input type="checkbox" ref="isMock" @input="mock"> Mock
      </div>
      <div>
        <input type="checkbox" ref="isClap" @input="clap"> Clap
      </div>
      <div>
        <input type="checkbox" ref="isGlitch" @input="glitch"> Glitch
      </div>
    </div>
    <pre>{{ value }}</pre>
  </section>
</template>

<script>
import utterance from 'zalgoo'

export default {
  data () {
    return {
      input: null,
      value: null,
      isMock: null,
      isClap: null,
    }
  },

  methods: {
    updateValue() {
      this.value = this.input
    },
    clap() {
      if (this.$refs.isClap.checked === true) {
        this.value = this.value.split(' ').map(word => word + ' 👏 ').join('').trim()
      } else {
        this.value = this.value.replace(/( [\u2700-\u27BF]| [\uE000-\uF8FF]| \uD83C[\uDC00-\uDFFF]| \uD83D[\uDC00-\uDFFF]| [\u2011-\u26FF] |\uD83E[\uDD10-\uDDFF])/g, '')
      }
    },
    glitch() {
      if (this.$refs.isGlitch.checked === true) {
        this.value = utterance(this.value, 10)
      } else {
        // lol no, there is no way back
      }
    },
    mock() {
      if (this.$refs.isMock.checked === true) {
        this.value = this.value.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('')
      } else {
        this.value = this.value.split('').map(char => char.toLowerCase()).join('')
      }
    },
  }
}
</script>