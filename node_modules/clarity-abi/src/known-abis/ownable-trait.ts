// https://explorer.hiro.so/txid/SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.trait-ownable
export default {
  functions: [
    {
      name: 'set-contract-owner',
      access: 'public',
      args: [
        {
          name: 'owner',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-contract-owner',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'principal',
            error: 'none',
          },
        },
      },
    },
  ],
  variables: [],
  maps: [],
  fungible_tokens: [],
  non_fungible_tokens: [],
  epoch: 'Epoch2_05',
  clarity_version: 'Clarity1',
} as const;
