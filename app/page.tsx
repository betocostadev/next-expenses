import AddTransaction from '@/components/AddTransaction'
import Guest from '@/components/Guest'
import { currentUser } from '@clerk/nextjs/server'

const HomePage = async () => {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Welcome, {user.firstName}</h2>
      <AddTransaction />
    </div>
  )
}

export default HomePage
