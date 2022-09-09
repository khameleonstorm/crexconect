import styles from './History.module.css';
import { MdOutlinePending } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { HiXCircle } from 'react-icons/hi';
import { useState } from 'react';
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import useAuth from '../hooks/useAuth'

export default function History() {
  const [history, setHistory] = useState([])
  const { user } = useAuth()

    if(user) {         
      const Q = query(collection(db, "history"), where("email", "==", user.email))
      let result = []
      onSnapshot(Q, 
        (snapshot) => {
          snapshot.forEach(doc => {
            result.push(doc.data())
            setHistory(result)
          })
        })}

  return (
      <div className={styles.container}>
        {history && history.map((doc) =>
          <div className={styles.wrapper} key={doc.createdAt}>
          <div className={styles.desc1}>
            <p>{doc.title}</p>
            <p>${doc.amount}</p>
          </div>
          <div className={styles.desc2}>
            {doc.createdAt && <p>{doc.createdAt}</p>}
            <div>
              <p>
                {(doc.pending !== "failed" && !doc.pending) ? 'Pending' : (doc.pending !== "failed" && doc.pending) ? 'Approved' : 'Failed'}
              </p>
              {
              (doc.pending !== "failed" && !doc.pending) ?  <MdOutlinePending color='#ff9977' size="1.5em"/> :
              (doc.pending !== "failed" && doc.pending) ? <MdCheckCircle color='#00e99b' size="1.5em"/> :
              <HiXCircle color='red' size="1.5em"/>
              }
            </div>
          </div>
          </div>
        )}
      </div>
  )
}
