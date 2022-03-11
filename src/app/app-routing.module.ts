import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerServicesComponent } from './components/computer-services/computer-services.component';
import { KubernetesEnginesTableComponent } from './components/kubernetes-engines-table/kubernetes-engines-table.component';
import { ServerlessComputeTableComponent } from './components/serverless-compute-table/serverless-compute-table.component';
import { VirtualMachineTableComponent } from './components/virtual-machine-table/virtual-machine-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'virtual-machine-table', component: VirtualMachineTableComponent},
  { path: 'serverless-compute-table', component: ServerlessComputeTableComponent },
  { path: 'kubernetes-engines-table', component: KubernetesEnginesTableComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
