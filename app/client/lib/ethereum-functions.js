// get the latest block
web3.eth.filter('latest').watch(function(e, blockHash) {
    if(!e) {
        web3.eth.getBlock(blockHash, function(e, block){
            Session.set('latestBlock', block);
        });
    }
});



// Check if money arrived
// Note checking from block 0 is very unperformant!
GuessNumberInstance.Deposit({},{fromBlock: 0, toBlock: 'latest'}).watch(function(e, log) {
    if(!e) {
        console.log('Money arrived! From:'+ log.args.from, log.args.value.toString(10));

        // add the transaction to our collection
        Deposits.upsert('tx_'+ log.transactionHash ,{
            from: log.args.from,
            value: log.args.value.toString(10),
            blockNumber: log.blockNumber
        });
    }
});



// Check if somebody set a number
GuessNumberInstance.SetNumber({}).watch(function(e, log) {
    if(!e) {
        console.log('A new number was set on block #'+ log.blockNumber);
        alert('A new number was set on block #'+ log.blockNumber + ' Try to guess!');
    }
});
