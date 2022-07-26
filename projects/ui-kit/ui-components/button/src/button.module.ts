import { AmpIconModule } from '@ui-kit/ui-components/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, IconModule],
  exports: [ButtonComponent],
})
export class AmpButtonModule {}
