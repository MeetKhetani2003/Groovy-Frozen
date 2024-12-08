import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/organisms/layout/Layout';
import Home from './pages/Home';
// import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Uncomment when needed */}
        {/* <Route
          path="/auth/signup"
          element={
            <AuthContainer>
              <SignupContainer />
            </AuthContainer>
          }
        /> */}

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              // <ProtectedRoute>
              <Home />
              // </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
