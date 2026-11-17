---
title: Paiguta plaadid ja lisa kohandatud profiile
summary: Paiguta eraldi plaadid paksuse ja laiuse järgi ning määratle oma I-, kanali-, nurgiku-, toru- või lamerauaprofiilid.
keywords: plaat, lame, kohandatud profiil, kasutajaprofiil, parameetriline, lõige, kuju, ristlõige, pl
from: c24c3b51
---

## Paiguta plaat

Plaat paigutatakse nagu tala: see kulgeb kahe ristumiskoha vahel, laius risti ja paksus üles.

1. Vali rühmas {{ui:Paiguta}} {{ui:Plate}} või vajuta {{key:P}}.
2. Paneelis {{ui:Omadused}} sea {{ui:Paksus (mm)}} ja {{ui:Laius (mm)}}. Vaikimisi on 20 x 200 materjalis A36.
3. Vajadusel sea {{ui:Materjal}} ja {{ui:Pööre (°)}}. Pööre 90 paneb plaadi servale.
4. Klõpsa kahel ristumiskohal või kasuta vormi {{ui:Lisa ruudustiku järgi}}.

Plaadi profiilinimi kirjutatakse `PL<paksus>x<laius>`, näiteks PL20x200. Selle pikkus on kahe punkti vaheline kaugus.

Paigutatud plaadi suuruse muutmiseks vali see ja muuda {{ui:Paksus (mm)}} või {{ui:Laius (mm)}}.

Plaadid, mis sa paigutad, on omaette detailid (märgis p, koost P). Otsplaadid ja aluseplaadid, mida loovad ühendused, on samuti plaadid, kuid neid muudad läbi nende ühenduse; vt [Otsplaadid](topic:end-plates).

## Lisa kohandatud profiil

Kui vajalikku lõiku pole kataloogis, tee see mõõtmete järgi. Kohandatud profiil kuulub mudelile ja salvestatakse koos sellega. Et seda kasutada igas uues mudelis, hoia seda rubriigis {{ui:Minu profiilid}}, mida kirjeldatakse allpool jaotises „Hoia profiil uutes mudelites“.

1. Vasakpoolses paneelis {{ui:Mudel}} ava {{ui:Kohandatud profiil}}.
2. Sisesta {{ui:Nimi}}, näiteks `W8x18-custom` või `RHS 120x80x5`. See ei tohi olla kataloogi nimi ega näida plaadi nimena.
3. Vali {{ui:Kuju}}: {{ui:I-profiil}}, {{ui:Kanal}}, {{ui:Võrdsete tiibadega nurk}}, {{ui:Ristkülikukujuline toru}}, {{ui:Ümmargune toru}} või {{ui:Lame riba}}.
4. Täida ilmuvad mõõtmed, kõik millimeetrites:

| Kuju | Mõõtmed |
|---|---|
| I-profiil | Sügavus d, tiiva laius bf, vööt tw, tiib tf, ümarduse raadius r (võib olla 0) |
| Kanal | Sügavus d, tiiva laius bf, vööt tw, tiib tf (ruudukujulised nurgad) |
| Võrdsete tiibadega nurk | Laius b (iga tiib), paksus t |
| Ristkülikukujuline toru | Kõrgus h, laius b, paksus t (välisnurga raadius 2t) |
| Ümmargune toru | Läbimõõt D, paksus t |
| Lame riba | Laius b, paksus t |

5. Jäta {{ui:Hoia Minu profiilides}} märgitud, et see oleks igas uues mudelis (vt allpool), või eemalda märge, et see jääks ainult sellesse mudelisse.
6. Vali {{ui:Lisa profiil}}.

Olekuriba ütleb „Profiil „…“ lisatud; see on kõigis profiilinimekirjades rubriigis Kohandatud.“ See ilmub vormi all olevasse nimekirja ja iga {{ui:Profiil}} nimekirja lõppu.

DetailCraft kontrollib, et kuju saaks olemas olla. Näed teateid nagu „Vööt ja tiivad ei mahu sügavusse ja laiusesse.“, „Ümarduse raadius on tiiva jaoks liiga suur.“ või „Sein on liiga paks.“ Paranda numbrid ja vali {{ui:Lisa profiil}} uuesti.

### Mida kohandatud profiilid saavad

- Mass meetri kohta arvutatakse pindalast × 7850 kg/m³ (kataloogi suurustel kasutatakse avaldatud kaalu).
- Kohandatud I-profiilid saavad augud, väljalõiked, otsplaadid, NC-failid ja tootmisjoonised nagu kataloogi I-profiilid.
- Kohandatud lamerauad käituvad nagu plaadid.
- Kohandatud kanalid ja torud saavad augud; nurgikud ja ümmargused torud veel ei saa.

Kohandatud profiili ei saa mudelist muuta ega eemaldada, kui see on lisatud (kui eksisid, kasuta kohe {{key:Mod+Z}}). Parandatud profiilile anna uus nimi.

## Hoia profiil uutes mudelites

{{ui:Minu profiilid}} vormi all on sinu enda kohandatud profiilide nimekiri. See hoitakse selles brauseris, selles arvutis, mitte mudelifailis ega sinu kontol.

- Profiil, mis lisati märgitud {{ui:Hoia Minu profiilides}}, läheb nimekirja. Iga uus mudel, sealhulgas see, mille DetailCraft avab sinu käivitamisel, algab kõigi nendega oma profiilinimekirjades.
- Profiilil, mis on juba mudelis, kuid pole nimekirjas, on kõrval nupp {{ui:Hoia alles}}.
- Mudelis, millel pole ühtegi sinu profiilidest (nt vanem fail), vali {{ui:Kasuta siin}}, et see lisada.
- {{ui:Eemalda}} võtab profiili nimekirjast. Mudelid, mis seda juba kasutavad, säilitavad oma koopia.
- Avatud mudel säilitab oma failis salvestatud profiilid. Faili avamine ei muuda sinu nimekirja kunagi.
- Nimi, mis on nimekirjas juba teistsuguste mõõtmetega, keeldutakse: anna uuele teine nimi.
- Brauseri saidiandmete kustutamine või teise brauseri või arvuti kasutamine alustab tühja nimekirjaga. Privaatne aken ei saa seda hoida; rakendus ütleb seda.
