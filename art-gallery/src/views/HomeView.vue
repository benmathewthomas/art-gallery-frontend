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
