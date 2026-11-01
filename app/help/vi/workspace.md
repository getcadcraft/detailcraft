---
title: Tham quan màn hình
summary: Mọi thanh, bảng và thẻ trong DetailCraft theo tên hiển thị trên màn hình, và mỗi cái dùng để làm gì.
keywords: màn hình, bố cục, thanh công cụ, bảng, thuộc tính, thanh trạng thái, báo cáo, giao diện, ui, thẻ
from: 454f74fd
---

DetailCraft lấp đầy cửa sổ trình duyệt bên dưới thanh ứng dụng. Từ trên xuống dưới: thanh công cụ, rồi ba cột (bảng {{ui:Mô hình}}, khung nhìn, bảng {{ui:Thuộc tính}}), rồi các thẻ báo cáo, rồi thanh trạng thái.

## Thanh ứng dụng

Thanh mỏng ở trên cùng thuộc về trang web CadCraft, không phải mô hình. Nó hiện tên ứng dụng và phiên bản, liên kết đến {{ui:Giới thiệu DetailCraft}}, {{ui:Trợ giúp}} (hoặc {{key:F1}}) cho phần trợ giúp này, {{ui:Lưu để dùng ngoại tuyến}}, nút chế độ màn hình và công tắc {{ui:Giấy}} / {{ui:Mô hình}}.

- {{ui:Lưu để dùng ngoại tuyến}} giữ DetailCraft, khung nhìn 3D và phần trợ giúp này trong trình duyệt của bạn để nó mở được khi không có kết nối. Nó ghi {{ui:Sẵn sàng ngoại tuyến}} khi đã lưu; khi đó nhấp vào nó để có {{ui:Lưu lại (lấy bản mới nhất)}} hoặc {{ui:Xóa bản ngoại tuyến}}. Xem [Làm việc ngoại tuyến](common:offline).
- {{ui:Giấy}} cho màn hình sáng và {{ui:Mô hình}} cho màn hình tối. Khung nhìn 3D đổi theo ngay; không có gì trong mô hình của bạn thay đổi.
- Nút chế độ màn hình và {{key:Ctrl+Shift+F}} chuyển vòng qua bình thường, toàn màn hình, và toàn màn hình với các thanh bị ẩn. {{key:Ctrl+Shift+F}} dùng phím Control trên mọi máy tính, kể cả Mac. Khi các thanh bị ẩn, trỏ vào mép trên của màn hình (hoặc chạm vào đó) để đưa chúng trở lại. {{key:Esc}} thoát toàn màn hình.

## Thanh công cụ

Thanh công cụ có năm nhóm. Rê chuột lên một nút để xem nó làm gì và phím của nó.

| Nhóm | Các nút | Tác dụng |
|---|---|---|
| {{ui:Tệp}} | {{ui:Mới}}, {{ui:Mở}}, {{ui:Nhập IFC}}, {{ui:Lưu}}, {{ui:Mẫu}} | Bắt đầu một mô hình, mở một `.detailcraft.json` đã lưu hoặc một tệp IFC, lưu một mô hình, hoặc mở khung mẫu |
| {{ui:Đặt}} | {{ui:Chọn}}, {{ui:Dầm}}, {{ui:Cột}}, {{ui:Thanh giằng}}, {{ui:Bản}}, {{ui:Móng}}, {{ui:Cầu thang}} | Công cụ mà lần nhấp tiếp theo trong khung nhìn sẽ dùng |
| {{ui:Liên kết}} | {{ui:Bản đầu}}, {{ui:Bản chân cột}}, và trong {{ui:Thêm}}: {{ui:Bản cắt}}, {{ui:Mối nối}}, {{ui:Bản tăng cường}}, {{ui:Tương tự}} | Thêm một liên kết vào dầm, cột hoặc thanh giằng đang chọn, hoặc sao chép liên kết đang chọn cho mọi mối nối giống nó |
| {{ui:Chỉnh sửa}} | {{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Thêm}} | Lùi và tiến qua các chỉnh sửa; sao chép vùng chọn và dán nó. {{ui:Thêm}} mở một menu có {{ui:Cắt}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Dán tại chỗ}}, {{ui:Nhân bản}}, {{ui:Xóa}}, {{ui:Chọn tất cả}} và {{ui:Bỏ chọn}}, mỗi mục kèm phím của nó |
| {{ui:Đầu ra}} | {{ui:IFC}}, {{ui:Tệp NC}}, {{ui:BOM}}, {{ui:Bản vẽ thi công}}, {{ui:Bản vẽ}}, và trong {{ui:Thêm}}: {{ui:Uốn thép}}, {{ui:Báo cáo trọng lượng theo giai đoạn}}, {{ui:Tệp KISS cho phần mềm chế tạo}} | Tải một bản xuất xuống, hoặc mở các tờ bản vẽ |

