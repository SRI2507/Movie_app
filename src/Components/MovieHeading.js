import React from 'react'

const MovieHeading = (props) => {
    function handleChange(event) {
        props.setSearch(event.target.value)
    }
  return (
    <div className="head">
            <h2>Movie </h2>
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={props.Search}
            ></input>

        </div>
  )
}

export default MovieHeading
