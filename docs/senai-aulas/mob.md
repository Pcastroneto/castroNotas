---
title: Mobile
sidebar_position: 5
---

# Iniciando API Typescript

Na aula vamos estar usando novamente a PokePI Api do pokemon, seguir uma hierarquia e dar significancia para nomenclatura e 

Se tiver o Yarn é melhor que usar o npm

```
npx create-react-app exemploapitypescript --template typescript
```

Dentro do projeto no cmd executar o comando, axios é usado como padrao de mercado

```
npm install axios
```

Dentro de src, foi criada a pasta "services" , dentro o arquivo "api.ts"

Dentro do arquivo api.ts
```ts
import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon"

const api = axios.create({
    baseURL: URL,
    timeout: 5000

});
```

Dentro de src, foi criado o diretório "types" e dentro de tpes, foi criado o arquivo "AppInterfaces.ts"

Nele tem:
```ts
interface PokemonListInterface{
    const: number,
    next: string | null,
    previous: string | null,
    results: PokemonItemListInterface[];
}

interface PokemonItemListInterface {
    name: string,
    url: string;
}

export type {
    PokemonListInterface,
    PokemonItemListInterface };
```

Dentro de services tem o arquivo agota PokemonServices.ts
```ts
import api from "./api";

interface PokemonServicesListarParams {
    itensPorPagina: number,
    pagina: number;
}

const PokemonServices = {
    listarPokemons: async (params : PokemonServiceListarParams) : Promise<PokemonListInterface> => {  

        /*Qquando fazmos uma chamada assincrona, o meu retorno é uma promise
           uma execução sem o controle do fluxo de execução*/
        const (itensPorPagina, pagina) = params;

        
        const requestParams = `/?offset=${(pagina - 1) * itensPorpagina}&limit=${itensPorPagina}`; 
        //esse conceito de paginação é padrão, o limit é os itens por pagina, offset é as paginas que eu 
        try{

        
            const response: AxiosResponse<PokemonListInterface> = await api.get(requestParams);
        /*a minha resposta é assincrona, o await é onde ocorre o assincornismo, esta sendo notacioado aqui
        Ao receber isso ele converte isso para o nosso contrato*/
            return response.data;
        } catch(err){//qualquer erro cai nessa seção de código
            throw new Error("Erro ao Consultar a api")
        }

        
        api.get(requestParams); 
    }
};

export default PokemonServices
```

Ele criou uma pasta components e depois o arquivo "PokemonList.js"

```tsx
import React from "React";

const PokemonList: React.FC = () => {
    useEffect ( () =>{
        PokemonService.listarPokemons({
            itensPorPagina: 20,
            pagina:1
        });
    }; []);
    return(
        <React.Fragment></React.Fragment>
    )
}

```
Dentro do pokemonlist foi criado um index.ts e no components tbm

```ts
import PokemonList from "./PokemonList";

export {PokemonList}
```
do index.ts components

```ts
import { PokemonList } frmo ".PokemonList";

export {PokemonList}
```

Agora dentro do App vamos chamar o PokemonList
```tsx
import './App.css';
import { PolemonList } from './components';

function App() {
    return (
        <PokemonList>
    );
}

export default App;
```

Voltamos a mexer no codigo do PokemonList.tsx

```tsx
import React from "React";
import PokemonServices from "../../services/PokemonServices";


const PokemonList: React.FC = () => {
    const [pagina, setPagina] = useState<number>(1);
    const [itensPorPagina, steItemsPorPagina] = useState<number>(20)

    useEffect ( () =>{
        PokemonService.listarPokemons({
            itensPorPagina: itensPorPagina,
            pagina: pagina,
        });

    }; []);
    const handleListarDados =() => {
        PokemonSerice.listarPokemons({
            itensPorPagina: itensPorPagina,
            pagina: pagina
        })
    }

return(
        <React.Fragment></React.Fragment>
    )
}

```

fomos no google e colocamos "mui react install"
o primeiro item do retorno da busca, onde mostra a intalação para quem tem o npm e o yarn