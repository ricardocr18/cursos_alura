//Aqui nesse arqivo estou crindo Rotas estamos usando o Postman para fazer a ponte entre VSC x Postaman x MSQL
// Que faz a jogada é a pasta models e arquivo atendimento
const atendimentos = require("../models/atendimentos");
const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    Atendimento.lista(res);
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.buscaPorId(id, res);
  });

  // fazendo um post o comendo vem da pasta Models arquivo atendimento
  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Atendimento.altera(id, valores, res);
  });

  app.delete('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.deleta(id, res)
  })

}
