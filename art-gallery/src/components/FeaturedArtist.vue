<template>
    <CardComponent :image="this.image" :artistName="this.artistName" 
        :artworkTitle="this.artworkTitle" :description="this.description"/>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
    name: "FeaturedArtist",
    components: { CardComponent },
    data() {
        return {
            image: "xyz_retro.avif",
            artistName: "ARTIST NAME",
            artworkTitle: "Artwork Title",
            description: "Description of the artwork............."
        }
    }
}
</script>

<style scoped>

</style>