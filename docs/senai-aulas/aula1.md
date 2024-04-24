---
title: Cibersecurity
sidebar_position: 3
toc_min_heading_level: 2 
toc_max_heading_level: 6
---


# Aula Ciber 23/03/2024

Objetivos:
- Implementar testes de segurança.

-> Red Team
- Testes de segurança.

-> HTTP, FTP, E-MAIL, SAMBA e DNS (Ver qual porta cada vai estar)

teste de varreduras do servidor -> usamos NMAP (Tirar print)
- Sistema Operacional  
- Portas
- Detalhes dos serviçoes


Selecionar um dos três serviços instalados, localizar dentro dele uma forma/técnica de intrusão no srvidor dele (Pode ser por print tbm)


## Resolução

```
nmap -sV 172.16.0.124
```
Mostrar as portas

```
nmap 172.16.0.124
```