/* COMANDOS */
/* Inserir dados na table */
INSERT INTO usuarios(idade, email, nome) Values(
    19,
    "email@teste.com",
    "Victor Silva"
);
/* Listando os dados da table */
SELECT * FROM usuarios; /* Selecione todos os dados de table */
/* Especificando dado */
SELECT * FROM usuarios WHERE idade = 8;