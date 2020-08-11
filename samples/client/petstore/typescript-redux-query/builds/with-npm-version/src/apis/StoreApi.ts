// tslint:disable
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';

import {
    Order,
    OrderFromJSON,
    OrderToJSON,
} from '../models';

export interface DeleteOrderRequest {
    orderId: string;
}

export interface GetOrderByIdRequest {
    orderId: number;
}

export interface PlaceOrderRequest {
    body: Order;
}


/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * Delete purchase order by ID
 */
function deleteOrderRaw<T>(requestParameters: DeleteOrderRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
        throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling deleteOrder.');
    }

    let queryParameters = null;


        const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
* Delete purchase order by ID
*/
export function deleteOrder<T>(requestParameters: DeleteOrderRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteOrderRaw(requestParameters, requestConfig);
}

/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 */
function getInventoryRaw<T>( requestConfig: runtime.TypedQueryConfig<T, { [key: string]: number; }> = {}): QueryConfig<T> {
    let queryParameters = null;


        const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `/store/inventory`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Returns a map of status codes to quantities
* Returns pet inventories by status
*/
export function getInventory<T>( requestConfig?: runtime.TypedQueryConfig<T, { [key: string]: number; }>): QueryConfig<T> {
    return getInventoryRaw( requestConfig);
}

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
 * Find purchase order by ID
 */
function getOrderByIdRaw<T>(requestParameters: GetOrderByIdRequest, requestConfig: runtime.TypedQueryConfig<T, Order> = {}): QueryConfig<T> {
    if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
        throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling getOrderById.');
    }

    let queryParameters = null;


        const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(OrderFromJSON(body), text);
    }

    return config;
}

/**
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
* Find purchase order by ID
*/
export function getOrderById<T>(requestParameters: GetOrderByIdRequest, requestConfig?: runtime.TypedQueryConfig<T, Order>): QueryConfig<T> {
    return getOrderByIdRaw(requestParameters, requestConfig);
}

/**
 * Place an order for a pet
 */
function placeOrderRaw<T>(requestParameters: PlaceOrderRequest, requestConfig: runtime.TypedQueryConfig<T, Order> = {}): QueryConfig<T> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
        throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling placeOrder.');
    }

    let queryParameters = null;


        const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/store/order`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || OrderToJSON(requestParameters.body),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(OrderFromJSON(body), text);
    }

    return config;
}

/**
* Place an order for a pet
*/
export function placeOrder<T>(requestParameters: PlaceOrderRequest, requestConfig?: runtime.TypedQueryConfig<T, Order>): QueryConfig<T> {
    return placeOrderRaw(requestParameters, requestConfig);
}

