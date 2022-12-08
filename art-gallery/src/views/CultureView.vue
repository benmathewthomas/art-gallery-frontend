<template>
  <div class="culture">
    <HeadingComponent title="ART & CULTURE"/>
    <FeaturedArtist  />
  </div>
</template>
  
<script>
import FeaturedArtist from '@/components/FeaturedArtist.vue';
import HeadingComponent from '@/components/HeadingComponent.vue';

export default {
  name: 'CultureView',
  components: {
    FeaturedArtist,
    HeadingComponent
},
}
</script>
  