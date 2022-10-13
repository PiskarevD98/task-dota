import Dotasign from "../images/Vector.png";
import Radiant from "../images/Vector (1).png";
import Icon from "../images/Icons.png";
import Sign from "../images/Vector (2).png";
import Loading from "../images/Vector (3).png";
import Heroes from "../images/Heroes.png";
import Case from "../images/Vector (4).png";
import Shardtop from "../images/ShardTop.png";
import Shardbot from "../images/ShardBot.png";
import Buffs from "../images/Buffs.png";

function MatchDetails() {
  return (
    <div>
      <h1>
        <img src={Dotasign} alt="dotasign" className="imageDota" />{" "}
        <p className="title">OpenDota</p>
      </h1>
      <h2 className="header">Детальная информация матча</h2>
      <h3 className="title-game">All draft</h3>
      <p className="radiant-title">
        <img src={Radiant} alt="radiant" className="radiant" />
        Победа:Radiant
      </p>
      <div className="number">99</div>
      <p className="time-duration">99:59:59</p>
      <div className="number-dire">99</div>
      <p className="time-match">Закончился 23 часа назад</p>
      <p className="id-match">
        ID матча <p className="id">643888016</p>
      </p>
      <p className="region">
        Регион<p className="id">Sinapore</p>
      </p>
      <p className="spell">
        Навык<p className="spell-id">Unknow</p>
      </p>
      <p className="static">
        <img src={Icon} className="icons" alt="icon" />
        Запись этого матча не может быть проанализирована, так как недоступна
        вся информация о матче
      </p>
      <div className="details">
        <p className="detail">
          <img src={Sign} alt="123" className="icons" />
          Анализ
        </p>
        <p className="detail-1">
          <img src={Loading} alt="123" className="icons" />
          Загрузить запись
        </p>
      </div>
      <table className="table" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr className="hat">
            <td className="table-details">
              <p className="side">Radiant</p>
              <p className="static-match"> статистика команды</p>{" "}
              <p className="lose">проигравшие</p>
            </td>
          </tr>
          <tr className="row-title">
            <td className="item-3">Игрок</td>
            <td className="item-3">LVL</td>
            <td className="item-K">K</td>
            <td className="item-D">D</td>
            <td className="item-3">A</td>
            <td className="item-3">LH/DN</td>
            <td className="item-NET">NET</td>
            <td className="item-3">GPM/XPM</td>
            <td className="item-3">HD</td>
            <td className="item-3">TD</td>
            <td className="item-3">HH</td>
            <td className="item-3">ПРЕДМЕТЫ/БАФЫ</td>
            <td></td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table table-margin" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr className="hat">
            <td className="table-details">
              <p className="side">Radiant</p>
              <p className="static-match"> статистика команды</p>{" "}
              <p className="win">выиграли</p>
            </td>
          </tr>
          <tr className="row-title">
            <td className="item-3">Игрок</td>
            <td className="item-3">LVL</td>
            <td className="item-K">K</td>
            <td className="item-D">D</td>
            <td className="item-3">A</td>
            <td className="item-3">LH/DN</td>
            <td className="item-NET">NET</td>
            <td className="item-3">GPM/XPM</td>
            <td className="item-3">HD</td>
            <td className="item-3">TD</td>
            <td className="item-3">HH</td>
            <td className="item-3">ПРЕДМЕТЫ/БАФЫ</td>
            <td></td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
          <tr className="player">
            <td className="name-player">
              <img src={Heroes} alt="heroes" className="image-hero-1" />
              <div className="name-players">
                <p className="players">Long user name</p>
                <p className="unknow">Unknow</p>
              </div>
            </td>
            <td className="item-number">999</td>
            <td className="item-K">99</td>
            <td className="item-D">99</td>
            <td className="item-number">99</td>
            <td className="item-number">999/999</td>
            <td className="item-NET">999</td>
            <td className="item-number">999/999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td className="item-number">999</td>
            <td>
              <div className="items-hero">
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
                <p className="item-hero"></p>
              </div>
              <div className="case-item">
                <img src={Case} alt="case" className="image-case" />{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>{" "}
                <p className="item-hero-case"></p>
              </div>
            </td>
            <td className="case-item">
              <p className="item-hero-case-sphere"></p>
              <div className="shard-item">
                <img src={Shardtop} alt="shard" className="shard" />
                <img src={Shardbot} alt="shard-bot" className="shard-bot" />
              </div>
              <img src={Buffs} alt="buffs" className="buffs" />{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="foot-container">
        <p className="foot">2022&copy; OpenDota</p>
        <p className="foot-3">О нас</p>
        <p className="foot">Политика конфидициальности</p>
        <p className="foot">Документация API</p>
      </div>
    </div>
  );
}

export default MatchDetails;
