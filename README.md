# inGaia
Teste para vaga de Nodejs Senior, o intuito é desenvolver uma aplicação conforme os requisitos
solicitados utilizando NodeJs.

## Plugin utilizados
- standard: É similar ao Eslint usa o padrão do javaScript Standard Style https://standardjs.com/
- husky: Executa um script antes de fazer um commit  https://github.com/typicode/husky
- lint-staged: Permite que rodemos script em nossa stage area no git https://github.com/okonet/lint-staged
- jest: realizar teste https://jestjs.io/

## Tools
Nodejs, VSCode, Git, GitHub, Postman

## Configuração da apicação para executar local
- Instalar NodeJs
- Baixar aplicação do github https://github.com/lfknowbr/inGaia
- Acessar a pasta onde esta os arquivo, executar o comando `npm install`

## Executando aplicação
Para Executar a aplicação basta executar o comando npm run start, o servidor subirá na portal 5858 http://localhost:5858
O endpoint da aplicação ficara http://localhost:5858/api/playlist
Para informar a cidade basta passar o parametro city da cidade, este parametro é obrigatorio http://localhost:5858/api/playlist?city=Sao Paulo

Para realizar os teste foi utlizado o Postman, mas pode usar quaquer outro aplicativo que faça requisições http

> ## Detalhes sobre o arquitetura implementada
Para desenvolver esta aplicação utilizamos os conceitos do [Clean Architecture, TDD, Clean Code], esta arquitetura foi utilizada
para mostrar como é possivel implementar padrões de arquitetura em nodeJs mesmo em projetos pequenos.

Utilizamos o framework `express` para implementar nossas rotas, mas com a arquitetura que definimos, podemos facilmente trocar de express para outro framework alterando somente o arquivo '`src/main/config/routes.js`'

Separamos as reponsabilidades para que cada conponente faça seu papel, a estrutura do projeto

- /src

    - /apresentation : onde fica os arquivos de comunicação com o mundo externo, em nosso caso pode se comparar com os controllers

    - /domain : esta camada fica as `classes` o objetivo é intermediadores do controller e repository, em nosso caso sera a pasta infra

    - /infra : fica os arquivos para requisições externas

    - /main  : arquivo de configuração da aplicação

    - /utils : arquivos utilizados em toda aplicação

Objetivo foi demosntrar um pouco do conhecimento adquirido e aplicados em projetos reais em outras empresas, foi criado alguns testes, para demostrar o conhecimento em TDD.
