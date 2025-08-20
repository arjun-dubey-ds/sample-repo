import { useMemo, useState } from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { TabView, TabPanel } from 'primereact/tabview';
import { Table, TableSettings, ActionSettings } from '@/components/Table';
import { useNavigate } from 'react-router-dom';

export function PortfolioManagement() {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    planCode: '',
    segment: '',
    state: '',
    cocSeries: '',
    license: '',
    product: '',
    standard: '',
    planType: ''
  });

  const tableData = useMemo(() => ([
    { planCode: 'PC001', orgnaization: 'Org A', cocSeries: 'COC-A', state: 'CA', segment: 'KA', license: 'LIC001', product: 'Product-A', standard: 'Standard' },
    { planCode: 'PC002', orgnaization: 'Org A', cocSeries: 'COC-B', state: 'TX', segment: 'KA', license: 'LIC002', product: 'Product-A', standard: 'Standard' },
    { planCode: 'PC003', orgnaization: 'Org A', cocSeries: 'COC-C', state: 'NY', segment: 'KA', license: 'LIC003', product: 'Product-A', standard: 'Standard' }
  ]), []);

  const actions: ActionSettings[] = [
    { title: 'Standard', showTitle: true, func: () => navigate('/portfolio-management/portfolio-editor'), params: [], size: 'small', outlined: true, severity: 'primary' },
    { title: 'Custom', showTitle: true, func: () => navigate('/portfolio-management/portfolio-editor'), params: [], size: 'small', outlined: true, severity: 'primary' }
  ];

  const tableSettings: TableSettings = {
    columns: [
      { field: 'planCode', header: 'Plan Code', width: '120px', minWidth: '100px' },
      { field: 'cocSeries', header: 'COC Series', width: '140px', minWidth: '120px' },
      { field: 'state', header: 'State', width: '100px', minWidth: '80px' },
      { field: 'segment', header: 'Segment', width: '100px', minWidth: '80px' },
      { field: 'license', header: 'License', width: '120px', minWidth: '100px' },
      { field: 'product', header: 'Published', width: '140px', minWidth: '120px' },
      { field: 'standard', header: 'Standard', width: '120px', minWidth: '100px' }
    ],
    actions,
    selectable: false
  };

  return (
    <TabView>
      <TabPanel header="Portfolio Management" leftIcon="pi pi-briefcase mr-2">
        <h1>Portfolio Management</h1>
        <div className="p-card p-3 m-5">
          <div className="p-card-body">
            <form onSubmit={(e) => { e.preventDefault(); console.log('Search form values:', search); }}>
              <div className="grid">
                <div className="flex justify-content-center col-3 p-2 mt-2">
                  <div className="p-float-label w-full">
                    <InputText id="planCode" value={search.planCode} onChange={(e) => setSearch({ ...search, planCode: e.target.value })} className="w-full" />
                    <label htmlFor="planCode">Plan Code</label>
                  </div>
                </div>

                {[
                  { id: 'segment', options: ['KA','KB','KC'] },
                  { id: 'state', options: ['CA','TX','NY','FL'] },
                  { id: 'cocSeries', options: ['COC-A','COC-B','COC-C'] },
                  { id: 'license', options: ['LIC001','LIC002','LIC003'] },
                  { id: 'product', options: ['Product-A','Product-B','Product-C'] },
                  { id: 'standard', options: ['Standard','Custom'] },
                  { id: 'planType', options: ['Type-A','Type-B','Type-C'] }
                ].map(({ id, options }) => (
                  <div key={id} className="flex justify-content-center col-3 p-2 mt-2">
                    <div className="p-float-label w-full">
                      <Dropdown id={id} value={(search as any)[id]} onChange={(e) => setSearch({ ...search, [id]: e.value })} options={options.map(o => ({ label: o, value: o }))} className="w-full" placeholder=" " />
                      <label htmlFor={id}>{id === 'cocSeries' ? 'COC Series' : id.charAt(0).toUpperCase() + id.slice(1)}</label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex">
                <Button type="button" label="Clear" size="small" outlined severity="warning" className="flex-1 flex align-items-center justify-content-center m-2" onClick={() => setSearch({ planCode:'', segment:'', state:'', cocSeries:'', license:'', product:'', standard:'', planType:'' })} />
                <Button type="submit" label="Search" size="small" outlined className="flex-1 flex align-items-center justify-content-center m-2" />
              </div>
            </form>

            <div className="p-3">
              <Table settings={tableSettings} records={tableData} loading={false} totalRecords={tableData.length} paginate enableSort pageSize={25} rowsPerPage={[10,25,50]} onPageChange={(e) => console.log('Page changed:', e)} />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="My Plans">
        <h1>My Plans</h1>
        <div className="p-card p-3 m-5">
          <MyPlans />
        </div>
      </TabPanel>
    </TabView>
  );
}

function MyPlans() {
  return <div>My Plans component is available as a dedicated route too.</div>;
}


