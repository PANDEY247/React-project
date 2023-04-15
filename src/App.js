import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Default } from "./Components/Default";
import { News } from "./Components/Pages/News";
import { OrderSummary } from "./Components/Pages/OrderSummary";
import { NoMatch } from "./Components/Pages/NoMatch";
import { SurveillanceProducts } from "./Components/Pages/SurveillanceProducts";
import { BestSelling } from "./Components/Pages/BestSelling";
import { NewLaunched } from "./Components/NewLaunched";
import { TechNews } from "./Components/Pages/CarNews";
import { CarCollection } from "./Components/Pages/CarCollection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />} />
        <Route path="Blogs" element={<Default />} />
        <Route path="news" element={<News />} >
          <Route path="/news/car-news/" element={<TechNews/>}></Route>
          <Route path="/news/car-collections" element={<CarCollection/>}></Route>
        </Route>
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="SurveillanceProducts" element={<SurveillanceProducts />}>
          <Route path="bestselling" element={<BestSelling />} />
          <Route path="newlaunched" element={<NewLaunched />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
        <Route path="our ventures" element={<Default/>}/>

      </Routes>
    </div>
  );
}
export default App;
