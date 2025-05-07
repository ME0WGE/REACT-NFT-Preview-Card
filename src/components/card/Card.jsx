import "./card.css";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-content">
            <img src="../src/assets/images/image-equilibrium.jpg" alt="" />
            <h2>
              Equilibrium <span>#3429</span>
            </h2>
            <p>Our Equilibrium collection promotes balance and calm </p>
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
