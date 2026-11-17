---
title: Mapa hustoty výztuže
summary: Zjistěte, jak těsně výztuž nechává každý základ pro průchod betonu, s ohledem na kamenivo a vibrátor, které zadáte.
keywords: výztuž, hustota, rozteč, čistá vzdálenost, ukládání betonu, kamenivo, vibrátor, startéry, háky, základ, rohož
from: 40d029e6
---

Karta {{ui:Hustota výztuže}} kreslí tepelnou mapu každého základu při pohledu shora. Světle modrá značí volno; žlutá a oranžová se zužují; červená je těsnější, než pruty vyžadují. Tmavé buňky jsou samotné pruty.

## Co mapa měří

Beton prochází ocelí vrstvu po vrstvě a může se mezi vrstvami posouvat do stran. Mapa proto v každém bodě vezme nejužší volnou mezeru v kterékoli vrstvě: mezi pruty spodní rohože, mezi další vrstvou prutů a mezi háky startérů nahoře. Startéry procházejí všemi vrstvami.

## Co se považuje za těsné

Potřebná mezera je větší z 25 mm a průměru prutu (ACI 318-19 25.2.1), nebo u prutů podle BS 4449 větší z průměru prutu a 20 mm (EN 1992-1-1 8.2). Dvě pole ji zvyšují:

- {{ui:Největší kamenivo}}: potřeba se zvýší na 4/3 velikosti kameniva (ACI), nebo na kamenivo plus 5 mm (EN).
- {{ui:Hlavice vibrátoru}}: potřebná mezera je nejméně průměr hlavice.

Obě hodnoty začínají na 0, což znamená neznámé: DetailCraft nezná vaši směs ani vaše čerpadlo.

## Problémy

Základ, kde je některé místo těsnější, než je potřeba, se uvede na panelu {{ui:Problémy}} se zjištěným a požadovaným otvorem. {{ui:Vybrat}} vedle mapy vybere základ.

Mapa nevidí vázací dráty, spojky, kanály ani vlastní pruty sloupu.
