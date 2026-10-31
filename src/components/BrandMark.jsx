import { Link } from "react-router-dom";

function BrandMark() {
  return (
    <Link className="brand-mark" to="/" aria-label="Cynbit home">
      <span className="brand-symbol" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="brand-word">cynbit</span>
      <span className="brand-period" aria-hidden="true">
        .
      </span>
    </Link>
  );
}

export default BrandMark;
