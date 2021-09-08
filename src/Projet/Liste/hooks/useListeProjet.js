import { useEffect, useState } from "react";
import ListeProjetApi from "../api/ListeProjetApi";

const useListeProjet = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await ListeProjetApi.fetchListeProjet();
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    listeProjets: data ?? [],
    loading: loading,
  };
};

export default useListeProjet;
