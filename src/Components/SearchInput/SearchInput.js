import React from 'react'
import TextField from '@mui/material/TextField';

function SearchInput({handleSearch }) {
    
  return (
    <div>
      <TextField id="outlined-search" label="Search field" type="search" onChange={ handleSearch}/>
    </div>
  )
}

export default SearchInput
