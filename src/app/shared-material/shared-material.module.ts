import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ]
})
export class SharedMaterialModule { }
