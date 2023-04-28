<script>
export default {
    props:['altHeader'],
    data(){
        return {
            headerText:"VUE próba",
            szam:112
        }
    },
    created(){
        this.szam=120,
        this.headerText="Vue Js"
    }
}
</script>


<template>
    <h1>{{ headerText }}</h1>
    <h2>{{ altHeader }}</h2>
    <h3>{{ szam }}</h3>
</template>