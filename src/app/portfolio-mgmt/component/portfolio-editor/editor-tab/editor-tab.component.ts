import { Component } from '@angular/core';

@Component({
  selector: 'app-editor-tab',
  templateUrl: './editor-tab.component.html',
  styleUrl: './editor-tab.component.scss'
})
export class EditorTabComponent {
  currentTab: number = 0;
  benefitCategoryTitles : string[] = ['Ambulance Services - Emergency', 
    'Ambulance Services - Non-Emergency', 'Dental Services - Accident Only'];
  activeIndex!: boolean[];

  ngOnInit() {
    this.activeIndex = [false, false, false];
  }

  handleCurrentTabChange (tabValue: number) {
    this.currentTab = tabValue;
  }
  
  checkCurrentTab(selectedTab: number) {
    return `bg-custom w-full p-button-flex gap-2 p-button ${selectedTab != this.currentTab ? 'p-button-text' : ''}`
  }

  activeIndexChange(index: any) {
    console.log(index, this.activeIndex[index])
    this.activeIndex[index] = !this.activeIndex[index];
  }
}
