# Teste de Dev Frontend

Esse teste foi desenhado para os perfís pleno e senior de desenvolvedor web front end, porém juniors são bem vindos a testar seus conhecimenos e mandar para a gente suas soluções.

## Avaliação

Considerando seu nível de conhecimento, faça até onde for possível no tempo que você se propuser a gastar no desafio. Não se preocupe se não der para acabar tudo, nós sabemos que o desafio é bastante complexo e queremos saber até onde você consegue se virar. Então envie o que você conseguir.

O que é obrigatório:

- Instruções para execução da aplicação no linux
- Validações de dados
- Legibilidade do código
- Funcionamento da Aplicação (mesmo que parcial)

O que é recomendável

- Clean Code
- SOLID
- Separation of Concerns
- Padronização e Sintaxe do código
- Inglês (código preferencialmente em inglês)

Diferenciais:

- Testes
- Segurança
- Docker

## Tecnologias

Preferêncialmente o sistema deverá utilizar as seguintes tecnologias:

- React ★★★★★
- Typescript ★★★★★
- [Material UI](https://material-ui.com) ★★★★
- State Management: [RxJS](https://www.learnrxjs.io/) ★★★★ ou Redux ★★★

## API

Api de exemplo: https://desafio-api.devzz.ninja  
Postman: https://cdn.eduzzcdn.com/files/desafio-postman.json

### Projeto Base (Opcional)

Esse projeto que utilizamos como base para nossas aplicações:

- https://github.com/eduzz/react-admin-seed

## Dúvidas

Dúvidas são bem vindas, é só enviar um email para selecao.dev@eduzz.com

## Objetivo

Desenvolver um **ADMIN** de investimento em bitcoins

## Especificação do Desafio

#### 1) Contas

O sistema deve permitir cadastro (nome, email e senha) e login com token JWT

#### 2) Dashboard

- Deve exibir o saldo disponível em reais na conta do cliente
- Cotação atual do bitcoin, compra e venda
- Volume: total de bitcoins comprados e vendidos no dia corrente.
- Histórico: Deve exibir um gráfico o histórico de valor de compra/venda do bitcoin que retorne o valor com frequência de 10 minutos (8:00, 8:10, 8:20, ...) das últimas 24 horas.
- Posição dos investimentos: O Cliente deve poder ver a posição de seus investimentos com as informações:
  _data de compra, valor investido, valor do btc no momento da compra, percentual de variação do preço do bitcoin e valor bruto atual do investimento_

#### 3) Depósitos

O cliente deve poder fazer depósitos de valores em reais na plataforma.

#### 4) Compra

O Cliente deve poder fazer compras de bitcoins usando seu saldo disponível na conta. Deve ser exibido um preview com a estimativa antes da confirmação da compra.

#### 5) Venda

O Cliente poderá vender seus bitcoins com o valor em reais.

#### 6) Extrato

Deverá ser possível listar os depósitos, compras e resgates, com suas respectivas datas e cotações para o cliente ter transparência do que foi feito nos últimos 90 dias ou por intervalo customizado.

## Como entregar

Versione o projeto em um repositório privado do github ou bitbucket, adicione acesso ao usuário @danieloprado e @danilolucasmd, depois envie o endereço pra gente no e-mail selecao.dev@eduzz.com

## Se sentindo Fullstack?

Deixamos disponibilizado o backend dessa aplicação mas caso você queira também se desafiar no Backend, segue abaixo o nosso teste:

[Teste Backend](https://gist.github.com/caferrari/a25734c6e941f6386e7156aa723f28a8)
