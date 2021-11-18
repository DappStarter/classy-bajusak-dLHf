require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name raise mad exchange inflict area slot gauge'; 
let testAccounts = [
"0x400eb0b294f7a86a3dc73b67c18571511b7a827374fe54a31a72eda01ed117be",
"0x7b00c50ce5c1ac78c96de0e76cf933a8e70464a44bdaf160f2b1d2e2e1d2fb2d",
"0xb2b47dcb2ccc9db8ddeaf9b808aeb31a269986621dd23d56f077db030ecec2e3",
"0xbd076fa774e03054951cd82731349f46bd6afbb59084bb79d779d4018b529618",
"0x341cead849a33bf7aecbfdff93788115c4a027732266c67d599f6dafb2817de8",
"0xb15c871e271d681818d307f65007caed92c51a9bb8975e882e6a427c8834dfdb",
"0x89c4903f864ecc8c5f6f9ef7ff1f2275ca3041821deca26bf678c266de787fba",
"0x0a43713628a882b0b8770a44c5923253e12c0496d4b6d21b088d9d1298f5f89a",
"0xd568d50c630ebd2a36dca05878e55d9120c6922202c6c58e9951fe2f0fbf814f",
"0x776bb2e377b5f573cd249adafd4dfca1eb66a962886dd6822cb10b35d8b3ee22"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

