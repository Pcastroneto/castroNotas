---
title: Aula 28-05
sidebar_position: 3
toc_min_heading_level: 2 
toc_max_heading_level: 6
---

---

## Cibersegurança 28/05/2024

### Objetivos
* Implementar rastreamento de logs;
* Identificar características usando logs.

### Log -> Registros / Históricos de eventos

Os **logs** em programação são **registros** que documentam os eventos que ocorrem durante a execução de um sistema ou aplicativo. Eles são essenciais para monitoramento, auditoria, segurança e correção de problemas. Em termos simples, você pode pensar nos logs como um **diário** do seu programa, onde cada entrada detalha um evento específico, como um erro, uma transação ou uma ação do usuário¹².

Exemplo de log em um aplicativo:

```plaintext
2024-05-28 19:26:47 INFO: Usuário 'João' entrou no sistema.
2024-05-28 19:27:05 ERROR: Falha ao conectar ao banco de dados.
2024-05-28 19:27:10 WARN: Tentativa de login suspeita detectada.
```

Cada linha geralmente contém a **data e hora** do evento, um **nível de severidade** (como INFO, ERROR, WARN), e uma **mensagem** descrevendo o que aconteceu. Os desenvolvedores usam esses logs para entender o comportamento do sistema e resolver problemas quando ocorrem.

### Níveis de log
* **INFO** -> Informação geral do sistema, sem problemas.
* **WARNING** -> Atenção, possível problema detectado.
* **ERROR** -> Erro crítico que exige intervenção.
* **DEBUG** -> Detalhamento completo das operações e comandos, usado para investigação profunda.

### Gerenciamento de logs no Linux
Em sistemas Linux, é comum que uma máquina gere uma quantidade enorme de logs. Por exemplo, uma máquina pode gerar mais de 200 mil linhas em 2 horas. Dada essa quantidade de dados, é essencial usar ferramentas e filtros para identificar as informações mais valiosas.

#### Comandos úteis:
* **find / -name syslog** – Localiza o arquivo `syslog`.
* **tail -10 syslog** – Exibe as últimas 10 linhas do log.
* **tail -f syslog** – Monitora o log em tempo real (para sair, use `Ctrl + C`).
* **less syslog** – Permite navegação no log (usa `PgUp`, `PgDown`, `Home`, `End` para navegar, e `Q` para sair).
* **cat syslog** – Exibe o conteúdo do log do início ao fim.
* **tac syslog** – Exibe o log de trás para frente.
* **grep** – Filtra logs por palavra-chave. Exemplo: `cat syslog | grep palavra`.

#### Logs comuns no Linux:
* **syslog** – Logs gerais do sistema.
* **daemon.log** – Logs de serviços do sistema.
* **kern.log** – Logs do kernel.
* **message** – Logs de mensagens do sistema.

Esses arquivos são fundamentais para rastrear problemas de funcionamento, segurança, e performance.

### Atividade
Identifique nos logs os seguintes eventos:
* Instalação do **MariaDB**;
* Inicialização do serviço **mariadb-server**;
* Instalação do **phpMyAdmin**;
* Instalação e execução do **Apache**.

---

