<template>
  <v-app style="background: #42b883;">
    <MainContent/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'home',
  components: {
    MainContent
  }
}
</script>
