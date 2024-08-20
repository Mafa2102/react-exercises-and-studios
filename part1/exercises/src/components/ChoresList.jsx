import styles from './ChoresList.module.css'
export default function ChoresList () {
   const chores = ["clean house", "clean car","take out trash","Dance floor"];
   return (
      <div>
       <p className={styles.choresHeading}> Chores List</p>
       <ol>
          <li className={styles.ChoresList}>{chores[0]}</li>
          <li className={styles.ChoresList}>{chores[1]}</li>
          <li className={styles.ChoresList}>{chores[2]}</li>
          <li className={styles.ChoresList}>{chores[3]}</li>
          <li className={styles.ChoresList}>{chores[4]}</li>
 
       </ol>
      </div>
    
       )
}