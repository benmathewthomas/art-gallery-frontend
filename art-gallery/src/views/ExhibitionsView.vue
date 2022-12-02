<template v-if="dataLoaded">
  <div class="exhibitions">
    <TableExhibition :fields="this.fields" :exhibitions="this.exhibitions" v-on:updateData="updateData()"/>
  </div>
</template>

<script>
import { getExhibitions } from '../services/ExhibitionService'
import TableExhibition from '../components/TableExhibition.vue';

export default {
  name: 'ExhibitionsView',
  components: {
    TableExhibition
  },
  data() { 
    return  {
        exhibitions: [],
        dataLoaded: false,
        fields: []
    }
  },
  methods: {
        // Gets the data from endpoint and stores in an array.
        async fetchExhibitions() {
            await getExhibitions()
            .then(data => {
                this.exhibitions = data;
                this.fields = Object.keys(this.exhibitions[0]);
                this.dataLoaded = true;
            });
        },

        // Update data on table item added.
        updateData() {
            this.fetchExhibitions();
        }
    },
    mounted() {
        this.fetchExhibitions();
    },
}
</script>

<style scoped>
  .exhibitions {
    width: 70%;
    margin-bottom: 50px;
    margin:auto;
  }
</style>