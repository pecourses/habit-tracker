import { ErrorMessage, Field, Form, Formik } from 'formik'
import { createHabitThunk } from '../../store/slices/habitsSlice'
import { HABIT_VALIDATION_SCHEMA } from '../../utils/validationSchemas'
import { HABIT_FREQUENCIES } from '../../constants'
import { useAppDispatch } from '../../store/hooks'
import styles from './NewHabit.module.css'

import type { FormikHelpers } from 'formik'
import type { CreateHabitDto } from '../../types'

function NewHabit () {
  const dispatch = useAppDispatch()

  const initialValues: CreateHabitDto = {
    title: '',
    frequency: HABIT_FREQUENCIES[0],
    isActive: false
  }

  const handleSubmit = (
    values: CreateHabitDto,
    formikBag: FormikHelpers<CreateHabitDto>
  ) => {
    dispatch(createHabitThunk(values))
    formikBag.resetForm()
  }
  return (
    <Formik<CreateHabitDto>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={HABIT_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <Field
            className={styles.input}
            name='title'
            type='text'
            placeholder='e.g. Read 10 pages'
          />
          <ErrorMessage className={styles.error} name='title' component='div' />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Frequency</span>
          <Field className={styles.select} name='frequency' as='select'>
            {HABIT_FREQUENCIES.map(f => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </Field>
          <ErrorMessage
            className={styles.error}
            name='frequency'
            component='div'
          />
        </label>

        <label className={styles.checkbox}>
          <Field name='isActive' type='checkbox' />{' '}
          <span className={styles.label}>Active</span>
        </label>

        <button className={styles.submit} type='submit'>
          Add
        </button>
      </Form>
    </Formik>
  )
}

export default NewHabit
