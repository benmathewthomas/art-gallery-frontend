<template>
    <div class="main-div">
        <div class="search-icon">
            <span class="screen-reader-only">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
            </svg>
        </div>
        <input type="text" class="search-input" v-model="search" placeholder="Search..."/>
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

        columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Image',
            dataIndex: 'backgroundImageURL',
            key: 'backgroundImageURl',
            customRender: (data) => {
                return <img src={data.text} />
            } 
          },
        ],
            search: "",
            entryClicked: false,
        }
    },
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
        font-size: 22px;
    }

    .table-cell {
        color:#343737;
        padding-top: 20px;
        padding-bottom: 20px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 8px;
        height:220px;
        border: 1px solid #ffffff;
        position: relative;
    }

    .table-row {
        background-color:#e7e7e7;
    }

    .table-row:hover {
        background-color:#f1f1f1;
        border: 1px;
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

    .img-exh {
        width: 300px;
        max-height: 200px;
        object-fit: cover;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .h3-title {
        font-size: 22px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .description {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
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