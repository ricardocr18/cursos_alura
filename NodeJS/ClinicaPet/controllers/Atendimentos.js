module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está no Atendiento e realizando um GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Fluzão Campeão - estou fazendo um POST')
    })
}