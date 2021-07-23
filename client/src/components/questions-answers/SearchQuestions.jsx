import React from 'react';

const SearchQuestions = () => {
  return (
    <div>
    <form>
        <input
        type='text'
        id='search-bar'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        />
        <button type='submit'>Search
        </button>
    </form>
    </div>
  )
}


export default SearchQuestions;