const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/saudacao', (req, res) => {
    res.json({ mensagem: 'Seja bem-vindo à minha API' });
});

app.post('/soma', (req, res) => {
    const { numero1, numero2 } = req.body;

    if (numero1 == null || numero2 == null) {
        return res.status(400).json({ erro: 'forneça ambos os números.' });
    }

    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return res.status(400).json({ erro: 'Os valores fornecidos devem ser números.' });
    }

    const resultado = numero1 + numero2;
    res.json({ resultado });
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});