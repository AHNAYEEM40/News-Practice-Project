import { useLoaderData } from "react-router-dom";
import Breaking from "../Header/Breaking";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
  const news =useLoaderData();
  console.log(news);
  return (
    <div>
        <Header></Header>
        <Breaking></Breaking>
        <Navbar></Navbar>
     
      <div >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
          <div className="border">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="col-span-2 border">
           {
            news.map(aNews => <NewsCard
            key={aNews._id}
            news={aNews}
            ></NewsCard>)
           }
          </div>
          <div className="border">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
