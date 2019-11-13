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