Các nút và mục menu hiện chưa dùng được bị làm mờ, và rê chuột lên một cái sẽ cho biết lý do. {{ui:Bản đầu}} cần một dầm đang chọn, {{ui:Bản chân cột}} cần một cột đang chọn, {{ui:Tương tự}} cần một liên kết đang chọn, {{ui:Bản vẽ thi công}} cần một thép hình chữ I hoặc chi tiết bản đang chọn, {{ui:Sao chép}} cần một thanh hoặc móng đang chọn, và {{ui:Dán}} cần có thứ gì đó đã được sao chép. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

## Bảng Mô hình (bên trái)

- {{ui:Mô hình}}: {{ui:Tên}} của mô hình. Nó đặt tên cho mọi tệp bạn lưu hoặc xuất.
- {{ui:Lưới}}: các đường lưới trục và khoảng cách của chúng, và {{ui:Áp dụng lưới}}. Xem [Thiết lập lưới trục và các tầng](topic:grids-and-levels).
- {{ui:Tầng}}: mỗi tầng một hàng (tên và cao độ theo mm), {{ui:Thêm tầng}} và {{ui:Áp dụng tầng}}.
- {{ui:Tiết diện tùy chỉnh}}: tạo tiết diện tham số của riêng bạn. Đóng cho đến khi bạn mở.
- {{ui:Ký hiệu cấu kiện}}: mọi ký hiệu chi tiết trong mô hình cùng tiết diện, chiều dài và số lượng. Nhấp một ký hiệu để chọn chi tiết đầu tiên mang ký hiệu đó.

{{ui:Lưới}}, {{ui:Tầng}} và {{ui:Tiết diện tùy chỉnh}} thu gọn được: nhấp tiêu đề của chúng.

## Khung nhìn (ở giữa)

Khung nhìn hiển thị mô hình ở dạng 3D. Phía trên nó, thanh khung nhìn có ba nút và một danh sách:

- {{ui:3D}}: xoay quanh mô hình tự do.
- {{ui:Mặt bằng}}: nhìn thẳng xuống một tầng. Một danh sách tầng xuất hiện cạnh các nút. Mọi thứ cao hơn tầng quá 1,5 m bị cắt bỏ để bạn nhìn và nhấp tầng đó rõ ràng.
- {{ui:Mặt đứng}}: nhìn thẳng vào một đường lưới trục chữ cái (Grid A, Grid B …). Một danh sách lưới trục chữ cái xuất hiện. Chỉ phần thép trong phạm vi 1 m từ đường đó được hiển thị.
- Nút vừa khung ở đầu bên phải thanh khung nhìn thu phóng để thấy toàn bộ mô hình.

Các chấm nhỏ đánh dấu mọi giao điểm lưới trục ở mọi tầng. Khi một công cụ đặt đang bật, chấm gần con trỏ nhất sáng lên và thanh trạng thái gọi tên nó, ví dụ "A/2 at Level 1". Màu sắc phân biệt các loại thanh: cột, dầm, thanh giằng và bản mỗi loại một màu, bulông và thanh neo một màu khác, móng trong suốt và thép được vẽ dạng ống. Lỗ hiện như nút đen; các chỗ cắt góc được cắt thật.

Cách xoay, di chuyển khung nhìn và thu phóng: [Di chuyển trong khung nhìn 3D](topic:navigate-3d).

Khi mô hình trống, khung nhìn hiện một danh sách ngắn "Start a model". Bạn cũng có thể thả một tệp mô hình đã lưu vào bất kỳ đâu trên khung nhìn để mở nó.

