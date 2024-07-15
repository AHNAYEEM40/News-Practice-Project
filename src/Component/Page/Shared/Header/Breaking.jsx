import Marquee from "react-fast-marquee";
const Breaking = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary"> Breaking News</button>
      <Marquee pauseOnHover speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default Breaking;
