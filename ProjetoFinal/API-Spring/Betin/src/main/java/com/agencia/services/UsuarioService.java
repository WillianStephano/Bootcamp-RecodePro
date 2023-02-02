package com.agencia.services;

import java.util.Optional;

import com.agencia.model.entity.Usuario;

public interface UsuarioService {

	Usuario autenticar (String email, String senha);
	
	Usuario salvarUsuario (Usuario usuario);
	
	void validarEmail (String email);
	
	Optional<Usuario> buscarPorID(Long id);
}
