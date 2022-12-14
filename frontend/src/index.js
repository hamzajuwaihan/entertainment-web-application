import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './Pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import Details from './Pages/Details';
import Streams from './Pages/Streams';
import Profile from './Pages/Profile';
import MoviesSearch from './components/MoviesSearch';
import MoviesDashboard from './components/AdminDashboard/MoviesDashboard';
import IndexRoute from './components/AdminDashboard/IndexRoute';
import { Provider } from 'react-redux';
import store from './redux/store';
import UsersDashboard from './components/AdminDashboard/UsersDashboard';
import About from './components/About/About';
import Contact from './components/contact';
import PostsDashboard from './components/AdminDashboard/PostsDashboard';
import CommentsDashboard from './components/AdminDashboard/CommentsDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<IndexRoute />} />
            <Route path="movies" element={<MoviesDashboard />} />
            <Route path="users" element={<UsersDashboard />} />
            <Route path="posts" element={<PostsDashboard />} />
            <Route path="comments" element={<CommentsDashboard />} />
          </Route>
          <Route path="/" element={<App />} >
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="Browse" element={<Browse />} /> */}
            <Route path="About" element={<About />} />
            <Route path="Streams" element={<Streams />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="contact" element={<Contact />} />
            <Route path="movies" element={<MoviesSearch />} />
            <Route path="movie/:movieId" element={<Details />} />


          </Route>

        </Routes>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
