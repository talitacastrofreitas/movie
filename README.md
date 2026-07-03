# 🚀 Primeiros Passos com Create React App

Este projeto foi criado utilizando o **Create React App**.

---

# 📜 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

## ▶️ `npm start`

Inicia a aplicação em **modo de desenvolvimento**.

Após executar o comando, abra:

```
http://localhost:3000
```

A aplicação será atualizada automaticamente sempre que você salvar alterações no código.

Caso existam erros de lint, eles serão exibidos no terminal ou no console do navegador.

---

## 🧪 `npm test`

Inicia o executor de testes em modo interativo (*watch mode*).

Mais informações sobre testes podem ser encontradas na documentação do React.

---

## 📦 `npm run build`

Cria uma versão otimizada da aplicação para **produção** na pasta:

```
build/
```

Durante o processo:

- Os arquivos são minificados;
- Os nomes dos arquivos recebem hashes para melhor controle de cache;
- A aplicação é otimizada para obter o melhor desempenho possível.

Após a conclusão, sua aplicação estará pronta para ser publicada.

---

## ⚙️ `npm run eject`

> **Atenção:** esta é uma operação **irreversível**.

Caso você não esteja satisfeito com as configurações padrão do Create React App, é possível executar:

```bash
npm run eject
```

Esse comando irá:

- Copiar todas as configurações para dentro do projeto;
- Tornar editáveis arquivos como:
  - Webpack
  - Babel
  - ESLint
  - Scripts de build
- Remover a dependência única do Create React App.

Após executar o **eject**, você passa a ser responsável pela manutenção dessas configurações.

> Na maioria dos projetos, **não é necessário utilizar o eject**.

---

# 📚 Saiba Mais

- Documentação do **Create React App**
- Documentação oficial do **React**

---

# 📖 Recursos da Documentação

Os tópicos abaixo foram movidos para a documentação oficial:

- Code Splitting
- Análise do tamanho do Bundle
- Progressive Web App (PWA)
- Configurações Avançadas
- Deploy da aplicação
- Solução de problemas quando `npm run build` falha ao minificar

Consulte a documentação oficial para obter informações detalhadas sobre esses assuntos.

---

# ✅ Resumo dos Comandos

| Comando | Descrição |
|----------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm test` | Executa os testes |
| `npm run build` | Gera a versão de produção |
| `npm run eject` | Expõe as configurações internas do projeto (irreversível) |