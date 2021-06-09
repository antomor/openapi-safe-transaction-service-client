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
 * @interface FirebaseDeviceSerializerWithOwnersResponse
 */
export interface FirebaseDeviceSerializerWithOwnersResponse {
    /**
     * 
     * @type {string}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    uuid?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    safes: any;
    /**
     * 
     * @type {string}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    cloudMessagingToken: any;
    /**
     * 
     * @type {number}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    buildNumber: any;
    /**
     * 
     * @type {string}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    bundle: any;
    /**
     * 
     * @type {string}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    deviceType: FirebaseDeviceSerializerWithOwnersResponseDeviceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    version: any;
    /**
     * 
     * @type {number}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    timestamp?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    signatures?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    ownersRegistered: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof FirebaseDeviceSerializerWithOwnersResponse
     */
    ownersNotRegistered: any;
}

/**
    * @export
    * @enum {string}
    */
export enum FirebaseDeviceSerializerWithOwnersResponseDeviceTypeEnum {
    ANDROID = 'ANDROID',
    IOS = 'IOS',
    WEB = 'WEB'
}

