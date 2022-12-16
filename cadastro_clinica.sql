ALTER TABLE psicologo ADD COLUMN 
apresentacao varchar(500) not null after senha;

ALTER TABLE psicologo 
modify column senha varchar(255);

select  * from atendimento

