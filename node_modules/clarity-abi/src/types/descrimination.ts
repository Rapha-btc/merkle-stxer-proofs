import type {
  ClarityAbiType,
  ClarityAbiTypeBuffer,
  ClarityAbiTypeList,
  ClarityAbiTypeOptional,
  ClarityAbiTypePrimitive,
  ClarityAbiTypeResponse,
  ClarityAbiTypeStringAscii,
  ClarityAbiTypeStringUtf8,
  ClarityAbiTypeTuple,
} from './abi.js';
import type { Narrow } from './utils.js';

/**
 * Infers embedded primitive type of any type
 * Same as `as const` but without setting the object as readonly and without needing the user to use it.
 *
 * @param value - Value to infer
 * @returns Value with embedded type inferred
 *
 * @example
 * const result = narrow(['foo', 'bar', 1])
 */
export function narrow<TType>(value: Narrow<TType>) {
  return value;
}

export const isClarityAbiPrimitive = (
  val: ClarityAbiType,
): val is ClarityAbiTypePrimitive => typeof val === 'string';
export const isClarityAbiBuffer = (
  val: ClarityAbiType,
): val is ClarityAbiTypeBuffer =>
  (val as ClarityAbiTypeBuffer).buffer !== undefined;
export const isClarityAbiStringAscii = (
  val: ClarityAbiType,
): val is ClarityAbiTypeStringAscii =>
  (val as ClarityAbiTypeStringAscii)['string-ascii'] !== undefined;
export const isClarityAbiStringUtf8 = (
  val: ClarityAbiType,
): val is ClarityAbiTypeStringUtf8 =>
  (val as ClarityAbiTypeStringUtf8)['string-utf8'] !== undefined;
export const isClarityAbiResponse = (
  val: ClarityAbiType,
): val is ClarityAbiTypeResponse =>
  (val as ClarityAbiTypeResponse).response !== undefined;
export const isClarityAbiOptional = (
  val: ClarityAbiType,
): val is ClarityAbiTypeOptional =>
  (val as ClarityAbiTypeOptional).optional !== undefined;
export const isClarityAbiTuple = (
  val: ClarityAbiType,
): val is ClarityAbiTypeTuple =>
  (val as ClarityAbiTypeTuple).tuple !== undefined;
export const isClarityAbiList = (
  val: ClarityAbiType,
): val is ClarityAbiTypeList => (val as ClarityAbiTypeList).list !== undefined;
