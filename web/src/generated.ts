import {
  useNetwork,
  useChainId,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC721EnumerableForbiddenBatchMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "ERC721OutOfBoundsIndex",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userNfts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const wagmiMintExampleAddress = {
  1: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  5: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export const wagmiMintExampleConfig = {
  address: wagmiMintExampleAddress,
  abi: wagmiMintExampleABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"getApproved"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"isApprovedForAll"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"ownerOf"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"symbol"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"tokenURI"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"totalSupply"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof wagmiMintExampleABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wagmiMintExampleABI, TFunctionName, TMode>({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleApprove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof wagmiMintExampleABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wagmiMintExampleABI, 'approve', TMode>({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleMint<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'mint' }
    : UseContractWriteConfig<typeof wagmiMintExampleABI, 'mint', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'mint'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wagmiMintExampleABI, 'mint', TMode>({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      }
    : UseContractWriteConfig<
        typeof wagmiMintExampleABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof wagmiMintExampleABI,
    'safeTransferFrom',
    TMode
  >({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      }
    : UseContractWriteConfig<
        typeof wagmiMintExampleABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof wagmiMintExampleABI,
    'setApprovalForAll',
    TMode
  >({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<
        typeof wagmiMintExampleABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wagmiMintExampleABI, 'transferFrom', TMode>({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function usePrepareWagmiMintExampleWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function usePrepareWagmiMintExampleApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, 'approve'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function usePrepareWagmiMintExampleMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, 'mint'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function usePrepareWagmiMintExampleSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof wagmiMintExampleABI,
      'safeTransferFrom'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof wagmiMintExampleABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function usePrepareWagmiMintExampleSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof wagmiMintExampleABI,
      'setApprovalForAll'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof wagmiMintExampleABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function usePrepareWagmiMintExampleTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, 'transferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof wagmiMintExampleABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wagmiMintExampleABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof wagmiMintExampleABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    ...config,
  } as UseContractEventConfig<typeof wagmiMintExampleABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof wagmiMintExampleABI, 'Approval'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof wagmiMintExampleABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `eventName` set to `"ApprovalForAll"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof wagmiMintExampleABI, 'ApprovalForAll'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof wagmiMintExampleABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
 */
export function useWagmiMintExampleTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof wagmiMintExampleABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wagmiMintExampleABI,
    address:
      wagmiMintExampleAddress[chainId as keyof typeof wagmiMintExampleAddress],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof wagmiMintExampleABI, 'Transfer'>)
}
