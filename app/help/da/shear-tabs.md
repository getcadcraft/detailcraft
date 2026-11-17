---
title: Forskydningsplader
summary: Bolt en bjælkes krop fast til en plade, der er svejst i værkstedet til en søjleflange eller -krop, også hvor bjælken møder søjlen i en vinkel i plan eller hælder.
keywords: forskydningsplade, enkeltplade, finneplade, simpel forbindelse, kropsforbindelse, skæv, skævt, hældende, vinklet bjælke, boltet, forbind
from: 18afc8ab
---

En forskydningsplade (enkeltplade, finneplade) er en plade, der svejses til søjlen i værkstedet; på byggepladsen bolter man bjælkens krop til den med en lodret række bolte. DetailCraft placerer pladen, skærer bjælken tilbage, fri af søjlen, borer hullerne i pladen og i bjælkekroppen, tilføjer bolte og svejsning og advarer om kantafstande og pasning.

## Hvor den virker

- En bjælke (I-profil eller kanal), hvis ende ligger på linjen af en **lodret** I-profilsøjle, og som møder dens **flange** eller dens **krop**.
- **Vinkelret, skævt i plan eller hældende**: pladen følger bjælkens krop, og bjælken skæres tilbage, så dens nærmeste hjørne holder afstanden til søjlen. En bjælke, der stiger eller falder med mere end 60°, afvises.

## Tilføj forskydningsplader

1. Vælg bjælken.
2. I gruppen {{ui:Forbind}} åbner du {{ui:Mere}} og vælger {{ui:Forskydningsplader}} (eller vælger {{ui:Tilføj forskydningsplader}} i panelet {{ui:Egenskaber}}).
3. Hver fri ende af bjælken, der møder en søjle, får en plade. Hver bjælkeende tager én forbindelse: en forskydningsplade eller en endeplade.

Vælg en plade (klik på den eller på en bolt) for at se og ændre dens indstillinger. {{ui:Anvend på ens}} kopierer den som forskydningsplade til hver lignende samling, der endnu ikke har en forbindelse.

## Indstillinger (mm)

| Indstilling | Starter ved | Betydning |
|---|---|---|
| Pladetykkelse | 10 | Pladens tykkelse |
| Pladebredde | 115 | Hvor langt pladen rækker ud fra søjlefladen, langs bjælken |
| Boltdiameter, Huldiameter, Boltkvalitet | 20, 22, A325 | Som for endeplader |
| Boltrækker, Rækkeafstand | 3, 75 | Boltene i den lodrette række |
| Kantafstand (øverste og nederste bolte) | 38 | Fra de øverste og nederste bolte til pladens ender; pladen er rækker × afstand + 2 × denne dybde |
| Boltgruppen hævet med | 0 | 0 centrerer boltene på bjælkens dybde |
| Afstand til søjlen | 13 | Fri afstand mellem søjlen og bjælkens nærmeste hjørne |
| Boltlinje fra søjlefladen | 65 | Langs bjælken, fra søjlefladen til boltene |
| Tillæg til boltlængde | 30 | Lægges til klemlængden (plade + bjælkekrop), rundet op til 5 mm |
| Kilesvejsning, størrelse | 6 | På begge sider af pladen til søjlen |

## Godt at vide

- Pladen er en del af søjlens samling (svejst i værkstedet); bjælkens samling har kun sine huller.
- En skæv eller hældende bjælke skæres længere tilbage end en vinkelret, så dens nærmeste hjørne holder afstanden. DetailCraft skærer bjælker vinkelret: fabrikanten skærer enden til. Pladens kant ved søjlen tegnes også vinkelret.
- DetailCraft kontrollerer ikke styrke. Advarsler bruger EN 1993-1-8 tabel 3.3's minimumsværdier for kantafstande og afstand og siger, når pladen er dybere end bjælkekroppen mellem dens rundinger, eller når boltene sidder for tæt på bjælkens skårne ende.
- [Kollisionskontrollen](topic:clash-check) lader en plade og de elementer, den forbinder, stå uden for kontrollen: de skal mødes.
