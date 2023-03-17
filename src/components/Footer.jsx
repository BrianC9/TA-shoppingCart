import './Footer.css'
import { FilterContext } from '../context/FilterContext'
import { useContext } from 'react'

export function Footer () {
  const { filters } = useContext(FilterContext)
  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}
    </footer>
  )
}
