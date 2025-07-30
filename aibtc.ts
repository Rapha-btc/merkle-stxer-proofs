import { hexToBytes, intToBytes } from "@stacks/common";
import {
  bufferCV,
  listCV,
  principalCV,
  tupleCV,
  uintCV,
} from "@stacks/transactions";
import { SimulationBuilder } from "stxer";
import { proof } from "./proof";
import { tx } from "./tx";

let witnessData = tx.vin.reduce((acc: string, input: any) => {
  acc += input.txinwitness.join("");
  return acc;
}, "");
witnessData =
  "024730440220704c48e3c46f6d1b663ba202f7395af2b647266e126be5b0d98855cf62a35b9802206ff5c6ecd822d8a782a895fab162fcfa392af4a0c915045afaa84aa30f8e9b8c012103f64b159b714d55ff027265c25a1a76daba8fec4cf2fa4daa424aebd4c36fb600";

SimulationBuilder.new({ network: "mainnet" })
  .withSender("SPV9K21TBFAK4KNRJXF5DFP8N7W46G4V9RCJDC22")
  .addContractCall({
    contract_id: "SP33JZDSJ6B4WEGE0CQFEXGWB3QGMZ225HTV2S76E.btc2aibtc",
    function_name: "swap-btc-to-aibtc",
    function_args: [
      uintCV(proof.blockHeight),
      tupleCV({
        version: bufferCV(intToBytes(tx.version, 4).reverse()),
        ins: listCV(
          tx.vin.map((input) => {
            return tupleCV({
              outpoint: tupleCV({
                hash: bufferCV(hexToBytes(input.txid).reverse()),
                index: bufferCV(intToBytes(input.vout, 4).reverse()),
              }),
              scriptSig: bufferCV(hexToBytes(input.scriptSig.hex)),
              sequence: bufferCV(intToBytes(input.sequence, 4).reverse()),
            });
          })
        ),
        outs: listCV(
          tx.vout.map((output) => {
            console.log("output", output);
            return tupleCV({
              value: bufferCV(
                intToBytes(Math.round(output.value * 1e8), 8).reverse()
              ),
              scriptPubKey: bufferCV(hexToBytes(output.scriptPubKey.hex)),
            });
          })
        ),
        locktime: bufferCV(intToBytes(tx.locktime, 4)),
      }),
      bufferCV(hexToBytes(witnessData)),
      bufferCV(hexToBytes(proof.blockHeader)),
      uintCV(proof.txIndex),
      uintCV(proof.merkleProofDepth),
      listCV(
        (proof.witnessMerkleProof.match(/.{1,64}/g) || []).map((w: string) =>
          bufferCV(hexToBytes(w))
        )
      ),
      bufferCV(hexToBytes(proof.witnessMerkleRoot)),
      bufferCV(hexToBytes(proof.witnessReservedValue)),
      bufferCV(hexToBytes(proof.legacyCoinbaseTxHex)),
      listCV(
        (proof.coinbaseMerkleProof.match(/.{1,64}/g) || []).map((w: string) =>
          bufferCV(hexToBytes(w))
        )
      ),
      principalCV("SP2HH7PR5SENEXCGDHSHGS5RFPMACEDRN5E4R0JRM.beast2-faktory"),
      principalCV(
        "SP2HH7PR5SENEXCGDHSHGS5RFPMACEDRN5E4R0JRM.beast2-faktory-dex"
      ),
      principalCV(
        "SP2HH7PR5SENEXCGDHSHGS5RFPMACEDRN5E4R0JRM.xyk-pool-sbtc-beast2-v-1-1"
      ),
      principalCV("SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token"),
    ],
  })
  .run()
  .catch(console.error);
