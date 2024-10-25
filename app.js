// Node.js com Express
const express = require('express');
const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken('SUA_ACCESS_TOKEN'); // Chave secreta

const app = express();
app.use(express.json());

app.post('/criar-preferencia', (req, res) => {
    let preference = {
        items: req.body.items,
        back_urls: {
            success: 'https://seusite.com/sucesso',
            failure: 'https://seusite.com/falha',
            pending: 'https://seusite.com/pendente'
        },
        auto_return: 'approved'
    };

    mercadopago.preferences.create(preference)
        .then(function(response) {
            res.json({ id: response.body.id });
        }).catch(function(error) {
            console.log(error);
        });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
