contractCode = '6060604052610157806100136000396000f30060606040523615610048576000357c01000000000000000000000000000000000000000000000000000000009004806318559e19146100b457806394707dab146100cb57610048565b6100ae5b60003411156100ab577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b565b60006000f35b6100c56004803590602001506100e6565b60006000f35b6100dc600480359060200150610131565b8060005260206000f35b80600060006101000a81548160ff021916908302179055507fc86aa3e5b1bc5a674de25655f9a3ccf734594e22d008e71d7ede3fe5c93e138460405180905060405180910390a15b50565b6000600060009054906101000a900460ff1660ff168260ff16149050610152565b91905056';

GuessNumber = web3.eth.contract([{"constant":false,"inputs":[{"name":"givenNumber","type":"uint8"}],"name":"setNumber","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"givenNumber","type":"uint8"}],"name":"guessNumber","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[],"name":"SetNumber","type":"event"}]);
GuessNumberInstance = GuessNumber.at('0x89a0368e0021a72987a5fa547cb1d9b235194e2e');


/*

To deploy the contract on your own call:

    var contractInstance = GuessNumber.new({from: web3.eth.accounts[0], gas: 200000, data: contractCode});

To get the address use:

    contractInstance.address;

*/


/*
Set the number use:

    GuessNumberInstance.setNumber(10, {from: '0x343c98e2b6e49bc0fed722c2a269f3814ddd1533', gas: 50000})

*/


/*

To send money to the contract use:

    web3.eth.sendTransaction({from: web3.eth.accounts[0], to: '0x89a0368e0021a72987a5fa547cb1d9b235194e2e' ,value: 123000000000})

*/