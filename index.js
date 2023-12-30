```javascript
// Import the required dependencies
const readline = require('readline');
const { promptPayment } = require('./payment');
const { handleTransactionError, handlePromptPaymentError } = require('./errorHandler');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to start the CLI application
const startApp = () => {
  console.log('Welcome to our CLI application!');

  // Prompt the user for their Ethereum address and private key
  rl.question('Please enter your Ethereum address: ', (fromAddress) => {
    rl.question('Please enter your private key: ', (privateKey) => {
      // Attempt to prompt the user for payment
      promptPayment(fromAddress, privateKey)
        .catch(handlePromptPaymentError)
        .finally(() => {
          // Close the readline interface
          rl.close();
        });
    });
  });
};

// Handle any uncaught exceptions
process.on('uncaughtException', handleTransactionError);

// Start the application
startApp();
```
