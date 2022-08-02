export enum StateGame {
  Hidden,
  Opened,
  Playing,
  Closed
}


export interface Game {
  id: number;
  name: string;
  previewImageId: number;
  htmlContent: string;
  state: StateGame;
  endDate: Date;
}
