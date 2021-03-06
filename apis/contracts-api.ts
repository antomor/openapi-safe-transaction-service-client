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
import { Contract } from '../models';
import { InlineResponse2001 } from '../models';
import { URLSearchParams, URL } from 'url';
/**
 * ContractsApi - axios parameter creator
 * @export
 */
export const ContractsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [ordering] Which field to use when ordering the results.
         * @param {number} [limit] Number of results to return per page.
         * @param {number} [offset] The initial index from which to return the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contractsList: async (ordering?: string, limit?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/contracts/`;
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

            if (ordering !== undefined) {
                localVarQueryParameter['ordering'] = ordering;
            }

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
         * @param {string} address A unique value identifying this contract.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contractsRead: async (address: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'address' is not null or undefined
            if (address === null || address === undefined) {
                throw new RequiredError('address','Required parameter address was null or undefined when calling contractsRead.');
            }
            const localVarPath = `/contracts/{address}/`
                .replace(`{${"address"}}`, encodeURIComponent(String(address)));
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
 * ContractsApi - functional programming interface
 * @export
 */
export const ContractsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [ordering] Which field to use when ordering the results.
         * @param {number} [limit] Number of results to return per page.
         * @param {number} [offset] The initial index from which to return the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contractsList(ordering?: string, limit?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await ContractsApiAxiosParamCreator(configuration).contractsList(ordering, limit, offset, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} address A unique value identifying this contract.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contractsRead(address: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contract>> {
            const localVarAxiosArgs = await ContractsApiAxiosParamCreator(configuration).contractsRead(address, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ContractsApi - factory interface
 * @export
 */
export const ContractsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} [ordering] Which field to use when ordering the results.
         * @param {number} [limit] Number of results to return per page.
         * @param {number} [offset] The initial index from which to return the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contractsList(ordering?: string, limit?: number, offset?: number, options?: any): AxiosPromise<InlineResponse2001> {
            return ContractsApiFp(configuration).contractsList(ordering, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} address A unique value identifying this contract.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contractsRead(address: string, options?: any): AxiosPromise<Contract> {
            return ContractsApiFp(configuration).contractsRead(address, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ContractsApi - object-oriented interface
 * @export
 * @class ContractsApi
 * @extends {BaseAPI}
 */
export class ContractsApi extends BaseAPI {
    /**
     * 
     * @param {string} [ordering] Which field to use when ordering the results.
     * @param {number} [limit] Number of results to return per page.
     * @param {number} [offset] The initial index from which to return the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public contractsList(ordering?: string, limit?: number, offset?: number, options?: any) {
        return ContractsApiFp(this.configuration).contractsList(ordering, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} address A unique value identifying this contract.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public contractsRead(address: string, options?: any) {
        return ContractsApiFp(this.configuration).contractsRead(address, options).then((request) => request(this.axios, this.basePath));
    }
}
