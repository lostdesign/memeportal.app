<template>
  <section class="w-full text-white flex flex-col justify-between">
    <div>
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
        <div>
          <input type="checkbox" ref="isLower" @input="lower"> Lower
        </div>
        <div>
          <input type="checkbox" ref="isUpper" @input="upper"> Upper
        </div>
        <div>
          <input type="checkbox" ref="isSpaces" @input="spaces()"> Spaces
        </div>
      </div>
    </div>
    <input v-model="value" @click="" class="mt-4 w-full bg-gray-900 focus:outline-none focus:ring-gray-800 focus:ring-2 rounded py-1 px-2 text-white" />
  </section>
</template>

<script>
import utterance from 'zalgoo'

export default {
  data () {
    return {
      input: null,
      value: null,
      spaceAmount: null
    }
  },

  methods: {
    updateValue() {
      this.value = this.input

      this.$refs.isMock.checked = false
      this.$refs.isClap.checked = false
      this.$refs.isUpper.checked = false
      this.$refs.isLower.checked = false
      this.$refs.isSpaces.checked = false
      this.$refs.isGlitch.checked = false
      this.$refs.isGlitch.disabled = false
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
        this.$refs.isGlitch.disabled = true
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
    lower() {
      if (this.$refs.isLower.checked === true) {
        this.value = this.value.toLowerCase()
      }
    },
    upper() {
      if (this.$refs.isUpper.checked === true) {
        this.value = this.value.toUpperCase()
      } else {
        this.value = this.value.toLowerCase()
      }
    },
    spaces(amount = 0) {
      this.value = this.value.split(' ').map(word => word + Array(amount).fill(' ').join('')).join('').trim()
    }
  }
}
</script>