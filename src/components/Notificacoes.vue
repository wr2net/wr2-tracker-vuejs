<template>
  <div class="notificacoes">
    <article
      class="message"
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">
        <p>{{notificacao.titulo}}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {{notificacao.texto}}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "@/store";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "MyNotificacoes",
  data () {
    return {
      contexto: {
        [TipoNotificacao.SUCCESS]: 'is-success',
        [TipoNotificacao.WARNING]: 'is-warning',
        [TipoNotificacao.DANGER]: 'is-danger',
      }
    }
  },
  setup () {
    const store = useStore()
    return {
      notificacoes: computed(() => store.state.notificacoes)
    }
  }
})
</script>

<style scoped>
.notificacoes {
  z-index: 100;
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
}
</style>