import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { VanLayout } from "../../components/VanLayout";

export function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/hostvans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <VanLayout/>
        <Outlet context={{ currentVan }}/>
      </div>
    </section>
  );
}