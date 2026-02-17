export default function PlaylistHeader({ title, cover, description, total }) {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt={title} className="cover" />
      </div>

      <div className="header">
        <div className="playlist-title">{title}</div>
        <div className="playlist-desc">{description}</div>
        <div className="playlist-count">{total} songs</div>
      </div>
    </>
  );
}
