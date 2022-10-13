import Team from "../components/Team";
import axios from "axios";
import { useEffect, useState } from "react";
// import Pagination from "../components/Pagination";
import Icon from "../images/Icon.png";
import Dotasign from "../images/Vector.png";

function CommandList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limitTeams] = useState(10);
  const [teams, setTeams] = useState([]);

  // const paginate = pageNumber => setCurrentPage(pageNumber)

  async function CommandList() {
    const response = await axios.get("https://api.opendota.com/api/teams");
    setTeams(response.data);
  }
  useEffect(() => {
    CommandList();
    setInterval(async () => {
      CommandList();
    }, 60000);
  }, []);

  const lastTeamIndex = currentPage * limitTeams;
  const firstTeamIndex = lastTeamIndex - limitTeams;
  const currentTeam = teams.slice(firstTeamIndex, lastTeamIndex);

  // const nextPage = () => setCurrentPage( prev => prev + 1)
  // const prevPage = () => setCurrentPage( prev => prev - 1)

  return (
    <div className="container">
      <h1>
        <img src={Dotasign} alt="dotasign" className="imageDota" />{" "}
        <p className="title">OpenDota</p>
      </h1>
      <h2 className="header">Список команд</h2>
      <div>
        <table className="table" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr className="hat">
              <td className="hat-item">Ранг</td>
              <td className="hat-item">Название команды</td>
              <td className="hat-item">Рейтинг</td>
              <td className="hat-item">Победы</td>
              <td className="hat-item">Проигрыши</td>
            </tr>
            {currentTeam.map((team, index) => (
              <Team team={team} key={index} id={index} />
            ))}
          </tbody>
        </table>
        <div className="footer">
          <img src={Icon} alt="sign" className="image" />
          <p>Team Elo Rankings k=32, init=1000</p>
        </div>
        {/* <Pagination limitTeams={limitTeams} totalTeams={teams.length} paginate={paginate} /> */}
        {/* <div className="buttons">
        {currentPage !== 1 && <button onClick={prevPage} className='btn'>Предыдущая страница</button> }
        <button onClick={nextPage} className='btn'>Следующая страница</button>
        </div> */}
      </div>
      <button className="button">Загрузить еще</button>
      <div className="foot-container">
        <p className="foot">2022&copy; OpenDota</p>
        <p className="foot-3">О нас</p>
        <p className="foot">Политика конфидициальности</p>
        <p className="foot">Документация API</p>
      </div>
    </div>
  );
}

export default CommandList;
