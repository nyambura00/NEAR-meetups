import { WalletConnection } from "near-api-js";

export {};

declare global {
  interface Window {
    contract:any;
    walletConnection?: WalletConnection;
    accountId?: any;
  }
}
