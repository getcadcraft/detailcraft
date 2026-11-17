---
title: Raziščite vzorčni okvir
summary: Odprite vgrajeni dvopolni okvir in ga uporabite, da spoznate, kaj DetailCraft izdela, od oznak do datotek NC.
keywords: vzorec, primer, demo, okvir, spoznajte, ogled, preizkusite
from: 5c5944dd
---

Vzorčni okvir je majhen, popoln model: vsaka vrsta stvari, ki jo izdela DetailCraft, se pojavi vsaj enkrat. Je najhitrejši način za spoznavanje aplikacije in za preizkus izvoza, preden se nanj zanesete.

## Odprite ga

1. Izberite {{ui:Vzorec}} v skupini {{ui:Datoteka}}.
2. Če ima vaš trenutni model neshranjene spremembe, izberite {{ui:Najprej shrani}} ali {{ui:Zavrži spremembe}}.
3. Vrstica stanja pove: „Vzorčni okvir: 6 stebrov s podložnimi ploščami, 4 nosilci s čelnimi ploščami, diagonala, 7 temeljev z armaturo.“

Vzorec se odpre kot nov model z imenom „Vzorčni okvir“. Nič drugega ne spremeni in nima ničesar za razveljavitev.

## Kaj je v njem

- **Mreže** 1, 2, 3 na 6000 mm in A, B na 7000 mm. **Nivoji** Nivo 1 na 0 in Nivo 2 na 4000.
- **Šest stebrov** W12x50, od nivoja 1 do nivoja 2 na vsakem presečišču, vsak na 25 mm podložni plošči s štirimi sidrnimi palicami.
- **Štirje nosilci** W16x26 na nivoju 2 vzdolž črt mreže A in B, zgornji rob jekla na nivoju, z poravnano privijačenimi čelnimi ploščami na obeh koncih (skupaj osem).
- **Ena diagonala** HSS4x4x1/4, od A/1 na nivoju 1 do A/2 na nivoju 2.
- **Šest samostojnih temeljev** 2000 x 2000 x 600, po en pod vsakim stebrom, z mrežo s kljukami spodaj v obeh smereh.
- **Še en temelj** ob okviru, 2400 x 1800 x 600, s šestimi čakalnimi palicami s kljukami, ki stojijo pokonci za betonski pilir.

## Stvari za preizkus

1. Kliknite nosilec. Preberite njegove {{ui:Oznaka dela}}, {{ui:Sestav}}, {{ui:Dolžina reza}} in {{ui:Odrez nazaj}}: dolžina reza je krajša od razmika mreže 6000 mm, ker vsaka čelna plošča odreže nosilec za polovico globine stebra in debelino plošče.
2. Kliknite steber. Pod {{ui:Izvrtine}} so navedene izvrtine, ki so jih naredile čelne plošče v njegovih pasnicah („8 izvrtin iz spojev“; srednji stebri imajo 16, po en niz v vsaki pasnici).
3. Na seznamu {{ui:Oznake delov}} na levi vidite, da imajo vsi štirje nosilci eno oznako: so isti kos jekla. Tudi vogalni stebri imajo skupno oznako, čeprav so njihove izvrtine obrnjene v nasprotne smeri, ker je steber, obrnjen s konca na konec, isti kos. Srednji stebri z izvrtinami v obeh pasnicah dobijo drugo oznako.
4. Kliknite čelno ploščo (ali enega od njenih vijakov). Podokno {{ui:Lastnosti}} prikaže nastavitve plošče, vijakov in varov, vijake, ki jih naredi (z dolžino, izračunano iz prijema), ter morebitna opozorila o robni razdalji.
5. Odprite zavihek {{ui:Kosovnica}}. Prikazani so deli, sestavi (nosilec z obema čelnima ploščama je en sestav), vijaki in sidrne palice z utežmi. Videti morate šest oznak delov: c1 (dva srednja stebra) in c2 (štirje vogalni stebri), oba W12x50 pri 3975 mm; b1, štirje nosilci W16x26 pri 5650 mm; br1, diagonala; p1, osem čelnih plošč PL20x180; in p2, šest podložnih plošč PL25x400. Pritrdilni elementi so 64 vijakov 20 x 70 A325 in 24 sidrnih palic 20 x 575.
6. Odprite zavihek {{ui:Armaturni izvleček}}. Šest enakih temeljev deli oznake palic; temelj pilirja doda svojo.
7. Kliknite diagonalo in poglejte skupino {{ui:Izhod}}: {{ui:Delavniška risba}} je zasivljena, ker delavniške risbe zaenkrat pokrivajo samo I-profile in plošče.
8. Izberite {{ui:Datoteke NC}}. Arhiv zip vsebuje datoteko za vsak I-profil in ploščo z oznako; vrstica stanja navede oznako diagonale kot nezapisano.
9. Izberite {{ui:IFC}} in datoteko odprite v kateremkoli pregledovalniku IFC, da preverite, kako jo bere vaša druga programska oprema.

## Uporabite ga kot izhodišče

Vzorec je običajen model. Spremenite ga, nato ga preimenujte v polju {{ui:Ime}} in shranite pod novim imenom z {{key:Mod+S}}.
