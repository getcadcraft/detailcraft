---
title: Nastavitve DetailCraft
summary: Nove elemente začnite kot ameriške ali evropske profile, določite, kako daleč Podvoji premakne kopijo, izberite, ali kopije prinesejo svoje spoje, in prikažite ali skrijte vijake v pogledu 3D.
keywords: nastavitve, možnosti, velikost lista, velikost papirja, risbe, jeklo, aisc, en, evropski profili, ameriški profili, privzeti profil, kakovost, s355, a992, odmik podvajanja, odmik lepljenja, kopiraj spoje, vijaki, sidrne palice, skrij vijake, ponastavi
from: e46cea57
---

Odprite {{ui:Nastavitve}} z zobnikom v vrstici aplikacije ali z {{key:Mod+,}}. Prvi zavihek, {{ui:DetailCraft}}, vsebuje nastavitve, ki pripadajo tej aplikaciji; {{ui:Splošno}} vsebuje tiste, ki jih delijo vse aplikacije CadCraft (tema, orodna vrstica, podokna). Nastavitve DetailCraft obstajajo samo v aplikaciji: tu jih spremenite, takoj začnejo veljati, ta brskalnik pa si jih zapomni. Niso shranjene v datoteki modela.

## Novi elementi

Profili in kakovosti, s katerimi začnejo orodja za postavljanje:

| Orodje | Ameriški profili (AISC), A992 | Evropski profili (EN), S355 |
|---|---|---|
| {{ui:Nosilec}} | W16x26, A992 | IPE300, S355 |
| {{ui:Steber}} | W12x50, A992 | HEB200, S355 |
| {{ui:Diagonala}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plošča}} | A36 | S355 |

Ameriški profili so izhodišče. Evropska izbira za diagonale uporablja HEA160, ker katalog EN v DetailCraft še nima votlih profilov ([Katalog profilov](topic:profile-catalog)). Vseeno lahko med postavljanjem poljubnega naslednjega dela izberete kateri koli profil in kakovost v podoknu {{ui:Lastnosti}}, dokler je orodje za postavljanje vklopljeno. Elementi, ki so že v modelu, ohranijo svoj profil in kakovost.

## Podvajanje in lepljenje

- **Odmik (mm)**: x, y in z. {{ui:Podvoji}} ({{key:Mod+D}}) postavi kopijo toliko stran od izvirnika, obrazec {{ui:Prilepi z odmikom (mm, od izvirnika)}} pa se začne s tem. Začne se pri 6000, 0, 0: en 6 m razpon vzdolž oštevilčenih mrež. Nastavite ga na svoj razmik razponov ali na višino nivoja v z, da kopirate etažo navzgor.
- **Kopiraj čelne in podložne plošče skupaj z elementi** (na začetku vklopljeno): spoj pride s kopijo samo tedaj, ko je vsak element, ki ga povezuje, kopiran. Izklopite, da kopirate elemente in temelje brez njihovih spojev, na primer da na kopiji preizkusite drug spoj.

Glejte [Kopiranje, prilepljanje in podvajanje](topic:copy-paste).

## Pogled 3D

**Prikaži vijake in sidrne palice** (na začetku vklopljeno). Izklopite, da jih skrijete v pogledu in vidite izvrtine ter plošče zapletenega spoja. Skriti vijaki ne morejo biti kliknjeni; za izbor spoja kliknite ploščo. Kosovnica, risbe in vsi izvozi še vedno vključujejo vsak vijak in sidrno palico.

## Indikator v kotu

Kaj se prikaže v kotu pogleda 3D: **Kocka pogleda** (začetna nastavitev; zgoraj desno — kliknite ploskev, rob ali vogal, da pogledate od tam, povlecite jo za kroženje, povlecite njen obroč kompasa, da zavrtite model), **Ikona osi** (majhna oznaka X, Y, Z spodaj levo, ki se vrti s pogledom: X rdeča, Y zelena, Z modra) ali **Brez**. Velja samo za {{ui:3D}}; {{ui:Tloris}} in {{ui:Pogled}} ne prikažeta nobenega. Glejte [Kocka pogleda](topic:view-cube).

## Ponastavitev

{{ui:Ponastavi nastavitve DetailCraft}} na dnu pogovornega okna jih vrne na začetne vrednosti (ameriški profili, odmik 6000, 0, 0, kopiranje spojev, prikazani vijaki), skupaj s tistimi iz {{ui:Splošno}}.

## Risbe

**Velikost lista**: listi risb in delavniških risb so narejeni v ležečem formatu: A4, A3 (začetno), A2, A1, ANSI B, ANSI C ali ANSI D. Okni {{ui:Risbe}} in delavniških risb imata enak seznam. Glejte [Splošne risbe razporeditve in sestavov](topic:drawings).

## Armatura

- **Imena palic ASTM**: #3 do #11 ali mehka metrična #10 do #36 za iste palice.
- **Oblikovne kode izvlečka armature**: S, L, U DetailCraft; tipi ACI 315; ali oblikovne kode BS 8666. Glejte [Referenca armature](topic:rebar-reference).

## Izbiranje z vlečenjem

**Pravokotnik** (kot prej) ali **Lasso**: prosta črta, pri čemer {{key:Space}} med vlečenjem preklaplja med znotraj, dotikanjem in ograjo. Glejte [Izbor z oknom](topic:select-and-change#select-with-a-window).
