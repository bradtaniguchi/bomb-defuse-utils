import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// tslint:disable-next-line: ban-types
declare var gtag: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    const scriptElement = this.document.createElement('script');
    scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gtagCode}`; // TODO: Add gtag code
    scriptElement.async = true;
    this.document.body.appendChild(scriptElement);
    const win = window as Window & any;
    win.dataLayer = win.dataLayer || [];
    win.gtag = function () {
      win.dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', environment.gtagCode);

    this.router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe(this.trackAnalyticRouteEvent.bind(this));
  }

  private trackAnalyticRouteEvent(event: NavigationEnd) {
    if (!gtag) {
      console.error('no gtag found!');
      return;
    }
    gtag('config', environment.gtagCode, {
      page_path: event.urlAfterRedirects,
    });
  }
}
