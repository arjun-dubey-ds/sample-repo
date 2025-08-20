import { Accordion, AccordionTab } from 'primereact/accordion';
import { Calendar } from 'primereact/calendar';
import { useMemo, useState } from 'react';

type Row = { label: string; options: string[]; values: { tier1: string; inn: string; oon: string } };

export function BenefitCategory({ title }: { title: string }) {
  const [effectiveFrom, setEffectiveFrom] = useState<Date | null>(null);
  const [effectiveTo, setEffectiveTo] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState<'portfolio' | 'limits' | 'services' | 'history'>('portfolio');
  const [activeNav, setActiveNav] = useState<'info' | 'notes' | 'questions' | 'artifacts'>('info');
  const [rows, setRows] = useState<Row[]>(() => ([
    { label: 'Levels', options: ['Low','Moderate','High'], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Covered', options: ['Yes','No'], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Copay', options: [], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Copay Type', options: ['Per Day','Per occurence','Per Stay'], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Max No.', options: [], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Coinsurance', options: [], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Deductable', options: ['Yes','No'], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Per Occurance', options: ['Seldom','Moderate','Frequent'], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Visits From', options: [], values: { tier1: '', inn: '', oon: '' } },
    { label: 'Visits Thru', options: [], values: { tier1: '', inn: '', oon: '' } }
  ]));

  const tabs = useMemo(() => ([
    { label: 'Portfolio Information', key: 'portfolio' },
    { label: 'Limits and Codes Information', key: 'limits' },
    { label: 'Services Information', key: 'services' },
    { label: 'History Information', key: 'history' }
  ]), []);

  return (
    <div className="benefitcategory-container">
      <Accordion multiple={false} className="benefitcategory-main-accordion">
        <AccordionTab header={title}>
          <div className="benefitcategory-content">
            <div className="top-nav flex flex-wrap flex-row justify-content-between align-items-center">
              <div className="px-3 flex flex-column gap-2">
                <label>Effective Date Between</label>
                <div className="flex flex-row justify-content-start align-items-center gap-2">
                  <label>
                    From <Calendar value={effectiveFrom} onChange={(e) => setEffectiveFrom(e.value as Date)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" showIcon />
                  </label>
                  <label>
                    To <Calendar value={effectiveTo} onChange={(e) => setEffectiveTo(e.value as Date)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" showIcon />
                  </label>
                </div>
              </div>
              <div className="nav-btn-group flex gap-2 align-items-end">
                {[
                  { key: 'info', label: 'Information', icon: 'pi pi-book' },
                  { key: 'notes', label: 'Notes', icon: 'pi pi-comment-circle' },
                  { key: 'questions', label: 'Questions', icon: 'pi pi-question' },
                  { key: 'artifacts', label: 'Artifacts', icon: 'pi pi-book' }
                ].map((tab) => (
                  <button key={tab.key} className={`nav-btn ${activeNav === tab.key ? 'active' : ''}`} onClick={() => setActiveNav(tab.key as any)}>
                    <i className={tab.icon}></i> {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="custom-tabs">
              {tabs.map((t) => (
                <button key={t.key} className={`tab-btn ${activeTab === (t.key as any) ? 'active' : ''}`} onClick={() => setActiveTab(t.key as any)}>{t.label}</button>
              ))}
            </div>

            {activeTab === 'portfolio' && (
              <div className="benefit-table-wrapper">
                <table className="benefit-table">
                  <thead>
                    <tr>
                      <th className="blank-header"></th>
                      <th>Preferred Network (Tier 1)</th>
                      <th>INN</th>
                      <th>OON</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, rowIdx) => (
                      <tr key={rowIdx}>
                        <td className={`px-2 ${row.label === 'Levels' ? 'bold' : ''}`}>{row.label}</td>
                        {(['tier1','inn','oon'] as const).map((col) => (
                          <td key={col}>
                            {row.options.length ? (
                              <select value={row.values[col]} onChange={(e) => {
                                const v = e.target.value;
                                setRows((prev) => prev.map((r, idx) => idx === rowIdx ? { ...r, values: { ...r.values, [col]: v } } : r));
                              }} className="table-dropdown">
                                {row.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                              </select>
                            ) : (
                              <input type="text" className="w-full" value={row.values[col]} onChange={(e) => {
                                const v = e.target.value;
                                setRows((prev) => prev.map((r, idx) => idx === rowIdx ? { ...r, values: { ...r.values, [col]: v } } : r));
                              }} />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
}


