import "./card.css";

export default function Card() {
  return (
    <>
      {/* Card container */}
      <div className="card">
        {/* Card Body */}
        <div className="card-body">
          {/* Card content */}
          <div className="card-content">
            <img src="../src/assets/images/image-equilibrium.jpg" alt="" />
            {/* View container */}
            <div className="view">
              <img src="../src/assets/images/icon-view.svg" alt="" />
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
            <img src="../src/assets/images/image-avatar.png" alt="" />
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
