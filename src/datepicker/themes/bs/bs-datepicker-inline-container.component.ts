import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BsDatepickerContainerComponent } from './bs-datepicker-container.component';

import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';

import { PositioningService } from 'ngx-bootstrap-th/positioning';
import { datepickerAnimation } from '../../datepicker-animations';

@Component({
  selector: 'bs-datepicker-inline-container',
  providers: [BsDatepickerStore, BsDatepickerEffects],
  templateUrl: './bs-datepicker-view.html',
  host: {
    '(click)': '_stopPropagation($event)',
    style: 'display: inline-block;'
  },
  animations: [datepickerAnimation]
})
export class BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent
  implements OnInit, OnDestroy {
  constructor(
    _config: BsDatepickerConfig,
    _store: BsDatepickerStore,
    _element: ElementRef,
    _actions: BsDatepickerActions,
    _effects: BsDatepickerEffects,
    _positioningService: PositioningService
  ) {
    super(_config, _store, _element, _actions, _effects, _positioningService);
  }
}
