import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accumulators',
  templateUrl: './accumulators.component.html',
  styleUrl: './accumulators.component.scss'
})
export class AccumulatorsComponent {

  @Input() isMedical = true;
  tableData = [
    {
      title: 'Deductible Type',
      isDropdown: true
    },
    {
      title: 'Out-of-Pocket Type',
      isDropdown: true
    },
    {
      title: 'Medical and Rx Deductibles Integrated',
      isDropdown: true
    },
    {
      title: 'Medical and Rx Out-of-Pocket Integrated',
      isDropdown: true
    },
    {
      title: 'Deductible - Individual',
      isDropdown: false
    },
    {
      title: 'Deductible - Family',
      isDropdown: false
    },
    {
      title: 'Out-of-Pocket - Individual',
      isDropdown: false
    },
    {
      title: 'Out-of-Pocket - Family',
      isDropdown: false
    },
    {
      title: 'Default Coinsurance',
      isDropdown: false
    },
    {
      title: 'Default Copay',
      isDropdown: false
    },
  ];

  rxTableData = [
    {
      title: 'Deductible - Individual',
      isDropdown: false
    },
    {
      title: 'Deductible - Family',
      isDropdown: false
    },
    {
      title: 'Out-of-Pocket - Individual',
      isDropdown: false
    },
    {
      title: 'Out-of-Pocket - Family',
      isDropdown: false
    }
  ]
  selectedCity!: string
  cities: string[] = ['a', 'b', 'c']
}
