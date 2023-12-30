```javascript
// Import the required dependencies
const { web3 } = require('./config');

// Function to handle errors during transaction
const handleTransactionError = (error) => {
  console.error(`Transaction failed: ${error.message}`);

  // Check if the error is due to insufficient funds
  if (error.message.includes('insufficient funds')) {
    console.log('You do not have enough ETH in your wallet to make this transaction.');
  }

  // Check if the error is due to a wrong private key
  else if (error.message.includes('private key length is invalid')) {
    console.log('The private key you entered is invalid. Please check and try again.');
  }

  // Check if the error is due to a wrong address
  else if (error.message.includes('invalid address')) {
    console.log('The address you entered is invalid. Please check and try again.');
  }

  // For other errors, ask the user to try again
  else {
    console.log('An error occurred while processing your transaction. Please try again.');
  }
};

// Function to handle errors during payment prompt
const handlePromptPaymentError = (error) => {
  console.error(`Failed to prompt payment: ${error.message}`);

  // Check if the error is due to a wrong address
  if (error.message.includes('invalid address')) {
    console.log('The address you entered is invalid. Please check and try again.');
  }

  // For other errors, ask the user to try again
  else {
    console.log('An error occurred while prompting for payment. Please try again.');
  }
};

// Export the functions
module.exports = {
  handleTransactionError,
  handlePromptPaymentError
};
```
