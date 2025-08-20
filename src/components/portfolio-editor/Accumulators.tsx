import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useMemo, useState } from 'react';

export function Accumulators({ isMedical = true }: { isMedical?: boolean }) {
  const tableData = useMemo(() => ([
    { title: 'Deductible Type', isDropdown: true },
    { title: 'Out-of-Pocket Type', isDropdown: true },
    { title: 'Medical and Rx Deductibles Integrated', isDropdown: true },
    { title: 'Medical and Rx Out-of-Pocket Integrated', isDropdown: true },
    { title: 'Deductible - Individual', isDropdown: false },
    { title: 'Deductible - Family', isDropdown: false },
    { title: 'Out-of-Pocket - Individual', isDropdown: false },
    { title: 'Out-of-Pocket - Family', isDropdown: false },
    { title: 'Default Coinsurance', isDropdown: false },
    { title: 'Default Copay', isDropdown: false }
  ]), []);

  const rxTableData = useMemo(() => ([
    { title: 'Deductible - Individual', isDropdown: false },
    { title: 'Deductible - Family', isDropdown: false },
    { title: 'Out-of-Pocket - Individual', isDropdown: false },
    { title: 'Out-of-Pocket - Family', isDropdown: false }
  ]), []);

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const cities = ['a', 'b', 'c'];

  const rows = isMedical ? tableData : rxTableData;

  return (
    <Accordion multiple className="w-full h-full">
      <AccordionTab header="Accumulators" selected>
        <div className="flex flex-col w-full h-full">
          <div className="flex-1 overflow-auto">
            <DataTable value={rows} scrollable scrollHeight="800px">
              <Column field="title" header="" body={(row) => <div className="p-1">{row.title}</div>} />
              <Column header="Preferred" className="bg-custom" body={(row) => row.isDropdown ? (
                <Dropdown options={cities} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} className="w-full" />
              ) : (
                <InputText className="w-full" />
              )} />
              <Column header="Network" className="bg-custom" body={(row) => row.isDropdown && isMedical ? null : (
                !row.isDropdown ? <InputText className="w-full" /> : null
              )} />
              {isMedical && (
                <Column header="OON" className="bg-custom" body={(row) => row.isDropdown ? null : (
                  <InputText className="w-full" />
                )} />
              )}
            </DataTable>
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  );
}


