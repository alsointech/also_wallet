CREATE TABLE investments (
	id serial PRIMARY KEY,
	inv_type VARCHAR ( 255 ) NOT NULL,
    create_date DATE NOT NULL DEFAULT CURRENT_DATE, 
    inv_start_date DATE NOT NULL, 
    inv_term,
    description VARCHAR ( 255 ),
	completed boolean DEFAULT false,
    visible boolean DEFAULT true
);

CREATE TABLE investments (
	id serial PRIMARY KEY,
	inv_type VARCHAR ( 255 ) NOT NULL,
    create_date DATE NOT NULL DEFAULT CURRENT_DATE, 
    description VARCHAR ( 255 ),
    ammount DECIMAL NOT NULL,
    visible boolean DEFAULT true
);

INSERT INTO investments
    (id, inv_type, create_date, description, ammount, visible)
VALUES
    (1, 'renta_fija', now(), 'click yellow', 5000000, TRUE),
    (2, 'renta_variable', now(), 'click green', 3000000, TRUE);