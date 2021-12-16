import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <h1>Library Catalog</h1>
        {/* <NavLink to="/"></NavLink>
        <NavLink to="/books"></NavLink> */}
        <Switch>
          <Route path="/books/:id" component={BookDetail} />

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
