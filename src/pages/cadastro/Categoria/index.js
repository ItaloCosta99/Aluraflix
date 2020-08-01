import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    /* console.log('Teste'); */
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://italocosta99flix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (servRes) => {
        const response = await servRes.json();
        setCategorias([
          ...response,
        ]);
      });

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        values,
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoEvent) {
        infoEvent.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm(valoresIniciais);
      }}
      >
        <FormField
          label="Título da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
          Descrição:
            <label>
            <textarea
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
            />
            </label>
          </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
            Cor:
            <label>
            <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
            />
            </label>
          </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
