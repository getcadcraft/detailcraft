---
title: Đặt bản và thêm tiết diện tùy chỉnh
summary: Đặt bản rời theo độ dày và chiều rộng, và định nghĩa tiết diện chữ I, máng, thép góc, ống hoặc thanh dẹt của riêng bạn.
keywords: bản, thanh dẹt, tiết diện tùy chỉnh, tiết diện người dùng, tham số, mặt cắt, hình dạng, mặt cắt ngang, pl
from: c24c3b51
---

## Đặt bản

Bản được đặt như dầm: nó chạy giữa hai giao điểm, với chiều rộng theo ngang và độ dày hướng lên.

1. Chọn {{ui:Bản}} trong nhóm {{ui:Đặt}}, hoặc nhấn {{key:P}}.
2. Trong bảng {{ui:Thuộc tính}}, đặt {{ui:Độ dày (mm)}} và {{ui:Chiều rộng (mm)}}. Mặc định là 20 x 200 trong A36.
3. Đặt {{ui:Vật liệu}} và {{ui:Xoay (°)}} nếu cần. Xoay 90 sẽ đặt bản đứng trên cạnh.
4. Nhấp hai giao điểm, hoặc dùng biểu mẫu {{ui:Thêm theo lưới}}.

Tên tiết diện của bản được viết `PL<thickness>x<width>`, ví dụ PL20x200. Chiều dài của nó là khoảng cách giữa hai điểm.

Để đổi kích thước một bản đã đặt, chọn nó và đổi {{ui:Độ dày (mm)}} hoặc {{ui:Chiều rộng (mm)}}.

Bản bạn đặt là cấu kiện riêng (ký hiệu p, cụm P). Bản đầu và bản chân cột do kết nối tạo ra cũng là bản, nhưng bạn đổi chúng qua kết nối của chúng; xem [Bản đầu](topic:end-plates).

## Thêm tiết diện tùy chỉnh

Khi tiết diện bạn cần không có trong danh mục, hãy tạo nó từ kích thước. Tiết diện tùy chỉnh thuộc về mô hình và được lưu cùng mô hình. Để dùng nó trong mọi mô hình mới, giữ nó trong {{ui:Hồ sơ của tôi}}, được mô tả trong mục "Giữ tiết diện cho mô hình mới" bên dưới.

1. Trong bảng {{ui:Mô hình}} bên trái, mở {{ui:Tiết diện tùy chỉnh}}.
2. Gõ {{ui:Tên}}, ví dụ `W8x18-custom` hoặc `RHS 120x80x5`. Tên không được trùng tên danh mục và không được giống tên bản.
3. Chọn {{ui:Hình dạng}}: {{ui:Chữ I}}, {{ui:Máng}}, {{ui:Thép góc đều cạnh}}, {{ui:Ống chữ nhật}}, {{ui:Ống tròn}} hoặc {{ui:Thanh dẹt}}.
4. Điền các kích thước xuất hiện, tất cả theo milimét:

| Hình dạng | Kích thước |
|---|---|
| Chữ I | Chiều sâu d, Chiều rộng cánh bf, Độ dày bụng tw, Độ dày cánh tf, Bán kính bo r (có thể là 0) |
| Máng | Chiều sâu d, Chiều rộng cánh bf, Độ dày bụng tw, Độ dày cánh tf (góc vuông) |
| Thép góc đều cạnh | Chiều rộng b (mỗi cạnh), Độ dày t |
| Ống chữ nhật | Chiều cao h, Chiều rộng b, Độ dày t (bán kính góc ngoài 2t) |
| Ống tròn | Đường kính D, Độ dày t |
| Thanh dẹt | Chiều rộng b, Độ dày t |

5. Giữ đánh dấu {{ui:Giữ trong Hồ sơ của tôi}} để có nó trong mọi mô hình mới (xem bên dưới), hoặc bỏ đánh dấu để chỉ giữ trong mô hình này.
6. Chọn {{ui:Thêm tiết diện}}.

Thanh trạng thái ghi "Đã thêm tiết diện "…"; nó có trong mọi danh sách tiết diện dưới mục Tùy chỉnh." Nó xuất hiện trong danh sách dưới biểu mẫu và ở cuối mọi danh sách {{ui:Tiết diện}}.

DetailCraft kiểm tra hình dạng có thể tồn tại không. Bạn sẽ thấy các thông báo như "Bụng và cánh không vừa trong chiều sâu và chiều rộng.", "Bán kính bo quá lớn so với cánh." hoặc "Thành quá dày." Sửa các số và chọn {{ui:Thêm tiết diện}} lại.

### Tiết diện tùy chỉnh được gì

- Khối lượng trên mét bằng diện tích × 7850 kg/m³ (kích thước trong danh mục dùng khối lượng đã công bố thay thế).
- Chữ I tùy chỉnh có lỗ, cắt góc, bản đầu, tệp NC và bản vẽ thi công như chữ I trong danh mục.
- Thanh dẹt tùy chỉnh hoạt động như bản.
- Máng và ống tùy chỉnh có lỗ; thép góc và ống tròn thì chưa.

Bạn không thể sửa hoặc xóa tiết diện tùy chỉnh khỏi mô hình sau khi đã thêm (dùng {{key:Mod+Z}} ngay nếu bạn làm sai). Đặt tên mới cho bản đã sửa.

## Giữ tiết diện cho mô hình mới

{{ui:Hồ sơ của tôi}}, dưới biểu mẫu, là danh sách tiết diện tùy chỉnh riêng của bạn. Nó được giữ trong trình duyệt này, trên máy tính này, không nằm trong tệp mô hình và không nằm trong tài khoản của bạn.

- Tiết diện được thêm với {{ui:Giữ trong Hồ sơ của tôi}} được đánh dấu sẽ vào danh sách. Mọi mô hình mới, kể cả mô hình DetailCraft mở khi bạn khởi động, đều bắt đầu với tất cả chúng trong danh sách tiết diện.
- Tiết diện đã có trong một mô hình nhưng không có trong danh sách sẽ có nút {{ui:Giữ}} bên cạnh.
- Trong mô hình không có một trong các tiết diện của bạn (ví dụ một tệp cũ), chọn {{ui:Dùng ở đây}} để thêm nó.
- {{ui:Gỡ bỏ}} đưa một tiết diện ra khỏi danh sách. Các mô hình đang dùng nó giữ bản sao riêng.
- Mô hình bạn mở giữ các tiết diện đã lưu trong tệp của nó. Mở một tệp không bao giờ thay đổi danh sách của bạn.
- Tên đã có trong danh sách với kích thước khác sẽ bị từ chối: đặt tên khác cho tiết diện mới.
- Xóa dữ liệu trang của trình duyệt, hoặc dùng trình duyệt hay máy tính khác, sẽ bắt đầu với danh sách trống. Cửa sổ riêng tư không thể giữ danh sách; ứng dụng sẽ thông báo điều đó.
