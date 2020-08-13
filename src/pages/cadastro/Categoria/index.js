import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/ButtonLink';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function funcaoHander(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValor(
      getAttribute('name'),
      value,
      /*   infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value  */
    );
  }

  return (
    <PageDefault>
      <h1>
        Página de Cadastro de Categoria:
        {valores.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDosEventos) {
        infosDosEventos.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresIniciais);
      }}
      >

        <div>
          <FormField
            label="Nome da Categoria:"
            type="text"
            value={valores.nome}
            name="categoria"
            onChange={funcaoHander}
          />

          <FormField
            label="Descrição: "
            type="textarea"
            value={valores.descricao}
            name="descricao"
            onChange={funcaoHander}
          />
          {/*  <label>
                Descrição:
                <input
                    type="text"
                    value = {valores.descricao}
                    name ="descricao"
                    onChange = {funcaoHander}

                />
                </label> */}
          <FormField
            label="Cor: "
            type="color"
            value={valores.cor}
            name="cor"
            onChange={funcaoHander}
          />
          {/*  <label>
                Cor:
                <input
                    type="color"
                    value = {valores.cor}
                    name ="cor"
                    onChange = {funcaoHander}

                />
                </label> */}
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
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