## Bảng Thuộc tính (bên phải)

Nội dung bảng này tùy thuộc vào việc bạn đang làm, và tiêu đề của nó cho biết: "Model", "Place a beam", "Beam b2", "End plate connection", "Base plate", "Footing F1", "3 selected" hoặc "Paste".

- **Không chọn gì:** tóm tắt mô hình (thanh, liên kết, móng, chi tiết, ký hiệu, bulông, trọng lượng thép và thép thanh, lưới trục, tầng).
- **Một công cụ đặt đang bật:** các tùy chọn cho chi tiết tiếp theo (tiết diện, vật liệu, vị trí, góc xoay, và với cột là {{ui:Lên tới}}), tóm tắt tiết diện đã chọn, và một biểu mẫu {{ui:Thêm theo lưới}} để đặt mà không cần nhấp trong khung nhìn.
- **Một thanh được chọn:** tên, tiết diện, vật liệu, vị trí, góc xoay, tọa độ hai đầu, các ký hiệu, chiều dài cắt và trọng lượng, các lỗ và chỗ cắt góc, cùng các nút cho liên kết, bản vẽ thi công của nó và {{ui:Xóa}}.
- **Một liên kết được chọn:** mọi cài đặt bản, bulông và mối hàn, các bulông và mối hàn nó tạo ra, các cảnh báo của nó, và {{ui:Áp dụng cho mục tương tự}}.
- **Một móng được chọn:** vị trí và kích thước, lưới thép dưới, thép chờ và các ký hiệu thép nó dùng.
- **Nhiều thứ được chọn:** có bao nhiêu thanh mỗi loại, liên kết và móng, trọng lượng thép của chúng, và {{ui:Sao chép}}, {{ui:Nhân bản}} và {{ui:Xóa}}.
- **Đang dán:** những gì có trong bộ nhớ tạm, và các biểu mẫu để dán theo độ lệch đã nhập hoặc lên một giao điểm lưới trục bạn chọn từ danh sách.

Các ô số có hiệu lực khi bạn nhấn {{key:Enter}} hoặc rời ô. Mỗi thay đổi là một bước bạn có thể hoàn tác.

## Các thẻ báo cáo (ở dưới)

- {{ui:Vấn đề}}: mọi thứ DetailCraft không dựng được hoặc muốn bạn kiểm tra, với nút {{ui:Chọn}} trên mỗi dòng. Thẻ hiện số lượng trong ngoặc.
- {{ui:Bảng kê vật tư}}: chi tiết, cụm lắp ráp, và bulông cùng thanh neo, với trọng lượng và liên kết {{ui:Tải xuống CSV}}. Nhấp một ký hiệu chi tiết để chọn chi tiết đó.
- {{ui:Bảng uốn thép}}: mọi ký hiệu thép trong mọi móng, với liên kết {{ui:Tải xuống CSV}}.

Khi một thẻ đang được chọn, {{key:Left}} và {{key:Right}} di chuyển giữa các thẻ.

## Thanh trạng thái

Thanh dọc phía dưới có ba phần: giao điểm lưới trục dưới con trỏ khi đang đặt, thông báo mới nhất (điều vừa xảy ra, hoặc vì sao điều gì đó bị từ chối), và tổng cộng dồn về chi tiết, bulông, trọng lượng thép và trọng lượng thép thanh. Khi một thao tác dường như không làm gì, hãy đọc thông báo ở đây trước.

Tiêu đề thẻ trình duyệt bắt đầu bằng một dấu chấm (•) khi mô hình có thay đổi bạn chưa lưu.

## Trên màn hình hẹp

Dưới khoảng 760 pixel chiều rộng, các cột xếp chồng: thanh công cụ, khung nhìn, thanh trạng thái, {{ui:Thuộc tính}}, các thẻ báo cáo, rồi bảng {{ui:Mô hình}} ở cuối. Cuộn trang để tới chúng. DetailCraft được bố trí cho màn hình máy tính để bàn hoặc laptop; điện thoại dùng để xem được, không dùng để triển khai chi tiết.
