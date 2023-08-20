import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");
  const [data, setData] = useState({});
  const [kind, setKind] = useState("");
  const [weather, setWeather] = useState("");
  const [valid, setValid] = useState(true);
  const apiKey = "3265874a2c77ae4a04bb96236a642d2f";
  const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  async function getWeather(city) {
    const resp = await fetch(url(city), {
      origin: "cors",
    });
    const respData = await resp.json();
    setData(respData);
  }

  useEffect(() => {
    if (data.weather) {
      const icons = getIcon(data);
      const description = getDescription(data);
      setIcon(`https://openweathermap.org/img/wn/${icons}@2x.png`);
      setKind(description);
      const info = KtoC(data.main.temp);
      setWeather(info);
      setValid(true);
    } else {
      setValid(false);
    }
  }, [data]);

  const handleSubmits = async (e) => {
    e.preventDefault();
    getWeather(value);
  };
  const handleChange = (e) => {
    let temp = e.target.value;
    setValue(temp);
  };

  const handleFetch = () => {};

  const getIcon = (data) => {
    return data.weather[0].icon;
  };
  const getDescription = (data) => {
    return data.weather[0].main;
  };

  function KtoC(K) {
    return Math.floor(K - 273.15);
  }

  return (
    <>
      <form id="form" onSubmit={handleSubmits}>
        <input
          type="text"
          id="search"
          placeholder="Search by location"
          autoComplete="off"
          onChange={handleChange}
          value={value}
        />
      </form>
      <section id="main">
        {valid ? (
          <>
            <h2 className="weather">
              <img src={icon} />
              {weather}°C
            </h2>
            <small>{kind}</small>
          </>
        ) : (
          <h1 className="weather">Weather App</h1>
        )}
      </section>
    </>
  );
}

export default App;
