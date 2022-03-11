import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ComputerServicesComponent } from '../components/computer-services/computer-services.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  // req(){
  //   this.http
  //     .get('https://localhost:8080/...')
  //     .subscribe((Response) => {
  //       console.log(Response);
  //       this.categories = Response;
  //       console.log(this.categories);
  //     }); array of obj
  // }
  categories: any = [
    {
      id: 0,
      label: 'Compute Services',
      services: [
        {
          id: 0,
          name: 'Virtual Machines',
          displayedCol: [
            'Id',
            'Name',
            'Region',
            'MachineFamily',
            'Cpu',
            'Memory',
            'BootDiskSize',
            'BootDiskOS',
            'AllowedTraffic',
            'Actions'
          ],
          details: [
            {
              Id: 0,
              Name: 'Virtual Machine 1',
              Region: 'India',
              MachineFamily: 'General Purpose',
              Cpu: 2,
              Memory: 16,
              BootDiskSize: '10 GB',
              BootDiskOS: 'Linux',
              AllowedTraffic: 'HTTPS'
            },
            {
              Id: 1,
              Name: 'Virtual Machine 2',
              Region: 'China',
              MachineFamily: 'Memory Optimized',
              Cpu: 4,
              Memory: 16,
              BootDiskSize: '100 GB',
              BootDiskOS: 'Linux',
              AllowedTraffic: 'HTTPS'
            }
          ]
        },
        {
          id: 1,
          name: 'Serverless Compute',
          displayedCol: [
            'Id',
            'Name',
            'Region',
            'MachineFamily',
            'Cpu',
            'Memory',
            'BootDiskSize',
            'BootDiskOS',
            'AllowedTraffic',
            'Actions'
          ],
          details: [
            {
              Id: 0,
              Name: 'Lambda-AWS',
              Region: 'India',
              MachineFamily: 'General Purpose',
              Cpu: 2,
              Memory: 16,
              BootDiskSize: '10 GB',
              BootDiskOS: 'Linux',
              AllowedTraffic: 'HTTPS'
            },
            {
              Id: 1,
              Name: 'Cloud Function-GCP',
              Region: 'Indonesia',
              MachineFamily: 'Memory Optimized',
              Cpu: 4,
              Memory: 16,
              BootDiskSize: '100 GB',
              BootDiskOS: 'Linux',
              AllowedTraffic: 'HTTPS'
            }
          ]
        },
        { id: 2, name: 'Kubernetes Engines', details: [] }
      ]
    },
    {
      
      id: 1,
      label: 'Networking',
      services: [
        {
          id: 0,
          name: 'VPC',
          displayedCol: ['Id', 'Name', 'Description', 'SubnetName', 'Actions'],
          details: [
            {
              Id: 0,
              Name: 'HiDVPC',
              Description: 'Good service',
              SubnetName: 'Alpha2'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: 'Storage Services',
      services: [
        { id: 0, name: 'Object Storage', details: [] },
        { id: 1, name: 'Databases', details: [] },
        { id: 2, name: 'File Storage', details: [] },
        { id: 3, name: 'Block Storage', details: [] }
      ]
    },
    {
      id: 3,
      label: 'Big Data',
      services: [{ id: 1, name: 'VPC', details: [] }]
    },
    {
      id: 4,
      label: 'Security and Identity Management',
      services: [{ id: 1, name: 'VPC', details: [] }]
    },
    {
      id: 5,
      label: 'Operation Tools',
      services: [{ id: 1, name: 'VPC', details: [] }]
    }
  ];

  ngOnInit(): void {}

  addRow(serviceId: number, categoriesId: number) {
    const dialogRef = this.dialog.open(ComputerServicesComponent, {
      minWidth: '90vw',
      data: { table: null, sId: serviceId, cId: categoriesId }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      const currentDate = new Date();
      let timestamp = currentDate.getTime();
      this.categories[categoriesId].services[serviceId].details.push({
        Id: timestamp,
        Name: result.Name,
        Region: result.Region,
        MachineFamily: result.MachineFamily,
        Cpu: result.Cpu,
        Memory: result.Memory,
        BootDiskOS: result.BootDiskOS,
        BootDiskSize: result.BootDiskSize,
        AllowedTraffic: result.AllowedTraffic
      });
      this.categories[categoriesId].services[serviceId].details = [
        ...this.categories[categoriesId].services[serviceId].details
      ];
    });
  }

  editRow(row: any, serviceId: number, categoriesId: number) {
    const dialogRef = this.dialog.open(ComputerServicesComponent, {
      minWidth: '90vw',
      data: { table: row, sId: serviceId, cId: categoriesId }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      const index = this.categories[categoriesId].services[
        serviceId
      ].details.findIndex((element: any) => element.Id === row.Id);
      this.categories[categoriesId].services[serviceId].details[index] = {
        Id: row.Id,
        Name: result.Name,
        Region: result.Region,
        MachineFamily: result.MachineFamily,
        Cpu: result.Cpu,
        Memory: result.Memory,
        BootDiskOS: result.BootDiskOS,
        BootDiskSize: result.BootDiskSize,
        AllowedTraffic: result.AllowedTraffic
      };
      this.categories[categoriesId].services[serviceId].details = [
        ...this.categories[categoriesId].services[serviceId].details
      ];
    });
  }

  deleteRow(row: any, serviceId: number, categoriesId: number) {
    this.categories[categoriesId].services[serviceId].details = this.categories[
      categoriesId
    ].services[serviceId].details.filter((value: any) => {
      return value.Id !== row.Id;
    });
  }
}
