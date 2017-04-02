import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestInputComponent } from 'app/shared/custom-forms/test-input';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ TestInputComponent ],
    exports: [ TestInputComponent ]
})

export class CustomFormsModule {

}
