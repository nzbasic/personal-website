import React from 'react';

import { CountryFeature } from './types';
import { useProjection } from './projection/useProjection';
import { ResponsiveChildProps, ResponsiveContainer } from '../graph/ResponsiveContainer';
import { getColor } from './color';

// credit: react-d3-globe by sitek94 (MIT License) https://github.com/sitek94/react-d3-globe

interface GlobeProps extends ResponsiveChildProps {
  countries: CountryFeature[]
}

export const Globe = ({ countries, width = 400, height = 400 }: GlobeProps) => {
  const size = width;
  const cx = width / 2;
  const cy = height / 2;
  const r = size / 2;

  const svgRef = React.useRef<SVGSVGElement>(null);
  const { rotateTo } = useProjection({
    cx,
    cy,
    scale: size / 2,
    svgRef,
    countries,
  });

  const handleCountryClick = (country: CountryFeature) => {
    rotateTo(country.properties.position);
  };

  return (
    <svg ref={svgRef} width={width} height={height} className="globe">
      <circle cx={cx} cy={cy} r={r} className="fill-function" />
      {countries.map(country => (
        <g key={country.id}>
          <path
            aria-valuetext={country.properties.requests.toLocaleString()}
            aria-label={country.properties.name}
            style={{ fill: getColor(country.properties.requests) }}
            className={`country ${country.properties.name} stroke-black hover:stroke-red-700`}
            onClick={() => handleCountryClick(country)}
          />
        </g>
      ))}
    </svg>
  );
}

const GlobeMemo = React.memo(Globe);

interface ResponsiveGlobeProps {
  countries: CountryFeature[];
  className?: string
}

export const ResponsiveGlobe = ({ countries, className }: ResponsiveGlobeProps) => {
  return (
    <ResponsiveContainer className={className}>
      <GlobeMemo countries={countries} />
    </ResponsiveContainer>
  )
};
