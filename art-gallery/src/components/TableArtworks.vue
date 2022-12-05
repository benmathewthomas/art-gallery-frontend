<template>
    <div class="main-div">
        <input type="text" class="search-input" v-on:keyup="filterTable()" placeholder="Search..."/>
        <div class="table-div">
            <table class="table-style" id="table1" cellpadding="8px" border="1">
                <thead>
                    <tr>
                        <th> </th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>ARTISTS</th>
                        <th>MEDIA</th>
                        <th>YEAR</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
    import { getArtworks } from '../services/ArtworkService'

    export default {
    name: "TableHtml",
    methods: {
        // Gets the data from endpoint and stores in an array.
        async fetchArtworks() {
            await getArtworks()
                .then(data => {
                this.artworks = data;
            });
          this.fillTableWithData();
        },

        fillTableWithData() {
            const table = document.getElementById("table1");

            this.artworks.forEach((item) => {
                var row = table.insertRow(-1);

                var cell = row.insertCell(-1);
                cell.innerHTML = "<img src=" + item.primaryImageURL + " width=200px/>";
                cell.style = "text-align: center; width: 200px; padding: 15px;"

                cell = row.insertCell(-1);
                cell.innerHTML = item.title;

                cell = row.insertCell(-1);
                cell.innerHTML = item.description;

                cell = row.insertCell(-1);
                cell.innerHTML = item.contributingArtists;

                cell = row.insertCell(-1);
                cell.innerHTML = item.media;

                cell = row.insertCell(-1);
                cell.innerHTML = item.yearCreated;
            });
            table.classList.add("table-data");  
            this.tableHover();
        },

        // Handles hover effect on table.
        tableHover() {
            var table = document.getElementById("table1");
            var rows = table.getElementsByTagName("tr");

            for (var i = 1; i < rows.length; i++) {
                var currentRow = table.rows[i];

                var highlightRow = function(row) {
                    return function() {
                        row.style = "background-color:#f1f1f1";
                        
                    };
                };
                var removeHighlight = function(row) {
                    return function() {
                        row.style = "background-color:#e7e7e7";
                    }
                }
                currentRow.onmouseover = highlightRow(currentRow);
                currentRow.onmouseleave = removeHighlight(currentRow);
            }
        },

        // Filter table entries.
        filterTable() {
            var tr, td, input, filter, index, textValue, table;
            table = document.getElementById("table1");
            tr = table.getElementsByTagName("tr");
            input = document.querySelector(".search-input");
            filter = input.value.toUpperCase();
            
            for (index = 0; index < tr.length; index++) {
                td = tr[index].getElementsByTagName("td")[1];
                if (td) {
                    textValue = td.innerText;
                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        tr[index].style.display = "";
                    }
                    else {
                        tr[index].style.display = "none";
                    }
                }
            }
        }
    },
    mounted() {
        this.fetchArtworks();
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

    .table-div {
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        overflow-x:auto;
    }

    table {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        border-collapse: collapse;
    }

    th {
        color:#343737;
        background-color: #aad6c7;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .table-data {
        color:#343737;
        padding-top: 20px;
        padding-bottom: 20px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 18px;
        background-color:#e7e7e7;
        border: 1px solid #ffffff;
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

</style>
