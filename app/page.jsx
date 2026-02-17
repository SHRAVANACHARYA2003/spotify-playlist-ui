"use client";

import { useState } from "react";
import data from "./data/playlist.json";
import Header from "./components/Header";
import PlaylistHeader from "./components/PlaylistHeader";
import TrackList from "./components/TrackList";

export default function Page() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <div className="page">
      <Header />

      <PlaylistHeader
        title={data.title}
        cover={data.cover}
        description={data.description}
        total={data.tracks.length}
      />

      <TrackList
        tracks={data.tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  );
}
