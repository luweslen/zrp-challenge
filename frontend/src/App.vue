<script setup lang="ts">
import { ref } from 'vue'
import API from './services/API'
import HeaderSearch from './components/HeaderSearch.vue'
import PokemonData from './components/PokemonData.vue'

type PokemonDataType = {
  name: string;
  abilities: string[];
  avatar: string;
}

const pokemonData = ref<PokemonDataType>({})

async function handleSearchPokemon(value: string) {
  const { data } = await API.get<PokemonDataType>(`/pokemon/${value}`)
  pokemonData.value = data
}

</script>

<template>
  <header-search 
    @search="handleSearchPokemon"
  />
  <pokemon-data 
    v-if="pokemonData"
    :name="pokemonData.name"
    :abilities="pokemonData.abilities"
    :avatar="pokemonData.avatar"
  />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  min-height: 100vh;
  
  display: flex;
  justify-content: center;
}

#app {
  min-width: 920px;
}

</style>
