package com.agencia.services.impl;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agencia.exception.RegraNegocioException;
import com.agencia.model.entity.Atividade;
import com.agencia.repositories.AtividadeRepository;
import com.agencia.services.AtividadeService;




@Service
public class AtividadeServiceImpl implements AtividadeService{

	@Autowired
	private AtividadeRepository repository;


	@Override
	@Transactional
	public Atividade salvarAtividade(Atividade atividade) {
		validarTitulo(atividade.getTitulo());
		return repository.save(atividade);
	}

	@Override
	public void validarTitulo(String titulo) {
		boolean existe = repository.existsByTitulo(titulo);
		if (existe) {
			throw new RegraNegocioException("Atividade ja esta cadastrada");
		}
		
	}

	@Override
	public Optional<Atividade> buscarPorID(Long id) {
		return repository.findById(id);
	}


	
	

}

