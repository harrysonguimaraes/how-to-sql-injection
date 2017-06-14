# --- !Ups

-- EVOLUTION INICIAL DO PROJETO QUE DEVE SER EXECUTADA MANUALMENTE PARA INICIALIZAÇÃO DO BANCO

DROP SCHEMA IF EXISTS portal CASCADE;

CREATE ROLE portal LOGIN
  ENCRYPTED PASSWORD 'portal'
  SUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;

CREATE SCHEMA portal AUTHORIZATION portal;

ALTER ROLE portal
  SET search_path = portal, public;

GRANT all ON SCHEMA public TO portal;
GRANT select, references ON ALL TABLES IN SCHEMA public TO portal;


CREATE TABLE portal.usuario
(
  id serial not null,
  nome varchar(254),
  senha varchar(30),
  CONSTRAINT pk_usuario PRIMARY KEY (id)
);

create table portal.perfil
(
	id serial not null,
	nome varchar(30),
	codigo varchar(10),
	 CONSTRAINT pk_perfil PRIMARY KEY (id)
);

INSERT INTO portal.usuario(nome, senha) VALUES ('Harryson C. Guimarães', '42');
INSERT INTO portal.usuario(nome, senha) VALUES ('João Grilo', '123456');
INSERT INTO portal.usuario(nome, senha) VALUES ('Logan', 'X-23');
INSERT INTO portal.usuario(nome, senha) VALUES ('Frank Underwood', '2016-2020');

INSERT INTO portal.perfil(nome, codigo) VALUES('Externo','EXTERNO');
INSERT INTO portal.perfil(nome, codigo) VALUES('Administrador','ADMIN');