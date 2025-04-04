# Integração Front-end e Back-end - Doação de Livros

## Visão Geral do Projeto
Este projeto consiste na integração do front-end de uma plataforma de doação de livros (desenvolvido em React) com uma API RESTful (desenvolvida em Flask), criando uma aplicação completa que permite visualizar e cadastrar livros doados.

## Links do Projeto
- **Front-end (Vercel):** [livraria-flax.vercel.app](https://livraria-flax.vercel.app/)
- **Back-end (Render):** [testeapiflask-reox.onrender.com](https://testeapiflask-reox.onrender.com)
- **Documentação da API (Postman):** [Postman Docs](https://documenter.getpostman.com/view/17743876/2sAYkHqJvn)

## Funcionalidades Implementadas
✅ Exibição de livros cadastrados (GET)  
✅ Cadastro de novos livros (POST)  
✅ Integração completa entre front-end e back-end  
✅ Validação de dados no front-end e back-end  
✅ Feedback visual para o usuário  

## Tecnologias Utilizadas
- **Front-end:** React, Axios, CSS
- **Back-end:** Python, Flask, SQLAlchemy
- **Banco de Dados:** PostgreSQL
- **Deploy:** Vercel (front-end), Render (back-end)

## Desafios e Soluções

### 1. Latência na API (Render)
Implementei um estado de loading para melhorar a experiência do usuário enquanto aguarda a resposta da API.

### 2. Formato dos dados
Utilizei o Postman para testar exaustivamente os endpoints e garantir que o JSON estava sendo enviado e recebido corretamente.

### 3. CORS
Configurei adequadamente o CORS no back-end para permitir requisições do domínio do front-end.

### 4. Validação de campos
Implementei validações tanto no front-end (para feedback imediato) quanto no back-end (para segurança dos dados).

## Conclusão
Este projeto demonstra minha capacidade de integrar sistemas front-end e back-end, resolver problemas de compatibilidade e garantir uma experiência de usuário fluida. Aprendi muito sobre consumo de APIs, tratamento de erros e deploy de aplicações completas.

