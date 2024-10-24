---
title: Aula 25-04
sidebar_position: 1
---

# Iniciando API com Typescript

## Configuração da Aplicação

Nesta aula, utilizamos a **PokeAPI** para obter dados sobre pokémons e implementamos uma API em **Typescript**. Recomendamos o uso do **Yarn** em vez do **npm**, mas ambos funcionam.

### 1. Criando o Projeto React com Typescript

Para iniciar o projeto, usamos o comando abaixo para criar uma aplicação **React** com suporte a **Typescript**:

```bash
npx create-react-app exemploapitypescript --template typescript
```

### 2. Instalando Axios

Dentro do projeto, instalamos o **axios** para realizar as requisições HTTP, uma prática comum no mercado:

```bash
npm install axios
```

---

## Estrutura do Projeto

### 1. Serviço de API

Dentro do diretório `src`, criamos a pasta `services` e adicionamos o arquivo `api.ts`. Este arquivo configura o cliente **axios** para fazer as requisições à PokeAPI:

```ts
import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon";

const api = axios.create({
    baseURL: URL,
    timeout: 5000,
});

export default api;
```

### 2. Definindo Tipos

Criamos a pasta `types` dentro de `src`, e dentro dela, o arquivo `AppInterfaces.ts` para definir os tipos usados na aplicação:

```ts
interface PokemonListInterface {
    count: number,
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
    PokemonItemListInterface
};
```

### 3. Serviço de Listagem de Pokémons

Dentro de `services`, adicionamos o arquivo `PokemonServices.ts`, responsável por fazer a requisição para listar os pokémons:

```ts
import api from "./api";
import { PokemonListInterface } from "../types/AppInterfaces";
import { AxiosResponse } from "axios";

interface PokemonServiceListarParams {
    itensPorPagina: number,
    pagina: number;
}

const PokemonServices = {
    listarPokemons: async (params: PokemonServiceListarParams): Promise<PokemonListInterface> => {
        const { itensPorPagina, pagina } = params;

        const requestParams = `/?offset=${(pagina - 1) * itensPorPagina}&limit=${itensPorPagina}`;

        try {
            const response: AxiosResponse<PokemonListInterface> = await api.get(requestParams);
            return response.data;
        } catch (err) {
            throw new Error("Erro ao consultar a API");
        }
    }
};

export default PokemonServices;
```

---

## Componente de Listagem de Pokémons

### 1. Componente `PokemonList.tsx`

Dentro da pasta `components`, criamos o arquivo `PokemonList.tsx`, que irá chamar o serviço de listagem de pokémons:

```tsx
import React, { useEffect, useState } from "react";
import PokemonServices from "../../services/PokemonServices";

const PokemonList: React.FC = () => {
    const [pagina, setPagina] = useState<number>(1);
    const [itensPorPagina, setItensPorPagina] = useState<number>(20);

    useEffect(() => {
        PokemonServices.listarPokemons({
            itensPorPagina: itensPorPagina,
            pagina: pagina,
        });
    }, [itensPorPagina, pagina]);

    return (
        <React.Fragment></React.Fragment>
    );
};

export default PokemonList;
```

### 2. Indexação dos Componentes

Adicionamos o arquivo `index.ts` dentro da pasta `components` para organizar as exportações:

```ts
import PokemonList from "./PokemonList";

export { PokemonList };
```

---

## Integração no `App.tsx`

Agora, importamos e utilizamos o componente `PokemonList` dentro do arquivo `App.tsx`:

```tsx
import './App.css';
import { PokemonList } from './components';

function App() {
    return (
        <PokemonList />
    );
}

export default App;
```

---

## Melhoria no Componente `PokemonList.tsx`

Voltamos ao componente `PokemonList.tsx` para adicionar a função de listar dados e melhorar a interação com a API:

```tsx
import React, { useEffect, useState } from "react";
import PokemonServices from "../../services/PokemonServices";

const PokemonList: React.FC = () => {
    const [pagina, setPagina] = useState<number>(1);
    const [itensPorPagina, setItensPorPagina] = useState<number>(20);

    useEffect(() => {
        PokemonServices.listarPokemons({
            itensPorPagina: itensPorPagina,
            pagina: pagina,
        });
    }, [itensPorPagina, pagina]);

    const handleListarDados = () => {
        PokemonServices.listarPokemons({
            itensPorPagina: itensPorPagina,
            pagina: pagina
        });
    };

    return (
        <React.Fragment></React.Fragment>
    );
};

export default PokemonList;
```

---

## Instalação do Material UI

Para adicionar o **Material UI** (MUI) na aplicação, fizemos uma busca no Google por "mui react install". No primeiro resultado, encontramos o comando de instalação:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

Com esses passos, configuramos a aplicação React utilizando Typescript, Axios e PokeAPI, além de realizar uma integração com o Material UI para melhorar a interface.