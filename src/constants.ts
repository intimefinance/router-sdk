import JSBI from 'jsbi'

export const MSG_SENDER = '0x0000000000000000000000000000000000000001'
export const ADDRESS_THIS = '0x0000000000000000000000000000000000000002'

export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)

// = 1 << 23 or 100000000000000000000000
export const V2_FEE_PATH_PLACEHOLDER = 8388608

export enum ChainId {
  MAINNET = 1,
  CORE_TEST = 1115,
}

export type AddressMap = { [chainId: number]: string }

export const V2_CORE_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.CORE_TEST]: '0x7f7ad80Cb22c591e1064d96c9A076a47C3374f08',
}

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.CORE_TEST]: '0xDC85934D7045bd99e7a422487efF64f7F25603A9',
}
