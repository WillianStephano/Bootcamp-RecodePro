
import CardAtv from '../components/CardAtv';
import Header from '../components/Header';
import CampoPesquisaAtv from '../components/CampoPesquisaAtv';
import FormCadastroAtv from '../components/FormCadastroAtv';


import atividade1 from '../img/Atividade1.png';
import atividade2 from '../img/Atividade2.jpg';
import atividade3 from '../img/Atividade3.webp';
import { Title } from '../components/Titulos/Title';
import Subtitle from '../components/Titulos/Subtitle';

export default function Atividades() {
   return (
      <div>
         <Header />

         <Title
            title="Atividades"
         />

         <Subtitle
            subtitle="Escolha sua atividade e começe os estudos!"
         />

         <CampoPesquisaAtv />
         
         <div className="d-flex container-fluid">
            <div className="row mx-auto">
               <CardAtv atividadeNome="Silabas" foto={atividade1} />
               <CardAtv atividadeNome="Numeros" foto={atividade2} />
               <CardAtv atividadeNome="Formas" foto={atividade3} />
            </div>
         </div>
         <FormCadastroAtv />
      </div>
   )
}
