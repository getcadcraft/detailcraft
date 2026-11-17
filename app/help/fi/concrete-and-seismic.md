---
title: Tarkista betonisauvat ja tee seismiset kuormat
summary: Aseta betonipalkkien ja -pilarien raudoitus, tarkista ne standardin ACI 318-19 mukaan, laadi vaakasuuntaiset voimat ASCE 7-22:n mukaan jäykillä lattioilla ja näe kerrosten siirtymä. Apuväline insinöörin tarkistukseen.
keywords: betoni, teräsbetoni, ACI 318, ACI 318-19, raudoitus, palkki, pilari, leikkaus, sidetangot, seismiset, maanjäristys, ekvivalentti vaakavoima, ELF, ASCE 7-22, siirtymä, kerroksen siirtymä, lattiat, jäykkä kiekko, kerroksen paino, käyttöaste, rakenne, insinööri
from: 94d3001d
---

Lohkot {{ui:Betonisauvat}} ja {{ui:Seismiset kuormat}} välilehdellä {{ui:Analyysi}} tarkistavat teräsbetonipalkit ja -pilarit sekä laativat kehyksen lattioihin kohdistuvat maanjäristyksen vaakavoimat. Molemmat seuraavat {{ui:Analyysi}}-välilehden ajoa ja tallentuvat mallin mukana.

:::warning
Tulokset ovat **insinöörin tarkistettavaksi**: apuväline, kunnes insinööri on sen tarkistanut. Betonitarkistukset käyttävät ensimmäisen kertaluvun voimia, paitsi että kehyksessä, jonka olet määrittänyt siirtymättömäksi, pilari mitoitetaan suurennetulle momentilleen, ilman siirtymän suurennusta, ilman vääntömitoitusta, ilman seismistä detaljointia (ACI-luku 18) ja ilman sidetankojen detaljointia. Seismisissä kuormissa ei ole redundanssikerrointa, pystysuuntaista seismistä vaikutusta, vääntövahvistusta eikä P-delta-vaikutuksia. Tuulikuormia ei ole vielä toteutettu.
:::

## Piirrä sauvat

Piirrä betonisauvat suorakaiteina: {{ui:Levy}}-profiili, kuten `PL400x400` pilarille ja `PL300x600` palkille, antaa poikkileikkauksen. Pilarit ja palkit sijoitetaan kuten muut sauvat.

## Määritä poikkileikkaukset

Lohko {{ui:Betonisauvat}} luettelee kaikki sauvojen käyttämät poikkileikkaukset. Paina {{ui:Aseta betoniksi…}} niissä, jotka ovat betonia. DetailCraft lukee piirretystä profiilista leveyden **b** (sauvan oman y-akselin suunnassa) ja syvyyden **h** (z-suunnassa), ja kysyy sitten:

- **betonipeitteen** tankojen keskilinjaan asti sekä palkille **ylä-**, **ala-** ja **sivutangot** (kuinka monta ja mikä halkaisija), tai pilarille **pilarikehikon** (tangot b- ja h-suunnassa, halkaisija, spiraalisidetangot);
- **sidetangot**: haarat, halkaisija ja väli;
- mihin sauva **toimii**: palkkina, pilarina tai päätettynä voimien perusteella (pystysauva tai sauva, joka kantaa yli 0.10 f′c Ag, on pilari).

Aseta f′c, tankojen myötölujuus fy ja sidetankojen myötölujuus fyt (leikkaukseen lasketaan enintään 420 MPa), K sekä se, onko kehys siirtyvä vai siirtymätön näiden yläpuolella. Betonina asetettu poikkileikkaus analysoidaan betonina: E = 4700 √f′c, 2400 kg/m³, ja oletuksena **halkeilleina poikkileikkauksina** (pilarit 0.70 Ig, palkit 0.35 Ig; ACI 318-19 taulukko 6.6.3.1.1(a)). Valitse {{ui:Bruttopoikkileikkaukset}} kytkeäksesi tämän pois.

## Tee yhdistelmät ja tarkista

Anna kuormitustapauksille niiden laji ja valitse sitten {{ui:Tee yhdistelmät}}: ACI 318-19 ottaa ASCE 7:n lujuusyhdistelmät (§5.3.1). Paina {{ui:Tarkista betoni}}, ja jokaiselle sauvalle tulee käyttöaste, joka värjätään mallissa kuten teräksen tarkistukset: taivutus ja vähimmäisteräs (22.2, 9.6.1.2), vetohallitun venymä (9.3.3.1), leikkaus sidetankojen kanssa (22.5, 9.6.3), sidetankojen väli sekä pilareille normaalivoima momentin kanssa (22.4, kaksisuuntaiseen taivutukseen Bresler-menetelmä). Sauva, jossa piirretty poikkileikkaus poikkeaa kirjoittamastasi b × h -koosta, on merkitty *osittain tarkistetuksi*, kuten myös hoikka pilari tai kynnysarvon ylittävä vääntö: niitä ei mitoiteta.

Kapasiteettinsa ylittävät sauvat luetellaan {{ui:Ongelmat}}-kohdassa; hyväksy yksi perusteluineen tai korjaa poikkileikkaus.

