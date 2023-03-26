// import "./work.css";
// import Works from "./Works";
// import FilesSVG from "../../assets/files.svg";


// export default function Work() {
//   return (
//     <section className="work section" id="portfolio">
//         <h2 className="section__title">Projects</h2>
//         <span className="section__subtitle">Find my projects in mv cv</span>

//         <a href="/bhushans_data_analyst_cv(PDF).pdf" className="button button--flex" target="_blank" rel="noopener noreferrer" >
//                         My Resume
//                         <img src={FilesSVG} className="button__icon" alt="" />
//                     </a>

//         {/* <Works /> */}
//     </section>
//   )
// }







import Works from "./Works";
import FilesSVG from "../../assets/files.svg";

export default function Work() {
  return (
    <section className="work section" id="portfolio" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Find my projects in my cv</span>

      <a href="/bhushans_cv.pdf" className="button button--flex" target="_blank" rel="noopener noreferrer">
        My Resume
        <img src={FilesSVG} className="button__icon" alt="" />
      </a>

      <div className="work__filters" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "0.75rem", marginBottom: "var(--mb-2)" }}>
        {/* add work__item components here */}
      </div>

      <div className="work__container" style={{ gridTemplateColumns: "repeat(2, max-content)", gap: "3rem", justifyContent: "center" }}>
        {/* add work__card components here */}
      </div>

      {/* <Works /> */}
    </section>
  );
}
