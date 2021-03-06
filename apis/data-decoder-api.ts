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
import { DataDecoder } from '../models';
import { URLSearchParams, URL } from 'url';
/**
 * DataDecoderApi - axios parameter creator
 * @export
 */
export const DataDecoderApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a Multisig Transaction with its confirmations and retrieves all the information related.
         * @param {DataDecoder} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataDecoderCreate: async (body: DataDecoder, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling dataDecoderCreate.');
            }
            const localVarPath = `/data-decoder/`;
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
    }
};

/**
 * DataDecoderApi - functional programming interface
 * @export
 */
export const DataDecoderApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a Multisig Transaction with its confirmations and retrieves all the information related.
         * @param {DataDecoder} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dataDecoderCreate(body: DataDecoder, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DataDecoderApiAxiosParamCreator(configuration).dataDecoderCreate(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DataDecoderApi - factory interface
 * @export
 */
export const DataDecoderApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a Multisig Transaction with its confirmations and retrieves all the information related.
         * @param {DataDecoder} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataDecoderCreate(body: DataDecoder, options?: any): AxiosPromise<void> {
            return DataDecoderApiFp(configuration).dataDecoderCreate(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataDecoderApi - object-oriented interface
 * @export
 * @class DataDecoderApi
 * @extends {BaseAPI}
 */
export class DataDecoderApi extends BaseAPI {
    /**
     * Creates a Multisig Transaction with its confirmations and retrieves all the information related.
     * @param {DataDecoder} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataDecoderApi
     */
    public dataDecoderCreate(body: DataDecoder, options?: any) {
        return DataDecoderApiFp(this.configuration).dataDecoderCreate(body, options).then((request) => request(this.axios, this.basePath));
    }
}
