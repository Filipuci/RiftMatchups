# Matchups Guide

Aplicação feita com React + TypeScript para consultar matchups de campeões do League of Legends.

Atualmente o projeto é focado na Camille Top Lane, trazendo informações estratégicas sobre cada matchup, incluindo:

- Dificuldade da lane
- Notas importantes
- O que fazer
- O que evitar
- Indicadores visuais por dificuldade

O projeto está em desenvolvimento e futuramente será expandido para outros campeões e matchups gerais do jogo.

---

## Preview

### Funcionalidades atuais

- Lista de matchups da Camille
- Consumo da API Data Dragon da Riot
- Renderização automática dos ícones dos campeões
- Sistema visual de dificuldade
- Estrutura tipada com TypeScript

---

## Tecnologias utilizadas

- React
- TypeScript
- TailwindCSS
- Vite

---

## Estrutura do projeto

```bash
src/
 ├── components/
 │    └── TableMatchups.tsx
 │
 ├── data/
 │    └── matchupsData.ts
 │
 ├── types/
 │    ├── difficulty.ts
 │    └── matchup.ts   
 │
 ├── App.tsx
 └── main.tsx
```
## Como executar o projeto
```bash
Clone o repositório:

git clone https://github.com/Filipuci/RiftMatchups.git

Entre na pasta:

cd RiftMatchups

Instale as dependências:

npm install

Execute o projeto:

npm run dev
```

## Melhorias planejadas
- Sistema de busca funcional
- Filtro por dificuldade
- Suporte para múltiplos campeões
- Matchups organizados por rota
- Melhor responsividade
- Persistência de dados/API própria
- Sistema de favoritar matchups
- Dark mode refinado
- Melhor UI/UX
- Objetivo do projeto

## Status do projeto

🚧 Em desenvolvimento
