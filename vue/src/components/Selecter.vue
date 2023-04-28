<script setup>
import {ref,onMounted, onBeforeMount, onBeforeUnmount} from 'vue';


const darab=ref(1);
const userek=ref([]);

function getUsers(db){
    fetch(`https://randomuser.me/api/?results=${db}`)
            .then(res=>res.json())
            .then(adatok=>userek.value=adatok.results)
            .catch(err=>alert("ERROR"+err))
}

onBeforeMount(async ()=>{
    console.log("BeforeMount")
})

onMounted(async ()=>{
    getUsers(darab.value);
    console.log("Darab"+darab.value);
    console.log("Mount")
}
)





</script>

<template>
    
    <p>Selecter:{{ darab }}</p>
    <p>Userek:{{ userek.length }}</p>
    <select @change="darab=$event.target.value;getUsers($event.target.value)">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>

    <h1>Userek listája</h1>
    <div v-for="user in userek">
         <p>{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</p>   
         <img v-bind:src="user.picture.large" />
    </div>

</template>