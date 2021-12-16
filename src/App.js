import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <h1>Library Catalog</h1>
        <NavLink to="/"></NavLink>
        <NavLink to="/books"></NavLink>
        <Switch>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
