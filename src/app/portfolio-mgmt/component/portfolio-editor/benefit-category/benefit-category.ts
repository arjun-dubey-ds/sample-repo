import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-benefit-category',
  templateUrl: './benefit-category.html',
  styleUrls: ['./benefit-category.scss']
})
export class BenefitCategoryComponent {
  access_token = sessionStorage.getItem('access_token');
  effectiveDateFrom: Date | null = null;
  effectiveDateTo: Date | null = null;
  hideEffectiveDate = false;
  benefitcategoryPanelOpen = false;

  @Input() benefitCategoryTitle: string = 'Acupuncture Benefit Category';

  tabs = [
    { label: 'Portfolio Information', key: 'portfolio', visible: true, disabled: false },
    { label: 'Limits and Codes Information', key: 'limits', visible: true, disabled: true },
    { label: 'Services Information', key: 'services', visible: true, disabled: true },
    { label: 'History Information', key: 'history', visible: true, disabled: true }
  ];
  activeTabKey = 'portfolio';

  navTabs = [
    { label: 'Information', icon: 'pi pi-book', key: 'info', visible: true, active: true },
    { label: 'Notes', icon: 'pi pi-comment-circle', key: 'notes', visible: true, active: false },
    { label: 'Questions', icon: 'pi pi-question', key: 'questions', visible: true, active: false },
    { label: 'Artifacts', icon: 'pi pi-book', key: 'artifacts', visible: true, active: false }
  ];

  portfolioRows = [
    {
      label: 'Levels',
      options: ['Low', 'Moderate', 'High'],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Covered',
      options: ['Yes', 'No'],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Copay',
      options: [],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Copay Type',
      options: ['Per Day', 'Per occurence', 'Per Stay'],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Max No.',
      options: [],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Coinsurance',
      options: [],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Deductable',
      options: ['Yes', 'No'],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Per Occurance',
      options: ['Seldom', 'Moderate', 'Frequent'],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Visits From',
      options: [],
      values: { tier1: '', inn: '', oon: '' }
    },
    {
      label: 'Visits Thru',
      options: [],
      values: { tier1: '', inn: '', oon: '' }
    }
  ];

  activeEdit: { rowIdx: number, col: 'tier1'|'inn'|'oon' } | null = null;

  startEdit(rowIdx: number, col: 'tier1'|'inn'|'oon') {
    this.activeEdit = { rowIdx, col };
  }
  
  stopEdit() {
    this.activeEdit = null;
  }

  setActiveTab(key: string) {
    this.activeTabKey = key;
  }

  setActiveNavTab(tabKey: string) {
    this.navTabs.forEach(tab => tab.active = tab.key === tabKey);
  }
}