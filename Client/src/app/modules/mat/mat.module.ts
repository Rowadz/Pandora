import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatRippleModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    MatGridListModule,
    MatRippleModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MatModule {}
