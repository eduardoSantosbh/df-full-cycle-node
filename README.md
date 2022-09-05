# Desafio Full Cycle Docker x Node x Nginx
Desafio do curso FullCycle, no módulo de Docker.

### Desafio
> A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:
```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

### Para executar a aplicação:
```
git clone https://github.com/eduardoSantosbh/df-full-cycle-node.git

cd df-full-cycle-node

mkdir mysql
docker-compose up --build -d
```
<br/>
<br/>
