import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: any = [
    {
      id: '1',
      label: 'Computer Services',
      services: [
        { id: 1, name: 'Virtual Machines' },
        { id: 2, name: 'Serverless Compute' },
        { id: 3, name: 'Kubernetes Engines' }
      ]
    },
    {
      id: '2',
      label: 'Networking',
      services: [{ id: 1, name: 'VPC' }]
    },
    {
      id: '3',
      label: 'Storage Services',
      services: [
        { id: 1, name: 'Object Storage' },
        { id: 2, name: 'Databases' },
        { id: 3, name: 'File Storage' },
        { id: 4, name: 'Block Storage' }
      ]
    },
    {
      id: '4',
      label: 'Big Data',
      services: [{ id: 1, name: 'VPC' }]
    },
    {
      id: '5',
      label: 'Security and Identity Management',
      services: [{ id: 1, name: 'VPC' }]
    },
    {
      id: '6',
      label: 'Operation Tools',
      services: [{ id: 1, name: 'VPC' }]
    }
  ];
}
