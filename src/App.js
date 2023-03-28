import React from "react";
import Article from "./components/article"
import Background from "./components/background";
import Numbers from "./components/numbers";
import Footer from "./components/footer";
import './App.css';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://numbersapi.com/1..51"
        )
      ).json();
      // set state when the data received
      setData(Object.entries(data));
    };

    dataFetch();
  }, []);

  return (
    <>
    <Background />
    <Article/>
    <Numbers data={data}/>
    <Footer />
    </>
  );
}

export default App;
