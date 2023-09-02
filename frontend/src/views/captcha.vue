<template>
    <div>
      <form action="?" method="POST" @submit.prevent="submitForm">
        <div class="g-recaptcha" data-sitekey="6LfimNknAAAAAPUXqRrnF3YDoB2KqpZVSESSIcfE"></div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm() {
        // Logique de soumission du formulaire ici
      },
    },
    mounted() {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },
  };
  </script>