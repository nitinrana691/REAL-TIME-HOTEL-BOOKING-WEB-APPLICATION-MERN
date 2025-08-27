import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=karnal,Sonipat,Panipat"
  );
  const navigate = useNavigate();

  // Function to handle redirection based on city clicked
  const handleCityClick = (city) => {
    navigate(`/hotels?city=${city}`);
  };

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem" onClick={() => handleCityClick("Karnal")}>
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="Karnal"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Karnal</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCityClick("Sonipat")}>
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="Sonipat"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sonipat</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCityClick("Panipat")}>
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="Panipat"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Panipat</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
