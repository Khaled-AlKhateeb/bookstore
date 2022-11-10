import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddBook from './components/AddBook';
import Book from './components/Book';
import CheckStatus from './components/Checkstatus';

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

const Books = () => {
  const book = useSelector((state) => state.book);
  return (
    <div>
      <div className="nav-container">
        <h1 className="head-title">Bookstore CMS</h1>
        <nav className="links-container">
          <Link className="link selected" to="/">books</Link>
          <Link className="link" to="/categories">categories</Link>
        </nav>
      </div>
      <div className="books-container">
        <Book Book={book} />
        <AddBook />
      </div>
    </div>
  );
};

const Categories = () => (
  <div>
    <div className="nav-container">
      <h1 className="head-title">Bookstore CMS</h1>
      <nav className="links-container">
        <Link className="link" to="/">BOOKS</Link>
        <Link className="link selected" to="/categories">CATEGORIES</Link>
      </nav>
    </div>
    <CheckStatus />
  </div>
);

export default App;
