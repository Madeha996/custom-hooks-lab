# React Custom Hooks 🚀

A collection of reusable and clean React custom hooks.  
This project is built step by step as an educational repo.

---

## 📂 Current Hooks (Phase 1)

### 1🔹 [useToggle](./src/hooks/useToggle.ts)

Toggle a boolean value (e.g., open/close modal).  
👉 Example: [ToggleEx](./src/examples/toggleEx.tsx)

### 2🔹 [useCounter](./src/hooks/useCounter.ts)

Manage a counter with increment, decrement, reset, and step.  
👉 Example: [CounterEx](./src/examples/counterEx.tsx)

### 3. `useInput`

- Manage controlled input state easily.
- Returns `value`, `onChange`, `reset`.

### 4. `useLocalStorage`

- Works like `useState` but persists the value in `localStorage`.
- Value stays even after page refresh.
- Returns `value`, `setValue`, and `remove`.

---

### 5🔹 [useFetch](./src/hooks/useFetch.ts)

Fetch data from any API endpoint with loading and error handling.

- Supports generic type `<T>` to define the shape of returned data.
- Returns `{ data, isFetch, error }`.

👉 Example: [FetchDataEx](./src/examples/fetchDataEx.tsx)
