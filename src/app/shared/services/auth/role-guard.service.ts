import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import decode from 'jwt-decode';
import { AppAuthService } from 'app/shared/services';
import { StorageKey } from 'app/shared/models/storage-key/storage-key';
import { UserResponseModel } from 'app/shared/models';
@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public auth: AppAuthService, public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;
        const token = localStorage.getItem(StorageKey.Token);
        if (token == null) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });

            return;
        }
        const userInfo = localStorage.getItem(StorageKey.User);

        // decode the token to get its payload
        const tokenPayload = <UserResponseModel>{ ...decode(userInfo) };

        if (!this.auth.isAuthenticated() || !tokenPayload.roles.some(role => role == expectedRole)) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        return true;
    }
}