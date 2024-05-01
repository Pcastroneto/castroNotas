---
title: Aula 30-04
sidebar_position: 2
toc_min_heading_level: 2 
toc_max_heading_level: 6
---

aulinhas pós prova tensa...


cmd

mkdir nomedapasta

cd nomedapasta
python -m venv venv

code .

venv\Scripts\activate.bat

pip install django

criei um .gitignore  usando o site [git](https://www.toptal.com/developers/gitignore) com os prompt python, vs, pycharm e django

dockerfile com

```js
FROM python:3.12

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

django-admin startproject core .

pip freeze > requirements.txt 

depois disso dei commit dos arquivos para o github

Abri o site  [PlayWithDocker](https://labs.play-with-docker.com/)

Criei uma isntancia, dei git clone do repositorio, abri a pasta "cd nome-repositoio"

ls -ltrac

docker image build docker-aula-comnuv (esse é o nome do repositorio)

readlink -f .
basename $(readlink -f .)

*docker image build -t $ (basename &( readlink -f .)):0.0.1 .

docker image list


docker container run --rm -it docker-aula-comnuv:0.0.1 bash

pip freeze no bash 

voltamos para o arquivo Dockerfile e em baixo do run adcionamos o codigo 
EXPOSE 8000

de volta ao site

no bash demos o comando "exit"

para confirmar os containers

dock caontainer list e dock container list -a para mostrar todos até os desativados

```
docker container run --name django-app -p 8080:8000 docker-aula-comnuv:0.0.1
```


