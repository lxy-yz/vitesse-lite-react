export default function Counter() {
  const { count, increment, decrement } = useCounter(0)

  return (
    <div>
      {count}
      <button className="inc" onClick={() => increment()}>
      +
      </button>
      <button className="dec" onClick={() => decrement()}>
      -
      </button>
    </div>
  )
}
