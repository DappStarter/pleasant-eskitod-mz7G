require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain purpose hidden entry bridge since'; 
let testAccounts = [
"0x9cbc2e129fa756ed67dfbb627505ec0e4294351831517814b262325902f4f877",
"0x09c8ba2ac51396346440aecd2ada56d73aaabff642862be0886ebba7c02166bb",
"0x7880ce4b63dd21f230bbfc016be5b73329c10d1499f7d8f6edd46ccac264d3a3",
"0x2f29331309766cac86ea348ffd20177cbce0245fbbf61d763400e38e81044a2f",
"0x21a1d2d58099759b07825edf5d2552aebc3f2b81b6ea02fa57ea280e0ee955ab",
"0xf3ec5848be23d5eea1ac60e4b930d1f680753dd6669c4084c8e38657ca09ae13",
"0x483f2445b0aeff5883d878592485ce275cf920db374ea658aeb1aca41665e229",
"0x475d709ce180835fce680c2637da91df4662a7fd1ecb46d0baa77643db97d758",
"0x5ea7fa2bc1b8c92d1d2a90561e43bb3e8418e9ff676eb9c50a1cac8cc0cec46a",
"0x420b63569d4536cb95f55e304b25aa970759325de8347bdabb6f77703913623f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

