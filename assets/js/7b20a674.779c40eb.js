"use strict";(self.webpackChunksenai=self.webpackChunksenai||[]).push([[86],{2593:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var o=n(4848),a=n(8453);const r={title:"Aula 28-05",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:6},i=void 0,l={id:"Aulas/Cyberseguranca/aulaX",title:"Aula 28-05",description:"---",source:"@site/docs/Aulas/Cyberseguranca/aulaX.md",sourceDirName:"Aulas/Cyberseguranca",slug:"/Aulas/Cyberseguranca/aulaX",permalink:"/castroNotas/docs/Aulas/Cyberseguranca/aulaX",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Aulas/Cyberseguranca/aulaX.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Aula 28-05",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Aula 23-03",permalink:"/castroNotas/docs/Aulas/Cyberseguranca/aula1"},next:{title:"Cybersecurity",permalink:"/castroNotas/docs/category/cybersecurity-1"}},d={},t=[{value:"Ciberseguran\xe7a 28/05/2024",id:"ciberseguran\xe7a-28052024",level:2},{value:"Objetivos",id:"objetivos",level:3},{value:"Log -&gt; Registros / Hist\xf3ricos de eventos",id:"log---registros--hist\xf3ricos-de-eventos",level:3},{value:"N\xedveis de log",id:"n\xedveis-de-log",level:3},{value:"Gerenciamento de logs no Linux",id:"gerenciamento-de-logs-no-linux",level:3},{value:"Comandos \xfateis:",id:"comandos-\xfateis",level:4},{value:"Logs comuns no Linux:",id:"logs-comuns-no-linux",level:4},{value:"Atividade",id:"atividade",level:3}];function c(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"ciberseguran\xe7a-28052024",children:"Ciberseguran\xe7a 28/05/2024"}),"\n",(0,o.jsx)(s.h3,{id:"objetivos",children:"Objetivos"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Implementar rastreamento de logs;"}),"\n",(0,o.jsx)(s.li,{children:"Identificar caracter\xedsticas usando logs."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"log---registros--hist\xf3ricos-de-eventos",children:"Log -> Registros / Hist\xf3ricos de eventos"}),"\n",(0,o.jsxs)(s.p,{children:["Os ",(0,o.jsx)(s.strong,{children:"logs"})," em programa\xe7\xe3o s\xe3o ",(0,o.jsx)(s.strong,{children:"registros"})," que documentam os eventos que ocorrem durante a execu\xe7\xe3o de um sistema ou aplicativo. Eles s\xe3o essenciais para monitoramento, auditoria, seguran\xe7a e corre\xe7\xe3o de problemas. Em termos simples, voc\xea pode pensar nos logs como um ",(0,o.jsx)(s.strong,{children:"di\xe1rio"})," do seu programa, onde cada entrada detalha um evento espec\xedfico, como um erro, uma transa\xe7\xe3o ou uma a\xe7\xe3o do usu\xe1rio\xb9\xb2."]}),"\n",(0,o.jsx)(s.p,{children:"Exemplo de log em um aplicativo:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-plaintext",children:"2024-05-28 19:26:47 INFO: Usu\xe1rio 'Jo\xe3o' entrou no sistema.\n2024-05-28 19:27:05 ERROR: Falha ao conectar ao banco de dados.\n2024-05-28 19:27:10 WARN: Tentativa de login suspeita detectada.\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Cada linha geralmente cont\xe9m a ",(0,o.jsx)(s.strong,{children:"data e hora"})," do evento, um ",(0,o.jsx)(s.strong,{children:"n\xedvel de severidade"})," (como INFO, ERROR, WARN), e uma ",(0,o.jsx)(s.strong,{children:"mensagem"})," descrevendo o que aconteceu. Os desenvolvedores usam esses logs para entender o comportamento do sistema e resolver problemas quando ocorrem."]}),"\n",(0,o.jsx)(s.h3,{id:"n\xedveis-de-log",children:"N\xedveis de log"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"INFO"})," -> Informa\xe7\xe3o geral do sistema, sem problemas."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"WARNING"})," -> Aten\xe7\xe3o, poss\xedvel problema detectado."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"ERROR"})," -> Erro cr\xedtico que exige interven\xe7\xe3o."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"DEBUG"})," -> Detalhamento completo das opera\xe7\xf5es e comandos, usado para investiga\xe7\xe3o profunda."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"gerenciamento-de-logs-no-linux",children:"Gerenciamento de logs no Linux"}),"\n",(0,o.jsx)(s.p,{children:"Em sistemas Linux, \xe9 comum que uma m\xe1quina gere uma quantidade enorme de logs. Por exemplo, uma m\xe1quina pode gerar mais de 200 mil linhas em 2 horas. Dada essa quantidade de dados, \xe9 essencial usar ferramentas e filtros para identificar as informa\xe7\xf5es mais valiosas."}),"\n",(0,o.jsx)(s.h4,{id:"comandos-\xfateis",children:"Comandos \xfateis:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"find / -name syslog"})," \u2013 Localiza o arquivo ",(0,o.jsx)(s.code,{children:"syslog"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"tail -10 syslog"})," \u2013 Exibe as \xfaltimas 10 linhas do log."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"tail -f syslog"})," \u2013 Monitora o log em tempo real (para sair, use ",(0,o.jsx)(s.code,{children:"Ctrl + C"}),")."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"less syslog"})," \u2013 Permite navega\xe7\xe3o no log (usa ",(0,o.jsx)(s.code,{children:"PgUp"}),", ",(0,o.jsx)(s.code,{children:"PgDown"}),", ",(0,o.jsx)(s.code,{children:"Home"}),", ",(0,o.jsx)(s.code,{children:"End"})," para navegar, e ",(0,o.jsx)(s.code,{children:"Q"})," para sair)."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"cat syslog"})," \u2013 Exibe o conte\xfado do log do in\xedcio ao fim."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"tac syslog"})," \u2013 Exibe o log de tr\xe1s para frente."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"grep"})," \u2013 Filtra logs por palavra-chave. Exemplo: ",(0,o.jsx)(s.code,{children:"cat syslog | grep palavra"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"logs-comuns-no-linux",children:"Logs comuns no Linux:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"syslog"})," \u2013 Logs gerais do sistema."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"daemon.log"})," \u2013 Logs de servi\xe7os do sistema."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"kern.log"})," \u2013 Logs do kernel."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"message"})," \u2013 Logs de mensagens do sistema."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Esses arquivos s\xe3o fundamentais para rastrear problemas de funcionamento, seguran\xe7a, e performance."}),"\n",(0,o.jsx)(s.h3,{id:"atividade",children:"Atividade"}),"\n",(0,o.jsx)(s.p,{children:"Identifique nos logs os seguintes eventos:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Instala\xe7\xe3o do ",(0,o.jsx)(s.strong,{children:"MariaDB"}),";"]}),"\n",(0,o.jsxs)(s.li,{children:["Inicializa\xe7\xe3o do servi\xe7o ",(0,o.jsx)(s.strong,{children:"mariadb-server"}),";"]}),"\n",(0,o.jsxs)(s.li,{children:["Instala\xe7\xe3o do ",(0,o.jsx)(s.strong,{children:"phpMyAdmin"}),";"]}),"\n",(0,o.jsxs)(s.li,{children:["Instala\xe7\xe3o e execu\xe7\xe3o do ",(0,o.jsx)(s.strong,{children:"Apache"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.hr,{})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var o=n(6540);const a={},r=o.createContext(a);function i(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);