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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse2002 } from '../models';
import { SafeMultisigConfirmation } from '../models';
import { SafeMultisigTransactionResponse } from '../models';
import { URLSearchParams, URL } from 'url';
/**
 * MultisigTransactionsApi - axios parameter creator
 * @export
 */
export const MultisigTransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a confirmation for a transaction. More than one signature can be used. This endpoint does not support the use of delegates to make a transaction trusted.
         * @param {SafeMultisigConfirmation} body 
         * @param {string} safeTxHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        multisigTransactionsConfirmationsCreate: async (body: SafeMultisigConfirmation, safeTxHash: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling multisigTransactionsConfirmationsCreate.');
            }
            // verify required parameter 'safeTxHash' is not null or undefined
            if (safeTxHash === null || safeTxHash === undefined) {
                throw new RequiredError('safeTxHash','Required parameter safeTxHash was null or undefined when calling multisigTransactionsConfirmationsCreate.');
            }
            const localVarPath = `/multisig-transactions/{safe_tx_hash}/confirmations/`
                .replace(`{${"safe_tx_hash"}}`, encodeURIComponent(String(safeTxHash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the list of confirmations for a multisig transaction
         * @param {string} safeTxHash 
         * @param {number} [limit] Number of results to return per page.
         * @param {number} [offset] The initial index from which to return the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        multisigTransactionsConfirmationsList: async (safeTxHash: string, limit?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'safeTxHash' is not null or undefined
            if (safeTxHash === null || safeTxHash === undefined) {
                throw new RequiredError('safeTxHash','Required parameter safeTxHash was null or undefined when calling multisigTransactionsConfirmationsList.');
            }
            const localVarPath = `/multisig-transactions/{safe_tx_hash}/confirmations/`
                .replace(`{${"safe_tx_hash"}}`, encodeURIComponent(String(safeTxHash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} safeTxHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        multisigTransactionsRead: async (safeTxHash: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'safeTxHash' is not null or undefined
            if (safeTxHash === null || safeTxHash === undefined) {
                throw new RequiredError('safeTxHash','Required parameter safeTxHash was null or undefined when calling multisigTransactionsRead.');
            }
            const localVarPath = `/multisig-transactions/{safe_tx_hash}/`
                .replace(`{${"safe_tx_hash"}}`, encodeURIComponent(String(safeTxHash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MultisigTransactionsApi - functional programming interface
 * @export
 */
export const MultisigTransactionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Add a confirmation for a transaction. More than one signature can be used. This endpoint does not support the use of delegates to make a transaction trusted.
         * @param {SafeMultisigConfirmation} body 
         * @param {string} safeTxHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async multisigTransactionsConfirmationsCreate(body: SafeMultisigConfirmation, safeTxHash: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await MultisigTransactionsApiAxiosParamCreator(configuration).multisigTransactionsConfirmationsCreate(body, safeTxHash, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the list of confirmations for a multisig transaction
         * @param {string} safeTxHash 
         * @param {number} [limit] Number of results to return per page.
         * @param {number} [offset] The initial index from which to return the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async multisigTransactionsConfirmationsList(safeTxHash: string, limit?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2002>> {
            const localVarAxiosArgs = await MultisigTransactionsApiAxiosParamCreator(configuration).multisigTransactionsConfirmationsList(safeTxHash, limit, offset, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} safeTxHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async multisigTransactionsRead(safeTxHash: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SafeMultisigTransactionResponse>> {
            const localVarAxiosArgs = await MultisigTransactionsApiAxiosParamCreator(configuration).multisigTransactionsRead(safeTxHash, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MultisigTransactionsApi - factory interface
 * @export
 */
export const MultisigTransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Add a confirmation for a transaction. More than one signature can be used. This endpoint does not support the use of delegates to make a transaction trusted.
         * @param {SafeMultisigConfirmation} body 
         * @param {string} safeTxHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        multisigTransactionsConfirmationsCreate(body: SafeMultisigConfirmation, safeTxHash: string, options?: any): AxiosPromise<void> {
            return MultisigTransactionsApiFp(configuration).multisigTransactionsConfirmationsCreate(body, safeTxHash, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the list of confirmations for a multisig transaction
         * @param {string} safeTxHash 
         * @param {number} [limit] Number of results to return per page.
         * @param {number} [offset] The initial index from which to return the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        multisigTransactionsConfirmationsList(safeTxHash: string, limit?: number, offset?: number, options?: any): AxiosPromise<InlineResponse2002> {
            return MultisigTransactionsApiFp(configuration).multisigTransactionsConfirmationsList(safeTxHash, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} safeTxHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        multisigTransactionsRead(safeTxHash: string, options?: any): AxiosPromise<SafeMultisigTransactionResponse> {
            return MultisigTransactionsApiFp(configuration).multisigTransactionsRead(safeTxHash, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MultisigTransactionsApi - object-oriented interface
 * @export
 * @class MultisigTransactionsApi
 * @extends {BaseAPI}
 */
export class MultisigTransactionsApi extends BaseAPI {
    /**
     * Add a confirmation for a transaction. More than one signature can be used. This endpoint does not support the use of delegates to make a transaction trusted.
     * @param {SafeMultisigConfirmation} body 
     * @param {string} safeTxHash 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultisigTransactionsApi
     */
    public multisigTransactionsConfirmationsCreate(body: SafeMultisigConfirmation, safeTxHash: string, options?: any) {
        return MultisigTransactionsApiFp(this.configuration).multisigTransactionsConfirmationsCreate(body, safeTxHash, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the list of confirmations for a multisig transaction
     * @param {string} safeTxHash 
     * @param {number} [limit] Number of results to return per page.
     * @param {number} [offset] The initial index from which to return the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultisigTransactionsApi
     */
    public multisigTransactionsConfirmationsList(safeTxHash: string, limit?: number, offset?: number, options?: any) {
        return MultisigTransactionsApiFp(this.configuration).multisigTransactionsConfirmationsList(safeTxHash, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} safeTxHash 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultisigTransactionsApi
     */
    public multisigTransactionsRead(safeTxHash: string, options?: any) {
        return MultisigTransactionsApiFp(this.configuration).multisigTransactionsRead(safeTxHash, options).then((request) => request(this.axios, this.basePath));
    }
}