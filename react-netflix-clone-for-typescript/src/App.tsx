import Footer from "components/Footer";
import Nav from "components/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import Banner from "components/Banner";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Banner />}/>
          {/* <Route index element={<MainPage />}/> */}
          {/* <Route path=":movieId" element={<DetailPage />}/> */}
          {/* <Route path="search" element={<SearchPage />}/> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
