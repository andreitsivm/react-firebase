import { useCallback, useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const baseUrl =
    "https://europe-west1-react-firebase-app-bd713.cloudfunctions.net/api";

  const request = useCallback(
    async (
      url: string,
      method = "GET",
      body = null,
      headers: { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
        }
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Error");
        }
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
