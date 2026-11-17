---
title: Xuất IFC để phối hợp
summary: Ghi tệp IFC4 của toàn bộ mô hình — thép, bulông, móng và thép — để chia sẻ với kiến trúc sư, kỹ sư và phần mềm khác.
keywords: ifc, ifc4, ifc2x3, bim, xuất, export, nhập, import ifc, lỗ, bulông, bulông rời, lỗ mở, chi tiết liên kết, phối hợp, trao đổi mô hình, step, openbim, va chạm, trình xem
from: cfcb0cd6
---

Xuất IFC ghi toàn bộ mô hình thành một tệp IFC4 duy nhất mà phần mềm BIM và trình xem IFC có thể mở.

## Xuất

1. Chọn {{ui:IFC}} trong nhóm {{ui:Đầu ra}}.
2. Trình duyệt tải xuống `<name>.ifc`. Thanh trạng thái ghi những gì đã được đưa vào, ví dụ "Đã xuất IFC4: 25 chi tiết, 88 chi tiết liên kết, 7 móng, 132 thanh thép."

Nếu mô hình không có chi tiết, móng hay thanh thép nào, thanh trạng thái ghi "Chưa có gì để xuất."

## Có gì trong tệp

| Trong DetailCraft | Trong tệp IFC |
|---|---|
| Mỗi tầng | Một tầng công trình (IfcBuildingStorey), thuộc một dự án, khu đất và công trình |
| Lưới | Một IfcGrid với các trục và nhãn |
| Cột, dầm, thanh giằng | IfcColumn, IfcBeam, IfcMember (thanh giằng), mỗi loại là một khối đùn của hình tiết diện chuẩn với kích thước thực |
| Bản, bản đầu, bản chân cột | IfcPlate |
| Lỗ và cắt góc | Lỗ mở (IfcOpeningElement) khoét khỏi chi tiết |
| Một thanh và các bản hàn vào nó | Một cụm (IfcElementAssembly) gắn thẻ bằng ký hiệu cụm |
| Bulông và bulông neo | IfcMechanicalFastener với đường kính và chiều dài |
| Móng | IfcFooting (móng đế), với tên vật liệu bê tông làm vật liệu |
| Mỗi thanh thép | IfcReinforcingBar với ký hiệu thanh, đường kính, diện tích và chiều dài, quét theo đường tâm thực với cung tròn thực tại các chỗ uốn |

Ký hiệu của mỗi chi tiết là ký hiệu cấu kiện của nó. Mỗi phần tử cũng mang một bộ thuộc tính "DetailCraft" gồm ký hiệu, tiết diện và khối lượng. Mỗi phần tử nằm ở tầng cao nhất có cao độ bằng hoặc thấp hơn điểm thấp nhất của nó. Vật liệu được nhóm theo cấp.

## Mã ổn định cho các lần xuất lại

Mã IFC (GlobalId) của mỗi phần tử được tính từ tên mô hình và mã riêng của phần tử trong mô hình. Xuất cùng một mô hình hai lần thì mã trùng khớp, nhờ đó phần mềm so sánh phiên bản có thể biết cái gì đã thay đổi.

:::warning
Đổi tên mô hình sẽ đổi mọi mã. Giữ nguyên tên mô hình giữa các lần phát hành của một dự án.
:::

## Kiểm tra

Tệp IFC của DetailCraft được đọc lại bởi một bộ đọc IFC độc lập trong bộ kiểm thử. Các chương trình đọc IFC khác nhau, vì vậy hãy mở tệp trong phần mềm nhóm bạn đang dùng trước khi tin cậy vào nó. Ứng dụng BimCraft của CadCraft cũng mở được tệp IFC.

## Chưa có

- Nhập liên kết, móng và thép từ tệp IFC. {{ui:Nhập IFC}} đưa vào dầm, cột, thanh giằng, bản, lưới, tầng, lỗ, cắt góc và bulông, và liệt kê những gì đã bỏ qua.
- Dữ liệu phân tích hoặc dữ liệu phân tích kết cấu.
- Bất kỳ khung nhìn nào khác ngoài khung nhìn tham chiếu IFC4.

## Nhập

{{ui:Nhập IFC}} trong nhóm {{ui:Tệp}} (hoặc kéo thả tệp `.ifc` lên khung nhìn) tạo một mô hình mới từ tệp IFC2X3 hoặc IFC4:

- **Dầm, cột, thanh giằng và bản** có thân là một khối đùn tiết diện mà DetailCraft biết, được khớp với danh mục hoặc giữ như tiết diện tùy chỉnh; **lưới** và **tầng** lấy từ lưới và các tầng của tệp.
- **Lỗ:** mọi lỗ tròn (IfcOpeningElement khoét vào một chi tiết đã nhập) vuông góc với một mặt của chi tiết: bụng hoặc cánh của thép chữ I hay chữ C, thành của ống, bản, các cạnh của thép góc. Lỗ xuyên qua cả hai thành của ống chỉ được nhập một lần.
- **Cắt góc:** một lỗ mở hình chữ nhật chiếm toàn bộ chiều rộng của thép chữ I hoặc chữ C từ một đầu, cắt xuống từ trên hoặc lên từ dưới.
- **Bulông:** mọi IfcMechanicalFastener hoặc IfcFastener, với đường kính, chiều dài, cấp và loại (bulông hoặc bulông neo), dưới dạng **bulông rời**. Bulông rời hiển thị trong khung nhìn, bảng kê vật tư và xuất IFC, và giữ nguyên vị trí khi bạn di chuyển thanh. Bảng {{ui:Thuộc tính}}, khi không chọn gì, đếm chúng và có {{ui:Xóa bulông rời}} để dùng khi bạn thêm liên kết thay thế.

Báo cáo liệt kê mọi thứ còn lại theo lớp kèm lý do bị bỏ qua: tường và sàn, móng và thanh thép, lỗ dài, lỗ trong ống tròn, liên kết (tệp IFC chỉ mang bản và bulông của chúng, không mang quy tắc đã tạo ra chúng).
