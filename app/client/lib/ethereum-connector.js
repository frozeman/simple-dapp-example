// set provider
if (typeof web3 == "undefined") {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
else if (!web3.currentProvider)
    web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

