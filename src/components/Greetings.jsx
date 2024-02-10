import { Alert } from "react-bootstrap";

const Greetings = () => (
  <>
    <Alert variant="primary" className="m-2 text-center mb-5">
      <Alert.Heading>
        Greetings everyone! Welcome to my meteo web app!
      </Alert.Heading>
      <p>
        I am really happy to have you here, visitor. I kindly suggest you to use the 
        english name for the city and the country you are interested, for increasing 
        the efficiency of the search. 
      </p>
      <hr />
    </Alert>
  </>
);

export default Greetings;