import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatMenuModule, 
    MatSelectModule, 
    MatCheckboxModule,
    MatStepperModule,
    MatExpansionModule,
    MatTableModule,
    MatSliderModule,
    MatSidenavModule,
    MatDialogModule,
    DragDropModule,
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatMenuModule, 
    MatSelectModule, 
    MatCheckboxModule,
    MatStepperModule,
    MatExpansionModule,
    MatTableModule,
    MatSliderModule,
    MatSidenavModule,
    MatDialogModule,
    DragDropModule,
  ],
})
export class MaterialModel { }