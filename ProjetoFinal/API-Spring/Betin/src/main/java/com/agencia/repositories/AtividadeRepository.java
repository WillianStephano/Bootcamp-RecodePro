package com.agencia.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agencia.model.entity.Atividade;
import com.agencia.model.entity.Usuario;

public interface AtividadeRepository extends JpaRepository<Atividade, Long>  {
	
boolean existsByTitulo(String titulo);
	
	Optional<Usuario> findByTitulo(String titulo);
	
	
}
