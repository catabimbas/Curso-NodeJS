/* COMANDOS */
/* Criar Banco de Dados */
CREATE DATABASES "nome do seu banco";
/* Acessar o seu Banco */
USE "banco desejado";
/* Criar tables (Tabelas) */
CREATE TABLE usuarios(
    /* Colunas */
    nome VARCHAR(50), /* ou CHAR são caracteres */
    email VARCHAR(255), /* Limite de caracteres do VARCHAR */
    idade INT /* Números Inteiros */
);
/* Mostra as tabelas */
SHOW TABLES;
/* Acessar tabela */
DESCRIBE "Tabela Desejada";