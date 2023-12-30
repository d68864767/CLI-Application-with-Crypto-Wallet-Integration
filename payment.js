```javascript
// Import the required dependencies
const { web3, paymentAddress, paymentAmount } = require('./config');
const { sendETH } = require('./wallet');

// Function to prompt the user for payment
const promptPayment = async (fromAddress, privateKey) => {
  try {
    // Display the payment request to the user
    console.log(`Please send ${paymentAmount} ETH to the following address: ${paymentAddress}`);

    // Send the ETH from the user's address to the payment address
    const txReceipt = await sendETH(fromAddress, privateKey);

    // Check if the transaction was successful
    if (txReceipt && txReceipt.status) {
      console.log('Payment successful! You now have access to premium features.');
    } else {
      console.log('Payment failed. Please try again.');
    }
  } catch (error) {
    console.error(`Failed to prompt payment: ${error}`);
  }
};

// Export the function
module.exports = {
  promptPayment
};
```
