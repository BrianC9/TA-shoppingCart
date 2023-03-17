import Filters from './Filters'
function Header ({ handleChangeFilters }) {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters handleChangeFilters={handleChangeFilters} />
    </header>
  )
}

export default Header
