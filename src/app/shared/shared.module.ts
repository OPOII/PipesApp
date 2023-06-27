import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
//Creo un modulo para encapsular los componentes de primeng
@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent],
})
export class SharedModule {}
