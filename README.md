#APP-Electron-React

** Clone e corra para uma maneira rápida de ver o Elétron e o React em ação. **


![Alt Text](https://github.com/solrachix/APP-Electron-React/blob/master/imgIlustration.png)


Este é um aplicativo Electron mínimo baseado no [Guia de Iniciação Rápida] (http://electron.atom.io/docs/tutorial/quick-start) na documentação da Electron.

## Usar

Para clonar e executar este repositório, você precisará de [Git] (https://git-scm.com) e [Node.js] (https://nodejs.org/en/download/) (que vem com [npm ] (http://npmjs.com)) instalado no seu computador. Na sua linha de comando:

`` bash
## Clone este repositório
  git clone https://github.com/solrachix/APP-Electron-React.Git
## Vá para o repositório
  cd ./APP-Electron-React
## Instalar dependências
  npm install
## Execute o aplicativo
  npm run start
`` ``

## - Inicializar o electron, e o React
   npm run start
   OU
   yarn start

## - Mudar a porta na qual o App Inicializar
  Vá para o arquivo .env e define a nova porta na variável: PORT=<numero da porta> sem os símbolos de <>

## - Ciar Packager
###Importante:
  Vá ao arquivo Electron.js na raiz do projeto, na linha vai encontrar isso:
  let EmDesenvolvimento = true;
  Mude para:
  let EmDesenvolvimento = false;

####Primeiramente faça o build do React, executando:
  npm run buildReact
  OU
  yarn buildReact
####Agora empacote o Electron, executando:
    npm run buildElectron
    OU
    yarn buildElectron

####Observações:
  O script "buildElectron" está configurado para linux, você pode trocacar isso no campo buildElectron, dentro
  do objeto script no package.json.

Saiba mais sobre o Electron e sua API na [documentação] (http://electron.atom.io/);
Saiba mais sobre o React e sua API na [documentação] (https://pt-br.reactjs.org/).


#### Licença MIT
