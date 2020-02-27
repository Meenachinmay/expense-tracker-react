import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export const make_notification = (props) => {

    switch (props.type){
        case 'error':
            toast.error(props.text, {position: toast.POSITION.BOTTOM_RIGHT});
            break;
        case 'success':
            toast.success(props.text, {position: toast.POSITION.BOTTOM_RIGHT});    
            break;
        default:
            break;
    }
}
