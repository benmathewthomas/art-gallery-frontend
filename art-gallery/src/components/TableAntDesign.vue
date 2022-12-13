<template>
    <div class="main-div">
        <div class="table-div">
            <a-table 
                class="ant-table"
                :columns="columns" 
                :data-source="exhibitions" 
                bordered>
            </a-table>
        </div>
    </div>
</template>

<script>
export default {
    
    name: "TableAntDesign",
    props: {
        exhibitions: {
            type : Array
        },
        fields: {
            type: Array
        }
    },
    data() {
        return {
            search: "",
            entryClicked: false,
            columns: [
                {
                    title: 'Image',
                    align: 'center',
                    dataIndex: 'backgroundImageURL',
                    key: 'backgroundImageURl',
                    customRender: (data) => {
                        return <img src={data.text} 
                        style="max-height:200px; width:300px; object-fit:cover"/>
                    } 
                },
                {
                    title: 'Name',
                    align: 'center',
                    sorter: (a, b) => a.name.localeCompare(b.name),
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Description',
                    align: 'center',
                    sorter: (a, b) => a.description.localeCompare(b.description),
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: 'Start',
                    align: 'center',
                    sorter: (a, b) => this.dateCompare(a.startDate, b.startDate),
                    dataIndex: 'startDate',
                    key: 'startDate'
                },
                {
                    title: 'End',
                    align: 'center',
                    sorter: (a, b) => this.dateCompare(a.startDate, b.startDate),
                    dataIndex: 'endDate',
                    key: 'endDate'
                }
            ]
        }
    },
    methods: {  
        // Compares two dates returning int indicating larger, smaller or equal.
        dateCompare(date1, date2) {
            if (date1 > date2) {
                return 1;
            }
            else if (date1 < date2) {
                return -1;
            }
            else {
                return 0;
            }
        }
    }
}
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
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        overflow-x:auto;
    }

    .ant-table {
        color: #343737;
        padding: 20px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .search-input {
        width: 50%;
        max-width: 800px;
        padding: 10px;
        border: #565b5c solid 1px;
        margin-bottom: 20px;
        font-size: 16px;
        vertical-align: top;
    }

    .search-input::placeholder {
        font-size: 16px;
    }

    .search-icon {
        margin-right: 15px;
        display: inline;
        vertical-align: top;
    }

    .search-icon svg {
        padding-top: 5px;
        fill: black;
        max-width: 28px;
        width: calc(24px + 6 * (100vw - 320px) / 1040);
    }

    @media only screen and (max-width: 600px) {
        .img-exh {
            padding-top: 1px;
            padding-bottom: 1px;
            padding-left: 1px;
            padding-right: 1px;
        }
    }

</style>