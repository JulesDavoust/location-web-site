<template>
    <div class="remonter" @click="remonter">
        <div class="arrow-up-remonter1"></div><div class="arrow-up-remonter2"></div>
        <div class="arrow-up-remonter3"></div><div class="arrow-up-remonter4"></div>
    </div>
</template>

<script>
export default {

    methods:{
        remonter(){
            console.log("remonter")
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Cette option permet un défilement en douceur
            });
        }
    }

}
</script>

<style scoped>


@media(min-width: 1025px) and (max-width:1440px){
    .remonter {
        z-index: 20;
        border: 2px solid black;
        background-color: rgb(83, 215, 255);
        border-radius: 50%;
        bottom: 0;
        right: 0;
        margin-bottom: 1%;
        margin-right: 0.5%;
        width: 5%;
        height: 9%;
        position: absolute;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s ease-in-out;
    }

    .remonter:hover {
        transform: scale(1.1);
    }

    .arrow-up-remonter1,
    .arrow-up-remonter2,
    .arrow-up-remonter3,
    .arrow-up-remonter4 {
        content: "";
        background: black;
        height: 0.1em;
        width: 0.7em; /* You can adjust this value as needed */
        position: absolute;
    }

    .arrow-up-remonter1, .arrow-up-remonter3 {
        transform: rotate(135deg);
        
    }

    .arrow-up-remonter1 {
        margin-right: 9%;
        margin-bottom: 20%;
    }

    .arrow-up-remonter2 {
        margin-left: 9%;
        margin-bottom: 20%;
    }

    .arrow-up-remonter2, .arrow-up-remonter4 {
        transform: rotate(-135deg);
        
    }

    .arrow-up-remonter3 {
        margin-right: 11.5%;
        width: 0.8em; /* You can adjust this value as needed */
        margin-top: 10%;
    }

    .arrow-up-remonter4 {
        margin-left: 11.5%;
        width: 0.8em; /* You can adjust this value as needed */
        margin-top: 10%;
    }

}

@media(min-width: 769px) and (max-width: 1024px){

    .remonter {
        z-index: 20;
        border: 2px solid black;
        background-color: rgb(83, 215, 255);
        border-radius: 50%;
        bottom: 0;
        right: 0;
        margin-bottom: 1%;
        margin-right: 0.5%;
        width: 5%;
        height: 9%;
        position: absolute;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s ease-in-out;
    }

    .remonter:hover {
        transform: scale(1.1);
    }

    .arrow-up-remonter1,
    .arrow-up-remonter2,
    .arrow-up-remonter3,
    .arrow-up-remonter4 {
        content: "";
        background: black;
        height: 0.1em;
        width: 0.7em; /* You can adjust this value as needed */
        position: absolute;
    }

    .arrow-up-remonter1, .arrow-up-remonter3 {
        transform: rotate(135deg);
        
    }

    .arrow-up-remonter1 {
        margin-right: 14%;
        margin-bottom: 20%;
    }

    .arrow-up-remonter2 {
        margin-left: 14%;
        margin-bottom: 20%;
    }

    .arrow-up-remonter2, .arrow-up-remonter4 {
        transform: rotate(-135deg);
        
    }

    .arrow-up-remonter3 {
        margin-right: 16%;
        width: 0.8em; /* You can adjust this value as needed */
        margin-top: 10%;
    }

    .arrow-up-remonter4 {
        margin-left: 16%;
        width: 0.8em; /* You can adjust this value as needed */
        margin-top: 10%;
    }
}

</style>