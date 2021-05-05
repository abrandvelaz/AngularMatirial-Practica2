import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatInputModule } from '@angular/material/input';

import { BotonesComponent } from './botones/botones.component';
import { HomeComponent } from './home/home.component';
import { TablaComponent } from './tabla/tabla.component';
import { DividerComponent } from './divider/divider.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    BotonesComponent,
    HomeComponent,
    TablaComponent,
    DividerComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [BotonesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
