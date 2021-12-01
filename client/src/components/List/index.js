import { useEffect, useState } from "react";
import ListItem from "./ListItem.jsx";
import styles from "./index.module.css";
const axios = require("axios");

export default function List() {
  const limit = 5;
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [documentNum, setDocumentNum] = useState(null);

  const url = `http://localhost:3001/geospatial/all?skip=${skip}`;

  const shipwrecksList = async () => {
    try {
      const response = await axios.get(url);
      setList(response.data.shipwrecks);
      setDocumentNum(response.data.documentNum);
    } catch (err) {
      console.log(err);
    }
  };

  const previousButton = () => {
    skip <= 0 && skip < limit ? setSkip(0) : setSkip(skip - limit);
  };

  const nextButton = () => {
    if (skip >= 0 && skip < documentNum) return setSkip(skip + limit);
  };

  useEffect(() => shipwrecksList(), [skip]);

  return (
    <div className={styles.container}>
      <h1>Shipwrecks' information</h1>
      <div className={styles.buttons}>
        {skip !== 0 && <button onClick={previousButton}>Previous</button>}
        {skip < documentNum && <button onClick={nextButton}>Next</button>}
      </div>

      <div className={styles.list}>
        {list.map((item, index) => (
          <ListItem {...item} index={index} />
        ))}
      </div>
    </div>
  );
}
