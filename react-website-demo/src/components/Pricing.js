import { Link } from "react-router-dom";
import { Button } from "./Button";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";

function Pricing() {
  return (
    <>
      <div className="pricing__section">
        <h1 className="pricing__heading">Pricing</h1>
        <div className="pricing__container">
          <Link to="/sign-up" className="pricing__container">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <FaFire />
              </div>
              <h3>Starter</h3>
              <h4>$8.99</h4>
              <p>oer month</p>
              <ul className="pricing__container-features">
                <li>100 Transactions</li>
                <li>2% Cash Back</li>
                <li>$10,000 Limit</li>
              </ul>
              <Button buttonSize="btn--wide" buttonColor="primary">
                Choose Plan
              </Button>
            </div>
          </Link>

          <Link to="/sign-up" className="pricing__container">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <BsXDiamondFill />
              </div>
              <h3>Gold</h3>
              <h4>$29.99</h4>
              <p>per month</p>
              <ul className="pricing__container-features">
                <li>100 Transactions</li>
                <li>2% Cash Back</li>
                <li>$10,000 Limit</li>
              </ul>
              <Button buttonSize="btn--wide" buttonColor="primary">
                Choose Plan
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pricing;
