INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Brownie Recheado', 'Saboroso quadrado de brownie recheado', 'Indispensáveis', 100, 6.50, 'https://i.imgur.com/faluOcj.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Dadinhos de Brownie', '140g de pedaços de brownie cobertos com chocolate', 'Indispensáveis', 100, 8.00, 'https://i.imgur.com/cZNSTMJ.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Mousse de Maracujá', 'Coberto com geléia caseira de maracujá.', 'Indispensáveis', 100, 8.50, 'https://i.imgur.com/ieOgH8W.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Coxinha com morango', 'Brigadeiro incrível envolvendo um morango fresco.', 'Coxinhas Doces', 100, 10.50, 'https://i.imgur.com/w2hzOEi.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Coxinha morango/nutella', 'Deliciosa coxinha de morango com cobertura de nutella.', 'Coxinhas Doces', 100, 10.50, 'https://imgur.com/dun37H8.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Copão Ninho/morango', 'Ninho, morangos, brownie e chantininho.', 'Copões', 100, 20.50, 'https://i.imgur.com/yoE6D1o.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Copão Nutella', 'Chocolate, amendoim, brownie e nutella.', 'Copões', 100, 20.50, 'https://imgur.com/fyDmo1A.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Pastel Assado', 'Pastel assado de frango. Contém milho.', 'Salgados', 100, 5.50, 'https://i.imgur.com/7NWWdMD.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Enrolado Assado', 'Com recheio de presunto e mussarela.', 'Salgados', 100, 5.50, 'https://i.imgur.com/qjjR73R.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Pastel Assado', 'Pastel assado de frango. Contém milho.', 'Tortinhas', 100, 5.50, 'https://i.imgur.com/7NWWdMD.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Enrolado Assado', 'Com recheio de presunto e mussarela.', 'Tortinhas', 100, 5.50, 'https://i.imgur.com/qjjR73R.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Refrigerante Lata', 'Lata de refrigerante 350ml gelado.', 'Bebidas', 100, 4.50, 'https://i.imgur.com/hQZjPXK.png');
INSERT INTO product (name, description, category, quantity, price, link ) VALUES ('Refrigerante Garrafa', 'Garrafinha de refrigerante 200ml', 'Bebidas', 100, 2.50, 'https://i.imgur.com/hxu6kyl.png');


INSERT INTO promotion_campain (title, description, image_link, active ) VALUES ('Dia da sobremesa', '10% em todas sobremesas', 'https://i.imgur.com/0SjPZDm.png', true);
INSERT INTO promotion_campain (title, description, image_link, active ) VALUES ('Dia da coxinha', '2% em todas coxinhas', 'https://i.imgur.com/w2hzOEi.png', false);
INSERT INTO promotion_campain (title, description, image_link, active ) VALUES ('Dia do copao', '15% em todos copoes', 'https://i.imgur.com/sFqtI8v.png', false);

INSERT INTO user_profile (name, email, password, phone, address, zip_code ) VALUES ('admin', 'sys_root@gmail.com', 'root@123!', 'teste', 'teste', 'teste');
INSERT INTO user_profile (name, email, password, phone, address, zip_code ) VALUES ('Lavínia Helena Nascimento', 'laviniahelenanascimento@tigertimoveis.com', 'root@123!', '(88)98332-0577', 'Rua Governador Plácido Castelo, 478, Cocobó, Iguatu-CE ', '63504-148');
INSERT INTO user_profile (name, email, password, phone, address, zip_code ) VALUES ('Nicole Aparecida Eduarda Nascimento', 'nicole-nascimento71@cincoentretenimentos.com.br', 'root@123!', '(21)98435-6789', 'Rua Goiás, Vila Brasil (Manilha), Itaboraí, Rio de Janeiro', '24859-108');
INSERT INTO user_profile (name, email, password, phone, address, zip_code ) VALUES ('Iago Marcos Fogaça', 'iagomarcosfogaca@universo3d.com.br', 'root@123!', '(11) 98743-3958', 'Rua Frei São Galvão, Loteamento Santa Edwiges, Salto, São Paulo', '13327-487');
