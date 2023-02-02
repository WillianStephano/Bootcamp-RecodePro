package com.agencia.services;

import java.util.Optional;

import com.agencia.model.entity.Atividade;



public interface AtividadeService {
	
	Atividade salvarAtividade (Atividade usuario);
	
	void validarTitulo (String titulo);
	
	Optional<Atividade> buscarPorID(Long id);
	
}
