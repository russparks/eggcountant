import { AppRecordMap, CollectionName, SessionUser } from './types';

const API_BASE = import.meta.env.DEV ? 'http://localhost:8000/api' : './api';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const isFormData = typeof FormData !== 'undefined' && init?.body instanceof FormData;
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: isFormData ? (init?.headers || {}) : {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    ...init,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new Error(data.error || 'Request failed');
  }

  return data as T;
}

export const authApi = {
  session: async () => request<{ user: SessionUser | null }>('/session.php'),
  register: async (email: string, password: string, nickname: string) =>
    request<{ user: SessionUser }>('/register.php', {
      method: 'POST',
      body: JSON.stringify({ email, password, nickname }),
    }),
  login: async (email: string, password: string) =>
    request<{ user: SessionUser }>('/login.php', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  logout: async () =>
    request<{ ok: boolean }>('/logout.php', {
      method: 'POST',
      body: JSON.stringify({}),
    }),
};

export const dataApi = {
  list: async <K extends CollectionName>(collection: K): Promise<AppRecordMap[K][]> => {
    const data = await request<{ items: AppRecordMap[K][] }>(`/data.php?collection=${collection}`);
    return data.items;
  },
  upsert: async <K extends CollectionName>(collection: K, item: AppRecordMap[K]): Promise<AppRecordMap[K]> => {
    const data = await request<{ item: AppRecordMap[K] }>(`/data.php?collection=${collection}`, {
      method: 'POST',
      body: JSON.stringify({ item }),
    });
    return data.item;
  },
  remove: async (collection: CollectionName, id: string): Promise<void> => {
    await request(`/data.php?collection=${collection}&id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },
};
