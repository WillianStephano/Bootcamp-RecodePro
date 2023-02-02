package com.agencia.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan (basePackages = {"com.agencia.model.entity"})
@EnableJpaRepositories (basePackages = {"com.agencia.repositories"})
@ComponentScan (basePackages = {"com.agencia.controller", "com.agencia.services", "com.agencia.services.impl"})

@SpringBootApplication
public class BetinApplication {

	public static void main(String[] args) {
		SpringApplication.run(BetinApplication.class, args);
	}

}
