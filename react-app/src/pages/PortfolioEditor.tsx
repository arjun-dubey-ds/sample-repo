export function PortfolioEditor() {
  const access_token = sessionStorage.getItem('access_token');
  return (
    <div className="flex w-full h-full">
      <div style={{ flex: 1 }}>Vertical Form</div>
      <div style={{ flex: 1 }}>Editor Tabs</div>
    </div>
  );
}


