import { TabView, TabPanel } from 'primereact/tabview';
import { Accumulators } from './Accumulators';
import { BenefitCategory } from './BenefitCategory';

export function EditorTabs() {
  const titles = ['Ambulance Services - Emergency','Ambulance Services - Non-Emergency','Dental Services - Accident Only'];
  return (
    <TabView className="w-full h-fit">
      <TabPanel header="Header 1" leftIcon="pi pi-folder mr-2">
        <Accumulators isMedical />
        <div className="p-accordion">
          <div className="p-accordion-tab">
            <div className="p-accordion-header">Medical Benefits</div>
            <div className="p-accordion-content">
              {titles.map((t) => (
                <BenefitCategory key={t} title={t} />
              ))}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Header 2" leftIcon="pi pi-book mr-2">
        <Accumulators isMedical={false} />
        <div className="p-accordion">
          <div className="p-accordion-tab">
            <div className="p-accordion-header">Pharmacy Benefits</div>
            <div className="p-accordion-content">
              {titles.map((t) => (
                <BenefitCategory key={t} title={t} />
              ))}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Header 3" disabled leftIcon="pi pi-folder-plus mr-2" />
      <TabPanel header="Header 4" disabled leftIcon="pi pi-file mr-2" />
      <TabPanel header="Header 5" disabled leftIcon="pi pi-comments mr-2" />
      <TabPanel header="Header 6" disabled leftIcon="pi pi-history mr-2" />
    </TabView>
  );
}


