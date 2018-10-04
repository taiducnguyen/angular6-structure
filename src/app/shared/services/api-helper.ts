import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { ApiResponse, ApiError } from '../models';

export module ApiHelper {
    export function extractData(res: any | any): ApiResponse {
        let body = res;
        return body;
    }

    export function onFail(err: HttpErrorResponse | any) {
        return Observable.throw(<ApiError>err.error);
    }
}