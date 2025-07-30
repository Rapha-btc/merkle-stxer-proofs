import { BitcoinRPCConfig, bitcoinTxProof } from 'bitcoin-tx-proof';
import { BitcoinRPC } from 'bitcoin-tx-proof/dist/rpc';
import fs from 'fs';

const btcRPCConfig: BitcoinRPCConfig = {
  url: 'http://localhost:8332',
  username: 'RaphaBtc',
  password: ''
};

const btcRPC = new BitcoinRPC(btcRPCConfig);

const blockheight = 906982;
const txid = 'a54f313f68172ac996c37d36baa885486dfea900cce4debca3fcdea7ea45f64f';

const main = async () => {
  try {
    console.log('Starting data fetch...');
    
    console.log('Fetching block hash...');
    const blockHash = await btcRPC.call('getblockhash', [blockheight]);
    console.log('Block hash:', blockHash);
    
    console.log('Fetching transaction...');
    const tx = await btcRPC.call('getrawtransaction', [txid, 1, blockHash]);
    fs.writeFileSync('tx.json', JSON.stringify(tx, null, 2));
    console.log('Saved tx.json');
    
    console.log('Generating proof... (this may take a while)');
    const proof = await bitcoinTxProof(txid, blockheight, btcRPCConfig);
    fs.writeFileSync('proof.json', JSON.stringify(proof, null, 2));
    console.log('✅ Saved proof.json');
    console.log('Proof keys:', Object.keys(proof));
    
  } catch (error) {
    console.error('❌ Error:', error);
    console.error('Error message:', error.message);
    if (error.stack) {
      console.error('Stack trace:', error.stack);
    }
  }
};

main();