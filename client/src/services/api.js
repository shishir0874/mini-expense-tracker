const STORAGE_KEY = 'mini-expenses'

export async function getExpenses() {
  const raw = localStorage.getItem(STORAGE_KEY) || '[]'
  try {
    return JSON.parse(raw)
  } catch (e) {
    return []
  }
}

export async function addExpense(expense) {
  const items = await getExpenses()
  const item = { ...expense, id: Date.now().toString() }
  items.unshift(item)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  return item
}

export async function deleteExpense(id) {
  const items = await getExpenses()
  const filtered = items.filter(i => i.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  return true
}
