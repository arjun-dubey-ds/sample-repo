import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vertical-form',
  templateUrl: './vertical-form.component.html',
  styleUrl: './vertical-form.component.scss'
})
export class VerticalFormComponent {
  

    formControls: {[key: string]: string}[] = [
      { label: 'Plan Code', name: 'PlanCode' },
      { label: 'Plan Type', name: 'PlanType' },
      { label: 'COC Series', name: 'COCSeries' },
      { label: 'Organization', name: 'Organization' },
      { label: 'State', name: 'State' },
      { label: 'Segment', name: 'Segment' },
      { label: 'Legal Entity', name: 'LegalEntity' },
      { label: 'Product Type', name: 'ProductType' },
      { label: 'Product', name: 'Product' },
      { label: 'Standard', name: 'Standard' },
      { label: 'HSA Eligible', name: 'HSAEligible' },
      { label: 'Gated Product', name: 'GatedProduct' },
      { label: 'Case Effective', name: 'CaseEffective' },
      { label: 'Deductible Period', name: 'DeductiblePeriod' },
      { label: 'Grandfathered', name: 'Grandfathered' },
      { label: 'Transitional', name: 'Transitional' },
      { label: 'Plan Category', name: 'PlanCategory' },
      { label: 'Description', name: 'Description' },
      { label: 'Previous martketing name', name: 'PreviousMartketingName' },
      { label: 'Current Marketing Name', name: 'CurrentMarketingName' },
      { label: 'Alternate Description', name: 'AlternateDescription' },
      { label: 'MSK Low Back', name: 'MSKLowBack' },
      { label: 'Visit Limits Combined', name: 'VisitLimitsCombined' },
      { label: 'Previous HIOS Plan ID', name: 'PreviousHIOSPlanID' },
      { label: 'Current HIOS Plan ID', name: 'CurrentHIOSPlanID' },
      { label: 'Metallic Level', name: 'MetallicLevel' },
      { label: 'Actuarial Level', name: 'ActuarialLevel' },
      { label: 'AV Calculator', name: 'AVCalculator' },
      { label: 'Available Country', name: 'AvailableCountry' },
      { label: 'Actuarial Value Min', name: 'ActuarialValueMin' },
      { label: 'Actuarial Value Max', name: 'ActuarialValueMax' },
      { label: 'Rule Package Key', name: 'RulePackageKey' }
    ]
    
    planDetailsForm = new FormGroup({
        
    })

    constructor(private router: Router) {}

    redirectToHome () {
      this.router.navigate(['/portfolio-management'])
    }

}
