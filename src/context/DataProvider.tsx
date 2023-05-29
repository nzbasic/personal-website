import axios from 'axios';
import React, {
  useState, createContext, useEffect, useContext,
} from 'react';
import { CFAnalytics } from '../types/api';

import { FeatureCollection } from 'geojson';
import { feature } from 'topojson-client';
import { Topology } from 'topojson-specification';
import { Features } from '../components/globe/types';
import { contacts } from '../resources/contacts';
import { contentUrl } from '../resources/env';

export interface Data {
  progress: number;
  loaded: boolean;
  analytics: CFAnalytics | null;
  features: Features | null;
}

const defaultContext: Data = {
  progress: 0,
  loaded: false,
  analytics: null,
  features: null,
};

export const DataContext = createContext<Data>(defaultContext);

const DataProvider = ({ children }: any) => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [analytics, setAnalytics] = useState<CFAnalytics | null>(null)
  const [features, setFeatures] = useState<Features | null>(null);

  useEffect(() => {
    const cfPromise = axios.get<CFAnalytics>(contentUrl + '/analytics/cloudflare')
    cfPromise.then(res => {
      setProgress(prev => prev + 0.2)
      setAnalytics(res.data)
    })

    const topPromise = axios.get<Topology>('https://unpkg.com/visionscarto-world-atlas@0.0.6/world/110m.json')
    topPromise.then(res => {
      const topology = res.data;
      const countries = topology.objects.countries;
      const { features } = feature(topology, countries) as FeatureCollection;
      setFeatures(features);
      setProgress(prev => prev + 0.2)
    })

    const loadImage = (image: string) => {
      return new Promise((res, rej) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => {
          setProgress(prev => prev + (0.6/images.length))
          res(image);
        }
        loadImg.onerror = (err) => rej(err)
      })
    }
    
    const images = contacts.map(contact => loadImage(contact.icon))

    Promise.all([...images, cfPromise, topPromise])
      .then(() => {
        setTimeout(() => setLoaded(true), 1000)
      })
      .catch((err) => {
        setTimeout(() => setLoaded(true), 1000)
      })
  }, [])

  return (
    <DataContext.Provider
      value={{ progress, loaded, analytics, features }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataProvider;
