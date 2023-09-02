const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require("axios");

const app = express()
app.use(bodyParser.json())
app.use(cors())


app.post('/sendEmail', (req, res) => {
  console.log(req.body)
  var {location, sexe, nom, prenom, tel, email, age, activite, texteArea, communaute, chambreHDP, chambresP} = req.body 
  console.log(chambreHDP)
  if(location === "La Pyramide" ){
    chambreHDP = []
    var chambres = chambresP
    console.log("p :",chambres)
  }else if(location === "Hotel de Paris"){
    chambresP = []
    var chambres = chambreHDP
    console.log("HDP",chambres)
  }
  console.log(chambreHDP)
  console.log(chambresP)
  console.log(chambres)
  var chambresEnd = []
  var j = 0
  for(var i = 0; i<chambres.length; i++){
    if( chambres[i] == true){
      chambresEnd[j] = i+1
      j = j + 1
    }
  }

  console.log(chambresEnd)

  const transporter = nodemailer.createTransport({
    host:"smtp-mail.outlook.com",
    secureConnection:false,
    port:587,
    tls:{
      cyphers:"SSLv3"
    },
    auth:{
      user:"jules.davoust@outlook.fr",
      pass:"Julescraft75017!"
    }
  })
  
  const mailOptions = {
    from:"jules.davoust@outlook.fr",
    to:"jules.davoust@outlook.fr",
    subject:"Formulaire de location",
    text:`Le formulaire a été rempli !\nCette personne est intéressé par : ${location} et par les chambres ${chambresEnd}\n\nSes informations :\n\nSexe : ${sexe}\nNom : ${nom}\nPrénom : ${prenom}\nTéléphone : ${tel}\nEmail : ${email}\nAge : ${age}\nActivite : ${activite}\nSi autre (s'il n'y a rien ça veut dire qu'il n'a pas précisé) : ${texteArea}\nA-t-il déjà vécu en communauté : ${communaute}`
  }
  
  transporter.sendMail(mailOptions, (error, info) =>{
    if(error){
      console.log(error)
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    }else{
      console.log("Email envoyé ! " + info.response)
      res.send('E-mail envoyé avec succès !');
    }
  })
})

app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  const secret_key = "6LfimNknAAAAAHM27ecLh0d65kAYI7teNW8GzhdZ"
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`
    );

    if (response.data.success) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Erreur lors de la vérification reCAPTCHA :", error);
    res.status(500).json({ success: false });
  }
});



app.get('/', (req, res) =>{
  res.send('Hello from api !')
})

app.listen(3000, () => {
  console.log('Serveur en cours d\'écoute sur le port 3000');
});