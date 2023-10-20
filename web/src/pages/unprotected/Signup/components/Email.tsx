function Email(goNext: () => void) {
  return (
    <div>
      <p>email</p>
      <button onClick={goNext}>Next</button>
    </div>
  )
}

export default Email
