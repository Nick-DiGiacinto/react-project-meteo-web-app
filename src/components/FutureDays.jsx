import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const FutureDays = (props) => {
  const [detailNextDays, setDetailNextDays] = useState(null);

  const fetchDetailNextDays = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},${props.countryCode}&appid=f592bb1f055a6a224e93a8020d397bbb&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setDetailNextDays(data);
        } else {
          throw new Error("There was an error in the fetch");
        }
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      fetchDetailNextDays();
    },);
    return (
      detailNextDays && (
        <Row className="g-3">
          {detailNextDays.list.map((e, index) => {
            return (
              <Col xs={12} md={4} lg={3} key={index} className="px-5">
                <Card>
                  <Card.Header>{e.dt_txt}</Card.Header>
  
                  <div>
                    <p>{e.main.temp}&deg;C </p>
                    <p>{e.weather[0].main}</p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      )
    );
  };
  export default FutureDays;