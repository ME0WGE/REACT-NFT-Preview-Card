import "./card.css";

export default function Card() {
  const imageSource = new URL(
    `../../assets/images/image-equilibrium.jpg`,
    import.meta.url
  ).href;
  const imageSource2 = new URL(
    `../../assets/images/icon-view.svg`,
    import.meta.url
  ).href;
  const imageSource3 = new URL(
    `../../assets/images/image-avatar.png`,
    import.meta.url
  ).href;
  return (
    <>
      {/* Card container */}
      <div className="card">
        {/* Card Body */}
        <div className="card-body">
          {/* Card content */}
          <div className="card-content">
            {/* <img src="../src/assets/images/image-equilibrium.jpg" alt="" /> */}
            <img src={imageSource} alt="" />
            {/* View container */}
            <div className="view">
              <img src={imageSource2} alt="" />
            </div>
            {/* Card text */}
            <div className="card-text">
              <h2>
                Equilibrium <span>#3429</span>
              </h2>
              <p>Our Equilibrium collection promotes balance and calm.</p>
              <div className="crypto">
                <div className="eth">
                  <i class="fa-brands fa-ethereum"></i>
                  <p>0.041 ETH</p>
                </div>
                <div className="time">
                  <i class="fa-solid fa-clock"></i>
                  <p>3 days left</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card copyright */}
          <div className="card-copyright">
            <img src={imageSource3} alt="" />
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
