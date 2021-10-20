const cliente = [
    {
        nome: 'Ricardo',
        idade: 45,
        cpf: '12345678900',
        email: 'teste@teste',
        fones: ['55619831356789', '557190456789'],
        dependentes: [
            {
                nome: 'Fernanda',
                parentesco: 'filha',
                dataNasc: '18/01/2012'
            },
            {
                nome: 'Bruno V. Ribeiro',
                parentesco: 'filho',
                dataNasc: '18/06/2016'
            }
        ],
    },
    {
        nome: 'Raquel Valerio',
        idade: 48,
        cpf: '09876543212',
        email: 'raquel@teste',
        fone: ['098765433', '61234567845'],
        dependentes: [
            {
                nome: 'Bruno Valerio',
                parentesco: 'filho',
                dataNasc: '18/06/2016'
            }
        ]
    }
]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.table(listaDependentes)

