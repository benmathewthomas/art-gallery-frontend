<template>
  <div class="artworks">
    <HeadingComponent title="ARTWORKS"/>
    <TableArtworks />
  </div>
</template>

<script>
import HeadingComponent from '@/components/HeadingComponent.vue';
import TableArtworks from '../components/TableArtworks.vue';

export default {
  name: 'ArtworksView',
  components: {
    TableArtworks,
    HeadingComponent
}
}
</script>

<style scoped>
  .artworks {
    width: 70%;
    margin:auto;
  }

  @media only screen and (max-width: 600px) {
    .artworks {
      width: 95%;
    }
}
</style>