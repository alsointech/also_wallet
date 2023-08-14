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
    visible boolean DEFAULT true
);ññññ


