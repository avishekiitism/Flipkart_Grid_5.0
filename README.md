# Flipkart_Grid_5.0
Blockchain Loyalty Coins

Welcome to the Loyalty and Rewards Program project! This project aims to develop a blockchain-enabled loyalty and rewards program for E-commerce platforms. The project leverages blockchain technology to enhance security, transparency, and user engagement in the rewards and loyalty ecosystem.

## Features

Generate fungible tokens as loyalty points on the blockchain.
Define tokenomics, including token value and issuance rules.
Implement effective account settlement/reconciliation between Brands and E-commerce platforms.
Earn loyalty points through user actions such as purchases, referrals, and social media interactions.
Distribute earned tokens securely and transparently to customers' digital wallets.
Partners and sellers can issue tokens to loyal customers.
Redeem rewards using tokens with transparent, on-chain tracking.
All token transactions are recorded on the blockchain.
User-friendly interface for managing loyalty points, viewing rewards, and tracking progress.
## Table of Contents

1. Introduction
2. Prerequisites
3. Installation
4. Smart Contracts
5. Frontend
6. Usage
7. Conclusion

## 1. Introduction

The Decentralized Flipkart Clone is a decentralized e-commerce platform built on the Ethereum blockchain. It allows users to mint their products as NFTs and enables purchasing using a stable coin called Flipkart Super Coin. The project is composed of two main components: smart contracts (Solidity) for the backend and a React-based frontend for user interaction.

## 2. Prerequisites

Before you start, ensure you have the following tools and accounts set up:

- Node.js (v14 or higher)
- Ethereum wallet (e.g., MetaMask) with testnet accounts and ETH for gas fees
- Git

## 3. Installation

Clone the repository:

```bash
https://github.com/avishekiitism/Flipkart_Grid_5.0
```

Install dependencies:

```bash
npm install
```

## 4. Smart Contracts

The smart contracts are written in Solidity and handle the core functionalities of the project: minting NFTs and processing purchases with Flipkart Super Coin.

### Compile Contracts:

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

### Deploy Contracts:

Deploy the contracts to a local or testnet network by updating the `hardhat.config.js` with network configurations. Deploy using the following command:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## 5. Frontend

The frontend is built using React and interacts with the smart contracts using Ethers.js. It allows users to mint NFTs and purchase items using Flipkart Super Coin.

### Run Frontend:

Start the React development server:

```bash
npm start
```

## 6. Usage

1. **Mint NFTs**: Connect your Ethereum wallet (e.g., MetaMask) and navigate to the Mint page. Fill in the details of your product and mint it as an NFT.

2. **Purchase with Flipkart Super Coin**: Explore the Marketplace page, select an NFT you want to purchase, and click the "Purchase" button. Confirm the transaction in your wallet.

## 7. Conclusion

Congratulations! You have successfully set up and documented the Decentralized Flipkart Clone project. Users can now mint their products as NFTs and purchase items using Flipkart Super Coin, all within a decentralized environment.

Remember that this documentation provides a simplified overview of the project. In a real-world scenario, you would need to consider security, testing, scalability, and user experience enhancements.







