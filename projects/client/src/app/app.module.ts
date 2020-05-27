import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleAnalyticsService } from './core/google-analytics.service';
import { HeaderModule } from './core/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ServiceWorkerModule.register('/bomb-defuse-utils/ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    if (environment.production) {
      injector.get(GoogleAnalyticsService);
    }
  }
}
