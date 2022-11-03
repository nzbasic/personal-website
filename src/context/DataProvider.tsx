import axios from 'axios';
import React, {
  useState, createContext, useEffect, useContext,
} from 'react';
import { CFAnalytics } from '../types/api';

import { FeatureCollection } from 'geojson';
import { feature } from 'topojson-client';
import { Topology } from 'topojson-specification';
import { Features } from '../components/globe/types';

export interface Data {
  analytics: CFAnalytics | null;
  features: Features | null;
}

const defaultContext: Data = {
  analytics: null,
  features: null,
};

export const DataContext = createContext<Data>(defaultContext);

const DataProvider = ({ children }: any) => {
  const [analytics, setAnalytics] = useState<CFAnalytics | null>(null)
  const [features, setFeatures] = useState<Features | null>(null);

  useEffect(() => {
    axios.get<CFAnalytics>('http://192.168.1.180:5000/analytics/cloudflare').then(res => {
      setAnalytics(res.data);
    })

    axios.get<Topology>('https://unpkg.com/visionscarto-world-atlas@0.0.6/world/110m.json').then(res => {
      const topology = res.data;
      const countries = topology.objects.countries;
      const { features } = feature(topology, countries) as FeatureCollection;
      setFeatures(features);
    })
  }, [])

  return (
    <DataContext.Provider
      value={{ analytics, features }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataProvider;
