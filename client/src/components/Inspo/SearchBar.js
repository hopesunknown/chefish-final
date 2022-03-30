import React from 'react'

export default function SearchBar({ handleSubmit, query, isLoading, setQuery }) {
        return (
            <form 
            className="recipe-search"
            onSubmit={handleSubmit}>
                <input 
                    value={query}
                    className="form-control"
                    placeholder="Search recipes"
                    name="query"
                    disabled={isLoading}
                    onChange={(event) => setQuery(event.target.value)}
                />   
                <input
                    disabled={isLoading || !query}
                    type="submit"
                    className="recipe-search-btn"
                    value="Search"
                />
            </form>
        )
    };
