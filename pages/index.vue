<template>
  <div class="main-container">
    <Dashboard v-if="userLogged" />
    <Login v-else />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => {
    return {
      userLogged: true
    }
  },
  mounted: () => {
    
  },
  methods: {},
}
</script>

<style>
.main-container {
  flex: 1;
}
</style>
