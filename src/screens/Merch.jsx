import hoodieImage from "../assets/Hoodie.jpg";
import backHoodieImage from "../assets/hoodie_hover.jpg";
import cropTopImage from "../assets/Crop_Top.jpg";
import zoomCropTopImage from "../assets/crop_hover.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MerchPage() {

    return (
        <div className="merch-page">
            <h5>MERCH</h5>
            <main className="merch-main">
                <div className="merch-item">
                    <NavLink to="/hoodie"><div className="hoodie-img"></div></NavLink>
                    <div className="merch-info">
                        <h1>Rotate Alief Monochrome Pullover</h1>
                        <p>$90.00</p>
                        <NavLink to="/hoodie"><button className="cart-btn">add to cart</button></NavLink>
                    </div>
                </div>
                <div className="merch-item">
                    <NavLink to="/crop"><div className="crop-img"></div></NavLink>
                    <div className="merch-info">
                        <h1>Rotate Goddess Flow Tank</h1>
                        <p>$30.00</p>
                        <NavLink to="/crop"><button className="cart-btn">add to cart</button></NavLink>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MerchPage;


export function HoodiePage() {
    const [currentImage, setCurrentImage] = useState(hoodieImage);

    const frontHoodie = () => setCurrentImage(hoodieImage);
    const backHoodie = () => setCurrentImage(backHoodieImage);

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-page">
        <nav>
            <span><NavLink to="/merch">merch</NavLink></span><span> &nbsp; &nbsp; &gt; &nbsp; &nbsp; </span><span><NavLink to="/hoodie">Rotate Alief Monochrome Pullover</NavLink></span>
        </nav>
            <main className="item-main">
                <div className="merch-images">
                    <ul>
                        <li onClick={frontHoodie}></li>
                        <li className="back-hoodie" onClick={backHoodie}></li>
                    </ul>
                    <div className="hoodie-image" style={{ backgroundImage: `url(${currentImage})` }}></div>
                </div>
                <div className="merch-info">
                    <h1>Rotate Alief Monochrome Pullover</h1>
                    <h2>$90.00</h2>
                    <p>
                        Tell your story and promote your organization with custom products. Print on demand services powered by <a href="#">AdeDevs</a> can showcase your brand logo on clothes, accessories, and more.
                    </p>
                    <div className="order-qty">
                        <button onClick={decrement}>
                            <ion-icon name="remove"></ion-icon>
                        </button>
                        <span><input type="tel" min="0" value={count} onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value > 0) {
                                setCount(value);
                            } else {
                                setCount(1);
                            }
                        }}/></span>
                        <button onClick={increment}>
                            <ion-icon name="add"></ion-icon>
                        </button>
                    </div>
                    <button className="cart-btn">add to cart</button>
                </div>
            </main>
        </div>
    )
}

export function CropTopPage() {
    const [currentImage, setCurrentImage] = useState(cropTopImage);

    const cropTop = () => setCurrentImage(cropTopImage);
    const zoomCropTop = () => setCurrentImage(zoomCropTopImage);

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-page">
        <nav>
            <span><NavLink to="/merch">merch</NavLink></span><span> &nbsp; &nbsp; &gt; &nbsp; &nbsp; </span><span><NavLink to="/crop">Rotate Goddess Flow Tank</NavLink></span>
        </nav>
            <main className="item-main">
                <div className="merch-images">
                    <ul>
                        <li className="crop1" onClick={cropTop}></li>
                        <li className="crop2" onClick={zoomCropTop}></li>
                    </ul>
                    <div className="hoodie-image" style={{ backgroundImage: `url(${currentImage})` }}></div>
                </div>
                <div className="merch-info">
                    <h1>Rotate Goddess Flow Tank</h1>
                    <h2>$30.00</h2>
                    <p>
                        Tell your story and promote your organization with custom products. Print on demand services powered by <a href="#">AdeDevs</a> can showcase your brand logo on clothes, accessories, and more.
                    </p>
                    <div className="order-qty">
                        <button onClick={decrement}>
                            <ion-icon name="remove"></ion-icon>
                        </button>
                        <span><input type="tel" min="0" value={count} onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value > 0) {
                                setCount(value);
                            } else {
                                setCount(1);
                            }
                        }}/></span>
                        <button onClick={increment}>
                            <ion-icon name="add"></ion-icon>
                        </button>
                    </div>
                    <button className="cart-btn">add to cart</button>
                </div>
            </main>
        </div>
    )
}