import { useState } from "react"
import styles from './SearchBar.module.css';

const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState('');
  const handleFormSubmit = (e)=>{
    e.preventDefault()
    onSubmit(term)
    
  }
  return (
    <div className={styles.main}>
    <p>Search for Images</p>
      <form onSubmit={handleFormSubmit}>
      <input className={styles.searchInput} type="text"
      onChange={(e)=>setTerm(e.target.value)}
      value={term}
       />
      </form>
    </div>
  )
}

export default SearchBar