// Inicializar o MercadoPago com sua chave pública
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>




mercadopago.configurations.setAccessToken('SUA_ACCESS_TOKEN');

let preference = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
  .then(function(response) {
    console.log(response.body.id); // Este é o ID que você usa no frontend
  })
  .catch(function(error) {
    console.log(error);
  });

});
