import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-notepad',
  template: `
    <div>
      <app-middle-layout>
        <h3>Notepad:</h3>
        <textarea [(ngModel)]="data" (keyup)="onKeyup()"> </textarea>
      </app-middle-layout>
    </div>
  `,
  styles: [
    `
      textarea {
        width: 90%;
        height: 90%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotepadComponent {
  public data: string = this.localStorageService.get();
  constructor(private localStorageService: LocalStorageService) {}

  public onKeyup() {
    console.log('data', this.data);
  }
}
