<template>
    <div class="card-div">
        <h1 class="card-heading">{{ heading }}</h1>
        <img :src="imageURL" class="card-img"/>
        <h2 class="card-subheading">{{ subheading }}</h2>
        <h4 class="detail">{{ detail1 }}</h4>
        <h4>{{ detail2 }}</h4>
        <h4>{{ detail3 }}</h4>
        <h4>{{ detail4 }}</h4>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        heading: {
            type: String
        },
        imageURL: {
            type: String
        },
        subheading: {
            type: String
        },
        detail1: {
            type: String
        },
        detail2: {
            type: String
        },
        detail3: {
            type: String
        },
        detail4: {
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
        padding-top: 20px;
    }

    .card-heading {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: 4px;
        color: #343737;
        padding-top: 20px;
        font-weight: bold;
        font-size: 35px;
    }

    .card-subheading {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: 4px;
        color: #343737;
        padding-top: 20px;
        font-size: 35px;
    }

    .detail {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: 3px;
        color: #343737;
        padding-bottom: 20px;
        font-size: 20px;
    }

</style>