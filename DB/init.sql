CREATE DATABASE lab_db;

--create user admin for login ##password##

CREATE TABLE DataList (
    ID char(128) NOT NULL,
    Classe int NOT NULL,
    Titolo TEXT NOT NULL,
    Preview TEXT NOT NULL,
    PRIMARY KEY (ID)
)

CREATE TABLE DataContent (
    ID char(128) NOT NULL,
    Scopo TEXT,
    Materiali TEXT,
    Procedimento TEXT,
    Riflessioni TEXT,
    ElencoImmagini TEXT,
    DidascalieImmagini TEXT,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID) REFERENCES DataList(ID)
)