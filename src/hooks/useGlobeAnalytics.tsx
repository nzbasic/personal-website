import { useMemo, useState } from "react";
import { CountryFeature, CountryProperties, Rotation } from "../components/globe/types";
import { useData } from "../context/DataProvider";

const bermudaTrianglePosition: Rotation = [
  25.027684437991375,
  -70.99627570018042,
];

export const notFoundCountry: CountryProperties = {
  id: 'unknown',
  name: 'unknown',
  position: bermudaTrianglePosition,
  requests: 0,
};

export const useGlobeAnalytics = () => {
  const { analytics, features } = useData();

  const countries: CountryFeature[] | null = useMemo(() => {
    if (!analytics || !features) return null;

    return features.map(feature => {
      const countryProps = analytics.countries.find(c => c.id === Number(feature.id))

      const properties: CountryProperties = countryProps ? {
        id: countryProps.id.toString(),
        name: countryProps.name,
        position: [countryProps.latitude, countryProps.longitude],
        requests: countryProps.requests
      } : notFoundCountry

      return { 
        ...feature,
        properties
      }
    })
  }, [analytics, features])

  return { countries }
};
