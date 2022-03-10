<script setup lang="ts">
import { defineProps, PropType } from 'vue';

defineProps({
  name: { type: String, required: true },
  abilities: { type: Array as PropType<string[]>, required: true },
  avatar: { type: String, required: true },
});

</script>

<template>
  <main class="pokemon-data">
    <img
      :src="avatar"
      alt="Avatar do pokemon"
    >
    <h1>{{ name }}</h1>
    <span
      v-for="ability in abilities"
      :key="ability"
      class="ability"
    >
      {{ ability }}
    </span>
  </main>
</template>

<style lang="scss" scoped>
.pokemon-data{
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  border: 2px solid #5db9ff;

  padding: 2rem;

  margin: 0 auto;
  background: #5db9ff;

  @media (max-width: 620px){
    width: 100%;
  }

  img {
    width: 120px;
  }

  h1 {
    color: #fff;
  }

  .ability {
    background: #fff;
    padding: 8px 16px;

    border-radius: 16px;

    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
