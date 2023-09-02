<template >
    <div class="alignitem">
        <div class="contentLocalisation">
            
            <div class=".title-localisation-HDP"><h1>Localisation :</h1></div>
            <div class="title-localisation-HDP1"><h1>Hotel de Paris</h1></div>
            <iframe class="iHDP" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10589.293955050676!2d0.0994511502151861!3d48.43113088443234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e20c8ed351e185%3A0x6704a4fd1fc1885f!2s26%20Rue%20Denis%20Papin%2C%2061000%20Alen%C3%A7on!5e0!3m2!1sfr!2sfr!4v1693067205302!5m2!1sfr!2sfr" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
    </div>
</template>
  
<script>
  export default {
  
  }
</script>
  
<style>


.alignitem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:2%;
}

.contentLocalisation{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 3px 3px 4px black;
    border: 2px solid black;
    width:90%;
}

.iHDP{
  border-radius: 3%;
  box-shadow: 3px 3px 4px black;
  width:90%;
}

@media(max-width: 768px){
  .iHDP{
    border-radius: 10px;
    height:500px;
  }
}

</style>