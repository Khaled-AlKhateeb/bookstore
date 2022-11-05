import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Book from './components/Book';
import Addbook from './components/Addbook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Books />}>books</Route>
          <Route path="categories" element={<Categories />}>categories</Route>
        </Routes>
      </div>
    );
  }
}

const Books = () => (
  <div>
    <div className="nav-container">
      <h1 className="head-title">Bookstore CMS</h1>
      <nav className="links-container">
        <Link className="link selected" to="/">books</Link>
        <Link className="link" to="/categories">categories</Link>
      </nav>
    </div>
    <div className="books-container">
      <Book />
      <Addbook />
    </div>
  </div>
);

const Categories = () => (
  <div>
    <div className="nav-container">
      <h1 className="head-title">Bookstore CMS</h1>
      <nav className="links-container">
        <Link className="link" to="/">BOOKS</Link>
        <Link className="link selected" to="/categories">CATEGORIES</Link>
      </nav>
    </div>
  </div>
);

export default App;
