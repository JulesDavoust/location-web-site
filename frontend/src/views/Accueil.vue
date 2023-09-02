<template>
  <div class="d-flex justify-content-center align-items-center">
    <div v-if="accueil_reset=='false'" class="container container1">
      <div class="row">
        <div class="col col1">
          <div id="carouselExample" class="carousel slide carousel1" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col col2 d-flex justify-content-center">
          <div class="place">
            <div class="content">
              <h3 class="title">Qui sommes nous ?</h3>
              <p class="text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaa
                aaaaaaa 
                combleraaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaa
                aaaaaaa 
                combleraaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaa
                aaaaaaaa
                combleraaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaa
                aaaaaaaaa
                combleraaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaa
                aaaaaaaa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="accueil_reset=='true'" class="container container2">
      <div class="row">
        <div class="col d-flex justify-content-center align-items-center">
          <div id="carouselExample" class="carousel slide carousel2" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row row2">
        <div class="col col1_2 d-flex justify-content-center align-items-center">
          <div class="place place1">
            <div class="">
              <h3 class="title">Qui sommes nous ?</h3>
              <p class="text">Voici quelques mots aléatoires. J'écris juste ce qui me passe par la tête pour combler le vide de cette,
                tel le vide de ma vie.
                Sauf que dans la vie, lorsque nous avons du vide il n'y a pas de moyens de le combler
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaa
                aaaaaaa 
                combleraaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaa
                aaaaaaaa
                combleraaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaa
                aaaaaaaaa
                combleraaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaa
                aaaaaaaa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accueil_reset: "false",
    };
  },
  methods: {
    toggleMenu(accueil_reset) {
      console.log(accueil_reset)
      this.accueil_reset = !accueil_reset;
      console.log(this.accueil_reset)
    },
    
    checkScreenSize() {
      if (window.innerWidth < 1200) {
        console.log(this.accueil_reset)
        this.accueil_reset = "true"
        localStorage.setItem("accueil_reset", "true")
        this.accueil_reset = localStorage.getItem("accueil_reset")
      }
      else if(window.innerWidth >= 1200){
        console.log("elif ",localStorage.getItem("accueil_reset"))
        this.accueil_reset = "false"
        localStorage.setItem("accueil_reset", "false")
        this.accueil_reset = localStorage.getItem("accueil_reset")
      }
    },

    
  },

  mounted(){
    this.accueil_reset = localStorage.getItem("accueil_reset")
    window.addEventListener('resize', this.checkScreenSize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style>



.row {
  display: flex;
  flex-wrap: wrap;
}

.col2{
  margin-left:30%;
}

.col1_2{
  width:90%;
}

.carousel2{
  width:105%;
}

.carousel1{
  width: 180%;
  box-shadow: 5px 2px 2px rgb(0, 0, 0, 0.5);
}

.container{
  margin-top:5%;
  align-items: center;
}

.place{
  border: 3px solid black;
  background-color:beige;
  box-shadow: 5px 2px 2px rgb(0, 0, 0, 0.5);
  border-radius: 15px;
  height:100%;
  width:85%;
  text-align: center;
}

.row2{
  margin-top:5%;
}

p{
  text-align: justify;
  word-wrap: break-word;
}

.content{
  padding: 4%;
}

.container1{
  margin-top:7%;
}

.container2{
  margin-top:7%;
}

</style>