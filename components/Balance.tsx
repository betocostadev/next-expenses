'use client'

import getUserBalance from '@/app/actions/getUserBalance'
import { addCommasFinance } from '@/lib/utils'
import { useEffect, useState } from 'react'

const Balance = () => {
  const [balance, setBalance] = useState<number | undefined>(undefined)

  useEffect(() => {
    const fetchBalance = async () => {
      const { balance } = await getUserBalance()
      setBalance(balance)
    }

    fetchBalance()
  }, [])

  if (balance === undefined) {
    return <p>Loading balance...</p>
  }

  return (
    <div>
      <h4>Your balance</h4>
      <h2>${addCommasFinance(balance) ?? 0}</h2>
    </div>
  )
}

export default Balance
