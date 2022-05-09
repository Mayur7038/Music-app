import tracks from "./tracks"
import './App.css'
import AudioPlayer from './AudioPlayer'

function App() {

  return (
    <div className="App">

      <AudioPlayer tracks={tracks} />
      
    </div>
  )
}

export default App
