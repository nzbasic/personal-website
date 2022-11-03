export interface Metrics {
  Download: DownloadMetrics
  Database: DatabaseMetrics
}

export interface DownloadMetrics {
  CurrentDownloads: CurrentDownload[]
  DailyStats: DailyDownloadStats
  CurrentBandwidthUsage: number
}

export interface CurrentDownload {
  Id: number
  TotalSize: number
  Ended: boolean
  RemainingSize: number
  AverageSpeed: number
  EstTimeLeft: number
}

export interface DailyDownloadStats {
  Maps: number
  Size: number
  Speed: number
}

export interface DatabaseMetrics {
  NumberStoredRanked: number
  NumberStoredUnranked: number
  NumberStoredLoved: number
  LastBeatmapAdded: number
}

export interface CFAnalytics {
  total: {
    requests: number;
    pageViews: number;
    bytes: number;
    visits: number;
  };
  countries: {
    id: number;
    name: string;
    country: string;
    requests: number;
    pageViews: number;
    bytes: number;
    visits: number;
    latitude: number;
    longitude: number;
  }[]
}
