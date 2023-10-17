import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='col col-sm-4'>
      <input className='form-control' value={props.value} onChange={(e)=>props.setSearchvalue(e.target.value)} placeholder='Type to search...'/>
    </div>
  )
}

export default SearchBar
