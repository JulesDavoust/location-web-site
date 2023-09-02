<template>
  <div class="cards-container">
    <h1>Témoignages</h1>
    <div class="grid-cards">
      <div class="card-item card1"><img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" alt="Picture 1" class="card-img"/></div>
      <div class="card-item card2"><img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" alt="Picture 1" class="card-img"/></div>
      <div class="card-item card3"><img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" alt="Picture 1" class="card-img"/></div>
      <div class="card-item card4"><img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" alt="Picture 1" class="card-img"/></div>
      <div class="card-item card5"><img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" alt="Picture 1" class="card-img"/></div>
      <div class="card-item card6"><img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" alt="Picture 1" class="card-img"/></div>
    </div>
  </div>
</template>
  
<script>
  export default {
  
  }
</script>
  
<style>

  .cards-container{
    padding: 0 1rem 1rem;
  }

  .grid-cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 100px;
    grid-gap: 0.5em;
  }

  .card-item{
    height: 100%;
    width:100%;
    position: relative;
    overflow: hidden;
  }

  .card-img{
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    .{
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .box2{
      grid-column-start: 4;
      grid-column-end: 8;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .box3{
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .box4{
      grid-column-start: 5;
      grid-column-end: 8;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .box5{
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    .box6{
      grid-column-start: 4;
      grid-column-end: 8;
      grid-row-start: 4;
      grid-row-end: 5;
    }

    .box7{
      grid-column-start: 4;
      grid-column-end: 8;
      grid-row-start: 5;
      grid-row-end: 6;
    }
  }



  @media (min-width: 700px) {
    .card1{
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .card2{
      grid-column-start: 6;
      grid-column-end: 8;
      grid-row-start: 2;
      grid-row-end: 4;
    }

    .card3{
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 5;
    }

    .card4{
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    .card5{
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 6;
      grid-row-end: 8;
    }

    .card6{
      grid-column-start: 5;
      grid-column-end: 7;
      grid-row-start: 7;
      grid-row-end: 9;
    }
  }
</style>