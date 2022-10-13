import { Link } from "react-router-dom";

function Team({ team, id }) {
  return (
    <tr className="item-list">
      <td className="item">
        <Link to="/matchlist" className="link-team">
          {id + 1}st
        </Link>
      </td>
      <td className="nameTeam">
        <Link to="/matchlist" className="link-team-name">
          <img src={team.logo_url} alt="команда" className="image-team" />
          <p>{team.name}</p>
        </Link>
      </td>
      <td className="item">
        <Link to="/matchlist" className="link-team">
          {team.rating}
        </Link>
      </td>
      <td className="item">
        <Link to="/matchlist" className="link-team">
          {team.wins}
        </Link>
      </td>
      <td className="item">
        <Link to="/matchlist" className="link-team">
          {team.losses}
        </Link>
      </td>
    </tr>
  );
}

export default Team;
