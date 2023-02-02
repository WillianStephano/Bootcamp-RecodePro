import PropTypes from 'prop-types';


function CardAtv({ atividadeNome, foto }) {
   CardAtv.propTypes = {
      atividadeNome: PropTypes.string.isRequired,
      foto: PropTypes.string
   }


   CardAtv.defaultProps = {
      atividadeNome: "Nome da Atividade"
   }

   return (
      <div className="card borda-card col-12 col-md-12 col-lg-12 col-xl-4 p-0 m-4">
         <img src={foto} className="card-img" alt={atividadeNome} />
         <div className="card-body">
            <h5 className="card-title">{atividadeNome}</h5>
            <p className="card-text">Sua primeira atividade está disponivel</p>
            <button type="button" className="btn btn-primary w-100" data-toggle="modal" data-target="#exampleModal">
               Acessar
            </button>
         </div>
      </div>
   )
}

export default CardAtv;