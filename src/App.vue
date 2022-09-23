<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes/>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import Notificacoes from "@/components/Notificacoes.vue";
export default defineComponent({
  name: 'App',
  components: {
    Notificacoes,
    BarraLateral,
  },
  data() {
    return {
      modoEscuro: false
    }
  },
  methods: {
    trocarTema (modoEscuro: boolean) {
      this.modoEscuro = modoEscuro
    }
  }
});
</script>