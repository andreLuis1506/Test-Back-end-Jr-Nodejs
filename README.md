# Teste Contele - FullstackJS Jr
Teste realizado para a vaga de desenvolvedor Jr na contele.

## O TESTE

##### Criar API RESTFUL usando nodejs express
- Criar 4 endpoints GET/POST/PUT/DELETE

### Premissas

- Salvar (email, senha).

- Cada usuário deverá ter um ID único.

- Gravar as informações em arquivo JSON.

### Documentação
HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ |  ------ |
| GET | /api/v1/users |  | Listar todos usuarios
| GET | /api/v1/users/user_id | | Listar único usuário
| POST | /api/v1/users | JSON (email,senha) | Criar único usuário
| PUT | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário
| DELETE | /api/v1/users | | Deletar todos usuarios
| DELETE | /api/v1/users/user_id | | Deletar único usuário
  

### Minha resolução.
Optei por salvar as informações em um banco de dados, por questões de praticidade escolhi o Sqlite.
Para ajudar na manipulação do banco de dados escolhi usar o TypeOrm(Que é utilizado com Typescript).

## Testar minha resolução
Para testar o projeto é muito simples:

#### 1° Clone o projeto
Clone esse repositório:
```bash
git clone https://github.com/andreLuis1506/test-Contele-FullstackJS-Jr.git
```

#### 2° Baixando as dependências
Para baixar as dependências é preciso apenas usar o comando no terminal:
```bash
npm install
```

ou

```bash
yarn
```

#### 3° Executando as migrations
Para executar as migrations é bastante simples, basta usar o seguinte comando:
```bash
npm run typeorm migration:run
```
ou
```bash
yarn typeorm migration:run
```

#### 4° Iniciar o servidor de desenvolvimento
Igualmente simples aos passos anteriores, basta rodar um comando:
```bash
npm run dev
```
ou
```bash
yarn dev
```
Depois disso a API estará disponível em localhost:3000
