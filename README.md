# Car Shop 🚗
Para este projeto, foi aplicado os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Isso será feito utilizando o banco de dados MongoDB através do framework do Mongoose.

# Habilidades
- Exercitar o conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo;

- Exercitar a utilização de Composição;

- Exercitar a criação e utilização de Interfaces;

- Implementar, em TypeScript: Classes, Instâncias, Atributos, Métodos e Objetos;

- Aplicar os conhecimentos de MongoDB, Typescript e POO para criar uma API com CRUD.

# Rodar na máquina
- Clone o repositório:
    * `git clone git@github.com:otavioadias/car-shop.git`
- Entre na pasta do repositório que você acabou de clonar:
    * `cd car-shop`
- Instale as dependências:
    * `npm install`

# Rodando no Docker 🐋

Com Docker:
- Rode o serviço node com o comando:
    * `docker-compose up -d`

- Esse serviço irá inicializar um container chamado car_shop.
- A partir daqui você pode rodar o container car_shop via CLI ou abri-lo no VS Code.
- Use o comando:
    * `docker exec -it car_shop bash`

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
- Instale as dependências com `npm install`

## Testes

- Utilize o comando `npm test`

# ENDPOINTS
* No diretório src existe o `thunder-collection_CAR_SHOP.json` com todos os endpoits já prontos.
* Caso queira usar é necessário utilizar da extensão do ThunderClient.

# Desafios

01 - Crie a rota /cars onde seja possível cadastrar um carro

02 - Crie o endpoint para listar carros

03 - Escreva testes para cobrir 30% da camada de Service

04 - Crie a rota /cars/:id onde seja possível atualizar um carro por ID

05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto

06 - Escreva testes para cobrir 60% da camada de Service

07 - Crie a rota /motorcycles onde seja possível listar motos

(Bônus) 08 - Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID

(Bônus) 09 - Escreva testes para cobrir 80% da camada de Service