import React, { useState, useEffect } from 'react'

const Dropdown = ({ options, search }) => {
  const [selection, setSelection] = useState()

  const handleChange = (event) => {
    setSelection(event.target.value)
  }

  useEffect(() => {
    if (selection) {search(selection)}
  }, [search, selection])

  return <select value={selection} onChange={handleChange}>
    {options.map(opt => {
      return <option value={opt}>{opt.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>
    })}
  </select>
}

export default Dropdown
