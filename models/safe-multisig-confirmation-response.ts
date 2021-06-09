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
 *  Filters confirmations queryset :param obj: MultisigConfirmation instance :return: Serialized queryset 
 * @export
 * @interface SafeMultisigConfirmationResponse
 */
export interface SafeMultisigConfirmationResponse {
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigConfirmationResponse
     */
    owner: any;
    /**
     * 
     * @type {Date}
     * @memberof SafeMultisigConfirmationResponse
     */
    submissionDate: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigConfirmationResponse
     */
    transactionHash?: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigConfirmationResponse
     */
    signature: any;
    /**
     * 
     * @type {string}
     * @memberof SafeMultisigConfirmationResponse
     */
    signatureType?: any;
}
