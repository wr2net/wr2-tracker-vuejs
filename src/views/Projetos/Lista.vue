<template>
  <section>

    <div class="columns">
      <div class="column is-9">
        <h3 class="subtitle">
          Projetos Disponíveis
        </h3>
      </div>
      <div class="column is-3">
        <router-link to="/projetos/novo" class="button is-primary">
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
          <span>Novo Projeto</span>
        </router-link>
      </div>
    </div>

    <div v-if="projetos.length > 0">
      <table class="table is-fullwidth is-striped divider">
        <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th class="actions">Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.name }}</td>
          <td class="actions">
            <router-link :to="`/projetos/${projeto.id}`" class="button is-warning">
                <span class="icon is-small">
                  <i class="fas fa-pencil-alt"></i>
                </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="divider has-text-centered">
      <div class="notification is-warning">
        <span class="subtitler">Nenhum registro localizado.</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {useStore} from "@/store";
import {OBTER_PROJETOS,REMOVER_PROJETO} from "@/store/tipo-acoes";

export default defineComponent({
  name: "MyLista",
  methods: {
    excluir (id: string) {
      this.store.dispatch(REMOVER_PROJETO, id)
    }
  },
  setup () {
    const store = useStore()
    store.dispatch(OBTER_PROJETOS)
    return {
      projetos: computed(() => store.state.projeto.projetos),
      store
    }
  }
});
</script>

<style scoped>
.actions {
  text-align: center;
  width: 150px;
}
.divider {
  margin-top: 15px;
  width: 100%;
}
</style>