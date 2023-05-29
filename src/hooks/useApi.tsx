import { useState, useCallback, useEffect } from "react";
import axios from "axios";

export interface ApiResponse<T> {
  data?: T | undefined;
  error?: Error | undefined;
  loading: boolean;
  refetch: () => void;
}

export function useApi<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const refetch = useCallback(
    async () => {
      setError(undefined);
      setLoading(true);
      try {
        const result = await axios.get<T>(url);
        setData(result.data);
      } catch (error) {
        setError(error as Error);
      }
      setLoading(false);
    },
    [url]
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    data,
    error,
    loading,
    refetch,
  };
}

export default useApi;
