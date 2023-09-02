<template>
  <div>
    <div v-if="showMenuRoom=='true'" class="MenuRoom">
      <div>
        <div class="dropdown-container" @click="dropdownOn" @mouseenter="dropdownOn" @mouseleave="dropdownOff">
          <button class="btn btn-outline-dark btn-lg" type="button" aria-expanded="true" >
            Menu des chambres
          </button>
          <div v-if="dropdownRoomVar" class="dropdownMenuRoomDeroulant">
            <div class="d-flex justify-content-center" >
              <button class="btn btn-lg btnRMD" :class="{ 'active': activeButton === 0, 'init': init === 'true' }" @click="onClick0(0)">Les pièces</button>
            </div>
            <div class="d-flex justify-content-center ">
              <button class="btn btn-lg btnRMD" :class="{ 'active': activeButton === 1 }" @click="onClick1(1)">Chambre 1</button>
            </div>
            <div class="d-flex justify-content-center ">
              <button class="btn btn-lg btnRMD" :class="{ 'active': activeButton === 2 }" @click="onClick2(2)">Chambre 2</button>
            </div>
            <div class="d-flex justify-content-center ">
              <button class="btn btn-lg btnRMD" :class="{ 'active': activeButton === 3 }" @click="onClick3(3)">Chambre 3</button>
            </div>
            <div class="d-flex justify-content-center ">
              <button class="btn btn-lg btnRMD" :class="{ 'active': activeButton === 4 }" @click="onClick4(4)">Chambre 4</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showMenuRoom=='false'">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-3 d-flex justify-content-center" >
            <button class="btn btn-lg pc" :class="{ 'active': activeButton === 0, 'init': init === 'true' }" @click="onClick0(0)">Les pièces</button>
          </div>
          <div class="col-3 borderR1-1 d-flex justify-content-center">
            <button class="btn btn-lg room1" :class="{ 'active': activeButton === 1 }" @click="onClick1(1)">Chambre 1</button>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <button class="btn btn-lg room2" :class="{ 'active': activeButton === 2 }" @click="onClick2(2)">Chambre 2</button>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <button class="btn btn-lg room3" :class="{ 'active': activeButton === 3 }" @click="onClick3(3)">Chambre 3</button>
          </div>
          <div class="col-3 d-flex justify-content-center">
            
          </div>
          <div class="col-3 borderR1-1 d-flex justify-content-center">
            <button class="btn btn-lg room4" :class="{ 'active': activeButton === 4 }" @click="onClick4(4)"> Chambre 4</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="pc=='true'" class="info-beadroom">
        <div class="titl-pc"><h1>Les pièces</h1></div>
        <div class="pc-page">
          <section class="pictures-pc-1 ">
              <div class="pc-item box1pc d-flex justify-content-center">
                <img :src="picture_pc[0].src" alt="Picture 1" class="pc-img" @click="getImageLink(picture_room1[0])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="pc-item box1-1pc d-flex justify-content-center align-items-center">
                <div>
                  <h1 class="d-flex justify-content-center align-items-center">La cuisine</h1>
                  <p>Les régles : voici des régles fictives, il faudra se mettre d'accord de comment on les écrit, ce qu'on écrit etc... Car je ne peux pas inventer des régles. Il y a la tête de girafe, pour la griafe, la tête de vache pour la vache etc...</p>
                </div>
              </div>
              <div class="pc-item box2pc d-flex justify-content-center align-items-center">
                <img :src="picture_pc[1].src" alt="Picture 1" class="pc-img" @click="getImageLink(picture_room1[1])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="pc-item box1-1pc d-flex justify-content-center align-items-center">
                <h1>Le salon</h1>
              </div>
              <div class="pc-item box3pc d-flex justify-content-center align-items-center">
                  <img :src="picture_pc[2].src" alt="Picture 1" class="pc-img" @click="getImageLink(picture_room1[2])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="pc-item box1-1pc d-flex justify-content-center align-items-center">
                <h1>Salle de bain 1</h1>
              </div>
              <div class="pc-item box4pc d-flex justify-content-center align-items-center">
                  <img :src="picture_pc[3].src" alt="Picture 1" class="pc-img" @click="getImageLink(picture_room1[3])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="pc-item box1-1pc d-flex justify-content-center align-items-center">
                <h1>Salle de bain 2</h1>
              </div>
              <div class="pc-item box5pc d-flex justify-content-center align-items-center">
                  <img :src="picture_pc[4].src" alt="Picture 1" class="pc-img" @click="getImageLink(picture_room1[4])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="pc-item box1-1pc d-flex justify-content-center align-items-center">
                <h1>Toilette</h1>
              </div>
          </section>
        </div>
        <div class="description">description pc</div>
    </div>
    <div v-if="chambre1=='true'" class="info-beadroom">
      <router-link to="/contact" class=""><button type="button" class="btn btn-outline-dark btn-lg">Nous contacter pour louer</button></router-link>
        <div class="tarif">tarif : 100 euros/nuit</div>
        <div class="gallery-page">
          <h1>Photos de la chambre</h1>
          <section class="pictures-gallery-1 gallery-span gallery">
              <div class="gallery-item box1">
                  <img :src="picture_room1[0].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room1[0])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box2">
                  <img :src="picture_room1[1].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room1[1])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box3">
                  <img :src="picture_room1[2].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room1[2])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box4">
                  <img :src="picture_room1[3].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room1[3])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box5">
                  <img :src="picture_room1[4].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room1[4])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box6">
                  <img :src="picture_room1[5].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room1[5])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box7">
                  <img :src="picture_room1[6].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room1[6])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
          </section>
        </div>
        <div class="description">description1</div>
    </div>
    <div v-if="chambre2=='true'" class="info-beadroom">
      <router-link to="/contact" class=""><button type="button" class="btn btn-outline-dark btn-lg">Nous contacter pour louer</button></router-link>
        <div class="tarif">tarif : 200 euros/nuit</div>
        <div class="gallery-page">
          <h1>Photos de la chambre</h1>
          <section class="pictures-gallery-1 gallery-span gallery">
              <div class="gallery-item box1">
                  <img :src="picture_room4[0].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room2[0])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box2">
                  <img :src="picture_room2[1].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room2[1])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box3">
                  <img :src="picture_room2[2].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room2[2])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box4">
                  <img :src="picture_room2[3].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room2[3])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box5">
                  <img :src="picture_room2[4].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room2[4])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box6">
                  <img :src="picture_room2[5].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room2[5])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box7">
                  <img :src="picture_room2[6].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room2[6])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
          </section>
        </div>
        <div class="description">description2</div>
    </div>
    <div v-if="chambre3=='true'" class="info-beadroom">
      <router-link to="/contact" class=""><button type="button" class="btn btn-outline-dark btn-lg">Nous contacter pour louer</button></router-link>
        <div class="tarif">tarif : 300 euros/nuit</div>
        <div class="gallery-page">
          <h1>Photos de la chambre</h1>
          <section class="pictures-gallery-1 gallery-span gallery">
              <div class="gallery-item box1">
                  <img :src="picture_room3[0].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room3[0])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box2">
                  <img :src="picture_room3[1].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room3[1])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box3">
                  <img :src="picture_room3[2].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room3[2])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box4">
                  <img :src="picture_room3[3].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room3[3])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box5">
                  <img :src="picture_room3[4].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room3[4])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box6">
                
                  <img :src="picture_room3[5].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room3[5])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box7">
                  <img :src="picture_room3[6].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room3[6])" data-bs-toggle="modal" data-bs-target="#0"/>
              </div>
          </section>
        </div>
        <div class="description">description3</div>
    </div>
    <div v-if="chambre4=='true'" class="info-beadroom">
      <router-link to="/contact" class=""><button type="button" class="btn btn-outline-dark btn-lg">Nous contacter pour louer</button></router-link>
        <div class="tarif">tarif : 400 euros/nuit</div>
        <div class="gallery-page">
          <h1>Photos de la chambre</h1>
          <section class="pictures-gallery-1 gallery-span gallery">
              <div class="gallery-item box1">
                  <img :src="picture_room4[0].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room4[0])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box2">
                  <img :src="picture_room4[1].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room4[1])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box3">
                  <img :src="picture_room4[2].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room4[2])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box4">
                  <img :src="picture_room4[3].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room4[3])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box5">
                  <img :src="picture_room4[4].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room4[4])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box6">
                  <img :src="picture_room4[5].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room4[5])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
              <div class="gallery-item box7">
                  <img :src="picture_room4[6].src" alt="Picture 1" class="gallery-img" @click="getImageLink(picture_room4[6])" data-bs-toggle="modal" data-bs-target="#0"/>
                
              </div>
          </section>
        </div>
        <div class="description">description4</div>
    </div>
    <div class="modal fade" id="0" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{{ this.image + 1 }} / 7</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
              <div class="arrow-left" @click="previous"></div>
              <img :src="picture_room4[this.image].src" alt="Picture 1" class="picture-modal"/>
              <div class="arrow-right" @click="next"></div>
            </div>
          </div>
        </div>
    </div>
    
  </div>
