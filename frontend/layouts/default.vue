<template>
  <div class="min-h-screen flex flex-col bg-gray-light ">
    <Header />
    <Nuxt class="flex-grow" />
    <Footer />
  </div>
</template>
<script>
export default {
  mounted () {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
}
</script>