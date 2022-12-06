<template>
    <div class="card-div">
        <img :src="require(`../assets/img/${image}`)" class="card-img"/>
        <h2>{{ this.artistName }}</h2>
        <h3>{{ this.artworkTitle }}</h3>
        <p>{{ this.description }}</p>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        image: {
            type: String
        },
        artistName: {
            type: String
        },
        artworkTitle: {
            type: String
        },
        description: {
            type: String
        }
    }
}
</script>

<style scoped>
    .card-div {
        width: 70%;
        max-width: 900px;
        margin: auto;
        text-align: center;
        border: 1px solid rgb(133, 132, 132);
        border-radius: 10px;
        box-shadow: 10px 10px 10px rgb(190, 189, 189);
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 20px;
    }

    .card-img {
        width:90%;
        padding-top: 40px;
    }

</style>