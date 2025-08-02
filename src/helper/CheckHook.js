import { useMemo, useState, useEffect } from "react";

export function useUniqueCheck(data, key) {
  return useMemo(() => {
    const values = data.map((item) => item[key]);
    return new Set(values).size === values.length;
  }, [data, key]);
}

export const useQtyValidation = (data, key) => {
  return useMemo(() => {
    if (!data || !Array.isArray(data)) {
      return false;
    }
    const invalidItems = data.filter((item) => {
      return (
        item[key] === undefined ||
        item[key] === null ||
        typeof item[key] !== "number" ||
        isNaN(item[key]) ||
        !isFinite(item[key])
      );
    });
    return invalidItems.length === 0;
  }, [data, key]);
};

/**
 * Fetch example Json data
 * Not recommended for production use!
 */
export const useFetchJson = (url, limit) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            // Note error handling is omitted here for brevity
            const response = await fetch(url);                
            const json = await response.json();
            const data = limit ? json.slice(0, limit) : json;
            setData(data);
            setLoading(false);
        };
        fetchData();
    }, [url, limit]);
    return { data, loading };
};