import { propTypes } from "react-bootstrap/esm/Image";
import './Card.css';

export function Card({ info }) {
  return (
      <div className="card" id="card" style={{ maxWidth: `${info.width}`, marginBottom: "1rem", boxSizing: "border-box" }}>
        <img src={info.img} className="card-img-top" alt={info.title} style={{ objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text">{info.text.map((content) => (
                  <span key={content}>
                    {content}
                    <br />
                  </span>
                ))}</p>
          <p className="card-text"><small className="text-body-secondary"><a
                    style={{ textDecoration: "none" }}
                    href={info.link}
                  >
                    {info.link}
                  </a></small></p>
        </div>
      </div>

    // <div className="card mb-3 m-3">
    //   <div className="row g-0">
    //     <div className="col-md-4">
    //       <img
    //         src={info.img}
    //         className="img-fluid rounded-start"
    //         alt={info.title}
    //         style={{ height: "100%", objectFit: "cover" }}
    //       />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">{info.title}</h5>
    //         <p className="card-text">
    //           {info.text.map((content) => (
    //             <span key={content}>
    //               {content}
    //               <br />
    //             </span>
    //           ))}
    //         </p>
    //         <p className="card-text">
    //           <small className="text-body-secondary">
    //             <a
    //               style={{ textDecoration: "none" }}
    //               href={info.link}
    //             >
    //               {info.link}
    //             </a>
    //           </small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

Card.propTypes = {
  info: propTypes.isRequired,
};
