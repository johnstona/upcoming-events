import React, { useState, useEffect } from 'react'

const optToReadable = (opt) => {
  return opt.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

const Dropdown = ({ options, search }) => {
  const [selection, setSelection] = useState()

  const handleChange = (event) => {
    setSelection(event.target.value)
  }

  useEffect(() => {
    if (selection) { search(selection) }
  }, [search, selection])

  return <select value={selection} onChange={handleChange}>
    {options.map(opt => {
      return <option key={opt} value={opt}>{optToReadable(opt)}</option>
    })}
  </select>
}

export default Dropdown
