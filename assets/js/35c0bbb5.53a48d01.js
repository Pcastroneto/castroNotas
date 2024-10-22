"use strict";(self.webpackChunksenai=self.webpackChunksenai||[]).push([[4197],{6167:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=o(4848),r=o(8453);const n={},d="Aula 22/10/2024 Eng. de software",i={id:"Aulas/Engenharia de Software/22-10-2024",title:"Aula 22/10/2024 Eng. de software",description:"Agenda",source:"@site/docs/Aulas/Engenharia de Software/22-10-2024.md",sourceDirName:"Aulas/Engenharia de Software",slug:"/Aulas/Engenharia de Software/22-10-2024",permalink:"/gh-senai-ads-castro/docs/Aulas/Engenharia de Software/22-10-2024",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Aulas/Engenharia de Software/22-10-2024.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eng. Software",permalink:"/gh-senai-ads-castro/docs/category/eng-software"},next:{title:"Governan\xe7aTI",permalink:"/gh-senai-ads-castro/docs/category/governan\xe7ati"}},t={},l=[{value:"Agenda",id:"agenda",level:2},{value:"Slides",id:"slides",level:2},{value:"Anota\xe7\xf5es",id:"anota\xe7\xf5es",level:2},{value:"Requisitos n\xe3o funcionais",id:"requisitos-n\xe3o-funcionais",level:2},{value:"Projeto de Arquitetura - MVC",id:"projeto-de-arquitetura---mvc",level:2},{value:"Exerc\xedcio 01:",id:"exerc\xedcio-01",level:2}];function c(e){const a={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"aula-22102024-eng-de-software",children:"Aula 22/10/2024 Eng. de software"}),"\n",(0,s.jsx)(a.h2,{id:"agenda",children:"Agenda"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Objetivos de Projeto de Arquitetura"}),"\n",(0,s.jsx)(a.li,{children:"Requisirtos n\xe3o funcionais"}),"\n",(0,s.jsx)(a.li,{children:"Padr\xe3o MVC (Modelo-Vis\xe3o-Controlador)"}),"\n",(0,s.jsx)(a.li,{children:"2 Exercicios"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"slides",children:"Slides"}),"\n",(0,s.jsx)(a.h2,{id:"anota\xe7\xf5es",children:"Anota\xe7\xf5es"}),"\n",(0,s.jsx)(a.p,{children:"Objetivo visa compreender um sistema de software do modo que"}),"\n",(0,s.jsx)(a.p,{children:"Quando vamos estar faocados e entedeno os requisitos op desenho do projeto como uma das primeiras etapas, defiini o fluxo de evetos e usando padr\xe7~eso, desenho do fluxo para que em seguida venha a galera de codigo rodar"}),"\n",(0,s.jsx)(a.p,{children:"Vantagens de projetar e documentar uma arquitetura de software:"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Comunica\xe7\xe3o de stakeholders"})," Todo projeto \xe9 feito para algum cliente, para algum fim(os stakeholders), as vantagens disso \xe9 para que torna mais compreenssivel e de entendimento para todas as pessoas, desde os profissionais e os leiogos de TI que n\xe3o possuem esse conhecimento saibam como lidar com a aplica\xe7\xe3o ou siga em frente para a empresa, ",(0,s.jsx)(a.strong,{children:"resumo em larga escala"})," voc\xea vai reusar ou vai se preocupar com um outro reuso em um projeto futuro seguindo padr\xf5es, faltou ",(0,s.jsx)(a.strong,{children:"Analise do sistema"})]}),"\n",(0,s.jsx)(a.h2,{id:"requisitos-n\xe3o-funcionais",children:"Requisitos n\xe3o funcionais"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://i0.wp.com/analisederequisitos.com.br/wp-content/uploads/2018/03/o-que-sao-requisitos-nao-funcionais-requisitos-de-sofware.png?resize=556%2C507&ssl=1",alt:"Imagem usada no slide"})}),"\n",(0,s.jsx)(a.p,{children:"Trocar para a imagem usada no slide, tirar print do slide depois"}),"\n",(0,s.jsxs)(a.p,{children:["Qual o ",(0,s.jsx)(a.strong,{children:"desempenho"})," que deve ter em uma aplica\xe7ao, para executar ela deve ser escalada? Qual a capacidade deperfomance que \xe9 preciso? Dependendo da perfomance pode ter um uso mais restrito que apenas uma area da empresa pode usar como algum sistema de compras ou apenas para o RH da empresa que n\xe3o precise necessariamente de um escalamento.\n",(0,s.jsx)(a.strong,{children:"Disponibilidade"}),", onde vou acessar o sistema, ser\xe1 apenas internamente pela empresa ou pelo departamento, um app que s\xf3 pode ser acesado dentro da rede interna da rede, \xe9 uma aplica\xe7\xe3o que precisa estar sendo rodada 24/7\nSeguran\xe7a, uma aplica\xe7\xe3o de um banco por ter transa\xe7\xf5es monetarias, onde esses dados sigilosos vao ser armazenados, como armazenar as informa\xe7\xf5es sem que tenha invas\xf5es.\n",(0,s.jsx)(a.strong,{children:"Integrabilidade"})," \xe9 uma aplica\xe7\xe3o que vai conversar ou vai utilizar de outors modulos e sistemas j\xe1 existentes sendo ou n\xe3o da propria organiza\xe7\xe3o e a ",(0,s.jsx)(a.strong,{children:"manuntebalidade"})," \xe9 uma boa pratica da orienta\xe7\xe3o a objeto para que n\xf3s podemos incrementar ele com uma frequencia grande, ele possui componentes que podem ser facilmente trocados, o servi\xe7o pode ser atualizado de maneira rapida? De maneira economica e eficiente?"]}),"\n",(0,s.jsx)(a.h2,{id:"projeto-de-arquitetura---mvc",children:"Projeto de Arquitetura - MVC"}),"\n",(0,s.jsx)(a.p,{children:"Existe outros padr\xf5es como o de camadas?\nS\xe3o tr\xeas, o padr\xe3o MVC \xe9 um \xe9 separado nos tr\xeas compoentes dele(Modelo Visao e Controlador), uma parte do meu desenho vai ser modelo, na hora de vis\xe3o e outra no componente controlador, com eles conversando um com o outro, promovendo a manutebilidade e reusabilidade do c\xf3digo tornando ele popilar para dev web e para aplica\xe7\xf5es mias complexas\nEle sepra a apresnmta\xe7\xe3o e a interea\xe7\xe3o dos dados do sitemas"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Modelo:\n\xc9 onde ta a logica do bagulho, a parte logica, manipulando os dados, \xe9 onde est\xe1 nosso codigo mais pesado, sesnivel,\nResponsabilidade: Representar os dados(entidades, objetos etc), validar os dados e garantir a integridade e as regras de neg\xf3cio, falando em orienta\xe7\xe3o de objeto elka vai estar em classes interacces esturruda de dados e acesso ao banco de dados"}),"\n",(0,s.jsx)(a.li,{children:"Vis\xe3o:\n\xc9 a parte da apresenta\xe7\xe3o dos dados, onde vai exiibir, \xe9 a parte do front end, ficando nesse componente.\nResponsa: \xc9 a apresnta\xe7\xe3o dos dados, interface grafica, formata\xe7\xe3o e organiza\xe7\xe3o, \xe9 onde recebe as entradad de dados do user, nao deve ter uma logica HTML Css templates, layouts"}),"\n",(0,s.jsx)(a.li,{children:"Controlador:\n\xc9 o que vai ter um papel de orquestrador, n\xe3o tem uma logica de programa\xe7\xe3o pesada, algo como um framework ele deu exemplo n aula do DJANGO\nResponsa: ##### ###### ####### nao consegui anotar"}),"\n"]}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Linguagem"}),(0,s.jsx)(a.th,{children:"Frameworks"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Java"}),(0,s.jsx)(a.td,{children:"Java Spring MVC, Struts"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Python"}),(0,s.jsx)(a.td,{children:"Django, Flask"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"PHP"}),(0,s.jsx)(a.td,{children:"Laravel, CodeIgniter"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Ruby"}),(0,s.jsx)(a.td,{children:"Ruby on Rails"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"JavaScript"}),(0,s.jsx)(a.td,{children:"Angular, React (com adapta\xe7\xf5es)"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:"Os frameworks MVC forncem estrutras bibliotecas e ferramentas que facilitam o desenvolimento de aplica\xe7\xf5es web seguuiindo o padr\xe3o"}),"\n",(0,s.jsx)(a.h2,{id:"exerc\xedcio-01",children:"Exerc\xedcio 01:"})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,a,o)=>{o.d(a,{R:()=>d,x:()=>i});var s=o(6540);const r={},n=s.createContext(r);function d(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);