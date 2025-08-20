import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function VerticalForm() {
  const navigate = useNavigate();
  const controls = useMemo(() => [
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
  ], []);

  const [values, setValues] = useState<Record<string, string>>({});

  return (
    <form className="form-bg flex flex-column align-items-center justify-content-start gap-2 w-27rem m-3 h-fit">
      <div className="w-full p-3 flex flex-column gap-2">
        <Button outlined className="w-full p-button-flex gap-2" icon="pi pi-save" label="Save" type="button" />
        <Button outlined severity="secondary" className="w-full" label="Close" type="button" onClick={() => navigate('/portfolio-management')} />
      </div>
      <Divider className="w-full" />
      <div className="bg-custom w-full text-center p-2">
        <span className="text-xl font-medium">Plan Details</span>
      </div>
      <div className="w-full p-3 flex flex-column gap-2">
        {controls.map((c) => (
          <div key={c.name} className="flex flex-column gap-2 w-full">
            <label htmlFor={c.name}>{c.label}</label>
            <InputText id={c.name} value={values[c.name] || ''} onChange={(e) => setValues((prev) => ({ ...prev, [c.name]: e.target.value }))} className="w-full" />
          </div>
        ))}
      </div>
    </form>
  );
}


