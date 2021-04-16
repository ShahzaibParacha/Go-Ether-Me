// /**
//  * Use this file to configure your truffle project. It's seeded with some
//  * common settings for different networks and features like migrations,
//  * compilation and testing. Uncomment the ones you need or modify
//  * them to suit your project as necessary.
//  *
//  * More information about configuration can be found at:
//  *
//  * trufflesuite.com/docs/advanced/configuration
//  *
//  * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
//  * to sign your transactions before they're sent to a remote public node. Infura accounts
//  * are available for free at: infura.io/register.
//  *
//  * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
//  * public/private key pairs. If you're publishing your code to GitHub make sure you load this
//  * phrase from a file you've .gitignored so it doesn't accidentally become public.
//  *
//  */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
// const mnemonic = 'YOUR 12 WORDS MNEMONIC';

// const fs = require('fs');
// // const mnemonic = fs.readFileSync(".secret").toString().trim();

// module.exports = {
//   /**
//    * Networks define how you connect to your ethereum client and let you set the
//    * defaults web3 uses to send transactions. If you don't specify one truffle
//    * will spin up a development blockchain for you on port 9545 when you
//    * run `develop` or `test`. You can ask a truffle command to use a specific
//    * network from the command line, e.g
//    *
//    * $ truffle test --network <network-name>
//    */

//   networks: {
//     // Useful for testing. The `development` name is special - truffle uses it by default
//     // if it's defined here and no other network is specified at the command line.
//     // You should run a client (like ganache-cli, geth or parity) in a separate terminal
//     // tab if you use this network and you must also set the `host`, `port` and `network_id`
//     // options below to some value.
//     //
//     development: {
//      host: "127.0.0.1",     // Localhost (default: none)
//      port: 8545,            // Standard Ethereum port (default: none)
//      network_id: "*",       // Any network (default: none)
//     },
    
//     // Another network with more advanced options...
//     // advanced: {
//     // port: 8777,             // Custom port
//     // network_id: 1342,       // Custom network
//     // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
//     // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
//     // from: <address>,        // Account to send txs from (default: accounts[0])
//     // websocket: true        // Enable EventEmitter interface for web3 (default: false)
//     // },
//     // Useful for deploying to a public network.
//     // NB: It's important to wrap the provider as a function.
//     ropsten: {
//     provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${infuraKey}`),
//     network_id: 3,       // Ropsten's id
//     gas: 5500000,        // Ropsten has a lower block limit than mainnet
//     // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
//     // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//     // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
//     },
//     // Useful for private networks
//     // private: {
//     // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
//     // network_id: 2111,   // This network is yours, in the cloud.
//     // production: true    // Treats this network as if it was a public net. (default: false)
//     // }
//   },

//   // Set default mocha options here, use special reporters etc.
//   mocha: {
//     // timeout: 100000
//   },

//   // Configure your compilers
//   compilers: {
//     solc: {
//       // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
//       // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
//       // settings: {          // See the solidity docs for advice about optimization and evmVersion
//       //  optimizer: {
//       //    enabled: false,
//       //    runs: 200
//       //  },
//       //  evmVersion: "byzantium"
//       // }
//     },
//   },

//   // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
//   //
//   // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
//   // those previously migrated contracts available in the .db directory, you will need to run the following:
//   // $ truffle migrate --reset --compile-all

//   db: {
//     enabled: false,
//   },
// };



const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const credentials = JSON.parse(fs.readFileSync(".secrets").toString().trim());

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: '*'
    },
    // ropsten: {
    //   provider: () => 
    //     new HDWalletProvider(credentials.mnemonic, `https://ropsten.infura.io/v3/${credentials.projectID}`),
    //     network_id: 3
    // }
  }
};

// Accounts:
// (0) 0x10c021f1edf52aac04762d4aef85cdd6fe21e929
// (1) 0x6506113dd35be29cfb49592ad50200fb04d52946
// (2) 0x5a44e3afa895fa160ab0ebe81393046ba14d4bb6
// (3) 0x45e75f74ea0ef2e578436c8ff4853e977e4cf1b2
// (4) 0x99202fa262a77860d27a3d9f076139297293dfd4
// (5) 0xd8815d3e54ef570493e6e81c4a42df7fd5fc79c9
// (6) 0x36080ab98c5b847afb78388c17c689a3705a28da
// (7) 0xdb55411214045fbaaeef5805b81f0610abccf4e3
// (8) 0x37f4f566f2d3dfed7b91bfc7466a0cf79f70070b
// (9) 0x95091f1f4080634febaf1bb9f94a3e26186c6306

// Private Keys:
// (0) 30148d43ba980641c77253d1bf3dcd8029bfb8cb0c908e10b86f844e36be5a46
// (1) 47e77c53c81250870804d78a81aee6555d2fb1e28a72fcd2487aee91e5aac240
// (2) 076488eb55b285fe3966b098ecbf51d3abf785ecec8d39249b1765d834cb059b
// (3) 1d25d439e6893e74b1b57eec38b1e60e1a2c42cdf23bfe344053bc1cbb0e4fe0
// (4) c7bd749f2abdb31b66527b8ff9feed9363358825a311c84de86e25c73cbc1dde
// (5) 44fba8c57b18b5afda164a5dcd52148a02fd51b0f910be0904b251dc67e6e47f
// (6) fbc9cf61cd38014d9e5536e26c4a9ed19bbdf6bb9e5f198d913d2411ac63d310
// (7) 364dcab52280d6ca97549c2490d6bec80739cee1f74b2d763ff2be7a5f500e59
// (8) eae35facaec7f39198b16709981671e0aeb972768f2179900993963b1aac195c
// (9) 8a71b5102947f6b3ba207f1d98985ae7875a24fea21add3183a575d318193632