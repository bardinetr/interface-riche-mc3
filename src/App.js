import "./App.css";
import ChatRoom from "./components/chatroom/ChatRoom";
import DisplayMovie from "./components/displaymovie/DisplayMovie";
import TestComp from "./components/TestComp";

function App() {
  return (
    <div className="App">
      <h1>Nano-Projet</h1>
      <h2>Bardinet Romain (Monôme)</h2>
      <DisplayMovie></DisplayMovie>
      {/* <TestComp></TestComp> */}
      <ChatRoom></ChatRoom>
    </div>
  );
}

export default App;
