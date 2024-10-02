'use client'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import addTransaction from '@/app/actions/addTransaction'

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData)

    if (error) {
      toast.error(error)
    } else {
      toast.success(
        `Added ${data?.description} ${data!.amount < 0 ? 'expense' : 'income'}.`
      )
      formRef.current?.reset()
    }
  }

  return (
    <>
      <h3>Add transaction</h3>
      <form action={clientAction} ref={formRef}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" name="amount" step="0.01" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
