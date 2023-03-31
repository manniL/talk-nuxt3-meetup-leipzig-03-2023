<script setup lang="ts">
const { data, pending, refresh } = await useFetch<any>('https://icanhazdadjoke.com/', {
  headers: {
    Accept: 'application/json'
  }
})

const joke = computed(() => data.value.joke)
</script>

<template>
  <div>
    <h1>Hallo Leipzig!!!!!</h1>
    <button :disabled="pending" @click="refresh()">{{  pending ? '...' : 'Refresh' }}</button>
    <h1 style="font-size: 90pt;">{{ joke }}</h1>
  </div>
</template>