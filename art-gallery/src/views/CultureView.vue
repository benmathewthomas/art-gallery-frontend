<template>
  <div class="culture">
    <HeadingComponent title="ART & CULTURE"/>
    <FeaturedArtwork  />
  </div>
</template>
  
<script>
import FeaturedArtwork from '@/components/FeaturedArtwork.vue';
import HeadingComponent from '@/components/HeadingComponent.vue';

export default {
  name: 'CultureView',
  components: {
    FeaturedArtwork,
    HeadingComponent
},
}
</script>
  