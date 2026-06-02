import { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteHabitThunk,
  getHabitThunk,
  updateHabitThunk
} from '../../store/slices/habitsSlice'
import styles from './HabitsList.module.css'

function HabitsList () {
  const dispatch = useDispatch()
  const habits = useSelector(state => state.habits.habits)

  useEffect(() => {
    dispatch(getHabitThunk())
  }, [])

  const toggleActive = (id, isActive) => {
    dispatch(updateHabitThunk({ id, updatedHabit: { isActive } }))
  }

  const handleDeleteHabit = id => {
    dispatch(deleteHabitThunk(id))
  }

  return (
    <ul className={styles.list}>
      {habits.map(({ id, title, frequency, isActive }) => (
        <li key={id} className={styles.item}>
          <h2 className={styles.title}>
            <button
              className={styles.toggle}
              onClick={() => toggleActive(id, !isActive)}
            >
              {isActive ? <FaCheck /> : <RxCross2 />}
            </button>
            {title}
          </h2>
          <p className={styles.meta}>Frequency: {frequency}</p>
          <button
            className={styles.delete}
            onClick={() => handleDeleteHabit(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default HabitsList
