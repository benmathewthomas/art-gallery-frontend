<template v-if="dataLoaded">
    <CardComponent 
        :heading="`ARTIST OF THE DAY`" 
        :subheading="artistOfDay.displayName" 
        :imageURL="artistOfDay.profileImageURL"
        :detail1="(`Born: ` + artistOfDay.yearOfBirth + `, ` + artistOfDay.placeOfBirth)"/>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { getArtistOfTheDay } from '../services/ArtistService'

export default {
    name: "FeaturedArtist",
    components: { CardComponent },
    data() {
        return {
            artistOfDay: [],
            dataLoaded: false,
        }
    },
    methods: {
        // Gets the data from endpoint and stores in an array.
        async fetchArtistOfTheDay() {
            await getArtistOfTheDay()
                .then(data => {
                    this.artistOfDay = data;
                    this.dataLoaded = true;
            });
        }
    },
    mounted() {
        this.fetchArtistOfTheDay();
    }
}
</script>

<style scoped>

</style>