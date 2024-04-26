---
title: Aula 23-04
sidebar_position: 1
toc_min_heading_level: 2 
toc_max_heading_level: 6
---

# Aula COMNUV 23-04-2024

Slides
<iframe src="https://docs.google.com/presentation/d/1eokY5eESUfAZKAvgA1v4Im6TbzjkZyoFDzOk0EmkSIY/edit?usp=sharing" width="100%" height="600px" frameborder="0"> </iframe>

Hypervisor vai traduzir chamadoss das máquinas para a infraestrutura 
Vai criar uma estrategia de divisão de recursoso também 

Namespace isolamento lógico

Docker só existia em ambientes sofisticados, em máquinas de alto custo, com a concatenização promovida pelo pessoal da docker foi um avanço na industria de desenvolvimento.  

Storager

Networking

Namespaces

Cgroups

Security


o pacote é a imagem do caontainer (imagme é o pacote que estamos gerando, subindo em algum lugar, como o no [DockerHub](https://hub.docker.com/))
o container é uma imagem em execução

Na aula vamos usar o [PlayWithDocker](https://labs.play-with-docker.com/)

Add new instance
```
cat /etc/*release
```
Para vermos qual a máquina que estamos usando, que d

```
Which docker
Which docker-compose
```

Voltamos para o Docker Hub na aba explore, pesquisamos Apache e abrimos o httpd

criamos um repositori no git 
PASTA app com phpinfo.php
```php
<?php
    phpinfo();
?>
```
E um arquivo "Dockerfile"
```
FROM php:7.4-apache

COPY ./app/ /var/www/html

EXPOSE 80
```

depois voltamos para o play e demos um git clone do repositorio

No site usamos o comando 

docker image build -t senai-php-app:0.0.1 .

senai-.. é o nome da imagem 
0.0.1 (midle,minor)[tag da image]
o ultimo "." é para executar no contexto atual, no direotrio que estamos 

Para listarmos as iamgens que nos temos:
```
docker image list
```

Para crairmos o container

docker container run --name senai-docker-lab-php -p 8080:80 senai-php-app:0.0.1

docker container

dentro desse git dizemos um arquivo "Dockerfile" e um diretorio chamado app, dentro dele um phpinfo

provisionar uma infraestrutura pra suportar, a pagina vai depender de um servidor de banco de dados, vai ter que subir o banco, subir uma instancia do banco de dados, além de configurar outras partes, o que demanda bastante energia.

O container adciona uma camada, dividindo em varias camadas, sendo imporante se o container segue um padrão e uma relaçao de dependencia de um com o outro, assim não importa o que esta dentro do container tirando um problema para qeu vai conduzir


conceito copy and write
para cada camada ele vai criar um identidade e ele tem uma inteligencia para 
Com o hash de cada camada, quanto mais aplicações com as mesmasdependencias você minimiza o espaço utlizado
