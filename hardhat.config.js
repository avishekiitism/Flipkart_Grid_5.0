require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    localhost: {
      url: "http://localhost:8545", // Make sure this matches your local Ethereum node URL
      chainId: 31337, // Adjust the chain ID if necessary
    },
  }
};
