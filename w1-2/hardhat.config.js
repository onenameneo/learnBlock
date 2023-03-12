require("@nomicfoundation/hardhat-toolbox");

const mnemonic = "shy sing dignity rain worth adapt ill tree echo gesture teach ahead"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: {
        mnemonic,
      },
      chainId: 5,
    }
  }
};
