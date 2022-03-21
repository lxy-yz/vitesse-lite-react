export default function Counter() {
  const [value, { inc, dec }] = useCounter(0)

  return (
    <div>
      {value}
      <button className="inc" onClick={() => inc()}>
      +
      </button>
      <button className="dec" onClick={() => dec()}>
      -
      </button>
    </div>
  )
}
