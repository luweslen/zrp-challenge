# **ZRP CHALLENGE**

Desafio realizado no processo seletivo para a vaga de Desenvolvedor Fullstack Junior na empresa [ZRP](https://zrp.com.br).

## **Tarefas a serem realizadas**

### **Backend**
- [X] Criar uma rota na aplciação chamada `pokemon/:nome-do-pokemon`;
- [X] Essa rota irá consumir a [PokeAPI](https://pokeapi.co) e trazer os dados do pokémon;
- [X] Deve ser retornado ao usuário as habilidades do pokémon em ordem alfabetica;

### **Frontend**
- [X] Ter um campo `input` para digitar o nome do pokémon;
- [X] Ter um botão pesquisar que vai chamar uma função que pega o valor do `input` e chama a API criada passando o nome do pokémon;
- [X] Mostrar os dados retornado pela API em tela;


## **Rodando o projeto**

Clone o repositório em seu computador:

```bash
git clone git@github.com:devweslen/zrp-challenge.git
```

Entre na pasta do projeto:
```bash
cd zrp-challenge
```
### **Backend**

Entre na pasta do backend:
```bash
cd backend
```

Instale as dependências:
```bash
yarn
```

Criei um arquivo na raiz da pasta `backend` com nome de `.env`:
```env
POKE_API_URL=https://pokeapi.co/api/v2/
```

Rode o backend:
```bash
yarn dev
```

### **Frontend**

Entre na pasta do frontend:
```bash
cd frontend
```
Caso estiver na pasta `backend`:
```bash
cd ../frontend
```

Instale as dependências:
```bash
yarn
```

Criei um arquivo na raiz da pasta `frontend` com nome de `.env`:
```env
VITE_API_URL=http://localhost:3333/api
```

Rode o frontend:
```bash
yarn dev
```

<strong>Aproveite cada momento!</strong>
<a href="https://www.weslen.dev/">
  <img
      align="left"
      height="25"
      src="https://raw.githubusercontent.com/devweslen/devweslen/a8ef0f9f016099148310ffb01d8cd22dff6ac0f0/assets/images/logo.svg"
      alt="Logo"
  />
</a>