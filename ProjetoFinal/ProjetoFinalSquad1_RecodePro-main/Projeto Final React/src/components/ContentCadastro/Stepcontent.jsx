import './Cadastrocontent.css'
//img
import logoimg from "../../img/betin-cadastro.png";

export const Stepcontent = () =>{

    return(
        <div className="img-content-left-side col-md-3">
          <img src={logoimg} alt="logo de login betin" />

          <div className="steps">
            <div className="step-1 step">
              <i className="bi bi-1-circle step-icon active"></i>
              <p>Dados Pessoais</p>
            </div>

            <div className="step-2 step">
              <i className="bi bi-2-circle"></i>
              <p>Endereço</p>
            </div>

            <div className="step-3 step">
              <i className="bi bi-3-circle"></i>
              <p>Vulnerabilidades</p>
            </div>

            <div className="step-4 step">
              <i className="bi bi-4-circle step-icon "></i>
              <p>Dados de acesso</p>
            </div>
          </div>
        </div>

    )
}