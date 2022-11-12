/*eslint-disable*/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookContainer from './components/bookContainer';
import Header from './components/header';
import Categories from './components/categories';

class App extends React.PureComponent {
  render() {
    return (
      <div>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<BookContainer />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;