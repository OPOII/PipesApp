import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
//Se crea este modulo para poner todo lo que se necesita en uno solo y luego si usarlo
//en toda la app exportandolos
@NgModule({
  declarations: [],
  exports: [MenuModule, MenubarModule],
})
export class PrimeNgModule {}
