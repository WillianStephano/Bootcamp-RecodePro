import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AddAtividade() {
   const navigate = useNavigate();

   const [titulo, setTitulo] = useState("");
   const [conteudo, setConteudo] = useState("");
   const [descricao, setDescricao] = useState("");
   /*    const [imagem, setImagem] = useState(""); */

   const salvarAtividade = async (e) => {
      e.preventDefault();
      console.log(titulo, conteudo, descricao);
      await axios
         .post("http://localhost:8080/api/atividade/cadastro", {
            titulo: titulo,
            conteudo: conteudo,
            descricao: descricao,
            /* imagem: imagem, */
         })
         .then((result) => {
            alert("Atividade adicionada com sucesso.");
            navigate("/");
         })
         .catch((erro) => {
            console.log(erro);
         });
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-8 mx-auto border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Insira uma nova atividade</h2>
               <form encType="multipart/form-data">

                  <div className="mb-3">
                     <label htmlFor="InputTituloAtv" className="form-label">
                        Titulo da atividade
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="InputTituloAtv"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="InputDescricaoAtv" className="form-label">
                        Descrição
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="InputDescricaoAtv"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="InputConteudoAtv" className="form-label">
                        Conteudo
                     </label>
                     <textarea
                        className="form-control"
                        id="InputConteudoAtv"
                        aria-describedby="ConteudoAtividade"
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                     />

                     <div id="ConteudoAtividade" className="form-text">
                        Descreva de melhor forma o conteudo
                     </div>

                     {/* <div className="mb-3">
                        <label htmlFor="InputFileImg" className="form-label">
                           Selecione a capa da sua atividade
                        </label>
                        <input
                           id="InputFileImg"
                           className="form-control"
                           type={"file"}
                           src=""
                           alt=""
                           accept="image/png, image/gif, image/jpeg"
                           value={imagem}
                           name="fileImg"
                           onChange={(e) => setImagem(e.target.value)}
                        />
                     </div> */}

                  </div>

                  <button
                     type="submit"
                     className="btn btn-outline-success col-sm-8"
                     onClick={salvarAtividade}
                  >
                     Inserir
                  </button>

                  <Link
                     to="/"
                     type="submit"
                     className="btn btn-outline-danger mt-4 col-sm-6">
                     Cancelar
                  </Link>
               </form>
            </div>
         </div >
      </div >
   );
}