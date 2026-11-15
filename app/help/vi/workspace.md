---
title: Tổng quan màn hình
summary: Mọi thanh, bảng và thẻ trong DetailCraft theo tên hiển thị trên màn hình, và công dụng của từng cái.
keywords: màn hình, bố cục, thanh công cụ, bảng, thuộc tính, thanh trạng thái, báo cáo, giao diện, ui, thẻ
from: 94f81073
---

DetailCraft chiếm toàn bộ cửa sổ trình duyệt bên dưới thanh ứng dụng. Từ trên xuống dưới: thanh công cụ, rồi ba cột (bảng {{ui:Mô hình}}, khung nhìn, bảng {{ui:Thuộc tính}}), rồi các thẻ báo cáo, rồi thanh trạng thái.

## Thanh ứng dụng

Thanh mỏng ở trên cùng thuộc về trang CadCraft, không thuộc về mô hình. Nó hiện tên và phiên bản ứng dụng, một liên kết đến {{ui:Giới thiệu DetailCraft}}, {{ui:Trợ giúp}} (hoặc {{key:F1}}) cho trợ giúp này, {{ui:Lưu để dùng ngoại tuyến}}, nút chế độ màn hình, và công tắc {{ui:Giấy}} / {{ui:Mô hình}}.

- {{ui:Lưu để dùng ngoại tuyến}} giữ DetailCraft, khung nhìn 3D và trợ giúp này trong trình duyệt để chúng mở được khi không có kết nối. Nút hiện {{ui:Sẵn sàng ngoại tuyến}} khi đã lưu; khi đó nhấn vào nó để chọn {{ui:Lưu lại (lấy bản mới nhất)}} hoặc {{ui:Xóa bản ngoại tuyến}}. Xem [Làm việc ngoại tuyến](common:offline).
- {{ui:Giấy}} cho màn hình sáng và {{ui:Mô hình}} cho màn hình tối. Khung nhìn 3D đổi theo ngay; không có gì trong mô hình của bạn thay đổi.
- Nút chế độ màn hình và {{key:Ctrl+Shift+F}} chuyển luân phiên giữa: bình thường, toàn màn hình, và toàn màn hình với các thanh bị ẩn. {{key:Ctrl+Shift+F}} dùng phím Control trên mọi máy tính, kể cả Mac. Khi các thanh bị ẩn, đưa con trỏ lên mép trên của màn hình (hoặc chạm vào đó) để hiện lại. {{key:Esc}} thoát toàn màn hình.

## Thanh công cụ

Thanh công cụ có năm nhóm. Rê chuột lên một nút để xem nó làm gì và phím tắt của nó.

| Nhóm | Nút | Chúng làm gì |
|---|---|---|
| {{ui:Tệp}} | {{ui:Mới}}, {{ui:Mở}}, {{ui:Nhập IFC}}, {{ui:Lưu}}, {{ui:Mẫu}} | Bắt đầu một mô hình, mở một tệp `.detailcraft.json` hoặc tệp IFC đã lưu, lưu một mô hình, hoặc mở khung mẫu |
| {{ui:Đặt}} | {{ui:Chọn}}, {{ui:Dầm}}, {{ui:Cột}}, {{ui:Thanh giằng}}, {{ui:Bản}}, {{ui:Móng}}, {{ui:Cầu thang}} | Công cụ mà lần nhấn tiếp theo trong khung nhìn sẽ dùng |
| {{ui:Liên kết}} | {{ui:Bản đầu}}, {{ui:Bản chân cột}}, và trong {{ui:Thêm}}: {{ui:Bản cắt}}, {{ui:Mối nối}}, {{ui:Bản tăng cường}}, {{ui:Tương tự}} | Thêm một liên kết vào dầm, cột hoặc thanh giằng đang chọn, hoặc sao chép liên kết đang chọn sang mọi mối nối giống nó |
| {{ui:Chỉnh sửa}} | {{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Thêm}} | Lùi và tiến qua các chỉnh sửa; sao chép vùng chọn và dán nó. {{ui:Thêm}} mở một menu có {{ui:Cắt}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Dán tại chỗ}}, {{ui:Nhân bản}}, {{ui:Xóa}}, {{ui:Chọn tất cả}} và {{ui:Bỏ chọn}}, mỗi mục kèm phím tắt |
| {{ui:Đầu ra}} | {{ui:IFC}}, {{ui:Tệp NC}}, {{ui:BOM}}, {{ui:Bản vẽ thi công}}, {{ui:Bản vẽ}}, và trong {{ui:Thêm}}: {{ui:Uốn thép}}, {{ui:Báo cáo trọng lượng theo giai đoạn}}, {{ui:Tệp KISS cho phần mềm chế tạo}} | Tải xuống một bản xuất, hoặc mở các tờ bản vẽ |

