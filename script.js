// Inicializar o MercadoPago com sua chave pública
const mp = new MercadoPago('SUA_PUBLIC_KEY', {
    locale: 'pt-BR'
});

// Adicionar o botão de pagamento ao clicar no botão 'Pagar'
document.getElementById('btn-pagar').addEventListener('click', function() {
    // Chamar o MercadoPago para criar um preferencial de pagamento
    fetch('/criar-preferencia', { // Isso deve ser configurado no backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                {
                    title: 'Produto Exemplo',
                    unit_price: 100,
                    quantity: 1
                }
            ]
        })
    })
    .then(response => response.json())
    .then(preference => {
        mp.checkout({
            preference: {
                id: preference.id
            }
        }).open();
    })
    .catch(error => {
        console.error('Erro ao criar a preferência de pagamento:', error);
    });
});
