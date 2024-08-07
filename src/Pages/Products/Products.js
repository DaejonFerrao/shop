import "./Products.css";

import Fruit2 from "../../Assets/Fruit2.png";

const Products = () => {
    return (
        <div className="Products">
        <div>
        <img src={Fruit2} alt="Fruit2" className="fruit"/>
        </div>
        <h1 className="title">Cedi Fruit and Veg: 
            Fresh, Local, & Natural
        </h1>
        <p className="description-2">
        Cedi Fruit and Veg is your go-to source for fresh, local and 
        natural produce, We pride ourselves on delivering high-quality
        fruits and vegetables straight from our farm to your table. By
        partnering with local farmers, we ensure that our products are
        always fresh, flavourful, and packed with nutrients. Experince
        the joy of wholesome eating with our carefully selected, farm fresh
        produce. Choose Cedi Fruit and Veg for a healthier, more delicious
        lifestyle. 
        </p>
        <div className="button-container">
            <button className="product-button">View our products</button>
        </div>
    </div>
    );
};

export default Products;