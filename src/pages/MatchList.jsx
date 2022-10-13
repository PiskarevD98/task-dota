import Dotasign from "../images/Vector.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Match from "../components/Match";

function MatchList() {
  const [matchs, setMatchs] = useState([]);
  const [limitMatchs] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  async function MatchList() {
    const response = await axios.get(
      "https://api.opendota.com/api/teams/2/matches"
    );
    setMatchs(response.data);
  }
  useEffect(() => {
    MatchList();
    setInterval(async () => {
      MatchList();
    }, 60000);
  }, []);

  const lastTeamIndex = currentPage * limitMatchs;
  const firstTeamIndex = lastTeamIndex - limitMatchs;
  const currentMatchs = matchs.slice(firstTeamIndex, lastTeamIndex);

  return (
    <div className="container">
      <h1>
        <img src={Dotasign} alt="dotasign" className="imageDota" />{" "}
        <p className="title">OpenDota</p>
      </h1>
      <h2 className="header">Список матчей</h2>
      <div>
        <table className="table" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr className="hat">
              <td className="hat-item">ID</td>
              <td className="hat-item">Длительность</td>
              <td className="hat-item">Radiant</td>
              <td className="hat-item">Dire</td>
            </tr>
            {currentMatchs.map((match, index) => (
              <Match match={match} key={index} />
            ))}
          </tbody>
        </table>
        <button className="button">Загрузить еще</button>
        <div className="foot-container">
          <p className="foot">2022&copy; OpenDota</p>
          <p className="foot-3">О нас</p>
          <p className="foot">Политика конфидициальности</p>
          <p className="foot">Документация API</p>
        </div>
      </div>
    </div>
  );
}

export default MatchList;
