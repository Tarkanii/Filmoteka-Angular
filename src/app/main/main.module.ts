import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { LibraryComponent } from './pages/library/library/library.component';



@NgModule({
  declarations: [
    HomeComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
