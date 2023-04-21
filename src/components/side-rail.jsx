import { memo } from "react";
import { Link } from "react-router-dom";
import TrackList from "./track-list";

function SideRail({ name, tracks }) {
  console.log("Rendering Side Rail");

  return (
    <div>
      <h2>Side Rail</h2>
      <div>
        <h3>Links</h3>
        <div>
          <Link to="/">General Info</Link>
        </div>
        <div>
          <Link to="/extra">Extra</Link>
        </div>
        <div>
          <Link to="/tracks">Tracks</Link>
        </div>
      </div>
      <div>
        <h3>data</h3>
        <p>
          <strong style={{ display: "block" }}>Name</strong>
          {name}
        </p>

        <TrackList>
          {tracks ? (
            tracks.map((track, idx) => <Track {...track} key={idx} />)
          ) : (
            <div>No tracks</div>
          )}
        </TrackList>
      </div>
    </div>
  );
}

export default memo(SideRail);

function Track({ name }) {
  return (
    <div
      style={{
        marginRight: "20px",
        border: "1px solid",
        borderRadius: "2px",
        padding: "10px",
      }}
    >
      {name}
    </div>
  );
}
