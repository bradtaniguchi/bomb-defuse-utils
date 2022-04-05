import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import { routes } from '../../../app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly routes = routes.filter((route) => !route.exclude);
  constructor() {}

  public search(search: string): any {
    const fuse = new Fuse(this.routes, {
      keys: ['title', 'tags'],
    });
    return fuse.search(search);
  }
}
