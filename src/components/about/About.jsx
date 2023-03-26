import "./about.css";
import AboutImg from "../../assets/about_photo.jpg";
import FilesSVG from "../../assets/files.svg";
import Info from "./Info";

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Insights</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="bhushan_second" className="about__img" />
                <p className="about__hobby">
                    Data Enthusiast |  NLP  | Machine Learning  | Python Developer
                </p>
                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        <span className="about__hobbies">Data Enthusiast |  NLP  | Machine Learning  | Python Developer</span>
                        <br />
                        <span>
                            As a developer, my journey has been one of a kind, having a array of experiences. From the humble beginnings of wrting for loops while learning to fabricating and debugging complex and lengthy codes that I have come across, I have embarked on a journey of constant learning and growth. With a passion for Data, I have dived into the exciting world of Data, where I continue to explore and learn as an end goal to contribute.
                        </span>
                        <br />
                        <span>
                            In my little journey, I have come to appreciate the value of dedication and descipline. I firmly believe that with descipline and hunger to grow, we can learn something new every day.I have been fortunate enought to have source of encouragement and the support in lows of my journey.
                        </span>
                        <br />
                        <span>
                            With such amazing experiences and the boundless opportunities provided to me in this time, I am gratefull and confident to be in this journey. I look forward to continuing my journey of discovery, exploring new horizons and pushing the limits of what is possible.
                        </span>
                    </p>

                    <a href="/bhushans_cv.pdf" className="button button--flex" target="_blank" rel="noopener noreferrer" >
                        My Resume
                        <img src={FilesSVG} className="button__icon" alt="" />
                    </a>
                </div>
            </div>
        </section >
    )
}
