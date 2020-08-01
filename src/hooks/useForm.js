import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(keyValue, value) {
    setValues({
      ...values,
      [keyValue]: value,
    });
  }

  function handleChange(infoEvent) {
    setValue(
      infoEvent.target.getAttribute('name'),
      infoEvent.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
