<template>
  <div class="artworks">
    <TableArtworks />
  </div>
</template>

<script>
import TableArtworks from '../components/TableArtworks.vue';

export default {
  name: 'ArtworksView',
  components: {
    TableArtworks
}
}
</script>

<style scoped>
.artworks {
  width: 70%;
  margin:auto;
}
</style>