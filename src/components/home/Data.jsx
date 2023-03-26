import Hand from "../../assets/waving_hand.png";
import Send from "../../assets/send.svg";
import Community from "../../assets/community.svg";

export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Bhushan Ambekar
        <img src={Hand} className="home__hand" alt="" />
      </h1>
      <h3 className="home__subtitle">Data Enthusiast</h3>
      <p className="home__description">
        A passionate data geek from India trying to utilize every second spent.
      </p>

      {/* <a href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_PHONE_NO}&text=Namaste Shubham`} className="button button--flex" target="_blank" rel="noopener noreferrer">
        Say Namaste
        <img src={Send} height={24} width={24} className="button__icon" alt="" />
      </a> */}
      {/* <a href={`https://stackoverflowteams.com/c/${process.env.REACT_APP_TEAM_NAME}`} className="button-white button--flex" target="_blank" rel="noopener noreferrer">
        Collaborate
        <img src={Community} height={24} width={24} className="button__icon" alt="" />
      </a> */}
    </div>
  )
}