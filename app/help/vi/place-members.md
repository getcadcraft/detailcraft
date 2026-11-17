---
title: Đặt cột, dầm và thanh giằng
summary: Chọn tiết diện, vật liệu và vị trí, rồi nhấp vào giao điểm lưới hoặc gõ tọa độ để đặt thanh thép.
keywords: cột, dầm, thanh giằng, thanh, đặt, tiết diện, vật liệu, xoay, vị trí, độ lệch, chèn, thêm theo lưới
from: d6db0dc1
---

Thanh được đặt tại giao điểm lưới: cột tại một giao điểm, dầm hoặc thanh giằng giữa hai giao điểm. Thiết lập [lưới và tầng](topic:grids-and-levels) trước.

## Chọn công cụ và tùy chọn

1. Chọn {{ui:Cột}} ({{key:C}}), {{ui:Dầm}} ({{key:B}}) hoặc {{ui:Thanh giằng}} ({{key:R}}) trong nhóm {{ui:Đặt}}.
2. Bảng {{ui:Thuộc tính}} bên phải chuyển thành "Đặt một cột" (hoặc dầm, hoặc thanh giằng) và hiện các tùy chọn cho thanh tiếp theo:
   - {{ui:Tiết diện}}: chọn từ danh sách. Kích thước được nhóm theo danh mục (hình W, Máng, Thép góc, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, và các {{ui:Tiết diện tùy chỉnh}} của bạn). Xem [Danh mục tiết diện](topic:profile-catalog).
   - {{ui:Vật liệu}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 hoặc S355.
   - {{ui:Vị trí}}: tiết diện nằm ở đâu trên đường giữa hai điểm: {{ui:Đỉnh thép nằm trên đường}}, {{ui:Căn giữa trên đường}} hoặc {{ui:Đáy nằm trên đường}}.
   - {{ui:Xoay (°)}}: xoay tiết diện quanh trục của chính thanh.
   - {{ui:Lên tới}} (chỉ cho cột): {{ui:Tầng kế tiếp}}, hoặc tên một tầng.
3. Dưới các tùy chọn, hộp {{ui:Tiết diện}} liệt kê kích thước, diện tích, khối lượng trên mét và danh mục mà tiết diện thuộc về.

Mặc định là W12x50 A992 cho cột (căn giữa), W16x26 A992 cho dầm (đỉnh thép nằm trên đường) và HSS6x6x1/4 A500 Gr C cho thanh giằng (căn giữa). Các tùy chọn giữ nguyên cho đến khi bạn đổi chúng.

## Đặt bằng cách nhấp

### Một cột

1. Chọn {{ui:Mặt bằng}} và chọn tầng mà cột bắt đầu.
2. Chọn {{ui:Cột}}.
3. Di chuyển con trỏ gần một giao điểm. Chấm gần nhất sáng lên và thanh trạng thái gọi tên nó.
4. Nhấp. Cột chạy từ tầng đó đến tầng kế tiếp (hoặc đến tầng {{ui:Lên tới}}). Thanh trạng thái ghi, ví dụ, "Cột W12x50 tại A/1, Tầng 1 đến Tầng 2."
5. Tiếp tục nhấp để đặt thêm. Nhấn {{key:Esc}} khi xong.

Nếu không có tầng nào nằm trên tầng bạn đã nhấp, thanh trạng thái ghi "Không có tầng nào trên Tầng 2 để cột vươn tới. Thêm tầng trước."

### Một dầm

1. Chọn {{ui:Mặt bằng}} và chọn tầng của dầm.
2. Chọn {{ui:Dầm}}.
3. Nhấp giao điểm đầu tiên. Thanh trạng thái ghi "Từ A/1 tại Tầng 2. Giờ nhấp đầu kia (Esc để hủy)." Một đường nét đứt đi theo con trỏ.
4. Nhấp giao điểm thứ hai. Dầm xuất hiện.
5. Nhấp lại để bắt đầu dầm tiếp theo, hoặc nhấn {{key:Esc}}.

{{key:Esc}} sau lần nhấp đầu chỉ hủy điểm đó; {{key:Esc}} lần thứ hai cất công cụ đi.

### Một thanh giằng

Thanh giằng chạy giữa hai giao điểm ở các tầng khác nhau, nên dễ nhất trong {{ui:Mặt đứng}}.

1. Chọn {{ui:Mặt đứng}} và chọn đường lưới có chữ mà thanh giằng nằm trên.
2. Chọn {{ui:Thanh giằng}}.
3. Nhấp đầu dưới, rồi đến đầu trên.

Mặt đứng chỉ có cho các đường lưới có chữ. Với thanh giằng trong khung dọc theo đường có số (từ A đến B), dùng {{ui:3D}} hoặc biểu mẫu {{ui:Thêm theo lưới}} bên dưới.

:::touch
Trên màn hình cảm ứng, chạm gần giao điểm: một lần chạm chọn chấm gần nhất trong một khoảng ngắn và không làm gì nếu không có chấm nào gần. Không có hiệu ứng sáng trước khi bạn chạm, nên nên kiểm tra thông báo trên thanh trạng thái sau mỗi lần chạm. Kéo bằng một ngón sẽ xoay hoặc di chuyển khung nhìn thay vì đặt.
:::

## Đặt bằng lưới, không cần nhấp

Mỗi công cụ đặt đều có biểu mẫu {{ui:Thêm theo lưới}} ở dưới cùng bảng {{ui:Thuộc tính}}. Nó chỉ cần bàn phím và không cần khung nhìn 3D.

1. Chọn công cụ, ví dụ {{ui:Dầm}}.
2. Trong {{ui:Thêm theo lưới}}, chọn {{ui:Từ lưới (chữ)}}, {{ui:Từ lưới (số)}} và {{ui:Từ tầng}}.
3. Chọn {{ui:Đến lưới (chữ)}}, {{ui:Đến lưới (số)}} và {{ui:Đến tầng}}.
4. Chọn {{ui:Thêm}}.

Với cột hoặc móng, biểu mẫu chỉ có một điểm: {{ui:Lưới (chữ)}}, {{ui:Lưới (số)}} và {{ui:Tầng}}.

## Đổi thanh sau khi đặt

1. Nhấn {{key:Esc}} (hoặc chọn {{ui:Chọn}}, {{key:V}}) và nhấp thanh.
2. Trong bảng {{ui:Thuộc tính}}, đổi {{ui:Tên}}, {{ui:Tiết diện}}, {{ui:Vật liệu}}, {{ui:Vị trí}} hoặc {{ui:Xoay (°)}}.
3. Để di chuyển, sửa x, y và z của {{ui:Đầu}} hoặc {{ui:Cuối}} trong {{ui:Đầu (x, y, z mm)}}. Tên lưới của mỗi đầu hiện bên dưới, hoặc tọa độ của nó khi nằm ngoài lưới.

Mỗi thay đổi là một bước hoàn tác. Dưới các ô, bạn thấy {{ui:Ký hiệu cấu kiện}}, {{ui:Cụm}}, {{ui:Chiều dài cắt}}, {{ui:Trọng lượng}} (tổng: lỗ và cắt góc không được trừ) của thanh, và danh mục mà tiết diện thuộc về.

Chưa thể kéo hoặc tạo mảng thanh. Để tạo thanh giống nó, sao chép và dán, hoặc nhân bản ({{key:Mod+D}}): xem [Sao chép, dán và nhân bản](topic:copy-paste).

## Xóa một thanh

Chọn thanh và nhấn {{key:Delete}} hoặc {{key:Backspace}}, hoặc chọn {{ui:Xóa}}. Các kết nối trên nó cũng bị xóa. {{key:Mod+Z}} khôi phục mọi thứ.

## Điều cần biết

- **Cột quay mặt về hướng nào.** Ở {{ui:Xoay (°)}} 0, cánh cột quay theo x, về phía các đường lưới có số lân cận. Dầm từ lưới 1 đến lưới 2 nối vào cánh; dầm từ A đến B nối vào bụng. Bản đầu chỉ được dựng vào cánh, nên nếu dầm của bạn chạy từ A đến B, hãy đặt cho các cột đó xoay 90.
- **Dầm ở một tầng treo xuống dưới** với mặc định {{ui:Đỉnh thép nằm trên đường}}. Chọn {{ui:Căn giữa trên đường}} nếu tầng của bạn là đường tâm thanh.
- **Cột chạy từ tầng đến tầng.** Với cột xuyên qua hai tầng, đặt {{ui:Lên tới}} là tầng cao hơn.
- **Dầm nghiêng được phép** (chọn đầu ở các tầng khác nhau), nhưng bản đầu chưa được dựng trên chúng.

Tiếp theo: [Nối dầm vào cột bằng bản đầu](topic:end-plates).
