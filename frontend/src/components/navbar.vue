<template>
  <div class="navbar">
    <div v-if="showMenu=='true'" class="menu-deroulant">
      <div>
        <div class="dropdown-container" @click="dropdownOn" @mouseenter="dropdownOn" @mouseleave="dropdownOff">
          <button class="btn btn-outline-dark btn-lg" type="button" aria-expanded="true" >
            Menu
          </button>
          <div v-if="dropdownVar" class="dropdownMenuDeroulant">
            <router-link to="/" class=""><button type="button" class="btn btn-outline-dark btn-lg btnMD">Accueil</button></router-link>
            <router-link to="/pyramide" class=""><button type="button" class="btn btn-outline-dark btn-lg btnMD">Location Pyramide</button></router-link>
            <router-link to="/HotelDeParis" class=""><button type="button" class="btn btn-outline-dark btn-lg btnMD">Location Hotel de Paris</button></router-link>
            <router-link to="/temoignages" class=""><button type="button" class="btn btn-outline-dark btn-lg btnMD">Témoignages</button></router-link>
            <router-link to="/localisation-P" class=""><button type="button" class="btn btn-outline-dark btn-lg btnMD">Localisation Pyramide</button></router-link>
            <router-link to="/localisation-HDP" class=""><button type="button" class="btn btn-outline-dark btn-lg btnMD">Localisation<br>Hotel de Paris</button></router-link>
            <router-link to="/contact" class=""><button type="button" class="btn btn-outline-dark btn-lg btnMD">Nous contacter</button></router-link>
          </div>
        </div>
      </div>
      
    </div>
    <div v-if="showMenu=='false'" class="links-container">
      <router-link to="/" class=""><button type="button" class="btn btn-outline-dark btn-lg">Accueil</button></router-link>
      <div>
        <div class="dropdown-container" @click="dropdownOn" @mouseenter="dropdownOn" @mouseleave="dropdownOff">
          <button class="btn btn-outline-dark btn-lg" type="button" aria-expanded="true">
            Locations
          </button>
          <div v-if="dropdownVar" class="dropdownTest">
            <router-link to="/pyramide" class=""><button type="button" class="btn btn-outline-dark btn-lg button1Drop">Location Pyramide</button></router-link>
            <router-link to="/HotelDeParis" class=""><button type="button" class="btn btn-outline-dark btn-lg button2Drop">Location Hotel de Paris</button></router-link>
          </div>
        </div>
      </div>
      
      <router-link to="/temoignages" class=""><button type="button" class="btn btn-outline-dark btn-lg">Témoignages</button></router-link>
      <div>
        <div class="dropdown-container" @click="dropdownOnL" @mouseenter="dropdownOnL" @mouseleave="dropdownOffL">
          <button class="btn btn-outline-dark btn-lg" type="button" aria-expanded="true">
            Localisations
          </button>
          <div v-if="dropdownVarL" class="dropdownTest">
            <router-link to="/localisation-P" class=""><button type="button" class="btn btn-outline-dark btn-lg button1Drop">Localisation Pyramide</button></router-link>
            <router-link to="/localisation-HDP" class=""><button type="button" class="btn btn-outline-dark btn-lg button2Drop">Localisation<br>Hotel de Paris</button></router-link>
          </div>
        </div>
      </div>


      
      
      <router-link to="/contact" class=""><button type="button" class="btn btn-outline-dark btn-lg">Nous contacter</button></router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dropdownVar:false,
      dropdownVarL:false,
      dropdownVartest:false,
      showMenu: "false",
    };
  },
  methods: {
    toggleMenu(showMenu) {
      console.log(showMenu)
      this.showMenu = !showMenu;
      console.log(this.showMenu)
    },
    
    checkScreenSize() {
      if (window.innerWidth <= 940) {
        console.log(this.showMenu)
        this.showMenu = "true"
        localStorage.setItem("showMenu", "true")
        this.showMenu = localStorage.getItem("showMenu")
      }
      else if(window.innerWidth > 940){
        console.log("elif ",localStorage.getItem("showMenu"))
        this.showMenu = "false"
        localStorage.setItem("showMenu", "false")
        this.showMenu = localStorage.getItem("showMenu")
      }
    },
    dropdownOn() {
      this.dropdownVar = true;
    },
    dropdownOff() {
      this.dropdownVar = false;
    },
    dropdownOnL() {
      this.dropdownVarL = true;
    },
    dropdownOffL() {
      this.dropdownVarL = false;
    },
    dropdownTest(){
      this.dropdownVartest = true;
    },
    dropdownOffTest(){
      this.dropdownVartest = false;
    }
    
  },

  mounted(){
    this.checkScreenSize()
    this.showMenu = localStorage.getItem("showMenu")
    window.addEventListener('resize', this.checkScreenSize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style>

.btn-menu-locations{
  width:100%;
}

.btnMD {
  width: 200px;
}

.dropdownMenuDeroulant{
  margin-left:1%;
}

.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdownTest {
  position: absolute;
  top: 100%;
  right: 25%;
}

.button1Drop{
  margin-top:2%;
  width: 150%;
}

.button2Drop{
  width: 150%;
}

.sous{
  list-style: none;
}

.navbar {
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-bottom: 2px solid black;
  border-end-end-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(83, 215, 255);
}

.menu-deroulant {
  position: absolute;
  left: 10px;
  top: 25px; /* Ajustez la valeur selon vos besoins */
  width: 150px; /* Ajustez la largeur selon vos besoins */
  
}

.navbar-deroulante {
  height: 50px;
  padding: 0;
  margin: 0;
  position: absolute;
  
}

.deroulant{
  height: 50px;
  padding: 14px 0;
  display: block;
  border-left: 1px solid #444444;
  border-right: 1px solid #444444;
  border-bottom: 1px solid #444444;
  width: 150px;
  float: left;
  text-align: center;
  list-style: none;
  font: large;
  color:black;
  padding-right:7px;
  margin: 0;
  background-color: cyan;
  border-radius: 5px;
  box-shadow: 5px 2px 2px black;
}


.a{
  padding: 18px 0;
  border-left: 1px solid #ccc9c9;
  text-decoration: none;
  color: white;
  display: block;
}

.navbar-deroulante li:hover, .a:hover{
  background-color: cyan;
}

.navbar-deroulante li ul{
  display: none;
  height: auto;
  margin-top: 5%;
  padding:0;
}

.navbar-deroulante li:hover ul {
  display: block;
}

.navbar-deroulante li ul li {
  background-color: black;
}


.a {
  border-left: 1px solid #444444;
  border-right: 1px solid #444444;
  border-top: 1px solid #c9d4d8;
  border-bottom: 1px solid #444444;
}

.a:hover {
  background-color: #a3a1a1;
}


.links-container {
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: cyan;
  color: black;
  height: 50px;
  font-size: large;
  text-decoration: none;
  border-radius: 5px;
  width: 150px;
  box-shadow: 5px 2px 2px black;
}

.navbar-link:hover {
  color: white;
}


/* Media Query pour les écrans en dessous de 940px */
/* @media screen and (max-width: 940px) {
  .links-container {
    flex-direction: column; /* Affiche les RouterLinks en colonne 
    align-items: flex-start; /* Alignement à gauche en mode responsive 
  } 

  .navbar-link {
    width: 100%; /* Occupe toute la largeur disponible en mode responsive
    margin-bottom: 10px; /* Espacement entre les RouterLinks en mode responsive
  }
} */
</style>