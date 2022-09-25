<template>
  <section>
    <div class="columns">
      <div class="column is-11">
        <h3 class="subtitle">
          <span v-if="id">Editar </span>
          <span v-else>Novo </span>
          Projeto
        </h3>
      </div>
      <div class="column is-1">
        <router-link to="/projetos" class="button is-info" aria-labelledby="Voltar">
          <span class="icon is-small">
            <i class="fas fa-arrow-left"></i>
          </span>
        </router-link>
      </div>
    </div>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">
          Nome do Projeto
        </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useStore} from "@/store";
import {ADICIONA_PROJETO, ALTERA_PROJETO} from "@/store/tipo-mutacoes";
import {TipoNotificacao} from "@/interfaces/INotificacao";
import useNotificador from '@/hooks/notificador';

export default defineComponent({
  name: "MyProjetos",
  props: {
    id: {
      type: String
    },
  },
  data () {
    return {
      nomeDoProjeto: "",
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
      this.nomeDoProjeto = projeto?.name || "";
    }
  },
  methods: {
    salvar () {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          name: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }
      this.nomeDoProjeto = "";
      this.notificar(TipoNotificacao.SUCCESS, 'Novo projeto salvo', "Prontinho ;) seu projeto já está disponível.");
      this.$router.push('/projetos')
    },
  },
  setup () {
    const store = useStore()
    const {notificar} = useNotificador()
    return {
      store,
      notificar
    }
  }
});
</script>