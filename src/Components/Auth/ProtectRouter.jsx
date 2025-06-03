import SignIn from '../FormComp/SignIn'
import BookingDetailsTable from '../TableComp/BookingDetailsTable';
import { useAuth } from './AuthProvider'

function ProtectRouter({ children, role = "user" }) {
    const { user, loading } = useAuth();

    console.log("user", user)

    if (loading) {
        return <div>Loading...</div>; // or show a spinner
    }

    return user?.role === "admin" ? <BookingDetailsTable /> : user?.role === role ? children : <SignIn />;
}

export default ProtectRouter;
