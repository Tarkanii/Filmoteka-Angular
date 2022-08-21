import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    LibraryComponent
  ],
  exports: [
    HomeComponent, 
    LibraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
