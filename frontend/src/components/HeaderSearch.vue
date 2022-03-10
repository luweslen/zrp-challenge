<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emit = defineEmits([
  'search',
]);

const searchValue = ref('');

function hanldeSearch() {
  emit('search', searchValue.value);
}
</script>

<template>
  <header class="header-search">
    <input
      v-model="searchValue"
      type="text"
      placeholder="Digite o nome do pokemon"
    >
    <button @click="hanldeSearch">
      Pesquisar
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header-search{
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 620px){
    flex-direction: column;
  }

  input {
    width: 100%;
    font-size: 18px;
    padding: 8px 16px;
  }

  button {
    border-color: transparent;
    font-size: 18px;
    padding: 8px 16px;

    background: #5db9ff;

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    @media (max-width: 620px){
     width: 100%;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
