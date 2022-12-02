<template>
    <div class="main-div">
        <input type="text" class="search-input" v-model="search" placeholder="Search..."/>
        <div class="table-div">
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in filterTable()" :key="item">
                        <img :src="item.backdropImageURL"/>
                        <td><h3>{{ item.name }}</h3></td>
                        <td class="description">{{ item.description }}</td>
                    </tr>
                </tbody>
            </table>
            <button v-on:click="showInputs" class="plus-button">+</button>
        </div>
        
        <div class="entry-div" v-if="entryClicked">
            <input type="text" v-model="name" class="table-input" placeholder="Enter name..."/>
            <input type="text" v-model="description" class="table-input" placeholder="Enter description..."/>
            <input type="text" v-model="backdropImageURL" class="table-input" placeholder="Enter backdropImageURL..."/>
            <button v-on:click="addEntry" class="entry-button">Add entry</button>
        </div>
        
    </div>
</template>

<script>
import { postExhibition } from '../services/ExhibitionService'

export default {
    name: 'TableExhibition',
    props: {
        exhibitions: {
            type: Array,
        },
        fields: {
            type: Array,
        },
    },
    data() {
        return {
            search: "",
            entryClicked: false,
            name: "",
            description: "",
            backdropImageURL: ""
        }
    },
    methods: {
        // Filter table.
        filterTable() {
            return this.exhibitions.filter(d => {
                return d.name.toUpperCase().indexOf(this.search.toUpperCase()) != -1;
            })
        },

        showInputs() {
            if (!this.entryClicked)
                this.entryClicked = true;
            else
                this.entryClicked = false;
        },

        // Add entry to database.
        addEntry() {
            postExhibition(this.name, this.description, this.backdropImageURL);
            if (this.exhibitions.id != "undefined")
            {
                this.$emit('updateData');
            }
        },
    }
};
</script>

<style scoped>
    .main-div {
        margin-top: 50px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    table {
        margin-top: 10px;
        width:100%;
        border-spacing: 0 12px;
    }

    table th {
        color: #343737;
        padding: 20px;
        background-color:#aad6c7;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 22px;
    }

    table td, th {
        padding: 8px;
    }

    tr {
        background-color:#e7e7e7;
        border: 1px;
    }

    tr:hover {
        background-color:#f1f1f1;
        border: 1px;
    }

    td {
        color:#343737;
        padding-top: 20px;
        padding-bottom: 20px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 18px;
        text-align: center;
    }

    .search-input {
        width: 50%;
        max-width: 800px;
        padding: 10px;
        border: #565b5c solid 1px;
        margin-bottom: 20px;
        font-size: 16px;
    }
    
    .search-input::placeholder {
        font-size: 16px;
    }

    .plus-button {
        font-size: 40px;
        padding-left: 12px;
        padding-right: 12px;
        float:right;
    }

    .entry-button {
        padding: 10px;
        font-size: 18px;
        font-weight: bold;
    }

    .table-input {
        padding:10px;
        font-size: 18px;
        margin-right: 10px;
        margin-bottom: 20px;
    }

    .entry-div {
        float:left;
        width: 100%;
    }

    .table-div {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        overflow-x:auto;
    }

    img {
        width: 300px;
        max-height: 200px;
        object-fit: cover;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    h3 {
        font-size: 25px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .description {
        max-width: 600px;
    }

</style>
