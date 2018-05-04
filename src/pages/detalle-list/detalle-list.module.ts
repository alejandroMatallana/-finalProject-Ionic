import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleListPage } from './detalle-list';

@NgModule({
  declarations: [
    DetalleListPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleListPage),
  ],
})
export class DetalleListPageModule {}
