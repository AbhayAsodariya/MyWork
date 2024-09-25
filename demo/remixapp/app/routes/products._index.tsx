import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/person");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
console.log(data[0].name);

  return (
    <div>
      {data &&
        data.map((item) => (
          
            <Link to={`/product/addcart/${item._id}`}>
              <h1 className="text-emerald-400">{item.name}</h1>
            </Link>
         
        ))}
    </div>
  );
}
