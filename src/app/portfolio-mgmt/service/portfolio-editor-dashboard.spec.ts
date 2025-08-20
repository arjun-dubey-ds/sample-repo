import { TestBed } from '@angular/core/testing';
import { PortfolioEditorDashboardService } from './portfolio-editor-dashboard-service';


describe('PortfolioEditorDashboard', () => {
  let service: PortfolioEditorDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioEditorDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
