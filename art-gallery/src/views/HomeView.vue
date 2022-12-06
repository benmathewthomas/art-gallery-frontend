<template>
  <div class="home">
    <HeadingComponent title="Welcome to XYZ Gallery"/>
    <div class="home-banner">
      <img src="@/assets/img/emerging_artists.avif" alt="Emerging Artists Exhibition banner">
    </div>
  </div>
</template>

<script>
import HeadingComponent from '@/components/HeadingComponent.vue';

export default {
    name: "HomeView",
    components: { HeadingComponent }
}
</script>

<style scoped>
.home-banner {
    text-align: center;
}
.home img{
    width: 90vw;
    max-width: 1000px;
}
.home, .artworks, .exhibitions, .culture {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 20px;
    padding-bottom: 50px;
}
</style>
