<template>
  <span>v{{ version }}</span>
</template>

<script>
import { version } from '../../package.json'
//const { ipcRenderer } = require('electron')

export default {
  data() {
    return {
      version,
    }
  }
}
</script>
