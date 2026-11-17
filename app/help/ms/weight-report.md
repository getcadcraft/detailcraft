---
title: Laporan bahan dan berat mengikut fasa
summary: Panjang potongan, bilangan, berat dan luas cat bagi setiap fasa, dengan bolt dan tetulangnya, sebagai jadual, CSV atau PDF.
keywords: laporan, berat, tan, kg, cat, luas cat, luas permukaan, salutan, panjang potongan, senarai bahan, fasa, BOM, csv, pdf
from: 337d6d92
---

Dalam kumpulan {{ui:Output}}, buka {{ui:More}} dan pilih {{ui:Weight report by phase}}, atau buka tab {{ui:By phase}} di bawah paparan. Ia menunjukkan:

- **Ringkasan mengikut fasa**: bagi setiap fasa, bilangan bahagian, berat keluli, luas cat, bolt dan rod sauh, dan tetulang; kemudian jumlahnya.
- **Satu jadual bagi setiap fasa**: setiap tanda bahagian di dalamnya dengan jenisnya, profil, bahan, panjang potongan, bilangan, berat setiap satu, berat, dan luas cat; kemudian bolt dan rod sauhnya.

{{ui:Download CSV}} menyimpan jadual yang sama dalam satu fail CSV (`<name> weight report.csv`). {{ui:Download PDF}} membuat laporan pada saiz helaian daripada [Tetapan DetailCraft](topic:settings#drawings), dengan ringkasan dahulu, setiap fasa selepasnya, jadual panjang dibawa ke halaman seterusnya, dan setiap halaman dinomborkan.

## Cara angka dikira

- **Berat** ialah berat kasar, seperti dalam senarai bahan: berat profil setiap meter didarab dengan panjang potongan. Lubang dan potongan hujung tidak ditolak.
- **Luas cat** ialah bahagian luar keratan sepanjang panjang potongan: bagi bentuk-I, setiap muka sayap dan web; bagi plat, kedua-dua muka dan tepi; bagi tiub, bahagian luar sahaja. Hujung dan lubang tidak dikira.
- **Tetulang** ialah berat bar dalam asas fasa itu, daripada [jadual lenturan](topic:footings-and-rebar).
- Plat dan bolt sambungan dikira dalam fasa anggota utamanya. Lihat [Fasa](topic:phases).

Apabila [tanda mengikut fasa](topic:phases#marks-per-phase) dihidupkan, setiap fasa mempunyai tandanya sendiri (1-b1, 2-b1). Apabila ia dimatikan, satu tanda boleh muncul dalam lebih daripada satu fasa: setiap fasa menyenaraikan keping yang dimilikinya.
