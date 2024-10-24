---
title: Aula 23-04
sidebar_position: 1
toc_min_heading_level: 2 
toc_max_heading_level: 6
---



# Aula COMNUV 23-04-2024

## Slides
<iframe src="https://docs.google.com/presentation/d/1eokY5eESUfAZKAvgA1v4Im6TbzjkZyoFDzOk0EmkSIY/edit?usp=sharing" width="100%" height="600px" frameborder="0"> </iframe>

## Conceitos Fundamentais

### Hypervisor
- Traduz as chamadas das máquinas virtuais para a infraestrutura física.
- Divide os recursos entre as máquinas virtuais de forma estratégica.

### Namespace
- Oferece **isolamento lógico**, garantindo que recursos sejam segmentados entre os containers.

### Docker
- Inicialmente, o Docker era utilizado apenas em **ambientes sofisticados** com máquinas de alto custo.
- O conceito de **concatenização** desenvolvido pela Docker representou um avanço significativo na indústria de desenvolvimento de software.

### Componentes Docker

1. **Storage**: Responsável pelo armazenamento dos dados.
2. **Networking**: Gerencia a comunicação entre containers e outros serviços.
3. **Namespaces**: Fornece isolamento para processos e recursos.
4. **Cgroups**: Controla a quantidade de recursos que cada container pode usar.
5. **Security**: Garante a segurança entre os processos isolados.

---

## Imagens e Containers

- **Imagem**: Um pacote que contém tudo o que é necessário para rodar um container.
- **Container**: A imagem em execução. Ele adiciona uma camada de execução ao que está presente na imagem.

### Docker Hub
- Repositório onde as imagens Docker podem ser armazenadas e compartilhadas. Exemplo: [DockerHub](https://hub.docker.com/).

---

## Ferramentas

- Utilizamos o [PlayWithDocker](https://labs.play-with-docker.com/) para executar comandos e testar as configurações Docker.

### Passos para configuração:

1. **Adicionar uma nova instância**:
   
   ```bash
   cat /etc/*release
   ```

   Comando utilizado para identificar o sistema operacional da máquina em uso.

2. Verificar a instalação do Docker e Docker Compose:
   
   ```bash
   which docker
   which docker-compose
   ```

---

## Configuração do Apache com PHP no Docker

1. **Pesquisar e baixar o Apache no Docker Hub**:
   - Dentro da aba *Explore*, pesquisar por **Apache** e abrir a imagem **httpd**.

2. **Criar um repositório no Git**:
   - Criar uma pasta chamada `app` e um arquivo `phpinfo.php` com o seguinte código:

     ```php
     <?php
         phpinfo();
     ?>
     ```

   - Criar um arquivo `Dockerfile` com o seguinte conteúdo:

     ```dockerfile
     FROM php:7.4-apache

     COPY ./app/ /var/www/html

     EXPOSE 80
     ```

3. **Clonar o repositório no PlayWithDocker**:
   - Após criar o repositório no GitHub, clonar o repositório para o ambiente PlayWithDocker.

4. **Build da Imagem Docker**:

   ```bash
   docker image build -t senai-php-app:0.0.1 .
   ```

   - **senai-php-app** é o nome da imagem.
   - **0.0.1** é a tag (formato `major.minor.patch`).
   - O último `.` representa o contexto atual (diretório onde o Dockerfile está localizado).

5. **Listar as imagens criadas**:

   ```bash
   docker image list
   ```

6. **Executar o Container**:

   ```bash
   docker container run --name senai-docker-lab-php -p 8080:80 senai-php-app:0.0.1
   ```

   - Aqui, o container será iniciado com o nome **senai-docker-lab-php**, mapeando a porta 8080 do host para a porta 80 do container.

---

## Conceitos Avançados

### Provisionamento de Infraestrutura
- Para rodar uma aplicação PHP, é necessário provisionar uma infraestrutura que suporte:
  - Um servidor web (Apache).
  - Um banco de dados (se necessário).
  - Instâncias e configurações adicionais para garantir a estabilidade e segurança.

### Copy-on-Write
- Cada camada de um container possui uma identidade única (hash).
- Containers que compartilham dependências utilizam as mesmas camadas, o que minimiza o espaço utilizado no sistema.
