export interface Token {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  error?: string;
}

export type xoBlockNumber = 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9;

export class Block {
  constructor(
    public i: number,
    public j: number,
    public type: 'x' | 'o' | '',
  ) { }
}