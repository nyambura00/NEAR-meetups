import {
  keyStores,
  Near,
  WalletConnection,
  utils as nearUtils,
} from "near-api-js";

export const CONTRACT_ID = "dev-1648751639070-78408703513675";

export const near = new Near({
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
});

export const wallet = new WalletConnection(near, "NEAR-meetups");

export const login = () => {
  wallet.requestSignIn(CONTRACT_ID);
};

export const logout = () => {
  wallet.signOut();
  window.location.reload();
};

export const accountId = wallet.getAccountId();

export const viewFunction = async (functionName, args = {}) => {
  const result = await wallet
    .account()
    .viewFunction(CONTRACT_ID, functionName, args);
  return result;
};

export const addEvent = async (functionName, args = {}, deposit = "0") => {
  const result = await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: functionName,
    args: args,
    attachedDeposit: utils.format.parseNearAmount(deposit),
  });
  return result;
}

export async function accountBalance() {
  return formatNearAmount((await window.walletConnection.account().getAccountBalance()).total, 2);
}