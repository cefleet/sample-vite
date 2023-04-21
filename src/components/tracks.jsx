import { useState, memo } from "react";
import InfoWell from "./info-well";
import Input from "./input";
import TrackList from "./track-list";
function Tracks({ saveData, name, ...data }) {

  const [currentTrack, setCurrentTrack] = useState({});

  function addTrack(evt) {
    evt.preventDefault();
    const tracks = [...(data.tracks || []), currentTrack];
    saveData({ tracks });
    setCurrentTrack({});
  }

  function updateCurrentTrack({ target: { name, value } }) {
    setCurrentTrack({ ...currentTrack, [name]: value });
  }

  return (
    <div>
      <InfoWell>
        The name you entered elsewhere was <strong>{name}</strong>
      </InfoWell>

      <TrackList>
        {data.tracks ? (
          data.tracks.map((track, idx) => <Track key={idx} {...track} />)
        ) : (
          <div>No tracks yet</div>
        )}
      </TrackList>

      <TrackForm onSubmit={addTrack}>
        <Input
          label="Track Name"
          name="name"
          onChange={updateCurrentTrack}
          value={currentTrack.name}
        />
        <Input
          label="Artist Name"
          name="artist"
          onChange={updateCurrentTrack}
          value={currentTrack.artist}
        />
      </TrackForm>
    </div>
  );
}

export default memo(Tracks);

function TrackForm({ onSubmit, children }) {
  return (
    <div>
      <h4>Add Track</h4>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit">Add Track</button>
      </form>
    </div>
  );
}

function Track({ name, artist }) {
  return (
    <div style={{padding:'10px', borderTop:"1px solid #ddd", borderBottom:'1px solid #ddd'}}>
      <p>
        <strong>Name</strong> {name}
      </p>
      <p>
        <strong>Artist</strong> {artist}
      </p>
    </div>
  );
}
