"use client";

import { useState, useEffect } from "react";
import data from "./data/playlist.json";
import Header from "./components/Header";
import PlaylistHeader from "./components/PlaylistHeader";
import TrackList from "./components/TrackList";

export default function Page() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

if (loading) {
  return (
    <div className="page">
      <div className="loading-state">
        Loading playlist...
      </div>
    </div>
  );
}


  return (
    <div className="page">
      <Header />

      <PlaylistHeader
        title={data.title}
        cover={data.cover}
        description={data.description}
        total={data.tracks.length}
      />

      {data.tracks.length === 0 ? (
        <div className="empty">No songs in this playlist.</div>
      ) : (
        <TrackList
          tracks={data.tracks}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      )}
    </div>
  );
}
