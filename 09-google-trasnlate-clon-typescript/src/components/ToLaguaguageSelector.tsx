import Form from 'react-bootstrap/Form';


function ToLanguageSelector({ dispatch, state }) {

    function handleChange(event: { target: { value: string; }; }) {
        const newLang = event.target.value
        dispatch({ type: 'SET_TO_LANGUAGE', payload: newLang })
    }

    return (
        <Form.Select onChange={handleChange} value={state.toLanguage} aria-label="Selecciona el idioma">
            {state.toLanguage === 'sel' && <option value="sel">Elegir idioma</option>}
            <option value="en">Ingles</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
        </Form.Select>
    );
}

export default ToLanguageSelector;