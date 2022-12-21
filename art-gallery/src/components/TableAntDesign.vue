<template>
    <div class="main-div">
        <div class="table-div">
            <a-table
                class="ant-table"
                :columns="columns"
                :data-source="exhibitions"
                bordered>
            </a-table>
            <button v-on:click="showInputs" class="plus-button" v-if="isAdmin()">+</button>
        </div>

        <div class="entry-div" v-if="entryClicked">
            <input type="text" v-model="name" class="table-input" placeholder="Enter name..."/>
            <input type="text" v-model="description" class="table-input" placeholder="Enter description..."/>
            <input type="text" v-model="backgroundImageURL" class="table-input" placeholder="Enter backgroundImageURL..."/>
            <!-- Added to match the new model - might be better as a special date input? -->
            <input type="text" v-model="startDate" class="table-input" placeholder="Enter start date as DD/MM/YYYY..."/>
            <input type="text" v-model="endDate" class="table-input" placeholder="Enter end date as DD/MM/YYYY..."/>
            <button v-on:click="addEntry" class="entry-button">Add entry</button>
        </div>
    </div>
</template>

<script>
import { postExhibition } from '@/services/ExhibitionService'
import { mapState } from 'vuex'

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
                    responsive: ["sm"],
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: 'Start',
                    align: 'center',
                    sorter: (a, b) => this.dateCompare(a.startDate, b.startDate),
                    filters: [
                        {
                            text: '2022',
                            value: '2022',
                        },
                        {
                            text: '2023',
                            value: '2023',
                        },
                        {
                            text: '2024',
                            value: '2024',
                        },
                    ],
                    filterMultiple: false,
                    onFilter: (a, b) => b.startDate.indexOf(a) == 0,
                    responsive: ["md"],
                    dataIndex: 'startDate',
                    key: 'startDate'
                },
                {
                    title: 'End',
                    align: 'center',
                    sorter: (a, b) => this.dateCompare(a.startDate, b.startDate),
                    filters: [
                        {
                            text: '2022',
                            value: '2022',
                        },
                        {
                            text: '2023',
                            value: '2023',
                        },
                        {
                            text: '2024',
                            value: '2024',
                        },
                    ],
                    filterMultiple: false,
                    onFilter: (a, b) => b.startDate.indexOf(a) == 0,
                    responsive: ["md"],
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
        },

        isAdmin() {
            if (this.account.user) {
                    return this.account.user.role == "Admin";
            }
        },

        // Show the add entry inputs.
        showInputs() {
            if (!this.entryClicked)
                this.entryClicked = true;
            else
                this.entryClicked = false;
        },

        // Add entry to database.
        async addEntry() {
            // Check for authentication credentials - doesn't check if the user is an admin, just that there is a user
            if (!this.account.user)
            {
                console.log('Error: not logged in')
            }
            if (this.account.user)
            {
                await postExhibition(this.name, this.description, this.backgroundImageURL, this.startDate, this.endDate);
            }

            if (this.exhibitions.name != "undefined")
            {
                this.$emit('updateData');
            }
        },
    },
    computed: {
        ...mapState({
            account: state => state.account
        })
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
        color: var(--color--grey-dark);
        padding: 20px;
        font-family: var(--font--base);
    }

    .search-input {
        width: 50%;
        max-width: 800px;
        padding: 10px;
        border: var(--color--charcoal) solid 1px;
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
        fill: var(--color--black);
        max-width: 28px;
        width: calc(24px + 6 * (100vw - 320px) / 1040);
    }

    .plus-button {
        font-size: 25px;
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

    @media only screen and (max-width: 600px) {
        .img-exh {
            padding-top: 1px;
            padding-bottom: 1px;
            padding-left: 1px;
            padding-right: 1px;
            max-height: 120px;
            max-width: 100px;
        }
    }

</style>