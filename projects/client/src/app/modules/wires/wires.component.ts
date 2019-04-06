import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WireColor } from '../../core/models/wire';
import { logger } from '../../core/logger';
import { WiresService } from '../../core/services/wires/wires.service';

@Component({
  selector: 'app-wires',
  template: `
    <app-middle-layout>
      <app-form-field>
        <label for="wires">How many wires?</label>
        <div fxLayout="row">
          <input
            type="number"
            appFormInput
            [(ngModel)]="numWires"
            (ngModelChange)="onWiresChange()"
            min="3"
            max="6"
          />
        </div>
      </app-form-field>
      <!-- <app-form-field *ngIf="showSerial">
        <label for="wires">Is Serial Odd</label>
        <div fxLayout="row">
          <select>
            <option [value]="">
          </select>
        </div>
      </app-form-field> -->
      <div class="margin" style="width: 50%">
        <ng-container *ngIf="numWires">
          <app-form-field *ngFor="let wire of wires; let index = index">
            <label for="wires">Wire: {{ index + 1 }}</label>
            <select type="select" [(ngModel)]="wire" appFormInput>
              <option *ngFor="let wire of wireOptions">{{ wire }}</option>
            </select>
          </app-form-field>
        </ng-container>
      </div>
      <ng-container *ngIf="numWires">
        Cut Wire: {{ getCutWire() }}
      </ng-container>
    </app-middle-layout>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WiresComponent implements OnInit {
  public wires: WireColor[];
  public numWires: number;
  public readonly wireOptions: WireColor[] = [
    'black',
    'blue',
    'red',
    'white',
    'yellow'
  ];
  constructor(private wiresService: WiresService) {}

  ngOnInit() {}

  onWiresChange() {
    if (this.numWires >= 3 && this.numWires <= 6) {
      this.wires = new Array(this.numWires).fill('blue' as WireColor);
    }
  }

  getCutWire(): number {
    return this.wiresService.getWireToCut(this.wires);
  }
}
