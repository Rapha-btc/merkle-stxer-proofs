Here's a well-crafted question for Friedger:

---

**Subject: Bitcoin Merkle Proof Generation - How to Get Your Specific Values?**

Hi Friedger,

I've been studying your working Bitcoin proof implementation and successfully reproduced your simulation here: https://github.com/Rapha-btc/merkle-stxer-proofs

Your hardcoded proof data works perfectly with the Clarity contract, but I'm struggling to understand how to generate these specific values from a Bitcoin node.

**The Mystery Values:**

When I use Kenny's `bitcoin-tx-proof` library on the same transaction (`a54f313f68172ac996c37d36baa885486dfea900cce4debca3fcdea7ea45f64f`), I get completely different proof data:

**Your working values:**
- `witnessMerkleRoot`: `"e18fcc4bc6177bef5c1c1b1fc1f1b46a19571381b2d0729c2648edb7d252a456"`
- `witnessMerkleProof`: starts with `"80dcb39ac81d07b650eaf80a932da0e49ad..."`

**Kenny's library returns:**
- No `witnessMerkleRoot` property at all
- `witnessMerkleProof`: starts with `"1af857b5f6b977f10a19b88a5589d69ae4a0..."`

**My Questions:**

1. How did you generate your `witnessMerkleRoot` value? The Bitcoin RPC shows the witness commitment as `7850a29c...` but your value is `e18fcc4b...`

2. Are you using a different version of Kenny's library, or did you calculate these values manually from Bitcoin RPC calls?

3. In your comment "Get proof data and tx data from bitcoin node" - which specific RPC calls or calculations did you use?

4. Your `legacyCoinbaseTxHex` differs from Kenny's `coinbaseTransaction` (yours is shorter) - how do you extract the legacy format?

I can make the contract work with your hardcoded values, but I need to understand the generation process to make it work for any transaction.

Any guidance would be greatly appreciated!

**Repository with reproduction:** https://github.com/Rapha-btc/merkle-stxer-proofs
successful simulation:
https://stxer.xyz/simulations/mainnet/afb46a9be15357ffede06d0f63f8aa3b

Thanks a lot, I appreciate you Master Friedger!