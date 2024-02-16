import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="1054192580473-rasl0u08h763a9m5445pku09of3p5umt.apps.googleusercontent.com">
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' exact element={<PostListPage />}></Route>
            <Route path='/blog/post/:postId/'  element={<PostDetailPage />}></Route>

          </Routes>
        </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
