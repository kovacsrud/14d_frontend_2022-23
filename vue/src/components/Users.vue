<script>
export default {
    data(){
        return {
            userek:[],
            darab:1
        }
    },
    created(){
        this.getUsers(this.darab)
    },
    methods:{
        getUsers(db){
            fetch(`https://randomuser.me/api/?results=${db}`)
            .then(res=>res.json())
            .then(adatok=>this.userek=adatok.results)
            .catch(err=>alert(err))
        }
    }
}
</script>


<template>
    <h1>Userek listája</h1>
    <select @change="darab=$event.target.value;getUsers($event.target.value)">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <div v-for="user in userek">
         <p>{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</p>   
         <img v-bind:src="user.picture.large" />
    </div>

</template>