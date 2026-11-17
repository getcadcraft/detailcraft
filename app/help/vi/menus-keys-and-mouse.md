---
title: Menu, phím và chuột
summary: Chọn kiểu menu phù hợp với cách bạn đã làm việc, gán phím riêng cho bất kỳ lệnh nào, chuyển lệnh giữa các thẻ dải lệnh, và đặt chức năng cho con lăn chuột và các nút chuột.
keywords: kiểu menu, menu, dải lệnh, thanh công cụ, dòng lệnh, phím tắt, phím nóng, phím, tùy chỉnh, gán lại, chuột, con lăn, đảo ngược, hướng thu phóng, nút giữa, nút phải, di chuyển khung nhìn, xoay quanh, xuất, nhập, chuyển đổi, quen thuộc, kiểu bản vẽ 2D cổ điển, dải lệnh thép
from: 4132c6e5
---

Các lệnh của DetailCraft giống nhau dù bạn truy cập bằng cách nào. **Kiểu menu** chỉ quyết định vị trí của chúng trên màn hình, tên hiển thị và phím nào chạy chúng. Chọn một kiểu trong {{ui:Settings}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}}; thay đổi có hiệu lực ngay, và trình duyệt này ghi nhớ nó.

## Ba kiểu

| Kiểu | Bạn nhận được gì |
|---|---|
| {{ui:DetailCraft}} | Thanh công cụ riêng của DetailCraft (Tệp, Đặt, Liên kết, Chỉnh sửa, Đầu ra) và các phím một chữ cái: {{key:V}} chọn, {{key:B}} dầm, {{key:C}} cột, {{key:R}} thanh giằng, {{key:P}} bản, {{key:F}} móng, {{key:S}} cầu thang. Đây là kiểu mặc định. |
| {{ui:Drafting classic}} | Dành cho người gõ lệnh: một dải lệnh nhỏ ({{ui:Home}}, {{ui:View}}, {{ui:Output}}) và một dòng lệnh. Gõ BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (hoàn tác), ZOOM, PLAN, 3D, DRAWINGS, NC hoặc HELP rồi nhấn {{key:Enter}}; {{key:Enter}} khi không có gì sẽ lặp lại lệnh trước, {{key:Esc}} xóa nó. Gõ bất kỳ đâu và các chữ cái sẽ vào dòng lệnh. Nút giữa di chuyển khung nhìn; trong 3D, {{key:Shift}} và nút giữa xoay quanh. |
| {{ui:Steel ribbon}} | Các thẻ theo cách các chương trình chi tiết hóa thép sắp xếp: {{ui:Modeling}} (cấu kiện, bê tông, cầu thang), {{ui:Detailing}} (liên kết), {{ui:Edit}}, {{ui:Drawings}} (bản vẽ và báo cáo), {{ui:Fabrication}} (tệp NC, IFC) và {{ui:View}}, với menu {{ui:File}} và các nút nhanh ở bên phải. Các phím một chữ cái vẫn giữ nguyên. Nút giữa di chuyển khung nhìn; trong 3D nút trái xoay quanh. |

Mọi kiểu đều giữ {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} và {{key:Mod+A}}. Các dải lệnh cũng chứa {{ui:3D}}, {{ui:Plan}}, {{ui:Elevation}} và {{ui:Fit}} của thanh khung nhìn.

:::tip
Phím thuộc bố cục riêng của DetailCraft nhưng kiểu của bạn gán cho lệnh khác sẽ không làm gì, và dòng trạng thái cho biết lệnh đó đã chuyển đi đâu ("Trong Dải lệnh thép của tôi, Cột là Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} và các mũi tên luôn giữ nguyên ý nghĩa, và khi một cấu kiện đang đặt dở hoặc một bản sao đang đi theo con trỏ, các chữ cái thuộc về DetailCraft.
:::

## Tự tùy chỉnh

1. Chọn kiểu gần nhất với điều bạn muốn, rồi nhấp {{ui:Customize…}}.
2. Trên {{ui:Keys and menus}}, tìm một lệnh (ô tìm kiếm giúp ích). Nhấp {{ui:Add a key}} rồi nhấn phím, hoặc hai phím liên tiếp cho phím hai chữ cái. Nhấp vào một phím để gỡ nó.
3. Với dải lệnh, {{ui:Where it sits}} chuyển lệnh sang một thẻ và bảng khác, sang menu {{ui:File}}, hoặc sang {{ui:Keys only}}.
4. Trên {{ui:Mouse}}, đặt con lăn, các nút di chuyển mặt bằng và mặt đứng, và chức năng của từng nút trong khung nhìn 3D.
5. Đặt tên cho nó và nhấp {{ui:Save}}.

Lưu một kiểu có sẵn sẽ tạo bản sao riêng của bạn ("Dải lệnh thép của tôi"); kiểu có sẵn không bao giờ thay đổi. Một phím được gán cho hai lệnh sẽ hiện màu đỏ và phải sửa trước khi bạn lưu.

## Chuột

- **Con lăn chuột**: {{ui:Scroll up zooms in}} (mặc định) hoặc {{ui:Scroll up zooms out}}, và tốc độ. Thao tác chụm trên bàn di chuột luôn thu phóng theo hướng ngón tay di chuyển.
- **Di chuyển mặt bằng và mặt đứng bằng**: nút giữa, nút phải, hoặc cả hai. Với công cụ Chọn, nút trái luôn vẽ khung chọn.
- **Kéo trong khung nhìn 3D**: {{ui:Each view's own}} giữ các nút của DetailCraft (trái xoay, giữa thu phóng, phải di chuyển). Hoặc đặt mỗi nút để xoay, di chuyển, thu phóng hoặc không làm gì; {{key:Shift}} cùng một nút xoay hoặc di chuyển sẽ đổi chúng cho nhau.

## Mang theo

{{ui:Export}} lưu kiểu đang dùng thành một tệp `.ccinput.json` nhỏ; {{ui:Import…}} thêm một tệp như vậy, từ máy tính khác hoặc từ đồng nghiệp. Tệp được nhập chỉ có thể trỏ đến lệnh của DetailCraft: mọi thứ khác trong đó bị bỏ qua và được đếm trong dòng trạng thái. {{ui:Delete this style}} xóa một kiểu do bạn tạo.

:::note
Các thiết lập này được giữ trong trình duyệt này. {{ui:Use this style in every app}} dưới các thẻ kiểu làm cho mọi ứng dụng mở theo kiểu tương ứng của nó (thanh công cụ riêng, một dải lệnh hoặc Kiểu bản vẽ 2D cổ điển), kèm các thay đổi bạn đã làm trong mỗi ứng dụng. DetailCraft không có kiểu thanh menu: khi thanh menu của ứng dụng khác được chọn cho mọi ứng dụng, DetailCraft giữ thanh công cụ riêng của nó.
:::

Liên quan: [Bàn phím và chuột](topic:keyboard) · [Cài đặt DetailCraft](topic:settings) · [Chuyển từ phần mềm chi tiết hóa khác](topic:coming-from)
