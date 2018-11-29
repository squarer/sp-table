<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'myComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
p {
  color: #61dafb;
}
</style>
