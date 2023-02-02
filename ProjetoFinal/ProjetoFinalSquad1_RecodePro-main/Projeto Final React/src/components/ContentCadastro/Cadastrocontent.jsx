import "./Cadastrocontent.css";

//Use form & yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// importaçoes
import { Titlepagecadastrar } from "./Titlepagecadastrar";
import { Stepcontent } from "./Stepcontent";


export const Cadastrocontent = () => {
   // Validação
   const schema = yup
      .object({
         // Dados pessoais
         nome: yup.string().required("Campo é obrigatorio"),
         cpf: yup
            .string()
            .min(11, "CPF não é valido")
            .required("Campo é obrigatorio"),
         nascimento: yup.string().required("Campo é obrigatorio"),
         telefone: yup.string().required("Campo é obrigatorio"),

         //Endereço
         cep: yup.string().required("Campo é obrigatorio"),
         bairro: yup.string().required("Campo é obrigatorio"),
         rua: yup.string().required("Campo é obrigatorio"),
         numero: yup.string().required("Campo é obrigatorio"),
         cidade: yup.string().required("Campo é obrigatorio"),
         estado: yup.string().required("Campo é obrigatorio"),

         //Dados de acesso
         email: yup
            .string()
            .email("O email não é valido")
            .required("Campo é obrigatorio"),
         emailconfirm: yup
            .string()
            .email("O email não é valido")
            .required("Campo é obrigatorio")
            .oneOf([yup.ref("email")], "O email não conferem"),
         password: yup
            .string()
            .min(8, "A senha deve ter no min 8 caracteres")
            .required("Campo é obrigatorio"),
         passwordconfirm: yup
            .string()
            .required("Campo é obrigatorio")
            .oneOf([yup.ref("password")], "A senhas não conferem"),
      })
      .required();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(schema) });

   //Genrenciamento de dados

   function onsubmit(userdata) {
      console.log(userdata);
   }

   return (
      <div className="container container-form-cadastro">
         <div className="row">
            <Stepcontent />
            <div className="form-content-right-side col-md-9">
               <Titlepagecadastrar />

               <form onSubmit={handleSubmit(onsubmit)} className="cadastro-content">
                  <fieldset className="group1">
                     <div className="group-left-side">
                        <div className="input-cadastro">
                           <label id="nome" htmlFor="name">
                              Nome completo
                              {errors.nome && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.nome?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              id="nome"
                              type="text"
                              name="name"
                              {...register("nome", { required: true })}
                              placeholder="Digite seu nome"
                           />
                        </div>

                        <div className="input-cadastro">
                           <label htmlFor="cpf">
                              CPF
                              {errors.cpf && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.cpf?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="text"
                              name="cpf"
                              {...register("cpf", { required: true })}
                              minLength={11}
                              maxLength={11}
                              placeholder="Digite seu CPF"
                           />
                        </div>
                     </div>

                     <div className="group-right-side">
                        <div className="input-cadastro">
                           <label htmlFor="nascimento">
                              Data de nascimento
                              {errors.nascimento && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.nascimento?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="date"
                              name="nascimento"
                              {...register("nascimento", { required: true })}
                           />
                        </div>

                        <div className="input-cadastro">
                           <label htmlFor="telefone">
                              Telefone:
                              {errors.nascimento && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.telefone?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="tel"
                              name="telefone"
                              {...register("telefone", { required: true })}
                              maxLength={15}
                              minLength={11}
                              placeholder="(xx) xxxxx-xxxx"
                           />
                        </div>
                     </div>
                  </fieldset>

                  <div className="select">
                     <div className="input-cadastro">
                        <label htmlFor="sexo">
                           Sexo:
                           {errors.sexo && (
                              <small style={{ color: "red", marginLeft: "10px" }}>
                                 Campo obrigatorio{" "}
                                 <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                              </small>
                           )}
                        </label>
                        <label htmlFor="">
                           <input type="radio" id="sexo" name="sexo" value="Masculino" />
                           Masculino
                        </label>

                        <label htmlFor="">
                           <input type="radio" id="sexo" name="sexo" value="Feminino" />
                           Feminino
                        </label>

                        <label htmlFor="">
                           <input type="radio" id="sexo" name="sexo" value="Não diz" />
                           Prefiro não informar
                        </label>
                     </div>
                  </div>

                  <fieldset className="group2">
                     <div className="group-left-side">
                        <div className="input-cadastro">
                           <label htmlFor="cep">
                              CEP:
                              {errors.cep && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.cep?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="text"
                              name="cep"
                              {...register("cep", { required: true })}
                              placeholder="Digite seu cep "
                           />
                        </div>
                        <div className="input-cadastro">
                           <label htmlFor="rua">
                              Rua:
                              {errors.rua && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.rua?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="text"
                              name="rua"
                              {...register("rua", { required: true })}
                              placeholder="Rua, avenida "
                           />
                        </div>
                        <div className="input-cadastro">
                           <label htmlFor="cidade">
                              Cidade:
                              {errors.cidade && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.cidade?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="text"
                              name="cidade"
                              {...register("cidade", { required: true })}
                              placeholder="Digite sua cidade"
                           />
                        </div>
                     </div>

                     <div className="group-right-side">
                        <div className="input-cadastro">
                           <label htmlFor="bairro">
                              Bairro:
                              {errors.bairro && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.bairro?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="text"
                              name="bairro"
                              {...register("bairro", { required: true })}
                              placeholder="Digite o seu bairro"
                           />
                        </div>

                        <div className="input-cadastro">
                           <label htmlFor="numero">
                              Numero:
                              {errors.numero && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.numero?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="text"
                              name="numero"
                              {...register("numero", { required: true })}
                              placeholder="Digite o numero"
                           />
                        </div>

                        <div class="input-cadastro">
                           <label htmlFor="estado">
                              Estado:
                              {errors.estado && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.estado?.message}{" "}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <select
                              class="form-select "
                              name="estado"
                              {...register("estado", { required: true })}
                              required
                              data-input
                           >
                              <option selected>Estado</option>
                              <option value="AC">Acre</option>
                              <option value="AL">Alagoas</option>
                              <option value="AP">Amapá</option>
                              <option value="AM">Amazonas</option>
                              <option value="BA">Bahia</option>
                              <option value="CE">Ceará</option>
                              <option value="DF">Distrito Federal</option>
                              <option value="ES">Espírito Santo</option>
                              <option value="GO">Goiás</option>
                              <option value="MA">Maranhão</option>
                              <option value="MT">Mato Grosso</option>
                              <option value="MS">Mato Grosso do Sul</option>
                              <option value="MG">Minas Gerais</option>
                              <option value="PA">Pará</option>
                              <option value="PB">Paraíba</option>
                              <option value="PR">Paraná</option>
                              <option value="PE">Pernambuco</option>
                              <option value="PI">Piauí</option>
                              <option value="RJ">Rio de Janeiro</option>
                              <option value="RN">Rio Grande do Norte</option>
                              <option value="RS">Rio Grande do Sul</option>
                              <option value="RO">Rondônia</option>
                              <option value="RR">Roraima</option>
                              <option value="SC">Santa Catarina</option>
                              <option value="SP">São Paulo</option>
                              <option value="SE">Sergipe</option>
                              <option value="TO">Tocantins</option>
                           </select>
                        </div>
                     </div>
                  </fieldset>

                  <fieldset className="group3">
                     <div className="select2">
                        <label htmlFor="nome">Trabalha atualmente?</label>
                        <label htmlFor="">
                           <input
                              type="radio"
                              id="vuln"
                              name="vuln"
                              value="sim"
                              checked
                           />
                           sim
                        </label>

                        <label htmlFor="">
                           <input type="radio" value="Não" />
                           Não
                        </label>
                     </div>

                     <div className="select2">
                        <label htmlFor="nome">Se sim, é de carteira assinada?</label>
                        <label htmlFor="">
                           <input
                              type="radio"
                              id="vuln"
                              name="vuln"
                              value="sim"
                              checked
                           />
                           sim
                        </label>

                        <label htmlFor="">
                           <input type="radio" id="vuln" name="vuln" value="Não" />
                           Não
                        </label>
                     </div>

                     <div className="select2">
                        <label htmlFor="nome">
                           Já fez algum trabalho de carteira assinada?
                        </label>
                        <label htmlFor="">
                           <input
                              type="radio"
                              id="vuln"
                              name="vuln"
                              value="sim"
                              checked
                           />
                           sim
                        </label>

                        <label htmlFor="">
                           <input type="radio" id="vuln" name="vuln" value="Não" />
                           Não
                        </label>
                     </div>

                     <div className="select2">
                        <label htmlFor="pcd">Possui algum Tipo de Deficiência?</label>
                        <select name="pdc">
                           <option>Nenhuma</option>
                           <option>Visual</option>
                           <option>Fisica</option>
                        </select>
                     </div>
                  </fieldset>

                  <fieldset className="group4">
                     <div className="group-left-side">
                        <div className="input-cadastro">
                           <label htmlFor="email">
                              Email
                              {errors.email && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.email?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              {...register("email", { required: true })}
                              placeholder="Digite seu email"
                           />
                        </div>

                        <div className="input-cadastro">
                           <label htmlFor="password">
                              Senha
                              {errors.password && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.password?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="password"
                              name="password"
                              {...register("password", { required: true })}
                              placeholder="Cadastre sua senha (Minimo 8 caracteres)"
                              minLength={8}
                           />
                        </div>
                     </div>

                     <div className="group-right-side">
                        <div className="input-cadastro">
                           <label htmlFor="emailconfirm">
                              Confirme seu email
                              {errors.emailconfirm && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.emailconfirm?.message}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              name="emailconfirm"
                              {...register("emailconfirm", { required: true })}
                              placeholder="Digite seu email"
                           />
                        </div>

                        <div className="input-cadastro">
                           <label htmlFor="passwordconfirm">
                              Confirme sua senha
                              {errors.passwordconfirm && (
                                 <small style={{ color: "red", marginLeft: "10px" }}>
                                    {errors.passwordconfirm?.message}{" "}
                                    <i class="bi bi-exclamation-octagon-fill"></i>{" "}
                                 </small>
                              )}
                           </label>
                           <input
                              type="password"
                              name="passwordconfirm"
                              {...register("passwordconfirm", { required: true })}
                              placeholder="Confirme a senha "
                              minLength={8}
                           />
                        </div>
                     </div>
                  </fieldset>
                  <button className="btn-cadastro" type="submit">
                     Enviar
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};
