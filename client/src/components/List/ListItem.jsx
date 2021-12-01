import styles from "./ListItem.module.css";

export default function ListItem({ feature_type, chart, depth, index }) {
  return (
    <div className={styles.container} key={index}>
      <h2>Shipwreck</h2>
      <p>
        <span>Feature type: </span>
        {feature_type}
      </p>
      <p>
        <span>Chart: </span>
        {chart}
      </p>
      <p>
        <span>Depth: </span>
        {depth}
      </p>
    </div>
  );
}
