import { useDispatch } from 'react-redux';
import { deleteUserById } from '../store/users/slice';

export default function useUserActions () {

    const dispatch = useDispatch(); 
      
    function removeUser(id) {
        dispatch(deleteUserById(id))
      }

return  { removeUser }
    }