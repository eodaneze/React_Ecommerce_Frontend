import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const submitHandler = (e) => {
      e.preventDefault();
      navigate(query ? `/search/?query=${query}` : '/search');
    };
  return (
    <div>
      <form className="d-flex me-auto" onSubmit={submitHandler}>
        <input className="form-controls"  name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search" type="text" />
          <Button variant="outline-primary" type="submit" id="button-search"><i className="fas fa-search"></i></Button>
      </form>
    </div>
  );
};

export default Search;
