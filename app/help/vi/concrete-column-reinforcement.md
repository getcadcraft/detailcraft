---
title: Thép cho cột bê tông chữ nhật
summary: Ví dụ minh họa việc triển khai chi tiết một cột bê tông chữ nhật trong DetailCraft: đặt cột, cho thép dọc và đai, đọc kiểm tra, mối nối chồng phía trên và ký hiệu thép, rồi vẽ bản vẽ thi công của nó.
keywords: cột bê tông, cột chữ nhật, thép cột, thép dọc, thép đứng, đai, cốt đai, đai ngang, nối chồng, mối nối, thép chờ, tỷ lệ thép cột, 1 phần trăm, 8 phần trăm, khoảng cách đai, ACI 318-19 25.7.2, EN 1992-1-1 9.5, bản vẽ thi công, ký hiệu thép, 8C1, 3C2
from: aee2a3ca
---

Chủ đề này đưa một cột vuông từ con số không đến một chi tiết đã kiểm tra, đã vẽ và đã lập bảng. Các quy tắc chung cho dầm, sàn và tường nằm trong [Triển khai chi tiết bê tông cốt thép](topic:reinforced-concrete); đây là phần của cột, với các số bạn có thể tái lập.

:::warning
DetailCraft triển khai chi tiết các thanh bạn cho nó. Nó không thiết kế chúng. Các thanh dưới đây là giá trị khởi đầu cho ví dụ, không phải khuyến nghị: kỹ sư thiết kế chọn kích thước, số lượng và khoảng cách.
:::

## Cột ở đây là gì

Một cột chữ nhật có bề rộng (theo x cục bộ) và chiều sâu theo phương ngang (theo y cục bộ), một lớp bảo vệ thông thủy đến đai, các thanh dọc trên mỗi mặt và đai kín. Xoay nó sẽ xoay toàn bộ; các mặt vẫn là "mặt rộng" và "mặt sâu".

- Các thanh dọc được cho dưới dạng số trên một mặt rộng và số trên một mặt sâu. Các thanh ở góc được tính cho cả hai, nên 3 và 3 thành 8 thanh; 4 và 4 thành 12.
- Đai là các hình chữ nhật kín có hai móc ở một góc, 135° hoặc 90°. Đai đầu tiên cách sàn một khoảng đã đặt (và thấp hơn đai kế tiếp), các vùng đầu có khoảng cách dày hơn, phần giữa có khoảng cách rộng hơn.
- Các thanh làm gì ở đỉnh: chạy tiếp và nối chồng với các thanh phía trên, uốn vào sàn bằng móc 90°, hoặc dừng dưới đỉnh.

## Cột ví dụ

Cột 400 × 400 mm, 3600 mm giữa sàn trên và sàn dưới, thanh dọc #8, đai #3, lớp bảo vệ thông thủy 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, cột giữa.

1. Mở thẻ {{ui:Bê tông}} và thiết lập các đường lưới và cao độ mà cột đứng trên (bảng bên trái).
2. Trong {{ui:Thêm theo lưới}}, chọn {{ui:Cột bê tông}}, chọn giao điểm lưới và hai cao độ, đặt {{ui:Chiều rộng (mm)}} và {{ui:Chiều sâu (mm)}} thành 400 rồi chọn {{ui:Thêm}}.
3. Trong bảng {{ui:Thuộc tính}} đặt:
   - {{ui:Lớp bảo vệ thông thủy (mm)}} 40;
   - {{ui:Thanh dọc}} #8, {{ui:Số thanh trên mặt rộng}} 3, {{ui:Số thanh trên mặt sâu}} 3;
   - {{ui:Thép đai}} #3, {{ui:Móc}} 135°, {{ui:Khoảng cách giữa (mm)}} 300, {{ui:Chiều dài vùng đầu (mm)}} 600, {{ui:Khoảng cách trong vùng đầu (mm)}} 150, {{ui:Cốt đai đầu tiên tính từ mặt (mm)}} 50;
   - {{ui:Thanh ở đỉnh}} {{ui:Nối tiếp và nối chồng với thanh phía trên}}.

Mỗi thay đổi là một bước hoàn tác.

### Bạn nhận được gì

