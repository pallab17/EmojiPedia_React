import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// now pb hocche ekta varible or parameter jeta arrayfile take access korte pare
// or whole emojipedia.jsx array file tar aar ekta copy  pb r modhe ei ache
// pb r kache ektai array element asche ie one by one method
// map fn hocche for loop
function createEntry(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      img={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
