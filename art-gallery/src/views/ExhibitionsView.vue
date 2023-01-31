<template v-if="dataLoaded">
  <div class="exhibitions">
    <HeadingComponent title="EXHIBITIONS"/>
    <TableAntDesign :exhibitions="this.exhibitions" v-on:updateData="updateData()"/>
    <br>
    <br>
    <TableExhibition :exhibitions="this.exhibitions" v-on:updateData="updateData()"/>
  </div>
</template>

<script>
import { getExhibitions } from '../services/ExhibitionService'
import TableExhibition from '../components/TableExhibition.vue';
import HeadingComponent from '@/components/HeadingComponent.vue';
import TableAntDesign from '@/components/TableAntDesign.vue';

export default {
  name: 'ExhibitionsView',
  components: {
    TableExhibition,
    HeadingComponent,
    TableAntDesign
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
                this.parseDate();
                this.dataLoaded = true;
            });
        },
        // Update data on table item added.
        updateData() {
            this.fetchExhibitions();
        },
        // Changes the date strings to Date object.
        parseDate() {
          this.exhibitions.forEach(element => {
            var startDate = new Date(Date.parse(element.startDate));
            element.startDate = this.formatDate(startDate);
          });
          this.exhibitions.forEach(element => {
            var endDate = new Date(Date.parse(element.endDate));
            element.endDate = this.formatDate(endDate);
          });
        },
        // Formats Date object.
        formatDate(dateObject) {
          var date = dateObject.getDate();
          var month = dateObject.getMonth();
          var year = dateObject.getFullYear();

          if (date < 10) {
              date = '0' + date;
          }

          if (month < 10) {
              month = '0' + month;
          }
          return dateObject = date + "-" + month + "-" + year;
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

  @media only screen and (max-width: 600px) {
    .exhibitions {
      width: 95%;
    }
  }
</style>