import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
//--Apps
import { SharedModule } from './share.module';
import { StorageKey } from './shared/models/storage-key/storage-key';

import '../styles/styles.scss';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    JwtModule.forRoot({
      config: {
        throwNoTokenError: false,
        tokenGetter: GetToken,
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
  ],
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function GetToken() {
  return localStorage.getItem(StorageKey.Token);
}