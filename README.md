# Ðapp example

This example showcases the basic principles of a Ðapp build in Meteor:

- Separate the ethereum logic from you dapp
- Receive Logs from contracts
- Call contract funcitons

## Getting started

Start a geth node on a testnet:

    $ geth --rpccorsdomain "*" --rpc --networkid 8545 --minerthreads "1" --datadir <somePath>/testChain --mine

Add `--unlock <your account>` if you want to use your account to setNumbers in the contract.


To start this on your own you need to deploy the contract code from inside `client/lib/contract.js` first and replace the address in line 4 (`GuessNumberInstance = GuessNumber.at(...)`).


## Play around

### To deploy the contract on your own call:
```js
var contractInstance = GuessNumber.new({from: web3.eth.accounts[0], gas: 200000, data: contractCode});
```
### To get the address use:
```js
contractInstance.address;
```



### Set the number use:
```js
GuessNumberInstance.setNumber(10, {from: <your account>, gas: 50000})
```


### To send money to the contract use:
```js
web3.eth.sendTransaction({from: web3.eth.accounts[0], to: <contract address> , value: 123000000000})
```


### A workshop explaining how to build Ðapps with Meteor using this project as an example can be found here:
https://www.youtube.com/watch?v=SayS1dcMVWU
