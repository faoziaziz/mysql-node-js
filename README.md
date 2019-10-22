# mysql-node-js


Just remminder that this program still not on progress.


```sql

CREATE TABLE NeiraIklan (
    idiklan int(11)  NOT NULL,
    conten_iklan varchar(100) NOT NULL,
    counting int,
    max_counting int,
    iklan_type int,
    PRIMARY KEY (idiklan)
); 

```

just for testing database 

```sql
CREATE TABLE `NeiraIklanVer2Redeem` (
	`Id` INT(11) NOT NULL AUTO_INCREMENT,
	`UUID` VARCHAR(50) NULL DEFAULT NULL,
	`Flag` VARCHAR(50) NULL DEFAULT NULL,
	INDEX `Id` (`Id`)
)
ENGINE=InnoDB;
```

Redem table atau yang disebut sebagai NeiraIklanVer2Redeem merupakan table untuk storage data dari device ke Server.
Flag dari redem adalah sebagai berikut.

Flag Value|Deskription
-----------|----------
0         | Not Redeem Yet
1          | Sudah diredeem


Store Table dari server

Flag Value | Deskription
-----------|------------
0           | Belum di Download
1           | Sudah di Download
2           | Sudah di Redeem