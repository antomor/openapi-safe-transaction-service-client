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
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    count: any;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    next?: any | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    previous?: any | null;
    /**
     * 
     * @type {Array&lt;Contract&gt;}
     * @memberof InlineResponse2001
     */
    results: any;
}