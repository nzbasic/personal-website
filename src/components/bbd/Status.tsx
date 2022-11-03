import { Glass } from "../layout/Glass";
import useApi from '../../hooks/useApi';
import { Metrics } from "../../types/api";
import { bytesToFileSize } from '../../util/fileSize';
import { useEffect, useMemo } from "react";
import Table from "../table/Table";
import StatusTableRow from "../table/StatusTableRow";
import { TableHeader } from "../../types/table";

const headers: TableHeader[] = [
  { title: "Total Size", key: "TotalSize" },
  { title: "Remaining Size", key: "RemainingSize" },
  { title: "Download Speed", key: "AverageSpeed" },
  { title: "Time Left", key: "EstTimeLeft" }
];

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

  if (!metrics) return <>Loading...</>
  return (
    <div className="flex flex-col gap-4 items-center flex-grow w-full max-w-2xl bg-monokai-light rounded-xl select-none">
      <div className="bg-[#00ff00] rounded-xl rounded-b-none shadow w-full h-24">
        <div className="text-black flex justify-between items-center w-full h-full px-8">
          <div className="flex flex-col items-center w-full">
            <span className="font-bold text-3xl">{(currentBandwidth / 1e6).toFixed(0)}Mbps</span>
            <span>{(metrics.Download.CurrentBandwidthUsage / 1e6).toFixed(0)}Mbps Avg 1min</span>
          </div>
          <span className="text-xl w-full font-medium text-center">Bandwidth Use</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full px-6">
        <span className="font-bold text-lg">Daily Stats</span>
        <div className="flex flex-col">
          <span>{metrics.Download.DailyStats.Maps} Beatmap Sets Downloaded</span>
          <span>{bytesToFileSize(metrics.Download.DailyStats.Size)} Downloaded</span>
          <span>{currentDownloads.filter((i) => i.Ended).length} Completed Downloads</span>
        </div>
      </div>
      

      <div className="flex flex-col gap-2 w-full">
        <span className="font-bold text-lg px-6 pb-2">Current Downloads</span>
        {activeDownloads.length ? (
          <Table
            data={activeDownloads.slice(0,5)}
            headers={headers}
            RenderRow={StatusTableRow}
          />
        ) : (
          <span className="font-medium px-6 pb-4">No active downloads</span>
        )}
      </div>
    </div>
  )
};