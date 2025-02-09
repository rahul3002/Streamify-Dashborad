export interface StreamData {
  id: string;
  songName: string;
  artist: string;
  streams: number;
}

export interface UserGrowthData {
  date: string;
  users: number;
}

export interface RevenueData {
  category: string;
  amount: number;
}

export interface TopSongData {
  songName: string;
  plays: number;
}

export interface DashboardFilters {
  dateRange: [Date, Date];
  searchQuery: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  tablePageSize: number;
  defaultDateRange: number; // in days
}
