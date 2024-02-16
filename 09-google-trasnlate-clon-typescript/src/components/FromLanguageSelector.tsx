import Form from 'react-bootstrap/Form';


function FromLanguageSelector({ dispatch, state }) {

    function handleChange(event: { target: { value: string; }; }){
        const newLang  = event.target.value
        dispatch({type:'SET_FROM_LANGUAGE', payload:newLang})
    }

    console.log(state)
    
    return (
        <Form.Select onChange={handleChange} value={state.fromLanguage} aria-label="Selecciona el idioma">
            <option value="auto">Detectar idioma</option>
            <option value="en">Ingles</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
        </Form.Select>
    );
}

export default FromLanguageSelector;