Các nút và mục menu hiện chưa thể thực hiện sẽ bị xám đi, và rê chuột lên chúng sẽ nói lý do. {{ui:Bản đầu}} cần một dầm được chọn, {{ui:Bản chân cột}} cần một cột được chọn, {{ui:Tương tự}} cần một liên kết được chọn, {{ui:Bản vẽ thi công}} cần một mô hình có chi tiết, {{ui:Sao chép}} cần một thanh hoặc một móng được chọn, và {{ui:Dán}} cần có thứ gì đó đã được sao chép. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

## Bảng Mô hình (bên trái)

- {{ui:Mô hình}}: {{ui:Tên}} của mô hình. Tên này đặt cho mọi tệp bạn lưu hoặc xuất.
- {{ui:Lưới}}: các đường lưới và khoảng cách của chúng, và {{ui:Áp dụng lưới}}. Xem [Thiết lập lưới và tầng](topic:grids-and-levels).
- {{ui:Tầng}}: mỗi tầng một hàng (tên và cao độ tính bằng mm), {{ui:Thêm tầng}} và {{ui:Áp dụng tầng}}.
- {{ui:Tiết diện tùy chỉnh}}: tạo tiết diện tham số riêng. Mục này đóng cho đến khi bạn mở nó.
- {{ui:Ký hiệu cấu kiện}}: mọi ký hiệu chi tiết trong mô hình, với tiết diện, chiều dài và số lượng. Nhấn một ký hiệu để chọn chi tiết đầu tiên mang ký hiệu đó.

{{ui:Lưới}}, {{ui:Tầng}} và {{ui:Tiết diện tùy chỉnh}} gấp lại được: nhấn vào tiêu đề của chúng.

## Khung nhìn (ở giữa)

Khung nhìn hiện mô hình ở dạng 3D. Phía trên nó, thanh khung nhìn có ba nút và một danh sách:

- {{ui:3D}}: xoay quanh mô hình một cách tự do.
- {{ui:Mặt bằng}}: nhìn thẳng xuống một tầng. Một danh sách tầng hiện bên cạnh các nút. Mọi thứ cao hơn tầng 1.5 m đều bị cắt đi, để bạn thấy và nhấn tầng một cách rõ ràng.
- {{ui:Mặt đứng}}: nhìn thẳng vào một đường lưới có chữ (Lưới A, Lưới B …). Một danh sách lưới có chữ sẽ hiện ra. Chỉ thép trong phạm vi 1 m của đường đó được hiển thị.
- Nút vừa khung ở cuối bên phải thanh khung nhìn sẽ thu phóng để hiện toàn bộ mô hình.

Các chấm nhỏ đánh dấu mọi giao điểm lưới ở mọi tầng. Khi một công cụ đặt đang bật, chấm gần con trỏ nhất sẽ sáng lên và thanh trạng thái gọi tên nó, ví dụ "A/2 ở Tầng 1". Màu sắc phân biệt các loại cấu kiện: cột, dầm, thanh giằng và bản mỗi loại có màu riêng, bulông và thanh neo có màu khác, móng trong suốt, còn thép thanh được vẽ dạng ống. Lỗ hiện dưới dạng nút tối; cắt góc thì được cắt thật.

Cách xoay, di chuyển và thu phóng: [Di chuyển trong khung nhìn 3D](topic:navigate-3d).

Khi mô hình trống, khung nhìn hiện một danh sách ngắn "Bắt đầu một mô hình". Bạn cũng có thể thả một tệp mô hình đã lưu vào bất kỳ đâu trên khung nhìn để mở nó.

