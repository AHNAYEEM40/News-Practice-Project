import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Qzone1 from "../../../../assets/qZone1.png";
import Qzone2 from "../../../../assets/qZone2.png";
import Qzone3 from "../../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h2>Log In with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          GitHub
        </button>
      </div>
      <div className="p-4 mb-4">
        <h2 className="text-3xl">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>FaceBook</span>
        </a>
        <a className="p-4 flex text-lg items-center border " href="">
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {/* QZone */}
      <div className="p-4 mb-4">
        <h2 className="text-2xl">Q-Zone</h2>
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
      <div className="p-4 space-y-3 bg-black text-center">
       <h2 className="text-2xl text-white font-bold">
       Create an Amazing Newspaper
       </h2>
       <p className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      <button className="btn btn-secondary ">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNav;
