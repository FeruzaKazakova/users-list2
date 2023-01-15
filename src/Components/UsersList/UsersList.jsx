import { UsersItem } from '../UsersItem/UsersItem'
import styles from './UsersList.module.css'

export const UsersList = ({users, setUsers}) => {

    const sorted = users.slice().sort(function(a, b) { 
      if(a.number < b.number) return 1;
      if(a.number > b.number) return -1;
      return 0;
     });

  return (
    <div>
        <ul className={styles.ul}>
        {sorted.map((user) => (
           <UsersItem key={user.id} user={user} setUsers={setUsers}/>
            ))}
        </ul>
    </div>
  )
}
