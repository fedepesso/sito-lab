CREATE DATABASE lab_db;
USE lab_db;

CREATE TABLE DataList (
    ID varchar(32) NOT NULL,
    Classe varchar(256) NOT NULL,
    Titolo varchar(256) NOT NULL,
    Preview varchar(2048) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE DataContent (
    ID varchar(32) NOT NULL,
    Scopo TEXT,
    Materiali TEXT,
    Procedimento TEXT,
    Riflessioni TEXT,
    ElencoImmagini TEXT,
    DidascalieImmagini TEXT,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID) REFERENCES DataList(ID)
)