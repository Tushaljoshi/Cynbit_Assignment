import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DiscoveryFlow from "../components/discovery/DiscoveryFlow";

function DiscoveryPage() {
  const navigate = useNavigate();

  return (
    <main className="discovery-page">
      <div className="discovery-page-top">
        <Link className="discovery-back-link" to="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Cynbit
        </Link>
      </div>
      <DiscoveryFlow pageMode onClose={() => navigate("/")} />
      <p className="discovery-page-note">
        Cynbit Technologies · Jaipur, Rajasthan
      </p>
    </main>
  );
}

export default DiscoveryPage;
