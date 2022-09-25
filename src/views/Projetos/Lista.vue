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

    <div v-if="projetos">
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
    <div v-else class="divider is-center">
      <h4 class="subtitle">Nenhum registro localizado.</h4>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {useStore} from "@/store";
import {EXCLUIR_PROJETO} from "@/store/tipo-mutacoes";

export default defineComponent({
  name: "MyLista",
  methods: {
    excluir (id: string) {
      this.store.commit(EXCLUIR_PROJETO, id)
    }
  },
  setup () {
    const store = useStore()
    return {
      projetos: computed(() => store.state.projetos),
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