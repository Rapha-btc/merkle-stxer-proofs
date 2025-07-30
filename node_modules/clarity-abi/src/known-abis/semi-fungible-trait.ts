// https://explorer.hiro.so/txid/SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.trait-semi-fungible?chain=mainnet
export default {
  functions: [
    {
      name: 'burn',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
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
      name: 'burn-fixed',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
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
      name: 'mint',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'recipient',
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
      name: 'mint-fixed',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'recipient',
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
      name: 'transfer',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
          type: 'principal',
        },
        {
          name: 'recipient',
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
      name: 'transfer-fixed',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
          type: 'principal',
        },
        {
          name: 'recipient',
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
      name: 'transfer-memo',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
          type: 'principal',
        },
        {
          name: 'recipient',
          type: 'principal',
        },
        {
          name: 'memo',
          type: {
            buffer: {
              length: 34,
            },
          },
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
      name: 'transfer-memo-fixed',
      access: 'public',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
          type: 'principal',
        },
        {
          name: 'recipient',
          type: 'principal',
        },
        {
          name: 'memo',
          type: {
            buffer: {
              length: 34,
            },
          },
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
      name: 'get-balance',
      access: 'read_only',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'who',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-balance-fixed',
      access: 'read_only',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
        {
          name: 'who',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-decimals',
      access: 'read_only',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-overall-balance',
      access: 'read_only',
      args: [
        {
          name: 'who',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-overall-balance-fixed',
      access: 'read_only',
      args: [
        {
          name: 'who',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-overall-supply',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-overall-supply-fixed',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-token-uri',
      access: 'read_only',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              optional: {
                'string-utf8': {
                  length: 256,
                },
              },
            },
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-total-supply',
      access: 'read_only',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-total-supply-fixed',
      access: 'read_only',
      args: [
        {
          name: 'token-id',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
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
