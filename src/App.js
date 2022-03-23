import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {actions,comedy,documentaries,horror,originals, romance} from './urls'



function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost urls={originals} title="Netflix Original" />
        <RowPost urls={actions} title="Action" isSmall />
        <RowPost urls={comedy} title="Comedy Movies" isSmall />
        <RowPost urls={horror} title="Horror Movies" isSmall />
        <RowPost urls={romance} title="Romance Movies" isSmall />
        <RowPost urls={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
