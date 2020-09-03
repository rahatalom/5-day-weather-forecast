import React, { useState, useEffect } from "react";
import Api from "./Api";

function App() {
  const [main, setMain] = useState([]);
  const [temp, setTemp] = useState([]);
  const [desc, setDesc] = useState([]);
  const [icon, setIcon] = useState([]);
  const [main2, setMain2] = useState([]);
  const [temp2, setTemp2] = useState([]);
  const [desc2, setDesc2] = useState([]);
  const [icon2, setIcon2] = useState([]);
  const [main3, setMain3] = useState([]);
  const [temp3, setTemp3] = useState([]);
  const [desc3, setDesc3] = useState([]);
  const [icon3, setIcon3] = useState([]);
  const [main4, setMain4] = useState([]);
  const [temp4, setTemp4] = useState([]);
  const [desc4, setDesc4] = useState([]);
  const [icon4, setIcon4] = useState([]);
  const [main5, setMain5] = useState([]);
  const [temp5, setTemp5] = useState([]);
  const [desc5, setDesc5] = useState([]);
  const [icon5, setIcon5] = useState([]);

  const [city, setCity] = useState("London");

  function handleClick() {
    setCity(document.getElementById("myCity").value);
  }

  var d = new Date();
  var weekday = new Array(7);

  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=e5980787c1ab8b9d3996b3e3b75419dc"
    )
      .then((res) => res.json())
      .then((result) => {
        setMain(result.list[0].weather[0].main);
        setTemp(Math.floor(parseInt(result.list[0].main.temp) - 273.15));
        setDesc(result.list[0].weather[0].description);
        setIcon(result.list[0].weather[0].icon);

        setMain2(result.list[8].weather[0].main);
        setTemp2(Math.floor(parseInt(result.list[8].main.temp) - 273.15));
        setDesc2(result.list[8].weather[0].description);
        setIcon2(result.list[8].weather[0].icon);

        setMain3(result.list[16].weather[0].main);
        setTemp3(Math.floor(parseInt(result.list[16].main.temp) - 273.15));
        setDesc3(result.list[16].weather[0].description);
        setIcon3(result.list[16].weather[0].icon);

        setMain4(result.list[24].weather[0].main);
        setTemp4(Math.floor(parseInt(result.list[24].main.temp) - 273.15));
        setDesc4(result.list[24].weather[0].description);
        setIcon4(result.list[24].weather[0].icon);

        setMain5(result.list[32].weather[0].main);
        setTemp5(Math.floor(parseInt(result.list[32].main.temp) - 273.15));
        setDesc5(result.list[32].weather[0].description);
        setIcon5(result.list[32].weather[0].icon);
      });
  });

  const imageURL = "http://openweathermap.org/img/wn/" + icon + "@4x.png";
  const imageURL2 = "http://openweathermap.org/img/wn/" + icon2 + "@4x.png";
  const imageURL3 = "http://openweathermap.org/img/wn/" + icon3 + "@4x.png";
  const imageURL4 = "http://openweathermap.org/img/wn/" + icon4 + "@4x.png";
  const imageURL5 = "http://openweathermap.org/img/wn/" + icon5 + "@4x.png";
  return (
    <div className="cont">
      <div className="header">
        <h1>5-Day forecast</h1>
      </div>
      <div className="Main">
        <p>{city}</p>
        <input type="text" id="myCity" />
        <button type="submit" class="btn btn-info btn-sm" onClick={handleClick}>
          Go!
        </button>

        <div class="container">
          <div class="row">
            <div class="span2 offset1">
              <Api
                day={weekday[d.getDay()]}
                main={main}
                desc={desc}
                temp={temp}
                pic={imageURL}
              />
            </div>
            <div class="span2">
              <Api
                day={
                  d.getDay() + 1 > 6 && d.getDay() <= 6
                    ? weekday[0]
                    : d.getDay() + 1 > 6
                    ? weekday[d.getDay() + 1 - 7]
                    : weekday[d.getDay() + 1]
                }
                main={main2}
                desc={desc2}
                temp={temp2}
                pic={imageURL2}
              />
            </div>
            <div class="span2">
              <Api
                day={
                  d.getDay() + 2 > 6 && d.getDay() + 1 <= 6
                    ? weekday[0]
                    : d.getDay() + 2 > 6
                    ? weekday[d.getDay() + 2 - 7]
                    : weekday[d.getDay() + 2]
                }
                main={main3}
                desc={desc3}
                temp={temp3}
                pic={imageURL3}
              />
            </div>
            <div class="span2">
              <Api
                day={
                  d.getDay() + 3 > 6 && d.getDay() + 2 <= 6
                    ? weekday[0]
                    : d.getDay() + 3 > 6
                    ? weekday[d.getDay() + 3 - 7]
                    : weekday[d.getDay() + 3]
                }
                main={main4}
                desc={desc4}
                temp={temp4}
                pic={imageURL4}
              />
            </div>
            <div class="span2">
              <Api
                day={
                  d.getDay() + 4 > 6 && d.getDay() + 3 <= 6
                    ? weekday[0]
                    : d.getDay() + 4 > 6
                    ? weekday[d.getDay() + 4 - 7]
                    : weekday[d.getDay() + 4]
                }
                main={main5}
                desc={desc5}
                temp={temp5}
                pic={imageURL5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
