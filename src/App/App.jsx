import { Header } from "../Components";
import { HomePage, SingleCoinPage } from "../Pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="coins/:coinId" element={<SingleCoinPage />} />
      </Routes>
    </>
  );
};

export default App;
