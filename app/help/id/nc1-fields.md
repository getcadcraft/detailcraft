---
title: Isian file NC
summary: Apa yang ditulis DetailCraft di setiap file NC DSTV, isian demi isian, dan bagaimana muka serta koordinat diukur.
keywords: nc1, dstv, file nc, blok st, ak, bo, header, muka, koordinat, cnc, format
from: 1b676fc1
---

Setiap file `.nc1` menggambarkan satu tanda part. Baris diakhiri dengan CR LF. Isian teks memuat ASCII polos; karakter lain menjadi "?". Baris kedua adalah komentar, `** DetailCraft <mark>.nc1`.

## Header (ST)

| Isian | Profil I, kanal | Siku | HSS persegi | HSS bundar | Pelat |
|---|---|---|---|---|---|
| Pesanan | Nama model | ← | ← | ← | ← |
| Gambar, piece | Tanda part | ← | ← | ← | ← |
| Fase | Fase part, atau 1 | ← | ← | ← | ← |
| Mutu baja | Mutu material | ← | ← | ← | ← |
| Kuantitas | Jumlah part dengan tanda ini | ← | ← | ← | ← |
| Profil | Nama profil, misalnya W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kode profil | I atau U (kanal) | L | M | RO | B |
| Panjang | Panjang potong | ← | ← | ← | Panjang |
| Tinggi | Tinggi d | Kaki | Tinggi | Diameter | Lebar pelat |
| Lebar flens | bf | Kaki | Lebar | Diameter | 0 |
| Tebal flens | tf | t | Dinding t | Dinding t | 0 |
| Tebal badan | tw | t | Dinding t | Dinding t | Tebal pelat |
| Radius | Radius fillet (0 untuk kanal AISC) | 0 | Radius sudut luar | 0 | 0 |
| Berat per meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Luas cat per meter | Keliling luar, m²/m | ← | ← | ← | 2 (kedua muka, m²/m²) |
| Sudut gergaji (4 isian) | 0 (persegi) | ← | ← | ← | ← |
| Isian teks (4) | `-` | ← | ← | ← | ← |

Pelat mengikuti kolom standar "untuk lembaran". Standar tidak memiliki kolom untuk pipa bundar: DetailCraft menulis diameter sebagai tinggi sekaligus lebar flens, dan dinding sebagai kedua tebal.

## Kontur luar (AK)

- **Profil I dan kanal:** badan (v), dengan takik persegi untuk setiap coak; setiap flens (o dan u), dipendekkan di satu ujung jika coak sedalam atau lebih dari flens.
- **HSS persegi:** kedua dinding samping (v dan h), bertakik untuk coak, serta dinding atas dan bawah (o dan u).
- **Siku:** satu persegi untuk setiap kaki (v dan u). Coak pada siku tidak ditulis: part seperti itu tercantum sebagai tidak ditulis. Bresing siku yang dibaut ke [pelat buhul](topic:brace-gussets) memiliki lubangnya di kaki yang dibaut: v untuk kaki sepanjang u part, u untuk kaki sepanjang v part.
- **HSS bundar:** satu persegi pada v, yaitu tabung dilihat dari depan (panjang × diameter).
- **Pelat:** satu persegi pada muka v.

Setiap kontur tertutup (titik pertama diulang di akhir) dan berjalan berlawanan arah jarum jam.

## Lubang (BO)

Satu baris untuk setiap lubang: muka, x, y, diameter, kedalaman 0 (tembus). Semua lubang disertakan, baik yang Anda ketik maupun yang dibuat oleh sambungan. Lubang yang menembus dinding samping HSS persegi ditulis dua kali, sekali pada v dan sekali pada h.

## Muka dan koordinat

Setiap profil ditempatkan seperti gambar posisi profil standar menggambarkannya (DSTV 1998, hlm. 7): x sepanjang part, Y melintang, Z ke atas dari muka belakang, dengan titik nol di sudut luar. DetailCraft tidak pernah mencerminkan part agar sesuai dengan gambar.

| Muka | Profil I | Kanal | Siku | HSS persegi | Pelat |
|---|---|---|---|---|---|
| v | Badan, depan | Badan, dilihat dari sisi ujung flens | Kaki sepanjang u part | Dinding samping di −u | Muka pelat |
| h | | | | Dinding samping di +u | |
| o | Flens atas | **Flens bawah** | | Dinding atas | |
| u | Flens bawah | **Flens atas** | Kaki sepanjang v part | Dinding bawah | |

- **x** berjalan sepanjang part dari awal potongan.
- **Profil I dan HSS persegi:** y pada badan atau dinding samping diukur dari sisi bawah profil; y pada flens atau pada dinding atas dan bawah diukur dari tepinya di sisi belakang (sisi +u part).
- **Kanal** terletak di atas punggungnya dengan ujung flens menghadap ke atas, seperti pada gambar standar. Jadi y pada badan berjalan dari luar flens atas ke bawah, flens atas adalah muka u dan flens bawah muka o, dan y pada flens berjalan dari punggung badan menuju ujung flens.
- **Siku:** y pada setiap kaki diukur dari tumit.
- **Pelat:** y diukur dari tepi −u pelat.

Periksa cara perangkat lunak mesin Anda membaca muka kanal sebelum memotong: beberapa program membalik kanal.

## Tidak ditulis

Miring tepi (bevel), kontur dalam, penandaan (SI), sudut gergaji selain persegi, lubang slot, lubang pada pipa bundar (DetailCraft tidak punya), serta coak pada siku dan pipa bundar.
