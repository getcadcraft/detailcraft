---
title: Siųsti NC failus į dirbtuves
summary: Eksportuokite DSTV NC failus kiekvienai detalės žymei (I formos, kanalai, kampuotiniai, HSS, plokštės), suspauskite ZIP archyvu ir patikrinkite prieš jiems patenkant į staklę.
keywords: nc, nc1, dstv, cnc, staklės, sijų linija, gręžimo linija, plokščių pjovimas, eksportas, gamyba, zip
from: 598b6091
---

DetailCraft kiekvienai detalės žymei sukuria vieną DSTV NC failą (`.nc1`) I formos profiliams, kanalams, kampuotiniams, stačiakampiams ir apvaliems HSS bei plokštėms ir visus juos sujungia į archyvą. Sijų linijos ir plokščių mašinos skaito šiuos failus, kad pjautų, gręžtų ir kirptų.

## Eksportas

1. Pirmiausia išvalykite skirtuką {{ui:Problemos}}: jungtis, kurios sukurti nepavyko, skylių nepadaro.
2. Įrašykite modelį ({{key:Mod+S}}), kad NC failai atitiktų įrašytą modelį.
3. Grupėje {{ui:Išvestis}} pasirinkite {{ui:NC failai}}.
4. Naršyklė atsisiųs failą `<name> NC.zip`. Būsenos juostoje rašoma, kiek failų jame yra ir kurių žymių failų neįrašyta (kampuotinio arba apvalaus vamzdžio su išpjova).

Archyve kiekvienas failas pavadinamas pagal savo detalės žymę: `b1.nc1`, `c1.nc1`, `p1.nc1` … Archyvas nesuspaustas ir atsidaro bet kuriuo ZIP įrankiu.

Jei modelyje nėra detalių, apie tai pranešama būsenos juostoje.

## Ką įrašo kiekvienas failas

- **Antraštė (ST):** modelio pavadinimas kaip užsakymas, detalės žymė kaip brėžinys ir detalė, 1 etapas, plieno markė, kiekis, profilis ir jo matmenys, masė metrui bei dažomas paviršius metrui. Pjovimai statmeni.
- **Išoriniai kontūrai (AK):** sienelės kontūras su išpjovomis ir kiekvieno diržo kontūras, sutrumpintas ten, kur išpjova jį pašalina.
- **Skylės (BO):** kiekviena skylė su jos paviršiumi, padėtimi ir skersmeniu, įskaitant skyles, padarytas galinėmis ir pagrindo plokštėmis.

Išsamiai, lauk po lauko, su paviršių ir koordinačių taisyklėmis: [NC failo laukai](topic:nc1-fields).

## Ko neįrašoma

- Kampuotiniai ir apvalūs vamzdžiai su išpjova: NC failo nėra. Jų žymės išvardytos būsenos juostoje.
- Skylės apvaliuose vamzdžiuose (DetailCraft jų nekuria).
- Nuožulnos, vidiniai kontūrai, detalių žymėjimai (įbrėžimai) ir pjovimo kampai, kitokie nei statūs.
- Ilgosios skylės (DetailCraft turi tik apvalias skyles).

## Patikrinkite prieš apdirbimą

DetailCraft NC failus perskaito jo paties testų rinkinys, tačiau jie nebuvo paleisti jūsų dirbtuvių staklėse.

1. Atidarykite failus savo dirbtuvių NC peržiūros programa arba staklių programine įranga ir palyginkite juos su gamybiniais brėžiniais.
2. Prieš paleisdami partiją, patikrinkite po vieną kiekvienos rūšies detalę staklėje.
3. Patikrinkite, kaip jūsų programinė įranga skaito diržų y koordinates ir kanalų paviršius: DetailCraft matuoja diržo y nuo galinio krašto ir kanalus guldo ant nugaros, kaip rodo standartinis brėžinys (žr. [NC failo laukai](topic:nc1-fields#faces-and-coordinates)).
