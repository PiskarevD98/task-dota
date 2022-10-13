import Heroes from "../images/Heroes.png";
import { Link } from "react-router-dom";

function Match({ match }) {
  const times = match.duration;

  function Times(...times) {
    const arrTimes = [...times.toString()].map(Number);
    arrTimes.splice(2, 0, ":");
    return arrTimes;
  }

  return (
    <tr className="item-list">
      <td className="item-id">
        <Link to="/matchdetails" className="link">
          {match.match_id}
          <p>17 часов назад / Immortal</p>
        </Link>
      </td>
      <td className="item">
        <Link to="/matchdetails" className="link">
          {Times(times)}
        </Link>
      </td>
      <td className="item">
        <Link to="/matchdetails" className="link">
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
        </Link>
      </td>
      <td className="item">
        <Link to="/matchdetails" className="link">
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
          <img src={Heroes} alt="heroes" className="image-hero" />
        </Link>
      </td>
    </tr>
  );
}

export default Match;
