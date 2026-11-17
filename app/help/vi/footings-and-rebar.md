---
title: Đặt móng với thép thanh
summary: Đặt móng đơn hình chữ nhật với lưới thép đáy và thép chờ, kiểm tra chúng và tải xuống bảng uốn thép.
keywords: móng, móng đơn, nền móng, cốt thép, thép thanh, thanh thép, lưới thép, thép chờ, thép neo, bảng uốn thép, danh sách thanh thép, bê tông, móc, lớp bê tông bảo vệ
from: 41a048be
---

Chủ đề này nói về móng đơn hình chữ nhật. Dầm, cột, sàn và tường nằm trong [Chi tiết bê tông cốt thép](topic:reinforced-concrete). Mỗi móng có một lưới thép đáy theo cả hai phương và, nếu muốn, các thép chờ dựng đứng nhô lên từ móng. Thép thanh theo cỡ US từ #3 đến #11.

## Đặt một móng

1. Chọn {{ui:Mặt bằng}} và chọn tầng của đỉnh móng.
2. Chọn {{ui:Móng}} trong nhóm {{ui:Đặt}}, hoặc nhấn {{key:F}}.
3. Đặt móng trong bảng {{ui:Thuộc tính}} (xem bên dưới), hoặc giữ giá trị mặc định.
4. Nhấp vào giao điểm lưới. Móng được đặt tâm tại đó với đỉnh ở cao độ tầng. Thanh trạng thái hiển thị, ví dụ, "Móng 2000 x 2000 x 600 dưới A/1."

Bạn cũng có thể dùng biểu mẫu {{ui:Thêm theo lưới}} ở cuối bảng.

Móng được vẽ trong suốt để bạn thấy các thanh thép, và các thanh được vẽ dưới dạng ống đặc.

## Cài đặt móng

| Ô nhập | Mặc định | Ghi chú |
|---|---|---|
| Chiều dài L (mm) | 2000 | Theo x; 300 đến 50000 |
| Chiều rộng B (mm) | 2000 | Theo y; 300 đến 50000 |
| Chiều sâu H (mm) | 600 | 150 đến 10000 |
| Bê tông | 4000 psi | Văn bản, được in trong xuất IFC |

**Lưới thép đáy**

| Ô nhập | Mặc định | Ghi chú |
|---|---|---|
| Thanh theo L | #5 | Thanh chạy theo L, lớp dưới |
| Khoảng cách (mm) | 250 | Khoảng cách lớn nhất cho phép; thanh được rải đều ở mức này hoặc dày hơn |
| Thanh theo B | #5 | Thanh chạy theo B, đặt trên các thanh theo L |
| Khoảng cách (mm) | 250 | Như trên |
| Lớp bảo vệ (mm) | 75 | Lớp bê tông bảo vệ thông thủy trên mọi mặt |
| Móc đầu | Bật | Uốn cả hai đầu mỗi thanh lưới thành móc 90° chuẩn (hình U); tắt thì thanh thẳng (hình S) |

**Thép chờ**

| Ô nhập | Mặc định | Ghi chú |
|---|---|---|
| Thép chờ | Bật | Tắt đi nếu móng không có thép chờ |
| Thanh | #6 | |
| Thanh theo L / Thanh theo B | 2 / 2 | Một lưới thanh, căn giữa móng |
| Khoảng cách theo L / Khoảng cách theo B | 250 / 250 | Giữa tâm các thanh |
| Nhô lên trên đỉnh | 600 | Thanh nhô lên trên đỉnh móng bao xa |
| Móc ở đáy | Bật | Móc 90° hướng ra ngoài, nằm trên lưới thép (hình L) |

Bên dưới các ô nhập, DetailCraft hiển thị chiều dài nhánh móc cho thanh theo L, ví dụ "Chiều dài nhánh móc cho #5: 254 mm ngoài đến ngoài."

## Thay đổi một móng đã đặt

Chọn móng (nhấp vào phần bê tông cách xa cột, hoặc vào một trong các thanh của nó). Bạn có các ô nhập như trên cộng với {{ui:Tâm x}}, {{ui:Tâm y}}, {{ui:Cao độ đỉnh z}} và {{ui:Xoay (°)}}. Bên dưới chúng là bảng liệt kê các thanh của móng này với ký hiệu, số lượng và chiều dài, cùng thể tích bê tông tính bằng mét khối.

Mỗi thay đổi được kiểm tra trước khi giữ lại. Thay đổi không thể xây dựng sẽ bị từ chối, và thanh trạng thái nêu lý do, ví dụ "Lớp bảo vệ không còn chỗ cho thanh trong móng này.", "Móng quá nông để đặt hai lớp thép bên trong lớp bảo vệ." hoặc "Thép chờ không vừa trong móng với lớp bảo vệ 75 mm."

Các thay đổi có thể xây dựng nhưng cần xem lại được liệt kê dưới móng và trong thẻ {{ui:Vấn đề}}:

- "Thanh #11 cách nhau 59.6 mm chỉ để lại khoảng hở thông thủy dưới 35.8 mm (ACI 318-19 25.2.1)." Khoảng hở thông thủy giữa các thanh phải ít nhất bằng đường kính thanh và ít nhất 25.4 mm.
- "Móc #5 cần 254 mm chiều sâu; chỉ 150 mm vừa trong lớp bảo vệ." Khi đó nhánh móc bị cắt ngắn để vừa, nên chúng không còn là móc chuẩn.
- "Móc của thép chờ chui vào lớp bảo vệ."
- "Thép chờ gần nhau hơn khoảng hở thông thủy tối thiểu."

## Ký hiệu thanh và bảng uốn thép

Các thanh giống nhau (cùng cỡ, hình dạng và kích thước đến từng milimét) dùng chung một ký hiệu thanh trên mọi móng. Ký hiệu được viết dạng `<số hiệu thanh>F<n>`: 5F1, 5F2 cho thanh #5, 6F1 cho thanh #6 đầu tiên, v.v. Các móng có cùng kích thước, bê tông, lưới và thép chờ dùng chung một ký hiệu móng: F1, F2 …

1. Mở thẻ {{ui:Bảng uốn thép}} ở cuối. Mỗi hàng là một ký hiệu thanh: cỡ, hình dạng, các kích thước A, B và C, số lượng, chiều dài cắt, tổng chiều dài, khối lượng trên mét, trọng lượng từng thanh, tổng trọng lượng, và thanh dùng để làm gì.
2. Chọn {{ui:Tải xuống CSV}} trong thẻ, hoặc {{ui:Uốn thép}} trong menu {{ui:Thêm}} của nhóm {{ui:Đầu ra}}, để tải tệp `<name> bending schedule.csv`.

Hình dạng là mã riêng của DetailCraft, không theo tiêu chuẩn nào: S là thẳng, L là một chỗ uốn, U là hai chỗ uốn. Kích thước đo từ ngoài đến ngoài; chiều dài cắt là chiều dài tâm chính xác qua các chỗ uốn. Xem [Tham chiếu thép thanh](topic:rebar-reference).

## DetailCraft không kiểm tra những gì

- Chiều dài neo và chiều dài nối, và liệu thép chờ có đủ dài cho cột phía trên hay không.
- Phần kích thước cốt liệu trong quy tắc khoảng hở thông thủy (công cụ không biết cấp phối bê tông).
- Mọi thứ về cột hoặc bản chân cột phía trên: móng và thép là các phần riêng biệt.

Xem thêm [Những gì chưa xây dựng](topic:not-built-yet).
