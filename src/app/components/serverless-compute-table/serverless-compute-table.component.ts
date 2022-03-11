import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ComputerServicesComponent } from '../computer-services/computer-services.component';

@Component({
  selector: 'app-serverless-compute-table',
  templateUrl: './serverless-compute-table.component.html',
  styleUrls: ['./serverless-compute-table.component.scss']
})
export class ServerlessComputeTableComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
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
              Name: 'HiDMachine',
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
              Name: 'HiDMachine2',
              Region: 'India',
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
              Name: 'Hiwre',
              Region: 'Indiefa',
              MachineFamily: 'General Purpose',
              Cpu: 2,
              Memory: 16,
              BootDiskSize: '10 GB',
              BootDiskOS: 'Linux',
              AllowedTraffic: 'HTTPS'
            },
            {
              Id: 1,
              Name: 'HiDMaefefewfchine2',
              Region: 'Indiefewwefwea',
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
}
