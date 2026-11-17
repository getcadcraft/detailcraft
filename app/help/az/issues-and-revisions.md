---
title: Buraxılışlar, revizyalar və çertyoj dəyişiklik jurnalı
summary: Memarın modeli ilə bir buraxılış tarixçəsi saxlayın: buraxılışları oxuyun, sahə təlimatlarını, istehsal çertyojlarını və əlaqəli modelləri bir buraxılışa görə qeyd edin və çertyoj dəyişiklik jurnalını oxuyun.
keywords: buraxılış, revizya, revizyalar, dəyişiklik jurnalı, çertyoj dəyişiklik jurnalı, çertyoj reyestri, tikinti təlimatı, istehsal çertyoju, əlaqəli model, tender, tikinti, buraxılış tarixçəsi, istehsal çertyojları, istehsal
from: 4b9a1b7b
---

## Nə edəcəksiniz

Komandanın qalan hissəsi ilə eyni buraxılış tarixçəsi üzərində işləyin. Hansı vərəqlərin hansı revizyada göndərildiyini görün və sahədə baş verənləri ona aid olduğu buraxılışla əlaqələndirin.

## Addımlar

1. **Buraxılışlar və revizyalar** bölməsini açın.
2. **Buraxılış tarixçəsini oxu** seçin və BimCraft və ya başqa tətbiqdən saxlanmış `.issues.json` faylını seçin. Onun buraxılışları və yazıları sizinkinə əlavə olunur. Heç nə əvəz edilmir.
3. Sahə təlimatı, istehsal çertyoju, qeyd dəsti, əlaqəli model və ya qeyd üçün **Yazı əlavə et** seçin. Ona aid olduğu buraxılışı və statusu seçin. Seçdiyiniz fayl adı, ölçüsü və SHA-256 ilə qeydə alınır; fayl öz yerində qalır.
4. **Çertyoj dəyişiklik jurnalı** hər vərəq üçün bir sətir və hər buraxılış üçün bir sütun göstərir. Mötərizədə olan revizya dəyişdirilmədən yenidən verilib.
5. **Dəyişiklik jurnalını (CSV) yüklə** buraxılışları, vərəq cədvəlini və yazıları saxlayır. **Buraxılış tarixçəsini saxla** digər tətbiqlərin oxuduğu fayl yazır.

## Yaxşı bilmək lazımdır

- Vərəqlər hələ də {{ui:Çertyojlar}} bölməsindən vərəq-vərəq buraxılır. Bu buraxılışlar burada görünür: eyni tarixdə, eyni qeydlə buraxılan vərəqlər bir buraxılışdır.
- Oxuduğunuz buraxılışlar və yazılar model faylında saxlanır. Hər dəyişiklik bir Geri qaytar addımıdır.
- Eyni faylı iki dəfə oxumaq heç nəyi iki dəfə əlavə etmir. İki nüsxədə eyni yazı olduqda daha yeni olan saxlanılır.
