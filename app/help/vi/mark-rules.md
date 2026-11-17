---
title: Quy tắc ký hiệu
summary: Chính xác khi nào hai cấu kiện hoặc hai cụm có cùng ký hiệu, cách đánh số ký hiệu, và cách hoạt động của ký hiệu móng và ký hiệu thép.
keywords: ký hiệu, đánh số, ký hiệu cấu kiện, ký hiệu cụm, tiền tố, dung sai, cấu kiện giống nhau, ký hiệu thép, ký hiệu móng
from: ce02c98e
---

DetailCraft tính lại mọi ký hiệu sau mỗi thay đổi. Không có gì được lưu lại, nên ký hiệu luôn mô tả mô hình ở thời điểm hiện tại. Xem [Kiểm tra ký hiệu và bảng kê vật tư](topic:marks-and-bom) để biết cách sử dụng.

## Ký hiệu cấu kiện

Hai cấu kiện có cùng ký hiệu cấu kiện khi tất cả các điều sau đều khớp:

1. Loại cấu kiện (dầm, cột, thanh giằng hoặc bản).
2. Tên tiết diện (không phân biệt chữ hoa, chữ thường).
3. Vật liệu (không phân biệt chữ hoa, chữ thường).
4. Chiều dài cắt, trong phạm vi 1 mm.
5. Mọi lỗ: mặt, vị trí dọc và ngang, trong phạm vi 1 mm, và đường kính trong phạm vi 0.1 mm.
6. Mọi cắt góc: đầu, cạnh, chiều dài và chiều sâu, trong phạm vi 1 mm.

{{ui:Name}} của thanh không được tính. Vị trí trong mô hình, góc xoay, hay cách nó được vẽ cũng không tính, miễn là bản thân cấu kiện giống nhau.

### Cấu kiện bị lật

Một cấu kiện được so sánh theo mọi cách nó có thể bị lật mà vẫn giữ tiết diện của nó khớp với chính nó. Nếu bất kỳ cách nào làm nó khớp với cấu kiện khác, chúng có cùng ký hiệu.

| Hình dạng | Các phép lật được tính |
|---|---|
| Thép chữ I, HSS chữ nhật, bản | Đảo đầu cho đầu (quanh trục đứng), đảo đầu cho đầu (quanh trục ngang), và lật ngược quanh chiều dài của nó |
| Thép máng | Chỉ đảo đầu cho đầu quanh trục ngang, để bụng giữ nguyên một phía |
| Thép góc, HSS tròn | Không có: so sánh như đã đặt |

Vì vậy, một dầm có lỗ gần đầu trái khớp với một dầm có cùng lỗ gần đầu phải, và một cột có lỗ ở một cánh khớp với một cột có cùng lỗ ở cánh kia.

### Đánh số

| Loại | Tiền tố cấu kiện | Tiền tố cụm |
|---|---|---|
| Cột | c | C |
| Dầm | b | B |
| Thanh giằng | br | BR |
| Bản (đặt, bản đầu hoặc bản chân cột) | p | P |

Ký hiệu được đánh số từ 1 trong mỗi tiền tố. Thứ tự là: cột, rồi dầm, thanh giằng và bản; trong cùng một loại, theo tên tiết diện theo thứ tự tự nhiên (W8x10 trước W12x26); rồi cấu kiện dài hơn trước.

Vì việc đánh số theo thứ tự đó, thêm hoặc thay đổi một cấu kiện có thể làm thay đổi số của các cấu kiện khác.

## Ký hiệu cụm

- Mọi cấu kiện không được hàn vào cấu kiện khác là cấu kiện chính của cụm riêng của nó.
- Bản đầu được hàn vào dầm, và bản chân cột được hàn vào cột, nên chúng thuộc cụm của thanh đó.
- Hai cụm có cùng ký hiệu khi cấu kiện chính của chúng có cùng ký hiệu cấu kiện và các cấu kiện gắn kèm có cùng ký hiệu tại cùng vị trí (trong phạm vi 1 mm), cho phép các phép lật như với cấu kiện chính.
- Tiền tố cụm theo cấu kiện chính: một dầm có hai bản đầu là một cụm B.

Các bản bạn đặt bằng công cụ {{ui:Plate}} không hàn vào đâu cả, nên mỗi bản là một cụm P riêng.

## Ký hiệu móng

Các móng có cùng chiều dài, chiều rộng, chiều sâu, mác bê tông, lưới đáy và thép chờ sẽ có cùng ký hiệu: F1, F2 … theo thứ tự chúng được đặt. Vị trí và góc xoay không tính.

## Ký hiệu thép

Các thanh có cùng kích thước, hình dạng và các kích thước A, B và C (làm tròn đến milimét) sẽ có cùng ký hiệu trên mọi móng. Ký hiệu gồm số hiệu thép, F, và một bộ đếm cho mỗi kích thước thép: 5F1, 5F2, 6F1. Thanh theo chiều dài và thanh theo chiều ngắn của móng vuông là cùng một thanh và có cùng ký hiệu; cột {{ui:Used for}} trong bảng thống kê liệt kê cả hai cách dùng.
