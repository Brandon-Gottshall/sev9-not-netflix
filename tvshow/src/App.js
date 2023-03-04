import React, { useState } from "react"
import "./styles.css"
import TvSection from "./TvSection"

export default function App() {
  const [showToggle, setShowToggle] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowToggle(!showToggle)}>
        Toggle
      </button>
      {showToggle ? <MovieSection /> : <TvSection />}
    </div>
  )
}