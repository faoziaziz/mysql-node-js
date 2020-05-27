# mysql-node-js

Neira aplikasis

## Iklan Type Table
Flag Value|Deskripsi
----------|---------
1		| Teks
2		| Image
**3**		| **QR**

yang bisa diimplementasikan yang bold (**QR**)


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
	"iklantype":  2,
	"ex_date": "2018-12-31T13:05:21",
	"flag": 0,
	"cpuid": "123456789012345",
	"memberid":"member1234",
	"padTeks":"<MemberID>"
}

```

# Keterangan 

CPU ID masih 15 digit yang 1 dijit adalah Null
## Untuk Versi update earning
Post http://52.187.1.94:7269/api/iklanneira

contoh post json dengan iklan neiras
```json

{
	"conten_iklan": "random",
	"iklantype":  2,
	"ex_date": "2018-12-31T13:05:21",
	"flag": 0,
	"cpuid": "123456789012345",
	"memberid":"member1234",
	"padTeks":"<MemberID>"
}

```

## Untuk Versi update redeem
Post http://52.187.1.94:7269/api/iklanneira2 

contoh post json dengan iklan neiras
```json

{
	"conten_iklan": "random",
	"iklantype":  2,
	"ex_date": "2018-12-31T13:05:21",
	"flag": 0,
	"cpuid": "123456789012345",
	"memberid":"member1234",
	"padTeks":"<MemberID>"
}

```

## Untuk table setting 
### Redeem
```sql
CREATE TABLE `NeiraIklanVer2` (
	`NO` INT(11) NOT NULL AUTO_INCREMENT,
	`ID_TGL` INT(11) NULL DEFAULT NULL,
	`UUID` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`UUID_ENC` CHAR(72) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`Content` CHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`ExpiryDate` DATETIME NULL DEFAULT NULL,
	`TipeIklan` INT(11) NOT NULL DEFAULT '0',
	`Flag` TINYINT(4) NULL DEFAULT '0',
	`CPUID` CHAR(20) NULL DEFAULT 'CPUID' COLLATE 'utf8mb4_general_ci',
	`MemberID` CHAR(30) NULL DEFAULT 'MemberId' COLLATE 'utf8mb4_general_ci',
	`PadTeks` CHAR(30) NULL DEFAULT 'PadTeks' COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`NO`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;

```
### Earning
```sql
CREATE TABLE `NeiraIklanVer3` (
	`NO` INT(11) NOT NULL AUTO_INCREMENT,
	`ID_TGL` INT(11) NULL DEFAULT NULL,
	`UUID` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`UUID_ENC` CHAR(72) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`Content` CHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`ExpiryDate` DATETIME NULL DEFAULT NULL,
	`TipeIklan` INT(11) NOT NULL DEFAULT '0',
	`Flag` TINYINT(4) NULL DEFAULT '0',
	`CPUID` CHAR(20) NULL DEFAULT 'CPUID' COLLATE 'utf8mb4_general_ci',
	`MemberID` CHAR(30) NULL DEFAULT 'MemberId' COLLATE 'utf8mb4_general_ci',
	`PadTeks` CHAR(30) NULL DEFAULT 'PadTeks' COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`NO`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;
```

