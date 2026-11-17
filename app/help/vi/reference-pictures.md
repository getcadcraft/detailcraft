---
title: Dán vùng đã sao chép làm hình ảnh tham chiếu
summary: Sao chép một phần tờ PDF trong MarkupCraft và dán vào DetailCraft ở kích thước thật, nằm trên một cao độ dưới các thép, để dựng mô hình lên trên.
keywords: hình ảnh, hình ảnh tham chiếu, lớp lót, nền, vùng sao chép, markupcraft, pdf, vẽ theo, kích thước thật, tỷ lệ, độ mờ, lớp phủ
from: 0c48445f
---

Công cụ Sao chép vùng của MarkupCraft sao chép một phần của tờ thành một hình ảnh biết kích thước thật của nó. Dán vào DetailCraft, hình ảnh nằm phẳng trên một cao độ, ở kích thước thật, dưới lưới và các thép, để bạn đặt cấu kiện lên một mặt bằng lấy từ bản vẽ.

## Dán

1. Trong MarkupCraft, sao chép vùng bằng {{ui:Thêm}} › {{ui:Sao chép một vùng của trang…}}, rồi {{ui:Sao chép}} (hoặc {{ui:Sao chép dạng lớp phủ}}, làm cho tờ giấy trong suốt).
2. Trong DetailCraft (cùng trình duyệt), nhấn {{key:Mod+V}} hoặc chọn {{ui:Dán}}.

Hình ảnh được đặt ở giữa lưới, trên cao độ đang hiển thị trong {{ui:Mặt bằng}} (trong {{ui:3D}} hoặc mặt đứng, trên cao độ thấp nhất), và được chọn. Thanh trạng thái cho biết nó có kích thước bao nhiêu.

- **Kích thước thật:** khi tờ có tỷ lệ bản vẽ, một pixel được vẽ bằng chiều dài mà nó thể hiện trên bản vẽ.
- **Kích thước trên giấy:** khi tờ không có tỷ lệ, hình ảnh có kích thước bằng vùng đó trên giấy, và thanh trạng thái nói như vậy. Nhập **mm trên pixel** mới trong {{ui:Thuộc tính}} để đổi tỷ lệ.

Vùng được sao chép dạng lớp phủ bắt đầu ở độ mờ mà nó đã được sao chép.

{{key:Mod+V}} dán thứ bạn sao chép sau cùng: vùng từ MarkupCraft, hoặc các cấu kiện và móng đã sao chép trong DetailCraft. Nếu một hình ảnh khác được sao chép vào bộ nhớ tạm sau vùng đó (từ chương trình khác), sẽ không có gì được dán; hãy sao chép lại vùng.

## Di chuyển, đổi và xóa

- Nhấp vào hình ảnh để chọn (những gì nằm phía trước nó được chọn trước). Đường viền xanh cho biết nó đang được chọn.
- Kéo để di chuyển nó trên cao độ. Giữa và các góc của nó bắt vào các giao điểm lưới.
- Trong {{ui:Thuộc tính}}, nhập vị trí giữa của nó (x, y), cao độ nó nằm (z), **mm trên pixel** và **độ mờ** của nó.
- {{key:Delete}} hoặc {{ui:Xóa}} để gỡ bỏ.

Mỗi lần dán, di chuyển, đổi và xóa là một bước: {{key:Mod+Z}} sẽ hoàn tác nó.

Hình ảnh được lưu trong tệp mô hình, nên mở cùng mô hình. Nó chỉ là tham chiếu: không có trong bản vẽ, các tệp xuất, {{ui:Bảng kê vật tư}} hay bản sao.
