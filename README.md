# Link para acessar

[Pagina Inicial](https://pcastroneto.github.io/gh-senai-ads-castro/)

# Website

Este website é construído usando [Docusaurus](https://docusaurus.io/), um moderno gerador de site estático.

### Instalação

```
$ yarn
```

### Desenvolvimento Local

```
$ yarn start
```

Este comando inicia um servidor de desenvolvimento local e abre uma janela do navegador. A maioria das alterações é refletida ao vivo sem a necessidade de reiniciar o servidor.

### Compilação

```
$ yarn build
```

Este comando gera conteúdo estático no diretório `build` e pode ser servido usando qualquer serviço de hospedagem de conteúdo estático.

### Implantação

Usando SSH:

```
$ USE_SSH=true yarn deploy
```

Não usando SSH:

```
$ GIT_USER=<Seu nome de usuário do GitHub> yarn deploy
```

Se estiver usando o GitHub Pages para hospedagem, este comando é uma maneira conveniente de compilar o site e fazer push para o ramo `gh-pages`.
