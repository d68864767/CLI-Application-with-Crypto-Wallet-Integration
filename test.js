```javascript
// Import the required dependencies
const chai = require('chai');
const sinon = require('sinon');
const { web3 } = require('./config');
const { sendETH } = require('./wallet');
const { promptPayment } = require('./payment');
const { handleTransactionError, handlePromptPaymentError } = require('./errorHandler');

// Use Chai's expect for assertions
const expect = chai.expect;

describe('Crypto Wallet Integration', () => {
  let sandbox;

  beforeEach(() => {
    // Create a new sandbox before each test
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    // Restore the sandbox after each test
    sandbox.restore();
  });

  describe('sendETH', () => {
    it('should send ETH successfully', async () => {
      const fromAddress = '0xYourAddress';
      const privateKey = 'YourPrivateKey';

      // Stub the web3.eth.sendSignedTransaction function to simulate a successful transaction
      sandbox.stub(web3.eth, 'sendSignedTransaction').resolves({ status: true });

      const txReceipt = await sendETH(fromAddress, privateKey);

      // Expect the transaction receipt to be an object
      expect(txReceipt).to.be.an('object');

      // Expect the transaction to be successful
      expect(txReceipt.status).to.be.true;
    });
  });

  describe('promptPayment', () => {
    it('should prompt for payment successfully', async () => {
      const fromAddress = '0xYourAddress';
      const privateKey = 'YourPrivateKey';

      // Stub the sendETH function to simulate a successful transaction
      sandbox.stub(sendETH, 'sendETH').resolves({ status: true });

      await promptPayment(fromAddress, privateKey);

      // Expect the sendETH function to have been called once
      expect(sendETH.sendETH.calledOnce).to.be.true;
    });
  });

  describe('handleTransactionError', () => {
    it('should handle transaction errors correctly', () => {
      const error = new Error('insufficient funds');

      // Spy on console.error and console.log
      const consoleErrorSpy = sandbox.spy(console, 'error');
      const consoleLogSpy = sandbox.spy(console, 'log');

      handleTransactionError(error);

      // Expect console.error and console.log to have been called once
      expect(consoleErrorSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledOnce).to.be.true;
    });
  });

  describe('handlePromptPaymentError', () => {
    it('should handle prompt payment errors correctly', () => {
      const error = new Error('invalid address');

      // Spy on console.error and console.log
      const consoleErrorSpy = sandbox.spy(console, 'error');
      const consoleLogSpy = sandbox.spy(console, 'log');

      handlePromptPaymentError(error);

      // Expect console.error and console.log to have been called once
      expect(consoleErrorSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledOnce).to.be.true;
    });
  });
});
```
