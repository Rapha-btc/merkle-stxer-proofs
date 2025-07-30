export type TPrincipal =
  | `SP${string}`
  | `SM${string}`
  | `ST${string}`
  | `SN${string}`;
export type TContractPrincipal = `${TPrincipal}.${string}`;
export type HexString = `0x${string}`;
