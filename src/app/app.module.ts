import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideNavInsideComponent } from './components/side-nav-inside/side-nav-inside.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ComputerServicesComponent } from './components/computer-services/computer-services.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';  
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { VirtualMachineTableComponent } from './components/virtual-machine-table/virtual-machine-table.component';
import { KubernetesEnginesTableComponent } from './components/kubernetes-engines-table/kubernetes-engines-table.component';
import { ServerlessComputeTableComponent } from './components/serverless-compute-table/serverless-compute-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavInsideComponent,
    ToolbarComponent,
    ComputerServicesComponent,
    DashboardComponent,
    VirtualMachineTableComponent,
    KubernetesEnginesTableComponent,
    ServerlessComputeTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatGridListModule,
    RouterModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