| Phần | Kết quả |
|---|---|
| Thanh dọc | 8 thanh #8 (một vòng 3 × 3), mỗi thanh dài 4375 mm: cột 3600 mm cộng nối chồng 775 mm phía trên |
| Nối chồng | Cần 757 mm cho nối chồng chịu nén (ACI 318-19 25.5.5.1, fy 420), cung cấp 775 mm: giá trị cần được làm tròn lên bội 25 mm kế tiếp |
| Đai | 17 đai #3, mỗi đai có chiều dài cắt khoảng 1359 mm, đặt cách 150 mm trong hai vùng đầu 600 mm và cách 300 mm giữa |
| Tỷ lệ thép | 2.5 % tiết diện nguyên (giới hạn 1 % đến 8 %, ACI 318-19 10.6.1.1) |
| Khoảng sáng giữa các thanh | 112 mm (cần ít nhất 40 mm, ACI 318-19 25.2.3) |
| Khoảng cách đai | 300 mm (cho phép 400 mm: nhỏ nhất trong 16 đường kính thanh, 48 đường kính đai và cạnh nhỏ hơn, ACI 318-19 25.7.2.1) |
| Cỡ đai | #3 (cho phép xuống 9.5 mm, ACI 318-19 25.7.2.2) |

Tất cả các mục này nằm trong danh sách {{ui:Kiểm tra}} của cấu kiện; nối chồng cũng có trong {{ui:Nối chồng và neo}}.

## Đai ngang

Với một đai chu vi duy nhất, chỉ các thanh ở góc được giữ. ACI 318-19 25.7.2.3 cho phép một thanh giữa trên một mặt không được giữ nếu nó nằm trong khoảng 150 mm sáng so với một thanh góc. Với 3 thanh trên một mặt, như trên, điều đó được thỏa. Với 4 thanh trở lên trên một mặt thì không, và DetailCraft báo điều này như một cảnh báo ({{ui:Kiểm tra}} và Vấn đề): cần "đai ngang". **Đai ngang chưa được vẽ**: thêm chúng vào bản vẽ bằng tay, hoặc chọn ít thanh hơn trên mặt đó.

Đối với EN 1992-1-1, DetailCraft kiểm tra cỡ thanh (ít nhất 8 mm), số thanh (ít nhất 4), diện tích thép (0.2 % đến 4 % tiết diện), khoảng sáng giữa các thanh và khoảng cách đai (9.5.2 và 9.5.3).

## Nối chồng, móng và cột bên dưới

- Khi **một móng của mô hình nằm dưới cột**, cột nối chồng với thép chờ của móng, và phần nối chồng đó cũng được kiểm tra.
- Khi **một cột khác của mô hình nằm dưới nó**, nó nối chồng với các thanh của cột đó.
- Nhập {{ui:Chiều dài nối chồng (mm, 0 = theo nhu cầu)}} của riêng bạn để ghi đè; một giá trị ngắn hơn mức cần là một vấn đề và được đánh dấu * trong bảng.
- Mặc định dùng nối chồng chịu nén ({{ui:Nối chồng chịu nén}} trong cài đặt); chọn {{ui:Nối chồng chịu kéo}} khi cột có thể chịu kéo.

## Ký hiệu, bảng và bản vẽ thi công

Các thanh giống nhau dùng chung một ký hiệu: các thanh dọc của cột phía trên là 8C1, đai của nó là 17C2 (số trước, rồi chữ C chỉ cột và số thứ tự). Chúng xuất hiện trong thẻ {{ui:Bảng uốn thép}}, với chiều dài cắt và trọng lượng, và trong CSV từ {{ui:Đầu ra}} › {{ui:Thêm}} › {{ui:Uốn thép}}.

Chọn {{ui:Bản vẽ thi công}} bên cạnh cột để có một tờ với cột ở mặt đứng (mọi thanh, ký hiệu, các vùng đai và nối chồng có kích thước) và một mặt cắt ở giữa, theo sau là tờ uốn thép. Lưu {{ui:Tờ này dưới dạng PDF}}.

## Những gì việc này không làm

- Cột tròn và cột xoắn, và cột không chữ nhật: chưa được xây dựng.
- Đai góc và đai ngang trong tiết diện, và chi tiết động đất (ACI 318-19 chương 18): chưa được xây dựng.
- Mối nối tại vị trí bạn chọn, hoặc so le: mọi thanh nối chồng tại một tiết diện.
- Các thanh có đủ cho tải hay không: đó là thiết kế của kỹ sư.
