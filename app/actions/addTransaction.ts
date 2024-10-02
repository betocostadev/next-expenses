'use server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

interface TransactionData {
  description: string
  amount: number
}

interface TransactionResult {
  data?: TransactionData
  error?: string
}

const addTransaction = async (
  formData: FormData
): Promise<TransactionResult> => {
  const textValue = formData.get('description')
  const amountValue = formData.get('amount')

  // Verify the values
  if (!textValue || textValue === '' || !amountValue) {
    return { error: 'Description and amount cannot be empty' }
  }

  const description: string = textValue.toString()
  const amount: number = parseFloat(amountValue.toString())

  const { userId } = auth()

  if (!userId) {
    return { error: 'User not found! Are you logged in?' }
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        description,
        amount,
        userId,
      },
    })

    revalidatePath('/')

    return { data: transactionData }
  } catch (error) {
    return { error: 'Transaction not added.' }
  }
}

export default addTransaction
