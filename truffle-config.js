require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')

// console.log('process.env: ', process.env);

module.exports = {
  networks: {
    develop: {
      provider() {
        return new HDWalletProvider(
          process.env.TRUFFLE_MNEMONIC,
          'http://localhost:8545/'
        )
      },
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    ganache: {
      provider() {
        return new HDWalletProvider(
          process.env.GANACHE_MNEMONIC,
          'http://localhost:8545'
        )
      },
      host: 'localhost',
      port: 8545,
      network_id: 5777,
      gas: 10000000,
      gasPrice: 1000000000
    },
    mainnet: {
      provider() {
        // using wallet at index 1 ----------------------------------------------------------------------------------------v
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY,
          1
        )
      },
      network_id: 1
      // gas: 5561260
    },
    kovan: {
      provider() {
        // using wallet at index 1 ----------------------------------------------------------------------------------------v
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://kovan.infura.io/v3/' + process.env.INFURA_API_KEY,
          1
        )
      },
      network_id: 42
      // gas: 5561260
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider("058288C051B19E4D8E3971DF1B4C8BC6ADFD6AE9247738F11C566EC3AFD358DE", 'https://rinkeby.infura.io/v3/' + process.env.INFURA_API_KEY);
        // return new HDWalletProvider(
        //   process.env.TESTNET_MNEMONIC,
        //   'https://rinkeby.infura.io/v3/' + process.env.INFURA_API_KEY
        // )
      },
      network_id: 4,
      // gas: 4700000,
      gasPrice: 200000000000 // 200 GWEI
    },
    ropsten: {
      provider() {
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://ropsten.infura.io/v3/' + process.env.INFURA_API_KEY
        )
      },
      network_id: 2
      // gas: 4700000
    },
    sokol: {
      provider() {
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://sokol.poa.network'
        )
      },
      gasPrice: 1000000000,
      network_id: 77
    },
    poa: {
      provider() {
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://core.poa.network'
        )
      },
      gasPrice: 1000000000,
      network_id: 99
    }
  }
}
