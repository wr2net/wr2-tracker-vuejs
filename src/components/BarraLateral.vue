<template>
  <header class="has-text-centered">
    <h1>
      <img src="../assets/logo.jpg" alt="WR2 Tracker" class="logo" />
    </h1>
    <button class="button is-dark" @click="alterarTema">
      {{textoBotao}}
    </button>
    <nav class="panel mt-5 has-text-left">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i> Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i> Projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuro: false
    }
  },
  computed: {
    textoBotao () {
      if (this.modoEscuro) {
        return "Desativar modo escuro"
      }
      return "Ativar modo escuro"
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuro = !this.modoEscuro
      this.$emit('aoTemaAlterado', this.modoEscuro)
    },
  },
})
</script>

<style scoped>
header {
  background: #0d3d65;
  width: 100%;
  height: 100vh;
  padding: 1rem;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.logo {
  width: 180px;
  height: auto;
  border-radius: 50%;
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active{
  color: #faf0ca;
}
</style>