import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
//Se crea este modulo para poner todo lo que se necesita en uno solo y luego si usarlo
//en toda la app exportandolos
@NgModule({
  declarations: [],
  exports: [MenuModule],
})
export class PrimeNgModule {}
