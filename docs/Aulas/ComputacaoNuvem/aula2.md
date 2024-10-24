---
title: Aula 30-04
sidebar_position: 2
toc_min_heading_level: 2 
toc_max_heading_level: 6
---

# Aulinha pós prova tensa...

## Comandos Iniciais

1. **Criar diretório e configurar ambiente virtual:**

   ```bash
   mkdir nomedapasta
   cd nomedapasta
   python -m venv venv
   code .
   ```

2. **Ativar o ambiente virtual:**

   ```bash
   venv\Scripts\activate.bat
   ```

3. **Instalar o Django:**

   ```bash
   pip install django
   ```

4. **Gerar um `.gitignore`:**
   - Usei o site [gitignore generator](https://www.toptal.com/developers/gitignore) com os prompts: **python**, **vs**, **pycharm** e **django**.

---

## Configuração do Dockerfile

Criei um `Dockerfile` com o seguinte conteúdo:

```dockerfile
FROM python:3.12

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

---

## Criar o Projeto Django

1. **Iniciar o projeto Django:**

   ```bash
   django-admin startproject core .
   ```

2. **Gerar o arquivo `requirements.txt`:**

   ```bash
   pip freeze > requirements.txt
   ```

3. **Fazer o commit dos arquivos para o GitHub.**

---

## Utilizando o PlayWithDocker

1. **Acessar o [PlayWithDocker](https://labs.play-with-docker.com/)**
   - Criar uma instância e clonar o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd nome-repositorio
   ```

2. **Listar os arquivos:**

   ```bash
   ls -ltrac
   ```

3. **Construir a imagem Docker:**

   ```bash
   docker image build -t docker-aula-comnuv:0.0.1 .
   ```

4. **Exibir o caminho completo e o nome do diretório:**

   ```bash
   readlink -f .
   basename $(readlink -f .)
   ```

---

## Rodando o Container

1. **Executar o container em modo interativo com bash:**

   ```bash
   docker container run --rm -it docker-aula-comnuv:0.0.1 bash
   ```

2. **Dentro do bash, executar o comando:**

   ```bash
   pip freeze
   ```

---

## Ajustes no Dockerfile

1. **Adicionar a linha `EXPOSE 8000` no Dockerfile logo após o `RUN pip install -r requirements.txt`.**

---

## Verificando os Containers

1. **Sair do bash:**

   ```bash
   exit
   ```

2. **Listar os containers em execução:**

   ```bash
   docker container list
   ```

3. **Listar todos os containers, incluindo os desativados:**

   ```bash
   docker container list -a
   ```

---

## Executar o Projeto Django

1. **Rodar o container expondo a porta 8000 para a porta 8080 do host:**

   ```bash
   docker container run --name django-app -p 8080:8000 docker-aula-comnuv:0.0.1
   ```

---

Com esses passos, configuramos e rodamos um projeto Django dentro de um container Docker, usando o PlayWithDocker para realizar testes e validações.