<template>
  <div class="culture">
    <HeadingComponent title="ART & CULTURE"/>
    <FeaturedArtist  />
    <br>
    <br>
    <FeaturedArtwork />
  </div>
</template>
  
<script>
import FeaturedArtist from '@/components/FeaturedArtist.vue';
import FeaturedArtwork from '@/components/FeaturedArtwork.vue';
import HeadingComponent from '@/components/HeadingComponent.vue';

export default {
  name: 'CultureView',
  components: {
    FeaturedArtist,
    HeadingComponent,
    FeaturedArtwork
},
}
</script>
  