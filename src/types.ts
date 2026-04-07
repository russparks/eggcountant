export type SessionUser = {
  id: string;
  email: string;
  nickname?: string;
  createdAt?: string | null;
};

export type Location = {
  id: string;
  name: string;
  type: 'Garden' | 'Allotment' | 'Other';
  photoUrl?: string;
};

export type HenAppearance = 'Healthy' | 'Unhealthy' | 'Broody' | 'Fluffy' | 'Moulting' | 'Speckled' | 'Scruffy';

export type Hen = {
  id: string;
  name: string;
  breed?: string;
  locationId: string;
  status: HenAppearance;
  photoUrl?: string;
  notes?: string;
};

export type EggLogMode = 'produce' | 'breed';

export type EggLog = {
  id: string;
  date: string;
  count: number;
  locationId: string;
  henId?: string;
  notes?: string;
  mode?: EggLogMode;
  coopTemperature?: number;
};

export type FeedLog = {
  id: string;
  date: string;
  amount: number;
  cost?: number;
  weight?: number;
  feedType?: string;
  locationId: string;
  notes?: string;
};

export type MedicationLog = {
  id: string;
  date: string;
  henId?: string;
  locationId: string;
  medicationName: string;
  dosage: string;
  notes?: string;
};

export type SaleItemType = 'eggs' | 'chicks' | 'chickens';

export type SaleLog = {
  id: string;
  date: string;
  quantity: number;
  price: number;
  itemType?: SaleItemType;
  notes?: string;
};

export type Chick = {
  id: string;
  hatchDate: string;
  gender?: 'Male' | 'Female' | 'Unknown';
  photoUrl?: string;
};

export type ChickBatch = {
  id: string;
  dateStarted: string;
  expectedHatchDate: string;
  hatchDate?: string;
  count: number;
  status: 'Incubating' | 'Hatched' | 'Failed';
  locationId: string;
  henId?: string;
  notes?: string;
  temperature?: number;
  hatchedCount?: number;
  perishedCount?: number;
  chicks?: Chick[];
  photoUrl?: string;
};

export type AppState = {
  locations: Location[];
  eggLogs: EggLog[];
  hens: Hen[];
  feedLogs: FeedLog[];
  medicationLogs: MedicationLog[];
  saleLogs: SaleLog[];
  chickBatches: ChickBatch[];
};

export type CollectionName = 'locations' | 'eggLogs' | 'hens' | 'feedLogs' | 'medicationLogs' | 'saleLogs' | 'chickBatches';

export type AppRecordMap = {
  locations: Location;
  eggLogs: EggLog;
  hens: Hen;
  feedLogs: FeedLog;
  medicationLogs: MedicationLog;
  saleLogs: SaleLog;
  chickBatches: ChickBatch;
};

export type SalesRecord = {
  id: string;
  recordType: 'sale' | 'expense';
  date: string;
  type: string;
  item: string;
  party: string;
  qty: string;
  total: number;
  status: 'Paid' | 'Due' | 'Overdue' | 'Cancelled' | string;
  dueDate?: string | null;
  icon: string;
};

export type SalesSummary = {
  salesTotal: number;
  expensesTotal: number;
  allTimeNet: number;
};

export type SalesPagination = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};
