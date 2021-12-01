import List from "./components/List";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Geospatial of Shipwrecks</h1>
      <img
        alt="shipwreck"
        src="https://www.wallpaperuse.com/wallp/37-373511_m.jpg"
      />
      <List />
    </div>
  );
}

export default App;
