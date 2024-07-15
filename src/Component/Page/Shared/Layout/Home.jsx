import Breaking from "../Header/Breaking";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";

const Home = () => {
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
            <h2 className="text-2xl">Dragon News Home</h2>
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
