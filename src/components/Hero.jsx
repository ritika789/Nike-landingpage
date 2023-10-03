const Hero = () => {
  return (
    <main className="Hero container">
      <div className="HeroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
        </div>
        <div className="icon">
          <img src="/images/amazon.png" alt="az" />
          <img src="/images/flipkart.png" alt="ft" />
        </div>
      </div>
      <div className="Heroimage">
        <img src="/images/shoe.png" alt="shoe" />
      </div>
    </main>
  );
};
export default Hero;
