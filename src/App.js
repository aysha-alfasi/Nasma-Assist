import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <div className="app-content">
        <HomePage />
      </div>

      <div className="mobile-overlay">
        <div className="mobile-message-box">
          🚧 This app is not yet available <br /> for mobile screens 📱
        </div>
      </div>
    </>
  );
}

export default App;
