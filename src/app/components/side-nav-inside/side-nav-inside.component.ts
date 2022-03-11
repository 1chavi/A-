import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-inside',
  templateUrl: './side-nav-inside.component.html',
  styleUrls: ['./side-nav-inside.component.scss']
})
export class SideNavInsideComponent implements OnInit {
  constructor() {}
  panelOpenState = false;
  categories: any = [
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

  change(id: number) {
    console.log(id);
  }
  ngOnInit(): void {}
}
