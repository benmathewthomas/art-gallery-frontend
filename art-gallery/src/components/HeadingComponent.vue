<template>
    <h1>{{ title }}</h1>
</template>

<script>
    export default {
        name: "HeaderComponent",
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin-top: 50px;
        text-align: center;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 40px;
        color: #343737;
        letter-spacing: 5px;
    }
</style>