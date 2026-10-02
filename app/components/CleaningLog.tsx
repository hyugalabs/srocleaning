import styles from "./CleaningLog.module.css";

type Entry = { date: string; time: string; area: string };

// Illustrative entries only; labelled as a sample on the sheet itself.
const signed: Entry[] = [
  { date: "Wed 9/23", time: "6:05 pm", area: "Lobby & entry glass" },
  { date: "Wed 9/23", time: "6:40 pm", area: "Restrooms, restocked" },
  { date: "Fri 9/25", time: "6:10 pm", area: "Break room & kitchen" },
  { date: "Fri 9/25", time: "7:15 pm", area: "Offices, second floor" },
  { date: "Mon 9/28", time: "6:00 pm", area: "LVP orbital scrub" },
];

const next: Entry = { date: "Wed 9/30", time: "6:00 pm", area: "Next visit" };

export default function CleaningLog({ className = "" }: { className?: string }) {
  return (
    <figure className={`${styles.sheet} ${className}`}>
      <figcaption className={styles.head}>
        <span className={styles.title}>Cleaning log</span>
        <span className={styles.meta}>Initialed every visit</span>
      </figcaption>

      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Area</th>
            <th scope="col" className={styles.initCol}>
              Init.
            </th>
          </tr>
        </thead>
        <tbody>
          {signed.map((row, i) => (
            <tr key={row.area}>
              <td className={styles.num}>{row.date}</td>
              <td className={styles.num}>{row.time}</td>
              <td>{row.area}</td>
              <td className={styles.initCol}>
                <span
                  className={styles.sig}
                  style={{ "--i": i } as React.CSSProperties}
                  aria-label="Initialed by Sarah Ross"
                >
                  SR
                </span>
              </td>
            </tr>
          ))}
          <tr className={styles.pending}>
            <td className={styles.num}>{next.date}</td>
            <td className={styles.num}>{next.time}</td>
            <td>{next.area}</td>
            <td className={styles.initCol}>
              <span
                className={styles.blank}
                style={{ "--i": signed.length } as React.CSSProperties}
                aria-label="Scheduled"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.foot}>Sample log for illustration</p>
    </figure>
  );
}
