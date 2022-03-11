import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
  NgForm,
  FormArray,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-computer-services',
  templateUrl: './computer-services.component.html',
  styleUrls: ['./computer-services.component.scss']
})
export class ComputerServicesComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { table: any; sId: number; cId: number }
  ) {
    if (this.data.table !== undefined) {
      this.virtualMachine.patchValue(this.data.table);
    }
  }
  
  type: Array<any> = [
    {
      name: 'General Purpose'
    },
    {
      name: 'Cloud Optimized'
    },
    {
      name: 'Memory Optimized'
    }
  ];
  cpu: Array<any> = [
    {
      number: 2
    },
    {
      number: 4
    },
    {
      number: 8
    },
    {
      number: 16
    },
    {
      number: 32
    }
  ];
  Memory: Array<any> = [
    {
      number: 2
    },
    {
      number: 4
    },
    {
      number: 8
    },
    {
      number: 16
    },
    {
      number: 32
    },
    {
      number: 64
    },
    {
      number: 128
    }
  ];

  bootSize: Array<any> = [
    {
      number: '10 GB'
    },
    {
      number: '50 GB'
    },
    {
      number: '100 GB'
    }
  ];

  bootOS: Array<any> = [
    {
      name: 'Linux'
    },
    {
      name: 'Ubuntu'
    },
    {
      name: 'Windows'
    }
  ];

  traffic: Array<any> = [
    {
      name: 'HTTP'
    },
    {
      name: 'HTTPS'
    }
  ];

  virtualMachine = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Region: new FormControl('', [Validators.required]),
    MachineFamily: new FormControl('', [Validators.required]),
    Cpu: new FormControl('', [Validators.required]),
    Memory: new FormControl('', [Validators.required]),
    BootDiskSize: new FormControl('', [Validators.required]),
    BootDiskOS: new FormControl('', [Validators.required]),
    AllowedTraffic: new FormControl('', [Validators.required])
  });

  onSubmit() {

  }

  ngOnInit(): void {}
}
