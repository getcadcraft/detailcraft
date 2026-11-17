---
title: Kontrollet e ndërtueshmërisë
summary: Probleme për gjërat që detajuesi i kap me sy: një bulon që çelësi nuk e arrin, bulona shumë afër për çelësin me kanaçe, saldime këndore jashtë kufijve të përmasës, saldime që pistoleta nuk i arrin, dhe tuba që mbajnë ujë.
keywords: ndërtueshmëri, çelës, kanaçe, qasja te bulonat, shtrëngim, përmasa e saldimit, saldim këndor, saldim minimal, saldim maksimal, ujë, vrimë ventilimi, vrimë kullimi, galvanizim, profil i zbrazët, probleme
from: 72315151
---

DetailCraft kërkon katër lloje probleme që asnjë kontroll forcash nuk i gjen, dhe i liston te paneli {{ui:Problemet}}. Janë paralajmërime dhe shënime për t'i parë, jo gabime: modeli ndërtohet akoma.

## Një bulon që çelësi nuk e arrin

Për çdo bulon, DetailCraft vë një kanaçe mbi kokë dhe mbi arrë. Kanaçja është një cilindër aq i gjerë sa arra në kulmet e saj plus një mur 4 mm, 60 mm i gjatë. Nëse një bërthamë trari, një flanxhë, një pllakë ose një diagonale është brenda atij cilindri, problemi emëron lidhjen, sa bulona, cila pjesë është në rrugë dhe sa larg bulonit është.

Kanaçja është një kanaçe tipike me goditje. Një çelës shtrëngimi kërkon më pak hapësirë, një mjet më i madh kërkon më shumë. Kërkoje asistentit tënd të lidhur të ekzekutojë `constructability_check` me një `socketLength` tjetër për të parë si ndryshon përgjigjja.

## Bulona shumë afër për kanaçen

Një kanaçe mbi një bulon nuk duhet të prekë kokën e të fqinjit. Bulonat e një lidhjeje që janë më afër se gjerësia e kanaçes plus koka e fqinjit listohen me distancën e gjetur dhe distancën e kërkuar.

## Përmasat e saldimeve këndore

AISC 360-16 Tabela J2.4 cakton saldimin më të vogël këndor sipas trashësisë së pjesës më të hollë (3 mm deri në 6.35 mm trashësi, 5 mm deri në 12.7, 6 mm deri në 19.05, 8 mm mbi këtë), dhe J2.2b më të madhin përgjatë një skaji materiali: jo më të madh se materiali kur është më i hollë se 6.35 mm, përndryshe 1.6 mm më pak. Lidhjet me të njëjtën përmasë në të njëjtën trashësi listohen si një problem.

Trashësia e përdorur është pjesa më e hollë e emërtuar nga saldimi, kështu një saldim 8 mm rreth gjithë një trari me bërthamë 6.35 mm listohet.

## Uji dhe ventilimi

- Një **skaj i hapur lart** i një profili të zbrazët që qëndron vertikalisht ose ka prirje më shumë se 10° lejon ujin të hyjë.
- Një profil i zbrazët **i mbyllur në të dy skajet** kërkon një vrimë ventilimi dhe një vrimë kullimi; galvanizimi me zhytje të nxehtë dhe presioni i ajrit të nxehur kërkojnë të dyja.

## A e arrin saldatori

Një saldim këndor bëhet me pistoletën gjysmë rruge midis dy fytyrave që bashkon. Për çdo saldim këndor rrethues (një pllakë skaji, një pllakë baze, një pllakë me prerje 45°), kontrolli merr konturin e prerjes së elementit te pllaka dhe, çdo 20 mm, nxjerr një rrugë pistolete me 45° nga ku bykja e saj (rreze 10 mm për të filluar) pastrohet së pari nga të dy fytyrat, për 30 mm të tjera. Nëse rruga takon flanxhën e vetë trarit ose një pjesë tjetër, ajo pjesë e saldimit listohet me pjesën dhe distancën. Këto numra janë tipikë, jo një standard: kërko procesin dhe bykën nga punëtori yt. Saldimet përgjatë dy skajeve (një shirit prerës) nuk lokalizohen dhe nuk kontrollohen.
