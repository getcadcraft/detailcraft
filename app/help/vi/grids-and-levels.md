---
title: Thiết lập lưới và tầng
summary: Nhập các đường lưới, khoảng cách của chúng và các tầng mà mọi cấu kiện được đặt trên đó.
keywords: lưới, các lưới, trục, đường lưới, tầng, cao độ, tầng nhà, sàn, khoảng cách, thiết lập
from: 9cad233c
---

Mọi cấu kiện trong DetailCraft được đặt tại một giao điểm lưới ở một tầng. Thiết lập lưới và tầng trước; bạn có thể thay đổi chúng sau.

## Cách lưới hoạt động ở đây

- **Đường đánh số** chạy theo một phương, **đường đánh chữ** chạy theo phương kia. Tên chỉ là thói quen: nhãn có thể là bất kỳ văn bản nào tối đa 8 ký tự (1, 2, 3 hoặc A1, A2, hoặc 10, 20).
- Bạn nhập các nhãn và khoảng cách giữa chúng, không nhập tọa độ. Đường đầu tiên của mỗi nhóm nằm tại 0.
- Đường đánh số là các đường có x không đổi; đường đánh chữ là các đường có y không đổi. Vậy một dầm từ lưới 1 đến lưới 2 chạy theo x, và một dầm từ A đến B chạy theo y.
- Mọi giá trị tính bằng milimét.

Một mô hình mới bắt đầu với các đường đánh số 1 2 3 tại 6000 6000, các đường đánh chữ A B tại 6000, và hai tầng.

## Thiết lập lưới

1. Trong bảng {{ui:Mô hình}} bên trái, mở {{ui:Lưới}} nếu đang thu gọn.
2. Trong {{ui:Đường đánh số}}, nhập các nhãn cách nhau bằng dấu cách, ví dụ `1 2 3 4 5`.
3. Trong ô {{ui:Khoảng cách}} bên dưới, nhập một khoảng cách cho mỗi khoảng, ví dụ `6000 6000 7500 6000`. Bốn khoảng cho năm đường.
4. Làm tương tự trong {{ui:Đường đánh chữ}} và {{ui:Khoảng cách}} của nó, ví dụ `A B C` và `8000 8000`.
5. Chọn {{ui:Áp dụng lưới}}.

Thanh trạng thái hiển thị "Đã cập nhật lưới." và khung nhìn thu phóng tới lưới mới. Dấu phẩy cũng hoạt động như dấu phân cách.

Nếu có gì không khớp, không có gì thay đổi và thanh trạng thái nêu lý do, ví dụ "Lưới đánh số: nhập một khoảng cách giữa mỗi cặp đường (4)." Các kiểm tra khác: khoảng cách phải là milimét dương, các nhãn phải khác nhau, và tối đa 60 đường theo mỗi hướng.

:::note
Các cấu kiện giữ nguyên tọa độ khi lưới di chuyển. Nếu bạn thay đổi một khoảng cách sau khi đã đặt thép, thép vẫn ở vị trí cũ và không còn nằm trên lưới. Hãy thay đổi lưới trước, hoặc di chuyển cấu kiện bằng cách sửa tọa độ đầu mút của chúng.
:::

## Thiết lập tầng

1. Mở {{ui:Tầng}} trong bảng {{ui:Mô hình}}.
2. Mỗi hàng có tên tầng và cao độ tính bằng milimét. Sửa tùy ý.
3. Chọn {{ui:Thêm tầng}} để thêm một hàng. Tầng mới được đặt tên "Tầng 3" (v.v.) và đặt cao hơn tầng cao nhất 4000 mm; đổi cả hai nếu cần.
4. Để xóa một tầng, chọn nút × ở cuối hàng của nó.
5. Chọn {{ui:Áp dụng tầng}}.

Không có gì thay đổi cho đến khi bạn chọn {{ui:Áp dụng tầng}}. Các tầng được sắp xếp theo cao độ khi áp dụng. Mỗi tầng cần có tên, hai tầng không được trùng tên, và bạn phải giữ ít nhất một tầng.

Tầng có thể ở dưới mốc 0 (một tầng hầm tại `-3500`) và không cần cách đều nhau.

## Cách dùng tầng

- Cột đặt tại một tầng chạy lên tầng kế tiếp, hoặc đến tầng bạn chọn trong {{ui:Lên tới}}.
- Dầm và tấm được đặt giữa hai giao điểm tại tầng bạn nhấp.
- Móng được đặt với đỉnh tại tầng bạn nhấp.
- {{ui:Mặt bằng}} nhìn xuống từng tầng một.
- Xuất IFC tạo một tầng công trình cho mỗi tầng.

## Hoàn tác

Thay đổi lưới và tầng là các chỉnh sửa như mọi chỉnh sửa khác: {{key:Mod+Z}} khôi phục lưới trước đó.

## Tiếp theo

[Đặt cột, dầm và giằng](topic:place-members)
