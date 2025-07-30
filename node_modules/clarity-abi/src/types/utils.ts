import type {
  ClarityAbiFunction,
  ClarityAbiMap,
  ClarityAbiType,
  ClarityAbiTypeBool,
  ClarityAbiTypeBuffer,
  ClarityAbiTypeInt128,
  ClarityAbiTypeList,
  ClarityAbiTypeNone,
  ClarityAbiTypeOptional,
  ClarityAbiTypePrincipal,
  ClarityAbiTypeResponse,
  ClarityAbiTypeStringAscii,
  ClarityAbiTypeStringUtf8,
  ClarityAbiTypeTraitReference,
  ClarityAbiTypeTuple,
  ClarityAbiTypeUInt128,
  ClarityAbiVariable,
} from './abi.js';
import type { TContractPrincipal, TPrincipal } from './common.js';

export type MergeUnion<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Infers embedded primitive type of any type
 *
 * @param T - Type to infer
 * @returns Embedded type of {@link TType}
 *
 * @example
 * type Result = Narrow<['foo', 'bar', 1]>
 */
export type Narrow<TType> =
  | (TType extends Function ? TType : never)
  | (TType extends string | number | boolean | bigint ? TType : never)
  | (TType extends [] ? [] : never)
  | {
      [K in keyof TType]: Narrow<TType[K]>;
    };

//////////////////////////////////////////////////////////////////////
// ABI Clarity Value to Typescript representations

type InternalInferClarityAbiTypeTuple<
  T extends ClarityAbiTypeTuple['tuple'],
  R extends Record<string, unknown> = {},
> = T extends readonly [
  infer F,
  ...infer Rest extends ClarityAbiTypeTuple['tuple'],
]
  ? F extends ClarityAbiTypeTuple['tuple'][number]
    ? InternalInferClarityAbiTypeTuple<
        Rest,
        R & Record<F['name'], InferClarityAbiType<F['type']>>
      >
    : R
  : R;

/**
 * Converts {@link ClarityAbiTypeTuple} to corresponding TypeScript object type.
 *
 * @param T - {@link ClarityAbiTypeTuple} to convert to TypeScript representations
 * @returns TypeScript object type
 */
export type InferClarityAbiTypeTuple<T extends ClarityAbiTypeTuple['tuple']> =
  InternalInferClarityAbiTypeTuple<T>;

/**
 * Converts {@link ClarityAbiType} to corresponding TypeScript representations.
 *
 * @param T - {@link ClarityAbiType} to convert to TypeScript representations
 * @returns TypeScript object type or primitive types
 */
export type InferClarityAbiType<T extends ClarityAbiType> =
  T extends ClarityAbiTypeBuffer
    ? Uint8Array
    : T extends ClarityAbiTypeStringAscii
      ? string
      : T extends ClarityAbiTypeStringUtf8
        ? string
        : T extends ClarityAbiTypeResponse
          ?
              | {
                  type: 'success';
                  value: InferClarityAbiType<T['response']['ok']>;
                }
              | {
                  type: 'error';
                  error: InferClarityAbiType<T['response']['error']>;
                }
          : T extends ClarityAbiTypeOptional
            ? InferClarityAbiType<T['optional']> | null
            : T extends ClarityAbiTypeTuple
              ? InferClarityAbiTypeTuple<T['tuple']>
              : T extends ClarityAbiTypeList
                ? Array<InferClarityAbiType<T['list']['type']>>
                : T extends ClarityAbiTypeUInt128
                  ? bigint
                  : T extends ClarityAbiTypeInt128
                    ? bigint
                    : T extends ClarityAbiTypeBool
                      ? boolean
                      : T extends ClarityAbiTypePrincipal
                        ? TPrincipal | TContractPrincipal
                        : T extends ClarityAbiTypeTraitReference
                          ? string
                          : T extends ClarityAbiTypeNone
                            ? null
                            : never;

//////////////////////////////////////////////////////////////////////
// ABI Functions

export type GetFunctionByName<
  Functions extends readonly ClarityAbiFunction[],
  FunctionName extends Functions[number]['name'],
  V extends ClarityAbiFunction['access'] = 'read_only' | 'public',
> = Functions extends readonly [
  infer F,
  ...infer Rest extends readonly ClarityAbiFunction[],
]
  ? F extends {
      name: FunctionName;
      access: V;
    }
    ? F
    : GetFunctionByName<Rest, FunctionName, V>
  : never;

export type ExtractFunctionsByVisibility<
  Functions extends readonly ClarityAbiFunction[],
  V extends ClarityAbiFunction['access'],
> = Extract<Functions[number], { access: V }>;

//////////////////////////////////////////////////////////////////////
// ABI Maps

export type GetMapNames<Maps extends readonly ClarityAbiMap[]> =
  Maps[number]['name'];

export type GetMapByName<
  Maps extends readonly ClarityAbiMap[],
  MapName extends GetMapNames<Maps>,
> = MapName extends GetMapNames<Maps>
  ? Extract<Maps[number], { name: MapName }>
  : never;

export type GetMapKeyType<
  Maps extends readonly ClarityAbiMap[],
  MapName extends GetMapNames<Maps>,
  Map extends ClarityAbiMap = GetMapByName<Maps, MapName>,
  K = InferClarityAbiType<Map['key']>,
> = K extends never ? never : {} extends K ? never : K;

export type GetMapValueType<
  Maps extends readonly ClarityAbiMap[],
  MapName extends GetMapNames<Maps>,
  Map extends ClarityAbiMap = GetMapByName<Maps, MapName>,
> = InferClarityAbiType<Map['value']>;

//////////////////////////////////////////////////////////////////////
// ABI Variables

type InternalGetVariablesByMutability<
  Variables extends readonly ClarityAbiVariable[],
  M extends ClarityAbiVariable['access'],
  R = {},
> = Variables extends readonly [
  infer F,
  ...infer Rest extends readonly ClarityAbiVariable[],
]
  ? F extends ClarityAbiVariable
    ? InternalGetVariablesByMutability<
        Rest,
        M,
        F extends { access: M } ? R & Record<F['name'], F> : R
      >
    : R
  : R;

export type GetVariablesByMutability<
  Variables extends readonly ClarityAbiVariable[],
  M extends ClarityAbiVariable['access'],
> = MergeUnion<InternalGetVariablesByMutability<Variables, M>>;

export type GetVariableNames<
  Variables extends readonly ClarityAbiVariable[],
  M extends ClarityAbiVariable['access'] = 'variable' | 'constant',
> = keyof GetVariablesByMutability<Variables, M>;

export type GetVariableByName<
  Variables extends readonly ClarityAbiVariable[],
  VariableName extends Variables[number]['name'],
> = Extract<Variables[number], { name: VariableName }>;

export type GetVariableType<
  Variables extends readonly ClarityAbiVariable[],
  VariableName extends Variables[number]['name'],
> = InferClarityAbiType<GetVariableByName<Variables, VariableName>['type']>;
