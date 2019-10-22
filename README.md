# mysql-node-js


Just remminder that this program still not on progress.


```sql

CREATE TABLE `NeiraIklanVer2` (
	`NO` INT(11) NOT NULL AUTO_INCREMENT,
	`ID_TGL` INT(11) NULL DEFAULT NULL,
	`UUID` CHAR(50) NULL DEFAULT NULL,
	`UUID_ENC` CHAR(72) NULL DEFAULT NULL,
	`Content` CHAR(255) NULL DEFAULT NULL,
	`ExpiryDate` DATETIME NULL DEFAULT NULL,
	`TipeIklan` INT(11) NOT NULL DEFAULT '0',
	`Flag` TINYINT(4) NULL DEFAULT '0',
	PRIMARY KEY (`NO`)
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;


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

Post http://52.187.1.94:7269/api/iklanneira 

contoh post json dengan iklan neiras
```json

{
	"conten_iklan": "random",
	"iklantype":  3,
	"ex_date": "2018-12-31T13:05:21",
	"flag": 1
}

```