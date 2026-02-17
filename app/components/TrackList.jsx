import TrackRow from "./TrackRow";

export default function TrackList({ tracks, selectedTrack, setSelectedTrack }) {
  return (
    <table className="track-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Album</th>
          <th>Duration</th>
        </tr>
      </thead>

      <tbody>
        {tracks.map((track, index) => (
          <TrackRow
            key={index}
            track={track}
            selected={selectedTrack === index}
            onClick={() => setSelectedTrack(index)}
          />
        ))}
      </tbody>
    </table>
  );
}
