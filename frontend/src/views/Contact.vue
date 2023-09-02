<template>
    <div class="content-form">
      <h5><b><u>Veuillez renseigner ce formulaire si vous souhaitez nous contacter pour une des colocations :</u></b></h5>
      <form action="?" method="POST" @submit.prevent="envoyerEmail" class="content">
        <div class="location-chambre-form">
          <div class="sexe0">
            <div><h5>Quelle colocation vous intéresse ?</h5> </div>
            <div>
              <label class="form-check-label label-M-sexe" for="flexRadioDefault0">
                Hote de Paris
              </label>
              <input class="form-check-input input-M" value="Hotel de Paris" v-model="location" type="radio" name="flexRadioDefaultLOCATION" id="flexRadioDefault0">
              <label class="form-check-label label-F-sexe" for="flexRadioDefault0.1">
                Pyramide
              </label>
              <input class="form-check-input input-F" value="La Pyramide" v-model="location" type="radio" name="flexRadioDefaultLOCATION" id="flexRadioDefault0.1">
              
            </div>
            
          </div>
          <div class="HDP-location-form" v-if="location === 'Hotel de Paris'">
              <div>Sélectionner les chambres qui vous plaisent :</div>
              <div>
                  <label class="form-check-label label-M-sexe" for="flexCheckDefault0">
                    chambre 1
                  </label>
                  <input class="form-check-input input-M" value="chambre 1" v-model="chambresHDP[0]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault0">
                  <label class="form-check-label label-F-sexe" for="flexCheckDefault1">
                    chambre 2
                  </label>
                  <input class="form-check-input input-F" value="chambre 2" v-model="chambresHDP[1]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault1">
                  <label class="form-check-label label-M-sexe" for="flexCheckDefault2">
                    chambre 3
                  </label>
                  <input class="form-check-input input-M" value="chambre 3" v-model="chambresHDP[2]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault2">
                  <label class="form-check-label label-F-sexe" for="flexCheckDefault3">
                    chambre 4
                  </label>
                  <input class="form-check-input input-F" value="chambre 4" v-model="chambresHDP[3]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault3"><br>
                  <label class="form-check-label label-M-sexe" for="flexCheckDefault4">
                    chambre 5
                  </label>
                  <input class="form-check-input input-M" value="chambre 5" v-model="chambresHDP[4]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault4">
                  <label class="form-check-label label-F-sexe" for="flexCheckDefault5">
                    chambre 6
                  </label>
                  <input class="form-check-input input-F" value="chambre 6" v-model="chambresHDP[5]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault5">
                  <label class="form-check-label label-M-sexe" for="flexCheckDefault6">
                    chambre 7
                  </label>
                  <input class="form-check-input input-M" value="chambre 7" v-model="chambresHDP[6]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault6">
                  <label class="form-check-label label-F-sexe" for="flexCheckDefault7">
                    chambre 8
                  </label>
                  <input class="form-check-input input-F" value="chambre 8" v-model="chambresHDP[7]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault7">
              </div>
          </div>
           
          <div class="HDP-location-form" v-else-if="location === 'La Pyramide'">
            <div>Sélectionner les chambres qui vous plaisent :</div>
              <div>
                  <label class="form-check-label label-M-sexe" for="flexCheckDefault0">
                    chambre 1
                  </label>
                  <input class="form-check-input input-M" value="chambre 1" v-model="chambresP[0]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault0">
                  <label class="form-check-label label-F-sexe" for="flexCheckDefault1">
                    chambre 2
                  </label>
                  <input class="form-check-input input-F" value="chambre 2" v-model="chambresP[1]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault1">
                  <label class="form-check-label label-M-sexe" for="flexCheckDefault2">
                    chambre 3
                  </label>
                  <input class="form-check-input input-M" value="chambre 3" v-model="chambresP[2]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault2">
                  <label class="form-check-label label-F-sexe" for="flexCheckDefault3">
                    chambre 4
                  </label>
                  <input class="form-check-input input-F" value="chambre 4" v-model="chambresP[3]" type="checkbox" name="flexCheckDefaultLOCATION" id="flexCheckDefault3"><br>
                </div>
          </div>
        </div> 
        <div class="sexe">
          <div><h5>Sexe :</h5> </div>
          <div>
            <label class="form-check-label label-M-sexe" for="flexRadioDefault1">
              Monsieur
            </label>
            <input class="form-check-input input-M" value="Monsieur" v-model="sexe" type="radio" name="flexRadioDefaultSEXE" id="flexRadioDefault1">
            <label class="form-check-label label-F-sexe" for="flexRadioDefault2">
              Femme
            </label>
            <input class="form-check-input input-F" value="Femme" v-model="sexe" type="radio" name="flexRadioDefaultSEXE" id="flexRadioDefault2">
            <label class="form-check-label label-A-sexe" for="flexRadioDefault3">
              Autre
            </label>
            <input class="form-check-input input-A" value="Autre" v-model="sexe" type="radio" name="flexRadioDefaultSEXE" id="flexRadioDefault3">
          </div>
        </div>
        <div class="info-perso">
          <input class="form-control sous-ip margin-cont" v-model="nom" type="text" placeholder="Nom" aria-label="default input example">
          <input class="form-control sous-ip margin-cont" v-model="prenom" type="text" placeholder="Prénom" aria-label="default input example">
          <div class="tel-container"><div>📞</div><input class="form-control sous-ip" v-model="tel" type="text" placeholder="Téléphone" aria-label="default input example"></div>
          <div class="tel-container"><div>📧</div><input class="form-control sous-ip" v-model="email" type="text" placeholder="Adresse e-mail" aria-label="default input example"></div>
        </div>
        <div class="age">
          <div><h5>Tranche d'âge :</h5></div>
          <div>
            <label class="form-check-label label-age" for="flexRadioDefault4">
              18 - 25 ans
            </label>
            <input class="form-check-input input-age" value="18-25ans" v-model="age" type="radio" name="flexRadioDefaultAGE" id="flexRadioDefault4">
            <label class="form-check-label label-age" for="flexRadioDefault5">
              26 - 35 ans
            </label>
            <input class="form-check-input input-age" value="26-35ans" v-model="age" type="radio" name="flexRadioDefaultAGE" id="flexRadioDefault5">
            <label class="form-check-label label-age" for="flexRadioDefault6">
              36 - 45 ans
            </label>
            <input class="form-check-input input-age" value="36-45ans" v-model="age" type="radio" name="flexRadioDefaultAGE" id="flexRadioDefault6">
            <label class="form-check-label label-age" for="flexRadioDefault7">
              +45 ans
            </label>
            <input class="form-check-input input-age" value="+45ans" v-model="age" type="radio" name="flexRadioDefaultAGE" id="flexRadioDefault7">
          </div>
        </div>
        <div class="activite">
          <div><h5>Activité :</h5></div>
          <div>
            <label class="form-check-label label-js" for="flexRadioDefault8">
              Etudiant
            </label>
            <input class="form-check-input input-js" value="étudiant" v-model="activite" type="radio" name="flexRadioDefaultJS" id="flexRadioDefault8">
            <label class="form-check-label label-js" for="flexRadioDefault9">
              travailleur CDI/CDD
            </label>
            <input class="form-check-input input-js" value="travailleur CDI/CDD" v-model="activite" type="radio" name="flexRadioDefaultJS" id="flexRadioDefault9">
            <label class="form-check-label label-js" for="flexRadioDefault10">
              En recherche d'emploi
            </label>
            <input class="form-check-input input-js" value="En recherche d'emploi" v-model="activite" type="radio" name="flexRadioDefaultJS" id="flexRadioDefault10" >
            <label class="form-check-label label-js" for="flexRadioDefault11">
              Autre
            </label>
            <input class="form-check-input input-js" value="Autre" v-model="activite" type="radio" name="flexRadioDefaultJS" id="flexRadioDefault11" >
          </div>
          <br>
          <div>
            <label for="exampleFormControlTextarea1" class="form-label"><h6>Si autre, précisez :</h6></label>
            <textarea class="form-control area-js" v-model="areatexte" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
        <div class="communaute">
          <div><h5>Avez-vous déjà vécu en communauté ?</h5></div>
          <div>
            <label class="form-check-label label-c" for="flexRadioDefault12">
              Oui
            </label>
            <input class="form-check-input input-c" value="Oui" v-model="communaute" type="radio" name="flexRadioDefaultC" id="flexRadioDefault12">
            <label class="form-check-label label-c" for="flexRadioDefault13">
              Non
            </label>
            <input class="form-check-input input-c" value="Non" v-model="communaute" type="radio" name="flexRadioDefaultC" id="flexRadioDefault13" >
          </div>
        </div>
        <div>
          <div class="g-recaptcha" data-sitekey="6LfimNknAAAAAPUXqRrnF3YDoB2KqpZVSESSIcfE"></div>
          <br />
      </div>
        <button class="btn btn-lg primary" type="submit">Envoyer</button>
      </form>
      
    </div>
   
