---
title: Kopyalanmış sahəni istinad şəkli kimi yapışdırın
summary: MarkupCraft-da PDF vərəqinin bir hissəsini kopyalayın və DetailCraft-a həqiqi ölçüdə, polad altında səviyyə üzərinə yapışdırın və üzərində modelləşdirin.
keywords: şəkil, istinad şəkli, altlıq, fon, sahəni kopyala, markupcraft, pdf, izləmə, həqiqi ölçü, miqyas, şəffaflıq, örtük
from: 0c48445f
---

MarkupCraft-ın Sahəni kopyala aləti vərəqin bir hissəsini ölçüsünü bilən şəkil kimi kopyalayır. Onu DetailCraft-a yapışdırdıqda o, şəbəkənin və polad elementlərin altında, səviyyə üzərində həqiqi ölçüdə düz yatır, beləliklə çertyojlardakı plan üzərində elementləri yerləşdirə bilərsiniz.

## Yapışdırın

1. MarkupCraft-da sahəni {{ui:Daha çox}} › {{ui:Səhifənin sahəsini kopyala…}} ilə kopyalayın, sonra {{ui:Kopyala}} (və ya kağızı şəffaf edən {{ui:Örtük kimi kopyala}}).
2. DetailCraft-da (eyni brauzerdə) {{key:Mod+V}} basın və ya {{ui:Yapışdır}} seçin.

Şəkil Plan-da göstərilən səviyyədə şəbəkənin ortasına düşür (3D-də və ya fasadda, ən aşağı səviyyədə) və seçilir. Status sətri onun ölçüsünü göstərir.

- **Həqiqi ölçü:** vərəqdə çertyojun miqyası olduqda, bir piksel çertyojda göstərdiyi uzunluqla çəkilir.
- **Kağız ölçüsü:** vərəqdə miqyas olmadıqda şəkil sahənin kağızdakı ölçüsü qədər olur və status sətri bunu bildirir. Miqyasını dəyişmək üçün {{ui:Xüsusiyyətlər}} bölməsində yeni **piksel başına mm** yazın.

Örtük kimi kopyalanmış sahə, kopyalandığı şəffaflıqda başlayır.

{{key:Mod+V}} sonuncu kopyaladığınızı yapışdırır: MarkupCraft-dan sahəni və ya DetailCraft-da kopyalanmış elementləri və bünövrələri. Sahədən sonra mübadilə buferinə başqa proqramdan fərqli şəkil kopyalanıbsa, heç nə yapışdırılmır; sahəni yenidən kopyalayın.

## Köçürün, dəyişin və silin

- Şəkli seçmək üçün üzərinə klikləyin (qarşısındakı hər şey əvvəl seçilir). Mavi kontur onun seçildiyini göstərir.
- Səviyyə boyunca köçürmək üçün onu sürüşdürün. Onun ortası və künclər şəbəkə kəsişmələrinə bağlanır.
- {{ui:Xüsusiyyətlər}} bölməsində ortasının hara getməsini (x, y) və hansı səviyyədə yerləşməsini (z), onun **piksel başına mm** və **şəffaflığını** yazın.
- {{key:Delete}} və ya {{ui:Sil}} onu silir.

Hər yapışdırma, köçürmə, dəyişiklik və silmə bir addımdır: {{key:Mod+Z}} onu geri qaytarır.

Şəkil model faylında saxlanılır, buna görə modellə birlikdə açılır. Yalnız istinaddır: çertyojlarda, ixraclarda, materialların siyahısında və ya surətdə yoxdur.
