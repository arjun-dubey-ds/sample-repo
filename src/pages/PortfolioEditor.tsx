import { VerticalForm } from '@/components/portfolio-editor/VerticalForm';
import { EditorTabs } from '@/components/portfolio-editor/EditorTabs';

export function PortfolioEditor() {
  const access_token = sessionStorage.getItem('access_token');
  return (
    <div className="flex w-full h-full">
      <div style={{ flex: 1 }}>
        <VerticalForm />
      </div>
      <div style={{ flex: 2 }}>
        <EditorTabs />
      </div>
    </div>
  );
}


