import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../shared/demo.material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
// import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    // FlexLayoutModule,
    FormsModule,
    DemoRoutingModule
  ],
  declarations: [ButtonsComponent]
})
export class DemoModule { }