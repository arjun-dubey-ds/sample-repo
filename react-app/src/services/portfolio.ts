import api from './http';

export async function testServiceConnection(): Promise<string> {
  const { data } = await api.post<string>('test-connection', {});
  return data as any;
}

export async function getUserPortfolios(userId: string): Promise<any[]> {
  const { data } = await api.get<any[]>(`get-user-portfolios`, { params: { createdBy: userId } });
  return data;
}

export async function getUserPortfolioMemberGroup(userId: string): Promise<any[]> {
  const { data } = await api.get<any[]>(`get-user-portfolios-member-group`, { params: { createdBy: userId } });
  return data;
}


