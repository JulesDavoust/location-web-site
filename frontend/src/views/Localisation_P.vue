<template >
    <div class="alignitem">
        <div class="contentLocalisation">
            
            <div class=".title-localisation-HDP"><h1>Localisation :</h1></div>
            <div class="title-localisation-HDP1"><h1>Pyramide</h1></div>
            <iframe class="iHDP" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.1807480385683!2d0.08904665573617854!3d48.43387065666421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e20c8609abbd4f%3A0x513db154b01b19d9!2s12%20Pl.%20du%20G%C3%A9n%C3%A9ral%20Charles%20de%20Gaulle%2C%2061000%20Alen%C3%A7on!5e0!3m2!1sfr!2sfr!4v1693160165389!5m2!1sfr!2sfr" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    box-shadow: 0px 0px 5px 2px black;
    border: 2px solid black;
    width:90%;
    padding:2%;
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