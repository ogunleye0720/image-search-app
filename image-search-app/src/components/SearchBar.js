import './SearchBar.css';
import { useState } from "react";


function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');

    // This fn collects the input data from the form and passes it to the
    //  onSubmit function of the SearchBar component.

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;