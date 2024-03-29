import { Group } from "@visx/group";
import { scaleLinear } from "@visx/scale";
import { Grid } from "@visx/grid";
import { useTooltip, Tooltip } from "@visx/tooltip"
import { localPoint } from "@visx/event"
import { voronoi } from "@visx/voronoi"
import React, { useCallback, useRef , useMemo} from 'react';
import classNames from "classnames";
import { data } from "../../resources/technology";
import { TechnologyEnjoyment } from "../../types/project";
import { ResponsiveChildProps } from "./ResponsiveContainer";

const x = (d: TechnologyEnjoyment) => d.experience;
const y = (d: TechnologyEnjoyment) => d.enjoyment;

const r = 15;
let tooltipTimeout: number;
let index = 0;

export const TechnologyChart = ({ width = 0, height = 0 }: ResponsiveChildProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipOpen,
    tooltipTop = 0,
    tooltipLeft = 0,
  } = useTooltip<TechnologyEnjoyment>()

  const xScale = useMemo(() => scaleLinear({
    domain: [0, 105],
    range: [0, width],
    round: true,
  }), [width])
  
  const yScale = useMemo(() => scaleLinear({
    domain: [0, 110],
    range: [height, 0],
    round: true,
  }), [height])

  const voronoiLayout = useMemo(
    () =>
      voronoi({
        x: (d: TechnologyEnjoyment) => xScale(x(d)) ?? 0,
        y: (d: TechnologyEnjoyment) => yScale(y(d)) ?? 0,
        width,
        height,
      })(data),
    [height, width, xScale, yScale]
  )

  const handleMouseMove = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (tooltipTimeout) clearTimeout(tooltipTimeout);
    if (!svgRef.current) return;

    // find the nearest polygon to the current mouse position
    const point = localPoint(svgRef.current, event);
    if (!point) return;
    const closest = voronoiLayout.find(point.x, point.y, 40);
    if (closest) {
      showTooltip({
        tooltipLeft: xScale(x(closest.data)),
        tooltipTop: yScale(y(closest.data)),
        tooltipData: closest.data,
      });
    }
  }, [showTooltip, voronoiLayout, xScale, yScale]);

  const handleMouseLeave = useCallback(() => {
    tooltipTimeout = window.setTimeout(() => {
      hideTooltip()
    }, 250)
  }, [hideTooltip])

  return (
    <div className="relative">
      <svg width={width} height={height} ref={svgRef}>
        <Grid 
          className="disable-grid-border stroke-monokai-light"
          height={height}
          width={width}
          xScale={xScale}
          yScale={yScale}
          stroke=""
        />

        <rect
          width={width}
          height={height}
          fill="transparent"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseLeave}
        />

        <defs>
          {data.map(({ imageUrl }, i) => (
            <React.Fragment key={i}>
              <pattern
                id={`img-${i}`}
                patternUnits="objectBoundingBox"
                width="100%"
                height="100%"
              >
                <image href={imageUrl} width={r*2} height={r*2} />
              </pattern>
            </React.Fragment>
          ))}
        </defs>

        <Group pointerEvents="none">
          {data.map((point, i) => (
            point.background ? (
              <React.Fragment key={i}>
                <circle
                  cx={xScale(x(point))}
                  cy={yScale(y(point))}
                  r={r + 2}
                  fill={point.background}
                  className={classNames({ 'stroke-function': tooltipData === point })}
                  strokeWidth={2}
                />
                <circle
                  cx={xScale(x(point))}
                  cy={yScale(y(point))}
                  r={r}
                  fill={`url(#img-${i})`}
                />
              </React.Fragment>
            ) : (
              point.circle ? (
                <circle
                  key={i}
                  cx={xScale(x(point))}
                  cy={yScale(y(point))}
                  r={r}
                  fill={`url(#img-${i})`}
                  className={classNames({ 'stroke-function': tooltipData === point })}
                  strokeWidth={2}
                /> 
              ) : (
                <rect
                  key={i}
                  x={xScale(x(point)) - r}
                  y={yScale(y(point)) - r}
                  width={r*2}
                  height={r*2}
                  fill={`url(#img-${i})`}
                  className={classNames({ 'stroke-function': tooltipData === point })}
                  strokeWidth={2}
                />
              )
            )
          ))}
        </Group>
      </svg>
      {tooltipOpen && tooltipData && tooltipLeft != null && tooltipTop != null && (
        <Tooltip left={tooltipLeft - 50} top={tooltipTop + 10} className="!bg-function border border-black">
          <div className="text-white">
            {tooltipData.title}
          </div>
        </Tooltip>
      )}
    </div>
  )
};

export const TechnologyChartMemo = React.memo(TechnologyChart);
