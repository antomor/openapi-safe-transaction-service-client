/* tslint:disable */
/* eslint-disable */
/**
 * Gnosis Safe Transaction Service API
 * API to keep track of transactions sent via Gnosis Safe smart contracts
 *
 * OpenAPI spec version: v1
 * Contact: safe@gnosis.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface SafeMultisigTransactionWithTransfersResponse
 */
export interface SafeMultisigTransactionWithTransfersResponse {
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    safe: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    to: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    value: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    data?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    operation: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    gasToken?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    safeTxGas: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    baseGas: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    gasPrice: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    refundReceiver?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    nonce: any;
    /**
     * 
     * @type {Date}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    executionDate: any;
    /**
     * 
     * @type {Date}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    submissionDate: any;
    /**
     * 
     * @type {Date}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    modified: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    blockNumber?: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    transactionHash: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    safeTxHash: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    executor?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    isExecuted: any;
    /**
     * 
     * @type {boolean}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    isSuccessful?: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    ethGasPrice?: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    gasUsed?: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    fee?: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    origin: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    dataDecoded?: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    confirmationsRequired: any;
    /**
     * 
     * @type {SafeMultisigConfirmationResponse}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    confirmations?: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    signatures: any;
    /**
     * 
     * @type {Array&lt;TransferWithTokenInfoResponse&gt;}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    transfers: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransactionWithTransfersResponse
     */
    txType?: any;
}