</template>
  
<script>

  export default {

    data(){
      return{
        location:'',
        sexe:'',
        nom:'',
        prenom:'',
        tel:'',
        email:'',
        age:'',
        activite:'',
        areatexte:'',
        communaute:'',
        chambresHDP:[],
        chambresP:[],
        chambre1HDP:'',
        chambre2HDP:'',
        chambre3HDP:'',
        chambre4HDP:'',
        chambre5HDP:'',
        chambre6HDP:'',
        chambre7HDP:'',
        chambre8HDP:'',
        chambre1P:'',
        chambre2P:'',
        chambre3P:'',
        chambre4P:'',
        yourSiteKey: "6LfimNknAAAAAPUXqRrnF3YDoB2KqpZVSESSIcfE",

      }
    },
    methods:{
      async verifyRecaptcha() {
        const token = grecaptcha.getResponse();
        const response = await fetch("http://localhost:3000/verify-recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        return response.json();
      },
      async envoyerEmail() {
        const response = await this.verifyRecaptcha();
        if (response.success) {
          const data = {
            location : this.location,
            sexe : this.sexe,
            nom : this.nom,
            prenom : this.prenom,
            tel : this.tel,
            email : this.email,
            age : this.age,
            activite : this.activite,
            areatexte : this.areatexte,
            communaute : this.communaute,
            chambreHDP : this.chambresHDP,
            chambresP : this.chambresP
          };
          try {
            console.log(data)
            const response = await fetch('http://localhost:3000/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

            if (response.ok) {
              console.log('E-mail envoyé avec succès !');
              alert("Merci d'avoir rempli le formulaire, nous vous recontacterons le plus vite possible !")
              this.$router.push('/');
            } else {
              console.error('Erreur lors de l\'envoi de l\'e-mail.');
            }
          } catch (error) {
            console.error(error);
          }
        }else{
          console.error("reCAPTCHA non vérifié !");
        }
        
      }
    },
    mounted() {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },
  }
</script>
  
<style>
  .content-form{
    box-shadow: 0px 0px 5px 2px black;
    border-radius: 25px;
    padding: 2%;
    margin: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(83, 215, 255);
  }

  .content{
    margin-top:-3%;
    justify-content: center;
    align-items: center;
  }

  .HDP-location-form{
    animation: slideME .4s ease-in;
    border: 1px solid black;
    border-radius: 10px;
    margin-top:2%;
    margin-left:1%;
    width:98%;
    padding: 1%;
    background-color: white;
  }

  @keyframes slideME{
    
    0%{
      transform: translateX(-40px);
    }
  }

  .sexe0{
    z-index: 2;
    border: 1px solid black;
    border-radius: 10px;
    width:100%;
    padding: 1%;
    transition: 0.5s ease-in-out;
    background-color: white;
  }

  .sexe0:hover{
    transform: scale(1.1);
    box-shadow: 2px 4px 4px black;
  }

  .sexe{
    border: 1px solid black;
    border-radius: 10px;
    margin-top:3%;
    width:100%;
    padding: 1%;
    transition: 0.5s ease-in-out;
    background-color: white;
  }

  .sexe:hover{
    transform: scale(1.1);
    box-shadow: 2px 4px 4px black;
  }

  .label-M-sexe{
    margin-right: 1%;
  }
  .input-M{
    margin-right: 3%;
  }

  .label-F-sexe{
    margin-right: 1%;
  }
  .input-F{
    margin-right: 3%;
  }

  .label-A-sexe{
    margin-right: 1%;
  }



  .info-perso{
    border: 1px solid black;
    margin-top:3%;
    border-radius: 10px;
    width:100%;
    padding: 1%;
    transition: 0.5s ease-in-out;
    background-color: white;
  }

  .info-perso:hover{
    transform: scale(1.1);
    box-shadow: 2px 4px 4px black;
  }

  .sous-ip{
    margin-bottom: 1%;
    width:250px;
  }

  .tel-container{
    display: flex;
    align-items: center;
  }

  .margin-cont{
    margin-left:5%;
  }

  .age{
    border: 1px solid black;
    margin-top:3%;
    width:100%;
    border-radius: 10px;
    padding: 1%;
    transition: 0.5s ease-in-out;
    background-color: white;
  }

  .age:hover{
    transform: scale(1.1);
    box-shadow: 2px 4px 4px black;
  }

  .label-age{
    margin-right: 1%;
  }

  .input-age{
    margin-right: 3%;
  }

  .activite{
    margin-top:3%;
    border: 1px solid black;
    border-radius: 10px;
    width:100%;
    padding: 1%;
    transition: 0.5s ease-in-out;
    background-color: white;
  }

  .activite:hover{
    transform: scale(1.1);
    box-shadow: 2px 4px 4px black;
  }

  .label-js{
    margin-right: 1%;
  }

  .input-js{
    margin-right: 2%;
  }

  .area-js{
    width: 100%;
  }

  .communaute{
    margin-top:3%;
    border: 1px solid black;
    border-radius: 10px;
    width:100%;
    padding: 1%;
    transition: 0.5s ease-in-out;
    margin-bottom: 3%;
    background-color: white;
  }

  .communaute:hover{
    transform: scale(1.1);
    box-shadow: 2px 4px 4px black;
  }

  .label-c{
    margin-right: 1%;
  }

  .input-c{
    margin-right: 3%;
  }

@media(max-width: 425px){
  .sexe0:hover{
    transform: scale(1.05);
    box-shadow: 2px 4px 4px black;
  }
  .sexe:hover{
    transform: scale(1.05);
    box-shadow: 2px 4px 4px black;
  }

  .info-perso:hover{
    transform: scale(1.05);
    box-shadow: 2px 4px 4px black;
  }

  .age:hover{
    transform: scale(1.05);
    box-shadow: 2px 4px 4px black;
  }
  .activite:hover{
    transform: scale(1.05);
    box-shadow: 2px 4px 4px black;
  }

  .communaute:hover{
    transform: scale(1.05);
    box-shadow: 2px 4px 4px black;
  }

}

</style>