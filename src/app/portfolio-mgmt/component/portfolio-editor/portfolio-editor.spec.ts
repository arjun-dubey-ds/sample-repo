import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEditorDashboard } from './portfolio-editor-dashboard';

describe('PortfolioEditorDashboard', () => {
  let component: PortfolioEditorDashboard;
  let fixture: ComponentFixture<PortfolioEditorDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioEditorDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioEditorDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