</template>


<script>

export default {
  data(){
    return{
      init:'true',
      pc:'true',
      chambre1:'false',
      chambre2:'false',
      chambre3:'false',
      chambre4:'false',
      dropdownRoomVar:false,
      modal:'false',
      showMenuRoom:'false',
      activeButton: null,
      image: 0,
      picture_room4: [{num:0, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:1, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:2, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:3, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:4, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:5, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:6, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"}],
      picture_room3: [{num:0, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:1, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:2, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:3, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:4, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:5, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:6, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"}],
      picture_room2: [{num:0, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:1, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:2, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:3, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:4, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:5, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:6, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"}],
      picture_room1: [{num:0, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:1, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:2, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:3, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:4, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:5, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:6, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"}],
      picture_pc: [{num:0, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:1, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:2, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:3, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:4, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:5, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"},{num:6, src:"https://f005.backblazeb2.com/file/bucket-HDP/Coast_Little_girls_Clouds_532086_1366x768.jpg"}]
    }
  },
  methods:{
    onClick0(buttonIndex){
      this.activeButton = buttonIndex;
      console.log("click ? ", this.pc)
      this.init = 'false'
      this.chambre2='false'
      this.chambre3='false'
      this.chambre4='false'
      this.chambre1='false'
      this.pc='true'
      console.log("click ? ", this.pc)
    },
    onClick1(buttonIndex){
      this.activeButton = buttonIndex;
      console.log("click ? ", this.chambre1)
      this.init = 'false'
      this.chambre2='false'
      this.chambre3='false'
      this.chambre4='false'
      this.chambre1='true'
      this.pc='false'
      console.log("click ? ", this.chambre1)
    },
    onClick2(buttonIndex){
      this.activeButton = buttonIndex;
      console.log("click ? ", this.chambre2)
      this.init = 'false'
      this.chambre3='false'
      this.chambre4='false'
      this.chambre1='false'
      this.chambre2='true'
      this.pc='false'
      console.log("click ? ", this.chambre2)
    },
    onClick3(buttonIndex){
      this.activeButton = buttonIndex;
      console.log("click ? ", this.chambre3)
      this.init = 'false'
      this.chambre4='false'
      this.chambre1='false'
      this.chambre2='false'
      this.chambre3='true'
      this.pc='false'
      console.log("click ? ", this.chambre3)
    },
    onClick4(buttonIndex){
      this.activeButton = buttonIndex;
      console.log("click ? ", this.chambre4)
      this.init = 'false'
      this.chambre1='false'
      this.chambre2='false'
      this.chambre3='false'
      this.chambre4='true'
      this.pc='false'
      console.log("click ? ", this.chambre4)
    },
    getImageLink(dicoPic) {
      this.image = dicoPic.num
      console.log('Lien de l\'image :', dicoPic.src)
    },
    previous(){
      if(this.image > 0){
        this.image = this.image-1
      }
      console.log(this.image)
    },
    next(){
      if(this.image < 6){
        this.image = this.image+1
      }
      console.log(this.image)
    },
    checkScreenSize() {
      if (window.innerWidth <= 500) {
        console.log(this.showMenuRoom)
        this.showMenuRoom = "true"
        localStorage.setItem("showMenuRoom", "true")
        this.showMenuRoom = localStorage.getItem("showMenuRoom")
      }
      else if(window.innerWidth > 500){
        console.log("elif ",localStorage.getItem("showMenuRoom"))
        this.showMenuRoom = "false"
        localStorage.setItem("showMenuRoom", "false")
        this.showMenuRoom = localStorage.getItem("showMenuRoom")
      }
    },
    dropdownOn(){
      this.dropdownRoomVar = true;
    },
    dropdownOff(){
      this.dropdownRoomVar = false;
    }
  },
  mounted(){
    this.showMenuRoom = localStorage.getItem("showMenuRoom")
    window.addEventListener('resize', this.checkScreenSize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
}
</script>

<style>

.dropdownMenuRoomDeroulant{
  position:absolute;
  width:100%;
  z-index: 100;
}

.borderR1-1{
  border-left: 3px solid black;
  padding-top: 2px;
}

.btnRMD{
  width:70%;
}

.room4{
  margin-top:8%;
}

.MenuRoom{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top:5%;
}

.arrow-right{
  position: absolute;
  width: 3%;
  height: 6%;
  right:2%;
  background-color: white;
  clip-path: polygon(0 0, 0 100%, 100% 50%);
}

.arrow-left{
  position: absolute;
  width: 3%;
  height: 6%;
  left:2%;
  background-color: white;
  clip-path: polygon(100% 100%, 100% 0, 0 50%);
}

.modal-body{
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  object-fit: cover;
}

.picture-modal{
  width: 100%;
}

@media (max-width: 768px) {

.arrow-right{
  position: absolute;
  width: 3%;
  height: 6%;
  right:4%;
  background-color: white;
  clip-path: polygon(0 0, 0 100%, 100% 50%);
}

.arrow-left{
  position: absolute;
  width: 3%;
  height: 6%;
  left:4%;
  background-color: white;
  clip-path: polygon(100% 100%, 100% 0, 0 50%);
}

}

@media (max-width: 430px) {

  .picture-modal{
    width: 100%;
    transform : rotate(90deg);
  }

  .arrow-right{
    z-index:9998;
    position: absolute;
    width: 3%;
    height: 6%;
    bottom:8%;
    right:50%;
    background-color: white;
    clip-path: polygon(0 0, 0 100%, 100% 50%);
    transform : rotate(90deg);
  }

  .arrow-left{
    z-index:9998;
    position: absolute;
    width: 3%;
    height: 6%;
    top:8%;
    left:50%;
    background-color: white;
    clip-path: polygon(100% 100%, 100% 0, 0 50%);
    transform : rotate(90deg);
  }

}

.modal{
  z-index: 9999;
}

.container{
  margin-top:4%;
}

.btn{
  background:rgb(187, 255, 254);
}

.btn:hover{
  border: 2px solid black;
  background:rgb(187, 255, 254);
  box-shadow: 3px 3px 4px black;
}

.active {
  box-shadow: 3px 3px 4px black;
}

.init{
  background:white;
  border: 2px solid black;
  box-shadow: 3px 3px 4px black;
}

.info-beadroom{
  margin-top:10%;
  border:2px solid blue;
}

.tarif{
  border:2px solid red;
}

.pictures{
  border:2px solid yellow;
}

.description{
  border:2px solid black;
}

/* Grid pc page */

.pc-page{
  padding: 0 1rem 1rem;
}



.pc-item{
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.pc-img{
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
}

.pc-img:hover{
  transform: scale(1.5);
}

@media (min-width: 700px) {

  .pictures-pc-1{
    display: grid;
    grid-template-columns: 700px 1fr;
    grid-template-rows: 400px 400px 400px 400px 400px;
    grid-gap: 0.5em;
  }

  .box1pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .box2pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .box3pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .box4pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .box5pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
  }

}

@media (max-width: 982px) {

  .pictures-pc-1{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 400px 100px 400px 100px 400px 100px 400px 100px 400px;
    grid-gap: 0.5em;
  }

  .box1pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .box2pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .box3pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 7;
  }

  .box4pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 8;
    grid-row-end: 9;
  }

  .box5pc{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 10;
    grid-row-end: 11;
  }

}

/* Grid gallery style */

.gallery-page{
  padding: 0 1rem 1rem;
}

.pictures-gallery-1{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px 200px;
  grid-gap: 0.5em;
}

.gallery-item{
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.gallery-item img{
  width: 100%;
}

.gallery-img{
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
}

.gallery-img:hover{
  transform: scale(1.5);
}

@media (max-width: 700px) {
  .box1{
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
  .box1{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  .box2{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 6;
  }

  .box3{
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .box4{
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .box5{
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .box6{
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  .box7{
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 4;
    grid-row-end: 6;
  }
}

</style>