export enum State {
  Unverified = 0,
  Verifying = 2,
  Valid = 1,
  Invalid = -1
}


export interface Bot {
  id?: number
  userId: number;
  gameId: number;
  name: string;
  language: string;
  state: State;
}
