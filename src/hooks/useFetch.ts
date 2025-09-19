import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetch(true);
        setError(null);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const response = await res.json();

        setData(response);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsFetch(false);
      }
    };

    fetchData();
  }, []);

  return { data, isFetch, error };
}
