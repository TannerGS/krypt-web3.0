// https://eth-ropsten.alchemyapi.io/v2/47UW7p5PuruBlAJFGK-B0PvhbzK0zwgT

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/47UW7p5PuruBlAJFGK-B0PvhbzK0zwgT',
      accounts: ['4dde7abec92f9dc4b1641d380437b645a96d2373a00177074c561aead159e092']
    }
  }
}