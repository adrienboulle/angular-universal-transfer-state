import { Http, Request, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
export declare class TransferState {
    static KEY: string;
    private _map;
    constructor();
    keys(): IterableIterator<string>;
    get(key: string): any;
    set(key: string, value: any): Map<string, any>;
    toJson(): any;
    initialize(obj: any): void;
    inject(location?: string): void;
}
export declare class TransferHttp {
    private http;
    protected transferState: TransferState;
    constructor(http: Http, transferState: TransferState);
    request(uri: string | Request, options?: RequestOptionsArgs): Observable<any>;
    /**
     * Performs a request with `get` http method.
     */
    get(url: string, options?: RequestOptionsArgs): Observable<any>;
    /**
     * Performs a request with `post` http method.
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any>;
    /**
     * Performs a request with `put` http method.
     */
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any>;
    /**
     * Performs a request with `delete` http method.
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<any>;
    /**
     * Performs a request with `patch` http method.
     */
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<any>;
    /**
     * Performs a request with `head` http method.
     */
    head(url: string, options?: RequestOptionsArgs): Observable<any>;
    /**
     * Performs a request with `options` http method.
     */
    options(url: string, options?: RequestOptionsArgs): Observable<any>;
    private getData(uri, options, callback);
    private getPostData(uri, body, options, callback);
    private resolveData(key);
    private setCache(key, data);
    private getFromCache(key);
}
export declare class TransferHttpModule {
}
