<script setup lang="ts">
import { ref } from 'vue';
import API from './services/API';
import HeaderSearch from './components/HeaderSearch.vue';
import PokemonData from './components/PokemonData.vue';

type PokemonDataType = {
  name: string;
  abilities: string[];
  avatar: string;
}

const pokemonData = ref<PokemonDataType | undefined>();
const message = ref('Coloque o nome de um pokemon para saber as habilidades dele');

async function handleSearchPokemon(value: string) {
  pokemonData.value = undefined;
  const { data } = await API.get<PokemonDataType | { error: string }>(`/pokemon/${value.toLowerCase()}`);

  if ('error' in data) {
    message.value = 'Não foi encontrado dados deste pokemon, tente outro nome!';
  } else {
    pokemonData.value = data;
  }
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
  <span
    v-else
    class="no-data"
  >
    {{ message }}
  </span>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: Arial, sans-serif;
}

body {
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
}

#app {
  max-width: 1080px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px;

  @media (max-width: 1080px){
    width: 100%;
  }

  span.no-data{
    text-align: center;
  }
}

</style>
