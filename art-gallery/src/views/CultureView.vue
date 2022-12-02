<template>
  <div class="culture">
    This is the culture page.
    <FeaturedArtist  />
  </div>
</template>
  
<script>
import FeaturedArtist from '@/components/FeaturedArtist.vue';

export default {
  name: 'CultureView',
  components: {
  FeaturedArtist
  },
}
</script>
  