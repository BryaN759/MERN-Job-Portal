import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Toast from './components/Toast';
import PasswordReset from './pages/PasswordReset';
import TermsAndConditions from './pages/Terms&Conditions';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route path="/sign-in" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignupPage />} />
                <Route path="/reset-password" element={<PasswordReset />} />
                <Route
                    path="/terms&conditions"
                    element={<TermsAndConditions />}
                />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Toast />
        </>
    );
}

export default App;
