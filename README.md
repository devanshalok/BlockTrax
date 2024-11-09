# BlockTrax

**BlockTrax** is a smart fund tracking system tailored for NGOs and non-profits. Built using blockchain technology, BlockTrax ensures transparent and secure tracking of donations, allowing donors to verify that their contributions reach the intended recipients. This decentralized application (dApp) leverages blockchain’s immutability and transparency features, integrating MetaMask for secure transactions and utilizing a blockchain infrastructure specifically designed for non-profit transparency.

## Project Overview

BlockTrax addresses a common challenge for NGOs and non-profits: donor trust. With BlockTrax, donors have the assurance that their funds are directed precisely to the intended beneficiary, with the entire transaction process visible and verifiable on the blockchain. This system fosters trust and encourages greater contributions by providing a transparent, tamper-proof record of all donations.

## Key Features

- **Blockchain-based Tracking**: Every donation is recorded on the blockchain, ensuring secure, immutable transaction records.
- **MetaMask Integration**: Donors can use MetaMask to initiate and verify transactions easily and securely.
- **Real-Time Transparency**: Donors can monitor the status of their donations and confirm that funds are reaching the intended recipients.
- **Smart Contract Verification**: Leveraging smart contracts to automate fund transfers and minimize intermediary involvement.

## Getting Started

Follow these steps to set up and run BlockTrax on your local machine for development and testing.

### Prerequisites

To run BlockTrax locally, you’ll need:

- **Node.js** and **npm** for package management
- **MetaMask** browser extension for transaction management
- **Ganache** for local Ethereum blockchain simulation (or any preferred test blockchain)
- Familiarity with **Solidity** and **JavaScript** for smart contract and dApp development

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/devanshalok/blocktrax.git
   cd blocktrax
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Local Blockchain (Ganache)**

   Start a local blockchain for testing using Ganache or connect to an Ethereum test network.

4. **Configure MetaMask**

   Connect MetaMask to your local blockchain or Ethereum test network.

5. **Deploy Smart Contracts**

   Use the provided deployment scripts to deploy the smart contracts to your chosen blockchain network.

   ```bash
   truffle migrate --network development
   ```

6. **Run the Application**

   ```bash
   npm start
   ```

   The dApp will be accessible at `http://localhost:3000`.

## Technology Stack

1. **Blockchain Technologies**:
   - **Ethereum**: Blockchain platform for running smart contracts.
   - **IPFS**: Decentralized storage for records and verification data.
   - **Solidity**: Language for writing smart contracts.

2. **Frontend & Tools**:
   - **React.js**: Frontend framework for building the user interface.
   - **MetaMask**: Wallet integration for secure transactions.
   - **Truffle**: Development framework for Ethereum dApps.
   - **Ganache**: Local blockchain for development and testing.

3. **Backend**:
   - **Node.js** and **Express** (if applicable): Backend server for handling API requests.

## Usage

1. **Making a Donation**: Donors can connect their MetaMask wallet to BlockTrax, choose the NGO or non-profit they wish to support, and make a donation. Each transaction is recorded on the blockchain.
   
2. **Tracking Donations**: Donors can view the status of their donations in real-time, ensuring funds are transferred to the designated beneficiaries.

3. **NGO Verification**: Each NGO’s records are verifiable on IPFS and the blockchain, ensuring legitimacy and transparency for all parties involved.

## Running Tests

To ensure the reliability of BlockTrax, run tests for the smart contracts and dApp functionalities:

```bash
truffle test
```

Tests include validation of smart contract functions, correct recording of donations, and accurate tracking of fund transfers.

## Deployment

Deploy BlockTrax to a production blockchain network using a cloud provider or Ethereum Mainnet. Configure MetaMask to use the main network for live donations.

1. Update the blockchain network configuration in the MetaMask settings.
2. Use a production blockchain (e.g., Ethereum Mainnet) and verify contract deployment with `truffle migrate`.

## Built With

- **Ethereum** - Blockchain platform for decentralized apps
- **React** - Frontend framework for user interface
- **MetaMask** - For wallet and transaction handling
- **Truffle** - Development framework for Ethereum
- **IPFS** - Decentralized storage for metadata

## Contributing

Contributions to BlockTrax are welcome! Please see `CONTRIBUTING.md` for our guidelines on contributing code, reporting issues, and submitting pull requests.

## Authors

- **Devansh Alok** - Initial work - [devanshalok](https://github.com/devanshalok)
- **Pradyumna Raparti** - Initial work - [prady](https://github.com/voidprady)
- **Auni Bagchi** - Initial work - [devanshalok](https://github.com/aunib)
- **Rushi Sharma** - Initial work - [devanshalok](https://github.com/rushis)

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgments

- Inspiration from transparency-focused non-profit platforms.
- Thanks to the blockchain community for smart contract resources and insights.
- Special gratitude to all contributors to blockchain and dApp development frameworks.
