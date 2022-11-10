import useApi from '../../hooks/useApi';
import { Metrics } from "../../types/api";
import { bytesToFileSize } from '../../util/fileSize';
import { useEffect, useMemo } from "react";

export const Status = () => {
  const { data: metrics, refetch } = useApi<Metrics>('https://api.nzbasic.com/metrics')

  useEffect(() => {
    if (!metrics) return;
    const interval = setInterval(refetch, 3000);
    return () => clearInterval(interval);
  }, [metrics, refetch])

  const [currentDownloads, activeDownloads, currentBandwidth] = useMemo(() => {
    const currentDownloads = metrics?.Download?.CurrentDownloads ?? []
    const activeDownloads = currentDownloads
      .filter((i) => !i.Ended)
      .filter((i) => i.EstTimeLeft > 0);

    const currentBandwidth = activeDownloads.reduce<number>((acc, cur) => acc + cur.AverageSpeed, 0);
    return [currentDownloads, activeDownloads, currentBandwidth]
  }, [metrics]);


  if (!metrics) return (
    <div className="flex flex-col sm:flex-row w-full bg-monokai-light rounded-xl">
      <div className="flex flex-col items-center justify-center p-4 bg-emerald-500 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl w-full sm:w-52 gap-1">
        <span className="text-center font-semibold">Current Usage</span>
        <div className="bg-gray-50/40 rounded animate-pulse">
          <span className="text-center font-semibold invisible">0 Active Downloads</span>
        </div>
        <div className="bg-gray-50/40 rounded animate-pulse">
          <span className="font-bold text-lg sm:text-3xl invisible">0Mpbs</span>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-1">
        <span className="font-bold text-lg">Daily Stats</span>
        <div className="flex flex-col gap-1">
          <div className="bg-gray-50/30 rounded animate-pulse">
            <span className="invisible">0 Beatmap Sets Downloaded</span>
          </div>
          <div className="bg-gray-50/30 rounded animate-pulse">
            <span className="invisible">000.00GB Downloaded</span>
          </div>
          <div className="bg-gray-50/30 rounded animate-pulse">
            <span className="invisible">000 Completed Downloads</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col sm:flex-row w-full bg-monokai-light rounded-xl">
      <div className="flex flex-col items-center justify-center p-4 bg-emerald-500 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl w-full sm:w-52 gap-1">
        <span className="text-center font-semibold">Current Usage</span>
        <span className="text-center font-semibold">{activeDownloads.length} Active Downloads</span>
        <span className="font-bold text-lg sm:text-3xl">{(currentBandwidth / 1e6).toFixed(0)}Mbps</span>
      </div>
      <div className="flex flex-col p-4 gap-1">
        <span className="font-bold text-lg">Daily Stats</span>
        <div className="flex flex-col gap-1">
          <span>{metrics.Download.DailyStats.Maps} Beatmap Sets Downloaded</span>
          <span>{bytesToFileSize(metrics.Download.DailyStats.Size)} Downloaded</span>
          <span>{currentDownloads.filter((i) => i.Ended).length} Completed Downloads</span>
        </div>
      </div>
    </div>
  );
};