
import { Form } from 'react-bootstrap'

export default function TextArea({ loading, type, value, dispatch }) {

    const commonStyles = {border:0, resize:'none'}

    function handleChange(e) {
        if (type === 'from') {
            return dispatch({ type: 'SET_FROM_TEXT', payload: e.target.value })
        }
    }

    const styles = type === 'from'
    ? commonStyles
    : {...commonStyles, backgroundColor:'#f5f5f5'} 
    
    const getPlaceholder = (type, loading ) => {
        if (type==='from') return "Introducir Texto"
        if (loading === true) return 'Cargando'
        return "Traducción"

    } 

    return (
        <Form.Control as="textarea"
            rows={4}
            autoFocus={type === 'from' ? true : false}
            placeholder={getPlaceholder(type, loading)}
            value={value}
            onChange={handleChange}
            style={styles}
            readOnly={ type ==='to' ? true : false}


        />
    )
} 