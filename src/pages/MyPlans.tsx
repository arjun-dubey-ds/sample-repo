import { useEffect, useMemo, useState } from 'react';
import { Table, TableSettings, ActionSettings } from '@/components/Table';
import { getUserPortfolios, getUserPortfolioMemberGroup } from '@/services/portfolio';

export function MyPlans() {
  const [username, setUsername] = useState<string>('');
  const [mainTableData, setMainTableData] = useState<any[]>([]);
  const [memberGroupTableData, setMemberGroupTableData] = useState<any[]>([]);
  const [dbsIdSelected, setDbsIdSelected] = useState(true);

  useEffect(() => {
    const user = sessionStorage.getItem('username') || '';
    setUsername(user);
    getUserPortfolios(user).then(setMainTableData).catch(() => setMainTableData([]));
    getUserPortfolioMemberGroup(user).then(setMemberGroupTableData).catch(() => setMemberGroupTableData([]));
  }, []);

  const mainTableActions: ActionSettings[] = [
    { title: 'Edit', func: (r) => console.log('Edit', r), params: [], severity: 'primary' },
    { title: 'Clone', func: (r) => console.log('Clone', r), params: [], severity: 'success' },
    { title: 'Deactivate', func: (r) => console.log('Deactivate', r), params: [], severity: 'danger' }
  ];

  const mainTableSettings: TableSettings = {
    columns: [
      { field: 'digitalBenefitID', header: 'DBS ID', width: '120px', minWidth: '100px' },
      { field: 'customerName', header: 'Customer Name', width: '140px', minWidth: '120px' },
      { field: 'policyNumber', header: 'Policy Number', width: '100px', minWidth: '80px' },
      { field: 'state', header: 'State', width: '100px', minWidth: '80px' },
      { field: 'planCode', header: 'Plan Code', width: '120px', minWidth: '100px' },
      { field: 'cocSeries', header: 'COC Series', width: '140px', minWidth: '120px' },
      { field: 'segment', header: 'Segment', width: '120px', minWidth: '100px' },
      { field: 'product', header: 'Product', width: '120px', minWidth: '100px' },
      { field: 'license', header: 'License', width: '120px', minWidth: '100px' },
      { field: 'planType', header: 'Plan Type', width: '120px', minWidth: '100px' }
    ],
    actions: mainTableActions,
    selectable: false
  };

  const memberGroupTableChildActions: ActionSettings[] = [
    { title: 'Edit', func: (r) => console.log('Edit', r), params: [], severity: 'primary' },
    { title: 'Clone', func: (r) => console.log('Clone', r), params: [], severity: 'success' },
    { title: 'Add', func: (r) => console.log('Add', r), params: [], severity: 'success' },
    { title: 'Deactivate', func: (r) => console.log('Deactivate', r), params: [], severity: 'danger' }
  ];

  const memberGroupTableChildSettings: TableSettings = {
    columns: [
      { field: 'digitalBenefitID', header: 'DBS ID', width: '120px', minWidth: '100px' },
      { field: 'state', header: 'State', width: '100px', minWidth: '80px' },
      { field: 'planCode', header: 'Plan Code', width: '120px', minWidth: '100px' },
      { field: 'cocSeries', header: 'COC Series', width: '140px', minWidth: '120px' },
      { field: 'segment', header: 'Segment', width: '120px', minWidth: '100px' },
      { field: 'product', header: 'Product', width: '120px', minWidth: '100px' },
      { field: 'license', header: 'License', width: '120px', minWidth: '100px' },
      { field: 'planType', header: 'Plan Type', width: '120px', minWidth: '100px' }
    ],
    actions: memberGroupTableChildActions,
    selectable: false
  };

  const memberGroupTableParentSettings: TableSettings = useMemo(() => ({
    columns: [
      { field: 'customerName', header: 'Customer Name', width: '140px', minWidth: '120px' },
      { field: 'policyNumber', header: 'Policy Number', width: '150px', minWidth: '130px' }
    ],
    selectable: false,
    expandable: true,
    childTableSettings: memberGroupTableChildSettings
  }), []);

  return (
    <div className="p-card-body">
      <div className="p-mb-3">
        <button className="p-button p-component p-button-text" onClick={() => setDbsIdSelected(true)}>DBS ID</button>
        <button className="p-button p-component p-button-text" onClick={() => setDbsIdSelected(false)}>Member Group</button>
      </div>

      {dbsIdSelected ? (
        <div className="p-3">
          <Table settings={mainTableSettings} records={mainTableData} loading={false} totalRecords={mainTableData.length} paginate enableSort pageSize={25} rowsPerPage={[10,25,50]} onPageChange={(e) => console.log('Page changed:', e)} />
        </div>
      ) : (
        <div className="p-3">
          <Table settings={memberGroupTableParentSettings} records={memberGroupTableData} loading={false} totalRecords={memberGroupTableData.length} paginate enableSort pageSize={25} rowsPerPage={[10,25,50]} onPageChange={(e) => console.log('Page changed:', e)} />
        </div>
      )}
    </div>
  );
}


