import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-manual-link',
  template: `
    <a
      [href]="'http://www.bombmanual.com/web/index.html#' + linkId"
      style="color: purple"
    >
      Manual entry online (ctrl+click to open in new tab)
    </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManualLinkComponent implements OnInit {
  @Input() linkId: string;
  constructor() {}

  ngOnInit(): void {}
}
