import "react-bootstrap";

export function Carrossel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img
            src="https://s2-g1.glbimg.com/SNLRgrnBCNbGnqybeGfSdoOm7PQ=/0x0:4399x3067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/n/m/odBomVQXWdSdgxa1gqBg/2024-05-04t015128z-2012665602-rc25j7afzalb-rtrmadp-3-brazil-rains.jpg"
            className="d-block w-100"
            alt="Imagem de drone do dia 3 de maio de 2024 mostra pilha de carros soterrados por enchente na cidade de Encanto após fortes chuvas que caíram sobre o Rio Grande do Sul — Foto: Diego Vara/Reuters"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h6>Imagem de drone do dia 3 de maio de 2024 mostra pilha de carros soterrados por enchente na cidade de Encanto após fortes chuvas que caíram sobre o Rio Grande do Sul.</h6>
            <p>Foto: Diego Vara/Reuters</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="https://s2-valor.glbimg.com/6CnLyIPizude6re78VzOa9RBT3U=/0x0:2048x1245/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2024/y/G/D4zDA5QCGKVg3DZ1cqeQ/53694959515-cffe47e3c2-k.jpg"
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h6>Resgate de pessoa afetada pelas chuvas no Rio Grande do Sul, na Base Aérea de Santa Maria</h6>
            <p>Foto: Ricardo Stuckert / PR</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="https://s2-g1.glbimg.com/Y1qsihAj1nfGH0nvOB17ytPBaao=/0x0:1920x1079/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/R/J/YOpXLsTC6ZZgexZOyq2A/rs.jpg"
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h6>Cheia do Rio Taquari no Rio Grande do Sul.</h6>
            <p>Foto: Diego Vara/Reuters</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="https://s2-g1.glbimg.com/0Nfd9PwO2P_HwuJONqXLaqGKiUk=/0x0:5500x3667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/W/1/ANc5dMT5CRlv3LAK1fuA/2024-05-04t144945z-678334896-rc2lj7avmozd-rtrmadp-3-brazil-rains.jpg"
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h6>Entorno do Mercado Público de Porto Alegre, no Centro da capital gaúcha, alagado no dia 4 de maio de 2024.</h6>
            <p>Foto: Renan Mattos/Reuters</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
