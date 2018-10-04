import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from 'app/shared/services/core';
import { AppAuthService } from 'app/shared/services/auth/auth.service';
import { StorageKey } from 'app/shared/models/storage-key/storage-key';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AppAuthService, public router: Router, private storageService: StorageService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.isAuthenticated()) {
            this.storageService.onRemoveToken(StorageKey.Token);
            this.storageService.onRemoveToken(StorageKey.User);
            this.storageService.onRemoveToken(StorageKey.IPInfo);
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        return true;
    }
}