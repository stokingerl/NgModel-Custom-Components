import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgModelBase } from 'app/shared/base-classes/ng-model.base';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestInputComponent),
    multi: true
};

@Component({
    selector: 'app-test-input',
    templateUrl: './test-input.component.html',
    styleUrls: ['./test-input.component.css'],
    providers: [ CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR ]
})

export class TestInputComponent extends NgModelBase {
    hoverText = 'Wow, look at this custom hover text for your app.';
}
