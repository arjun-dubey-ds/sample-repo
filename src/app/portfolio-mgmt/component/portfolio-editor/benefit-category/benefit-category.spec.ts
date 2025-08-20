import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefitCategoryComponent } from './benefit-category';
import { ReactiveFormsModule } from '@angular/forms';

describe('BenefitCategoryComponent', () => {
  let component: BenefitCategoryComponent;
  let fixture: ComponentFixture<BenefitCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenefitCategoryComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Notes instead of Comments in navTabs', () => {
    expect(component.navTabs.some(tab => tab.label === 'Notes')).toBeTrue();
    expect(component.navTabs.some(tab => tab.label === 'Comments')).toBeFalse();
  });

  it('should not display Questions or Artifacts nav tabs', () => {
    expect(component.navTabs.some(tab => tab.label === 'Questions')).toBeFalse();
    expect(component.navTabs.some(tab => tab.label === 'Artifacts')).toBeFalse();
  });

  it('should have only 3 main tabs (excluding Services Information)', () => {
    expect(component.tabs.length).toBe(3);
    expect(component.tabs.some(tab => tab.label === 'Services Information')).toBeFalse();
  });
});