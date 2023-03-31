<script setup>
const route = useRoute()
const name = route.params.name || 'Gast'

const { x, y } = useMouse()

useHead({
  title: `Hallo ${name}`
})

const date = ref(new Date())

useIntervalFn(() => {
  date.value = new Date()
}, 5000)

</script>

<template>
  <div>
    <h1>Hallo {{ name }}<br>
      Es ist gerade {{ date }}</h1>
    <NuxtLink to="/">Zurück zum Start</NuxtLink>
    <pre>
          {
            x: {{ x }},
            y: {{ y }}
          }</pre>
  </div>
</template>