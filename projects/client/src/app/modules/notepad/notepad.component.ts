import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
export class NotepadComponent implements OnInit {
  public data: string = this.localStorageService.get();
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  public onKeyup() {
    console.log('data', this.data);
    // this.localStorageService.save({
    //   data: this.data,
    // });
  }
}
