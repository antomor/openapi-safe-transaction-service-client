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
 * @interface SafeBalanceResponse
 */
export interface SafeBalanceResponse {
    /**
     * 
     * @type {string}
     * @memberof SafeBalanceResponse
     */
    tokenAddress: any;
    /**
     * 
     * @type {Erc20Info}
     * @memberof SafeBalanceResponse
     */
    token: any;
    /**
     * 
     * @type {string}
     * @memberof SafeBalanceResponse
     */
    balance: any;
}
