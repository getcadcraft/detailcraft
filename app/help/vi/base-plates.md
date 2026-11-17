---
title: Thêm bản chân cột và bulông neo
summary: Đặt bản chân cột hàn với bốn bulông neo dưới cột, đặt kích thước và sao chép sang mọi cột tương tự.
keywords: bản chân cột, base plate, baseplate, bulông neo, bulông móng, bulông giữ, chân cột, bulông móng, tương tự
from: 619ebc64
---

Kết nối bản chân cột đặt một bản thép dưới cột, cắt ngắn cột đi một đoạn bằng độ dày bản, hàn hai phần lại với nhau và thêm bốn bulông neo đi qua các lỗ trên bản.

:::warning
Các kích thước chỉ là giá trị khởi đầu, không phải thiết kế. DetailCraft không kiểm tra khả năng chịu ép, cường độ bulông neo hay chiều sâu chôn.
:::

## Thêm bản chân cột

1. Chọn {{ui:Chọn}} ({{key:V}}) rồi nhấp vào một cột. Cột phải thẳng đứng.
2. Chọn {{ui:Bản chân cột}} trong nhóm {{ui:Liên kết}}, hoặc {{ui:Thêm bản chân cột}} trong bảng {{ui:Thuộc tính}}.
3. Thanh trạng thái ghi "Đã thêm bản chân cột với bốn bulông neo." Kết nối mới được chọn.

Một cột chỉ có một bản chân cột. Nếu cột đã có, thanh trạng thái ghi "Cột này đã có bản chân cột."

## Chỉnh sửa

Chọn bản chân cột (nhấp vào bản hoặc một bulông neo). Trong {{ui:Bản, bulông và mối hàn (mm)}}:

| Thiết lập | Mặc định | Tác dụng |
|---|---|---|
| Độ dày bản | 25 | Cột bị rút ngắn đúng bằng giá trị này |
| Chiều dài bản | 450 | Theo chiều sâu cột |
| Chiều rộng bản | 400 | Theo chiều ngang cột |
| Đường kính bulông neo | 20 | Kích thước bulông neo |
| Đường kính lỗ | 33 | Lỗ trên bản |
| Cấp bulông | F1554 Gr 36 | Cấp bulông neo, dạng văn bản |
| Khoảng cách bulông neo (theo chiều sâu) | 350 | Giữa tâm các bulông neo, theo chiều dài bản |
| Khoảng cách bulông neo (theo chiều ngang) | 300 | Giữa tâm các bulông neo, theo chiều ngang |
| Phần nhô trên bản | 100 | Từ mặt trên bản đến đầu bulông neo |
| Chiều sâu chôn dưới bản | 450 | Từ mặt dưới bản xuống bê tông |
| Kích thước mối hàn góc | 8 | Hàn quanh chân cột |
| Vật liệu bản | A36 | Văn bản |
| Khe vữa | 0 | Khoảng cách giữa mặt trên bê tông và mặt dưới bản |
| Sườn tăng cứng | Không | Chọn Không, 2 (thẳng hàng với bụng) hoặc 4 (thêm hai sườn vuông góc với bụng); xem bên dưới |
| Độ dày, chiều cao sườn | 12, 150 | |
| Chiều sâu chốt chịu cắt | 0 | Chốt vươn xuống dưới bản bao xa; 0 = không có chốt |
| Độ dày, chiều rộng chốt chịu cắt | 25, 150 | |
| Vòng đệm bản | Không | Trên mọi bulông neo, hoặc không có |
| Kích thước, độ dày vòng đệm | 0, 0 | 0 = kích thước nhỏ nhất theo AISC Design Guide 1 cho bulông neo |

Chiều dài bulông neo = chiều sâu chôn + khe vữa + độ dày bản + phần nhô. Với giá trị mặc định, chiều dài là 575 mm.

## Chi tiết chân: vữa, sườn, chốt chịu cắt, vòng đệm

Cả bốn tùy chọn đều tắt trên bản chân cột mới, và trên bản chân cột của mô hình được tạo trước DetailCraft 0.4.

- **Khe vữa.** Bản đặt cao hơn mặt trên bê tông một khoảng này, và bulông neo dài thêm đúng bằng khoảng đó. AISC Design Guide 1 (2.10) gợi ý 1 in. trên sàn hoàn thiện và 1½ đến 2 in. trên móng hoặc trụ; lớn hơn đối với bản lớn và bản có chốt chịu cắt.
- **Sườn tăng cứng.** Các bản đứng hàn vào cột và bản chân, từ mặt cột ra đến mép bản, dạng hình chữ nhật (chưa có vát hay thu hẹp). **2** đặt thẳng hàng với bụng, vượt ra ngoài mỗi cánh; **4** thêm hai sườn vuông góc với bụng, nằm giữa hai cánh, kéo ra đến hai mép bản. Với cột ống, sườn đặt ở giữa mỗi mặt. Mỗi sườn được hàn vào cột và bản chân ở cả hai bên.
- **Chốt chịu cắt.** Một bản hàn kín quanh, nằm dưới bản chân, thẳng hàng với chiều sâu cột, ở giữa. DetailCraft cảnh báo nếu chốt không sâu hơn khe vữa. Chốt không khoét hốc trong móng; vì vậy [kiểm tra va chạm](topic:clash-check) bỏ qua chốt và móng.
- **Vòng đệm bản.** Vòng đệm bản vuông đặt trên mỗi bulông neo, nằm trên bản chân, và được liệt kê trong cụm của cột như vật rời (giao kèm cột, không hàn: Design Guide 1, 2.6). Khi kích thước và độ dày bằng 0, DetailCraft lấy vòng đệm nhỏ nhất theo AISC Design Guide 1, ấn bản 2, Bảng 2.3 cho bulông đó; bulông hệ mét lấy cỡ inch lớn hơn kế tiếp (bulông M20 dùng dòng 7/8 in.: 2½ in. × 5/16 in.). Bảng thuộc tính hiển thị kích thước đã dùng. Lỗ của vòng đệm bằng đường kính bulông + 1/16 in.: đây là lựa chọn của DetailCraft, bảng không đưa ra giá trị. DetailCraft cảnh báo khi bulông có thể không nhô đủ để chứa vòng đệm và đai ốc (phần nhô nhỏ hơn độ dày vòng đệm + đường kính bulông).

Design Guide 1, Bảng 2.3, cũng khuyến nghị kích thước lỗ bulông trên bản: 1-5/16 in. cho bulông ¾ in., 1-9/16 in. cho ⅞ in., 1-13/16 in. cho 1 in. DetailCraft không thay đổi kích thước lỗ của bạn.

Cảnh báo cũng xuất hiện khi lỗ bulông gần mép bản hơn 1.2 × đường kính lỗ, khi bulông nằm bên trong đường bao cột, hoặc khi bản nhỏ hơn cột.

## Sao chép sang cột tương tự

1. Chọn bản chân cột.
2. Chọn {{ui:Áp dụng cho tương tự (n)}} hoặc {{ui:Tương tự}} trong menu {{ui:Thêm}} của nhóm {{ui:Liên kết}}.
3. Mọi cột thẳng đứng cùng tiết diện, chưa có bản chân cột và không đặt trên cột khác đều nhận một bản sao.

## Bản chân cột và móng

Bản chân cột không cần móng, và móng cũng không biết về bản chân cột phía trên: bulông neo không được buộc vào thép của móng. Đặt móng bằng {{ui:Móng}}; xem [Đặt móng với thép](topic:footings-and-rebar).
