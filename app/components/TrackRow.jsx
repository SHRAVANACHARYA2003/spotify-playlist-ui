export default function TrackRow({ track, selected, onClick }) {
  if (!track) return null;

  return (
    <tr
      className={`track-row ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <td className="track-title-cell">
        <img src={track.image} alt={track.title} className="track-img" />
        <div className="track-info">
          <div className="track-title">{track.title}</div>
          <div className="track-artist">{track.artist}</div>
        </div>
      </td>

      <td className="track-album">{track.album}</td>
      <td className="track-duration">{track.duration}</td>
    </tr>
  );
}
