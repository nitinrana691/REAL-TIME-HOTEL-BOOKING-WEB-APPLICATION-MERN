import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const HotelList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get("city");

  const { data, loading, error } = useFetch(`/hotels?city=${city}`);

  return (
    <div>
      <h1>Hotels in {city}</h1>
      {loading ? (
        "Loading please wait..."
      ) : (
        <ul>
          {data.map((hotel) => (
            <li key={hotel.id}>{hotel.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelList;
