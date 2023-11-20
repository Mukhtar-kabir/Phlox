import "../Categories/Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="items">
        <h1>Categories</h1>
        <p>
          Explore chic categories, from apparel to accessories. Elevate your
          style effortlessly with our curated collection. Shop now!
        </p>
        <div className="col">
          <div className="row">
            <div className="row">
              <img src="Images/men.jpg" alt="" />
              <button>Men</button>
            </div>
            <div className="row">
              <img src="Images/women.jpg" alt="" />
              <button>Women</button>
            </div>
          </div>
        </div>
        <div className="col col-1">
          <div className="row  ">
            <div className="col">
              <div className="row">
                <img src="Images/accessories.jpg" alt="" />
                <button>Accessories</button>
              </div>
            </div>
            <div className="col featureImages">
              <div className="row">
                <img src="Images/children.jpg" alt="" />
                <button>Children</button>
              </div>
              <div className="row">
                <img src="Images/sale.jpeg" alt="" />
                <button>Sale</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-1">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src="Images/cap.jpg" alt="" />
                <button>Caps</button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img src="Images/hat.jpg" alt="" />
                <button>Hats</button>
              </div>
            </div>
            <div className="row">
              <img src="Images/skirt.jpg" alt="" />
              <button>Skirts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
