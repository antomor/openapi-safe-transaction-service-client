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
 * @interface EthereumTxWithTransfersResponse
 */
export interface EthereumTxWithTransfersResponse {
    /**
     * 
     * @type {Date}
     * @memberof EthereumTxWithTransfersResponse
     */
    executionDate: any;
    /**
     * 
     * @type {string}
     * @memberof EthereumTxWithTransfersResponse
     */
    to: any | null;
    /**
     * 
     * @type {string}
     * @memberof EthereumTxWithTransfersResponse
     */
    data: any;
    /**
     * 
     * @type {string}
     * @memberof EthereumTxWithTransfersResponse
     */
    txHash: any;
    /**
     * 
     * @type {number}
     * @memberof EthereumTxWithTransfersResponse
     */
    blockNumber?: any;
    /**
     * 
     * @type {Array&lt;TransferWithTokenInfoResponse&gt;}
     * @memberof EthereumTxWithTransfersResponse
     */
    transfers: any;
    /**
     * 
     * @type {string}
     * @memberof EthereumTxWithTransfersResponse
     */
    txType?: any;
    /**
     * 
     * @type {string}
     * @memberof EthereumTxWithTransfersResponse
     */
    from: any;
}
