```javascript
// Import the required dependencies
const { web3, paymentAddress, paymentAmount } = require('./config');

// Function to send ETH to the specified address
const sendETH = async (fromAddress, privateKey) => {
  try {
    // Convert the payment amount to Wei (smallest unit of ETH)
    const amountInWei = web3.utils.toWei(paymentAmount.toString(), 'ether');

    // Estimate the gas price for the transaction
    const gasPrice = await web3.eth.getGasPrice();

    // Get the transaction count of the fromAddress
    const txCount = await web3.eth.getTransactionCount(fromAddress);

    // Define the transaction details
    const txDetails = {
      nonce: web3.utils.toHex(txCount),
      gasPrice: web3.utils.toHex(gasPrice),
      gasLimit: web3.utils.toHex(21000),
      to: paymentAddress,
      value: web3.utils.toHex(amountInWei),
      chainId: 1 // Mainnet ID
    };

    // Sign the transaction with the private key
    const signedTx = await web3.eth.accounts.signTransaction(txDetails, privateKey);

    // Send the signed transaction
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    // Return the transaction receipt
    return txReceipt;
  } catch (error) {
    console.error(`Failed to send ETH: ${error}`);
  }
};

// Export the function
module.exports = {
  sendETH
};
```
