
import { Form } from 'react-bootstrap'

export default function TextArea({loading, type, value, dispatch}) {


    function handleChange (e){
        dispatch({type:'SET_FROM_TEXT',payload:e.target.value})
    }

    return (
        <Form.Control as="textarea"
            rows={4}
            autoFocus={type==='from' ? true :false}
            placeholder={type==='from' ? "Introducir Texto" : "Traducción"}
            value = {value}
            onChange={handleChange}
            
           
        />
    )
} 