<script setup lang="ts">
import { defineProps, PropType } from 'vue';

defineProps({
  name: { type: String, required: true },
  abilities: { type: Array as PropType<string[]>, required: true },
  avatar: { type: String, required: true },
})

</script>

<template>
  <main class="pokemon-data">
    <img :src="avatar" alt="Avatar do pokemon">
    <div class="info">
      <b>{{name}}</b>
      <span 
        class="ability" 
        v-for="ability in abilities"
        :key="ability"
      >
        {{ability}}
      </span>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.pokemon-data{
  .info {
    display: flex;
    flex-direction: column;
  }
}
</style>
