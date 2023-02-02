package com.agencia.dto;



import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AtividadeDTO {

	private String titulo;
	private String descricao;
	private String conteudo;
}
