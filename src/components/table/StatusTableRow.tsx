import { RowProps, TableData } from "../../types/table";
import { bytesToFileSize } from "../../util/fileSize";
import humanizeDuration from "humanize-duration";
import classNames from 'classnames'
import React from "react";

const parseStatusRow = (key: string, entry: TableData) => {
  const value = entry[key]

  if (key === "TotalSize" || key === "RemainingSize") {
    return <>{bytesToFileSize(value)}</>
  } else if (key === "AverageSpeed") {
    return <>{(value / 1e6).toFixed(0)}Mbps</>
  } else if (key === "EstTimeLeft") {
    return <>{humanizeDuration(value * 1000, { round: true, largest: 2 })}</>
  }

  return <>{entry[key]}</>
}

const StatusTableRow: React.FC<RowProps> = ({ entry, headers }) => (
  <>
    {headers.map((header, index) => (
      <td
        key={header.key}
        className={classNames(
          { 'pl-6': index === 0 },
          'p-1 px-3 h-12 text-sm whitespace-pre-wrap',
        )}
      >
        {parseStatusRow(header.key, entry)}
      </td>
    ))}
  </>
);

export default StatusTableRow;