## Lattiat ja seismiset kuormat

Lattia on taso, jossa kehystä pitää kasassa jäykkä laatta (**jäykkä kiekko**). Paina {{ui:Seismiset kuormat}}-lohkossa {{ui:Etsi kerrokset}}: se ottaa tasot, joissa kaksi tai useampi palkki kohtaa. Anna sitten jokaiselle lattialle sen **seismisen painon** kirjoittamalla tai lukemalla: {{ui:Ota painot tapauksista}} laskee yhteen antamiesi tapausten pystykuormat kertoimella (pysyvä kuorma on 1; lisää 0.25 varastohyötykuormaan tai tasakatolla lumeen, kuten ASCE 7-22 12.7.2 vaatii). Solmun pystykuorma menee sen tasalla tai sen yläpuolella olevalle lattialle, joten kahden lattian välissä oleva pilari antaa puolet painostaan kummallekin.

Täytä suunnitteluarvot: SDS, SD1, S1, R, Ie, Cd, TL, rakennejärjestelmä (jaksoa varten) ja riskiluokka. {{ui:Tee seismiset tapaukset}} laskee sitten jakson rakennuksen korkeudesta (12.8.2.1), pohjaleikkausvoiman V = Cs W (12.8.1), jakaa sen lattioille (12.8.3) ja kirjoittaa neljä kuormitustapausta X- ja Y-suunnassa, kummassakin 5 % satunnainen vääntö (12.8.4.2). Kerrosvoimat ja kerrosten siirtymätarkistus (12.8.6, taulukko 12.12-1, siirtymä Cd δxe / Ie verrattuna arvoon 0.020 hsx) näkyvät ajon jälkeen; raja-arvon ylittävä siirtymä on myös ongelma. Paina {{ui:Tee yhdistelmät}} uudelleen, jotta seismiset tapaukset tulevat yhdistelmiin.

**Jakso analyysistä.** Likimääräinen jakso Ta saadaan rakennuksen korkeudesta. Kun olet ajanut analyysin seismisillä tapauksilla, {{ui:Ota jaksonaika analyysistä}} lukee, kuinka paljon kukin lattia siirtyi voimien alla, ja laskee jakson Rayleighin menetelmällä, T = 2π √(Σ w δ² / (g Σ f δ)), kerran X- ja kerran Y-suunnassa; seismiset tapaukset tehdään uudelleen sillä. Käytetty jakso ei koskaan ylitä arvoa Cu·Ta (ASCE 7-22 12.8.2), joten pehmeä malli ei voi laskea pohjaleikkausvoimaa sen alle. Ota jakso uudelleen toisen ajon jälkeen: se tasaantuu askel tai kaksi. Poista valinta {{ui:Jaksonaika analyysistä}} palataksesi Ta:han.

**Hoikat pilarit (ACI 318-19 6.6.4.5).** Siirtymättömässä kehyksessä pilari, jonka k·ℓu/r on yli 34 + 12·M1/M2 (enintään 40), mitoitetaan suurennetulle momentille Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², missä (EI)eff = 0.4 Ec Ig / (1 + βdns), ja vähimmäismomentti Pu (15 + 0.03 h). βdns (aluksi 0.6) on kerrotun normaalivoiman pysyvä osuus: kirjoita oma arvosi. Pilari, jonka Pu saavuttaa arvon 0.75 Pc, epäonnistuu omalla tarkistuksellaan. Raportti luettelee kunkin hoikan pilarin luvut. **Siirtyvässä** kehyksessä hoikka pilari on yhä "osittain tarkistettu": sen suurentaminen vaatii toisen kertaluvun analyysin, jota ei ole vielä toteutettu.

**Laatat.** Kun mallissa on levyjä, {{ui:Laatan raudoitus}}-lohko ottaa levymomentit jokaisesta lujuusyhdistelmästä ja Wood–Armer-säännöllä (taivutus ja vääntö yhdessä) laskee teräksen, jota kukin kerros tarvitsee metriä kohti: alla ja päällä, x- ja y-suunnassa. Annat paksuuden, betonipeitteen ja tangot; taulukko näyttää tarpeen verrattuna annettuun sekä yksisuuntaisen leikkauksen verrattuna arvoon φVc, ja kerros, joka jää alle, on ongelma oman kohtansa kanssa. Taipumaa, pilareiden läpileikkausta ja aukkojen reunatankoja ei käsitellä, ja tuen yli oleva momentti lähentyy hitaasti nelisolmuisilla levyillä.

Jokainen luettelemasi lattia muuttuu analyysissä jäykäksi kiekoksi: sen palkit eivät kanna normaalivoimaa lattian liikkeestä. CraftScript-vienti ei ole tehty malliin, jossa on lattioita.

## Raportti

{{ui:Raportti (PDF)}} ja {{ui:Raportti (CSV)}} saavat betonitaulukot (oletukset, käyttöaste sauvoittain, jokainen lauseke), seismiset parametrit ja pohjaleikkausvoiman, voimat lattioilla sekä siirtymätaulukon.
