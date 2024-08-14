## Documentação do Projeto: Galeria de Cães

## Introdução

  Este projeto é uma aplicação web desenvolvida em React que consome a API pública do The Dog API para exibir uma galeria de imagens aleatórias de cães, juntamente com informações sobre suas respectivas  raças. O objetivo é demonstrar como utilizar React para consumir APIs, lidar com erros e exibir dados de maneira organizada e estilizada.

## Estrutura do Projeto

A estrutura básica do projeto gerado pelo create-react-app foi mantida. Os arquivos principais modificados ou adicionados são:
  src/App.js: Componente principal que controla a lógica do aplicativo.
  src/App.css: Arquivo de estilos para o aplicativo.

## Componentes

  App.js
  O arquivo App.js contém o componente principal do aplicativo, responsável por:

# Configuração do Estado:

  useState: Usado para criar e gerenciar o estado dos dados (dogData) e dos erros (error).
  dogData: Armazena os dados retornados pela API.
  error: Armazena qualquer mensagem de erro gerada durante a requisição à API.
  Efeito Colateral (Side Effect):
  useEffect: Gancho (hook) que executa código após a renderização do componente. Aqui, ele é utilizado para realizar a requisição à API quando o componente é montado (ou seja, na primeira renderização).

# Requisição à API:

  axios.get: Faz uma requisição GET à API pública para buscar imagens de cães e informações sobre suas raças. A URL utilizada inclui parâmetros para limitar a quantidade de imagens retornadas e incluir informações sobre as raças.

# Manipulação de Erros:

  Se ocorrer um erro durante a requisição, ele é capturado e o estado error é atualizado com uma mensagem apropriada.
  
# Renderização Condicional:

  Erro: Se um erro é detectado, o componente renderiza uma mensagem de erro.
  Carregamento: Se os dados ainda estão sendo carregados, uma mensagem de "Carregando..." é exibida.
# Dados: 
  Após o carregamento dos dados, os elementos são renderizados em cartões (cards) para cada imagem de cão e suas informações.

### App.css
  
O arquivo App.css contém as regras de estilo que controlam a aparência do aplicativo. Aqui está o que cada parte do CSS faz:
Estilo Global:
Define margens, fonte padrão, e cor de fundo do corpo da página (body), proporcionando uma aparência uniforme em todo o aplicativo.
Estilo do Cabeçalho (App-header):
Cria um cabeçalho estilizado que apresenta o título e a descrição do aplicativo. Inclui cores, espaçamento, e estilo de texto para criar uma boa primeira impressão.
Estilo dos Cartões (dog-card):
Define o layout dos cartões que exibem as imagens e informações dos cães. Inclui um design responsivo usando grid, bordas arredondadas, sombras, e transições para criar uma aparência interativa e moderna.
Estilo de Animação de Hover:
Aplica efeitos de hover nos cartões e imagens para melhorar a interatividade do usuário. Quando o mouse passa sobre um cartão, ele se eleva levemente, e a imagem é aumentada.
Estilo das Informações (dog-info):
Controla a aparência do texto dentro dos cartões, incluindo o nome da raça, temperamento, peso, altura, e esperança de vida. O texto é alinhado à esquerda e estilizado com cores suaves e um gradiente de fundo.
Estilo da Mensagem de Erro:
Define a cor e o tamanho da fonte da mensagem de erro para garantir que seja claramente visível se algo der errado.
Responsividade:
Inclui regras de estilo para garantir que o aplicativo funcione bem em telas menores, ajustando tamanhos de fontes e layouts para dispositivos móveis.

## Lógica do Aplicativo
  
  Inicialização e Estado
  useState: O React permite a criação de estados locais dentro de componentes funcionais usando o useState. Aqui, são dois estados:
  dogData: Armazena os dados dos cães recebidos da API.
  error: Armazena mensagens de erro, caso a requisição falhe.
  Efeito Colateral com useEffect
  O useEffect é um hook que permite a execução de efeitos colaterais em componentes funcionais. Neste caso, ele é usado para fazer uma requisição à API assim que o componente é montado.
  O efeito é configurado para ser executado apenas uma vez, devido ao array de dependências vazio ([]).

# Requisição à API

  axios.get é usado para fazer a requisição GET à API. A URL consulta a API pública do The Dog API e retorna até cinco imagens de cães, junto com informações detalhadas sobre suas raças.
  
# Manipulação de Erros

  Se a requisição à API falhar, a função catch dentro do try-catch irá capturar o erro e atualizar o estado error com uma mensagem apropriada.
  A renderização condicional é usada para exibir a mensagem de erro, caso ela exista.

# Renderização Condicional

  O aplicativo usa renderização condicional para lidar com diferentes estados:
  Erro: Se houver um erro, a mensagem de erro é renderizada.
  Carregamento: Se os dados ainda estão sendo carregados, uma mensagem "Carregando..." é exibida.
  Dados: Se os dados forem carregados com sucesso, eles são exibidos em cartões.
  
## Requisições à API

  Função fetchDogData
  Descrição: A função fetchDogData faz uma requisição à API do The Dog API para buscar dados de cães e suas raças.
  Implementação:
  axios.get: Requisição GET para a URL da API.
  Tratamento de Erros: Implementado usando try-catch. Se a requisição falhar, a mensagem de erro é capturada e exibida na interface do usuário.
  Chamada do fetchDogData
  useEffect: A função fetchDogData é chamada dentro de useEffect para garantir que os dados sejam buscados assim que o componente for montado.
  
## Manipulação de Erros

# Tratamento de Erros

  try-catch: A requisição à API é envolta em um bloco try-catch para capturar e lidar com qualquer erro que ocorra durante a chamada.
  Atualização do Estado de Erro: Se um erro for capturado, o estado error é atualizado com uma mensagem de erro que é exibida para o usuário.

# Exibição da Mensagem de Erro

  Se o estado error for diferente de null, o aplicativo renderiza um <div> com a classe error-message, exibindo a mensagem de erro ao usuário.
  Responsividade e Estilo

# Estilo Responsivo

  Grid Layout: A galeria de imagens utiliza um layout de grade responsivo, que se ajusta automaticamente ao tamanho da tela, garantindo uma exibição agradável em dispositivos móveis e desktops.
  CSS Media Queries: As regras de estilo incluem media queries para ajustar o tamanho das fontes e a disposição dos elementos em telas menores.
  
# Estilo Sofisticado

  Cores e Tipografia: O aplicativo usa uma paleta de cores moderna e uma tipografia clara para proporcionar uma boa experiência visual.
  Animações de Hover: Os cartões têm animações suaves ao passar o mouse sobre eles, criando uma interação agradável.
  Sombras e Bordas Arredondadas: Sombras sutis e bordas arredondadas são usadas para dar profundidade e suavidade ao design.

# Execução do Projeto

  Passos para Executar o Projeto
  Clonar o Repositório:
  Clone o repositório para sua máquina local.
  bash

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/WolffShadow/Projeto-dos-DogNou.git)

  Instalar Dependências:
Navegue até o diretório do projeto e instale as dependências necessárias.
bash

cd my-api-project
npm install


  Iniciar o Servidor de Desenvolvimento:
Inicie o servidor de desenvolvimento do React para ver o projeto no navegador.
bash
Copiar código
npm start


  Visualizar no Navegador:
Abra seu navegador e acesse http://localhost:3000 para visualizar o aplicativo.

