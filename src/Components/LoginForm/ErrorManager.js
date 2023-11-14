
import { useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearMessage } from '../../Redux/user';

const ErrorManager = () => {
    const errorMessages = useSelector(state => state.users.message); // Replace with your reducer and selector
    const dispatch = useDispatch();
    const prevErrorMessageRef = useRef(null);
  
    useEffect(() => {
        if (errorMessages ) {
            toast.error("Vous ne pouvez pas vous connecter"); // or your preferred Toastify function
            prevErrorMessageRef.current = errorMessages;
            dispatch(clearMessage()); // Clear the error message in the store
          }
    }, [errorMessages, dispatch]);
  
    return null;
};

export default ErrorManager;