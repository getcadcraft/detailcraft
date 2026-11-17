---
title: Sex çertyojlarını hazırlayın
summary: Hər detal nişanına bir vərəq, hamısı bir dəfəyə: istənilən birinə baxın və bir vərəqi və ya bütün dəsti A4-dən A1-ə və ya ANSI B-dən D-yə qədər PDF kimi yükləyin, deşiklər, kəsiklər, ölçülər və başlıq bloku ilə.
keywords: sex çertyoju, sex çertyojları, bütün detallar, toplu, bütün dəst, tək detal çertyoju, istehsal çertyoju, pdf, təfərrüat çertyoju, detal çertyoju, çap
from: d25fe035
---

DetailCraft modeldəki hər tir, sütun, diaqonal və lövhə üçün hər detal nişanına bir vərəq hazırlayır, hamısı bir dəfəyə: onları birbir seçmək lazım deyil. Eyni detallar eyni nişanı paylaşır, ona görə də bir vərəqi paylaşırlar. Vərəqlər modeldən yerində hazırlanır; saxlanılmır və redaktə edilmir.

## Bütün dəsti hazırlayın

1. {{ui:Çıxış}} qrupunda {{ui:Sex çertyoju}} seçin. Heç nə seçilməli deyil. Detal seçilibsə, pəncərə həmin detalın vərəqində açılır. {{ui:Xüsusiyyətlər}} panelində eyni düymə elementlər üçün {{ui:Sex çertyoju}}, birləşmələr üçün isə {{ui:Lövhə çertyoju}} adlanır.
2. Önbaxış açılır, başlığında detal nişanı ilə, məsələn "Sex çertyoju b1". Başlığın yanındakı birinci siyahıda hər detal nişanı profili, uzunluğu və miqdarı ilə var: birini seçib onun vərəqinə baxın. İkinci siyahı vərəq ölçüsünü dəyişir; bütün dəst onda yenidən hazırlanır (bax: [Ümumi plan və yığım çertyojları](topic:drawings#choose-the-sheet-size)).
3. Bir PDF üçün {{ui:Hamısını yüklə}} seçin (düymədə vərəq sayı göstərilir); hər detal nişanına bir səhifə, `<name> Shop drawings.pdf`. Hər vərəqin başlıq blokunda "Vərəq 3 / 42" kimi yazılır. Və ya baxdığınız vərəq üçün {{ui:PDF yüklə}} seçin: `<name> <mark>.pdf`.
4. Önbaxışı × ilə və ya {{key:Esc}} ilə bağlayın.

{{ui:Sex çertyoju}} boz görünürsə, modeldə hələ detal yoxdur.

## Vərəqdə nə var

I-kəsik üçün:

- **Fasad**, divara baxış: kəsikləri çentikli detal, divar deşikləri dairə kimi, flanş deşikləri isə gizli (kəsikli) xətlər kimi.
- **Üst flanş planı**, yuxarıdan, hər hansı flanşın deşiyi olanda. Alt flanşın deşikləri kəsikli göstərilir.
- **Kəsik** profil boyunca.
- **Ölçülər:** detal boyunca zəncirləşmiş deşik yerləri və ümumi uzunluq, divar deşiklərinin hündürlükləri, aralıq (gauge) və kəsik ölçüləri.
- **Deşik siyahısı:** hər deşik qrupu, məsələn "üst flanşda 8 x Ø22".
- **Qaynaq**, detala qaynaqlanmış lövhələr olanda.
- **Başlıq bloku:** detal nişanı, yığım nişanı, profil, material, uzunluq, miqdar, hər birinin və ümumi çəki, model adı və tarix.

Kanal, bucaq və ya içi boş kəsik üçün vərəq eynidir: divara və ya yana baxış. Borunun divarları gizli (kəsikli) xətlərdir, kəsik divar qalınlığını verir.

Lövhə üçün: deşikləri olan lövhə üzü, kənarı isə kəsik kimi.

## Miqyaslar

Miqyas siyahıdan seçilir (1:1-dən 1:200-ə qədər), ki, detal vərəqə sığsın. Uzun, alçaq detal bir miqyasda oxunmaq üçün çox nazik olardı, ona görə kağızda dərinlik 30 mm-dən az çıxanda dərinlik uzunluqdan böyük miqyasda çəkilir. Görünüş başlığı bunu deyir, məsələn "uzunluq 1:20, dərinlik 1:5 (vahid miqyasda deyil; ölçülər hakimdir)". Ölçüləri həmişə ölçülərdən oxuyun, vərəqi ölçməklə yox.

## Qeydlər

- Miqdar modeldə həmin nişanlı detalların sayıdır. Dəyişiklikdən sonra nişanlar yenidən nömrələnə bilər; bax: [Nişanları və materialların siyahısını yoxlayın](topic:marks-and-bom).
- Hər vərəq təkbaşına bir detaldır, qaynaq işarələri olmadan. Qaynaq işarəli yığım çertyojları və ümumi plan çertyojları [Çertyojlar](topic:drawings) bölməsindədir. Vərəq DetailCraft-da redaktə və ya şərh oluna bilməz. Qeyd etmək üçün PDF-i MarkupCraft kimi PDF qeyd proqramında açın.
- Başlıq bloku yazır: "DetailCraft laboratoriya quruluşu — millimetrlər".
- Mətn standart PDF Helvetica şriftindən istifadə edir. Qərb Avropa dəstindən kənar simvollar "?" kimi çap olunur və status paneli onları sayır.

## Çap edin

Yüklənmiş PDF-i PDF oxuyucunuzda açın və seçdiyiniz kağız ölçüsündə 100% ilə çap edin (səhifəyə sığdırma olmadan), əgər bildirilən miqyasların doğru olmasını istəyirsinizsə. Kiçik vərəqdə miqyası dəyişin və ölçülərə etibar edin.
