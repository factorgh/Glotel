import { useEffect } from 'react'
import { useUser } from './useUser';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../ui/Spinner';

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    ///1)get current user 
    const { isLoading, isAuthenticated } = useUser();

    //
    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/login");
    }, [isLoading, isAuthenticated, navigate]);
    

    ///3)show a loading spinner
    <Spinner />
    
    //if is authenticated,render app
   if(isAuthenticated)return children;
}
