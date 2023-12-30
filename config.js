```javascript
// Import the required dependencies
const Web3 = require('web3');

// Define the Ethereum network to be used
const network = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID';

// Create an instance of web3 and set the provider
const web3 = new Web3(new Web3.providers.HttpProvider(network));

// Define the wallet address to receive payments
const paymentAddress = '0xFD92b71e4D2Ae07FDc5816Bd38Efa97C668914cA';

// Define the amount to be paid for accessing certain features (in ETH)
const paymentAmount = 1;

// Export the configurations
module.exports = {
  web3,
  paymentAddress,
  paymentAmount
};
```
