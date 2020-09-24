CREATE TABLE catalog (
  "Id" integer PRIMARY KEY,
  "Title" text NOT NULL,
  "Full_text" text NOT NULL
);

INSERT INTO catalog ("Id", "Title", "Full_text") VALUES ('1','custom title', 'custom full text');