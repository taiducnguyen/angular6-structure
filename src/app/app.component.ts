/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';
import { TranslateService } from '@ngx-translate/core';
import { I18nService, Logger } from './shared/services/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, merge } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

export const ROOT_SELECTOR = 'app';
const log = new Logger('App');

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public name = 'Angular Starter';
  public tipe = 'assets/img/tipe.png';
  public twitter = 'https://twitter.com/gdi2290';
  public url = 'https://tipe.io';
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public appState: AppState,
    private titleService: Title,
    private translateService: TranslateService,
    private i18nService: I18nService,
  ) { }

  public ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // console.log('environment.defaultLanguage', environment.defaultLanguage);
    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(event => {
      const title = event['title'];
      if (title) {
        this.titleService.setTitle(this.translateService.instant(title));
      }
    });;
  }
}

/**
 * Please review the https://github.com/AngularClass/angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
