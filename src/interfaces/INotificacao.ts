export enum TipoNotificacao {
  SUCCESS,
  DANGER,
  WARNING

}

export interface INotificacao {
  titulo: string
  texto: string
  tipo: TipoNotificacao
  id: number
}