## Bảng Thuộc tính (bên phải)

Nội dung bảng này thay đổi theo việc bạn đang làm, và tiêu đề của bảng cho biết điều đó: "Mô hình", "Đặt một dầm", "Dầm b2", "Liên kết bản đầu", "Bản chân cột", "Móng F1", "3 đã chọn" hoặc "Dán".

- **Chưa chọn gì:** tóm tắt mô hình (thanh, liên kết, móng, chi tiết, ký hiệu, bulông, trọng lượng thép và thép thanh, lưới, tầng).
- **Công cụ đặt đang bật:** các tùy chọn cho cấu kiện tiếp theo (tiết diện, vật liệu, vị trí, góc xoay, và với cột là {{ui:Lên tới}}), tóm tắt tiết diện đã chọn, và một biểu mẫu {{ui:Thêm theo lưới}} để đặt cấu kiện mà không cần nhấn trong khung nhìn.
- **Đã chọn một thanh:** tên, tiết diện, vật liệu, vị trí, góc xoay, tọa độ hai đầu, các ký hiệu, chiều dài cắt và trọng lượng, lỗ và cắt góc, và các nút cho liên kết, bản vẽ thi công và {{ui:Xóa}}.
- **Đã chọn một liên kết:** mọi thiết lập bản, bulông và mối hàn, các bulông và mối hàn mà nó tạo ra, cảnh báo của nó, và {{ui:Áp dụng cho mục tương tự}}.
- **Đã chọn một móng:** vị trí và kích thước, bản đáy, thép chờ, và các ký hiệu thanh mà nó dùng.
- **Đã chọn nhiều thứ:** số lượng từng loại thanh, liên kết và móng, trọng lượng thép, và các nút {{ui:Sao chép}}, {{ui:Nhân bản}} và {{ui:Xóa}}.
- **Đang dán:** những gì có trong bộ nhớ tạm, và các biểu mẫu dán theo độ lệch bạn nhập hoặc lên một giao điểm lưới bạn chọn từ danh sách.

Các ô số có hiệu lực khi bạn nhấn {{key:Enter}} hoặc rời khỏi ô. Mỗi thay đổi là một bước riêng mà bạn có thể hoàn tác.

## Các thẻ báo cáo (dưới cùng)

- {{ui:Vấn đề}}: mọi thứ DetailCraft không xây dựng được hoặc muốn bạn kiểm tra, mỗi dòng có một nút {{ui:Chọn}}. Thẻ hiện số đếm trong ngoặc.
- {{ui:Bảng kê vật tư}}: chi tiết, cụm lắp ráp, bulông và bulông neo, với trọng lượng và nút {{ui:Tải xuống CSV}}. Nhấn một ký hiệu chi tiết để chọn chi tiết đó.
- {{ui:Bảng uốn thép}}: mọi ký hiệu thanh trong mọi móng, với nút {{ui:Tải xuống CSV}}.

Khi một thẻ đang được chọn, {{key:Left}} và {{key:Right}} chuyển giữa các thẻ.

## Thanh trạng thái

Thanh chạy dọc phía dưới có ba phần: giao điểm lưới dưới con trỏ khi đang đặt, thông báo mới nhất (vừa xảy ra điều gì, hoặc vì sao một thao tác bị từ chối), và tổng số chi tiết, bulông, trọng lượng thép và trọng lượng thép thanh. Khi một thao tác có vẻ không làm gì, hãy đọc thông báo ở đây trước.

Tiêu đề thẻ trình duyệt bắt đầu bằng một dấu chấm (•) khi mô hình có thay đổi chưa lưu.

## Màn hình hẹp

Dưới khoảng 760 pixel chiều rộng, các cột xếp chồng lên nhau: thanh công cụ, khung nhìn, thanh trạng thái, {{ui:Thuộc tính}}, các thẻ báo cáo, rồi bảng {{ui:Mô hình}} ở cuối cùng. Cuộn trang để tới chúng. DetailCraft được bố trí cho màn hình máy tính để bàn hoặc máy tính xách tay; điện thoại chỉ phù hợp để xem, không phù hợp để chi tiết hóa.
