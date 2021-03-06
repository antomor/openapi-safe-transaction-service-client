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
 * @interface SafeMultisigTransaction
 */
export interface SafeMultisigTransaction {
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    safe: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    to: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransaction
     */
    value: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    data?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransaction
     */
    operation: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    gasToken?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransaction
     */
    safeTxGas: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransaction
     */
    baseGas: any;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransaction
     */
    gasPrice: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    refundReceiver?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SafeMultisigTransaction
     */
    nonce: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    contractTransactionHash: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    sender: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    signature?: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigTransaction
     */
    origin?: any | null;
}
