package com.agencia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.agencia.dto.AtividadeDTO;
import com.agencia.exception.RegraNegocioException;
import com.agencia.model.entity.Atividade;
import com.agencia.services.AtividadeService;

@RestController
@CrossOrigin
@RequestMapping(value = "api/atividade/cadastro", method = RequestMethod.POST) 

/** (value = "api/usuarios", method = RequestMethod.POST) **/
/** ("api/usuarios"**/

public class AtividadeController {
	
	@Autowired
	private AtividadeService service;
	
	
	@GetMapping("/user")
	public String helloWorld() {
		return "Foi";
	}

	
	@PostMapping
	public ResponseEntity salvar(@RequestBody AtividadeDTO dto) {
		
		Atividade atividade = Atividade.builder()
				.titulo(dto.getTitulo())
				.descricao(dto.getDescricao())
				.conteudo(dto.getConteudo())
				.build();
		
		try {
			Atividade atividadeSalvo = service.salvarAtividade(atividade);
			return new ResponseEntity(atividadeSalvo, HttpStatus.CREATED);
			
		} catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
}