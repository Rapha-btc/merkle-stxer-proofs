export default {
  functions: [
    {
      name: 'end-proposal',
      access: 'public',
      args: [
        {
          name: 'proposal-id',
          type: 'uint128',
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
      name: 'propose',
      access: 'public',
      args: [
        {
          name: 'expiry',
          type: 'uint128',
        },
        {
          name: 'start-block-height',
          type: 'uint128',
        },
        {
          name: 'title',
          type: {
            'string-utf8': {
              length: 256,
            },
          },
        },
        {
          name: 'url',
          type: {
            'string-utf8': {
              length: 256,
            },
          },
        },
        {
          name: 'new-fee-rate-x',
          type: 'uint128',
        },
        {
          name: 'new-fee-rate-y',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'return-votes-to-member',
      access: 'public',
      args: [
        {
          name: 'token',
          type: 'trait_reference',
        },
        {
          name: 'proposal-id',
          type: 'uint128',
        },
        {
          name: 'member',
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
      name: 'vote-against',
      access: 'public',
      args: [
        {
          name: 'token',
          type: 'trait_reference',
        },
        {
          name: 'proposal-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'vote-for',
      access: 'public',
      args: [
        {
          name: 'token',
          type: 'trait_reference',
        },
        {
          name: 'proposal-id',
          type: 'uint128',
        },
        {
          name: 'amount',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
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
