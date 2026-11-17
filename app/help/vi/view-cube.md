---
title: Khối xem
summary: Nhấp vào một mặt, cạnh hoặc góc của khối ở góc khung nhìn để nhìn từ đó, kéo để xoay quanh, xoay vòng la bàn, chuyển giữa các góc nhìn thẳng mặt, và về góc nhìn trang chủ.
keywords: khối xem, viewcube, khối, la bàn, bắc, góc nhìn trang chủ, góc nhìn tiêu chuẩn, trên, trước, phải, iso, góc, cạnh, xoay quanh, xoay góc nhìn, biểu tượng trục, chỉ báo góc, điều hướng
from: 3666ea8a
---

Khối xem nằm ở góc trên bên phải khung nhìn 3D, dưới thanh góc nhìn (chỉ trong {{ui:3D}}: {{ui:Plan}} và {{ui:Elevation}} đã nhìn thẳng vào mô hình). Nó xoay theo góc nhìn, nên luôn cho biết bạn đang nhìn về hướng nào: {{ui:Top}} là phía trên, {{ui:Front}} hướng về phía nam (phía mà các lưới đánh chữ được nhìn từ trong {{ui:Elevation}}), {{ui:Right}} hướng về phía đông, dọc theo các lưới đánh số. Khối vẫn trong suốt cho đến khi bạn chỉ vào nó.

## Nhìn từ một cạnh hoặc góc

1. Chỉ vào khối. Phần dưới con trỏ sáng lên: giữa một mặt, một cạnh (sáng ở cả hai mặt chung cạnh đó) hoặc một góc (sáng trên cả ba mặt).
2. Nhấp vào đó. Khung nhìn xoay để nhìn từ vị trí đó, giữ nguyên tâm và mức thu phóng.

Có 26 vị trí để nhấp: 6 mặt ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 cạnh và 8 góc. Góc cho góc nhìn ba phần tư cổ điển; cạnh cho góc nhìn nằm giữa hai mặt.

Góc nhìn thẳng một mặt của khối là một góc nhìn 3D, không phải {{ui:Plan}} hay {{ui:Elevation}}: không có gì bị cắt đi, và mô hình vẫn có thể xoay.

## Kéo khối để xoay

Kéo khối để xoay khung nhìn, giống như xoay quanh chính khung nhìn. Một thao tác kéo không bao giờ bị coi là nhấp, nên bạn có thể nắm khối ở bất kỳ chỗ nào.

## Vòng la bàn

Vòng nằm dưới khối mang các chữ B, Đ, N và T.

- **Kéo vòng** để xoay mô hình quanh trục thẳng đứng, như thể nó đặt trên bàn xoay. Vòng bám theo con trỏ.
- **Nhấp vào một chữ** để nhìn từ phía đó, giữ nguyên độ nghiêng khi nhìn xuống. Trong góc nhìn thẳng từ trên, chữ bạn nhấp sẽ nằm ở đáy màn hình.

## Góc nhìn thẳng mặt: mũi tên

Khi bạn nhìn thẳng vào một mặt, các mũi tên nhỏ xuất hiện quanh khối:

- Bốn **tam giác** đưa mặt ở phía đó ra phía trước: tam giác phía trên khối cho biết mặt trước đó ở trên, và tương tự với các mặt khác.
- Hai **mũi tên cong** ở góc trên bên phải xoay hình một góc phần tư theo chiều kim đồng hồ hoặc ngược chiều, mà không đổi mặt bạn đang nhìn. Dùng chúng để xoay mặt bằng sao cho một bức tường dài nằm ngang màn hình.

## Về trang chủ

Nút hình ngôi nhà ở góc trên bên trái của khối quay về góc nhìn ba phần tư ban đầu và vừa toàn bộ mô hình vào khung, giống như nút vừa khung. {{key:Home}} làm điều tương tự khi khối đang có tiêu điểm bàn phím.

## Bằng bàn phím

{{key:Tab}} đến khối, rồi:

| Phím | Tác dụng |
|---|---|
| {{key:left}} / {{key:right}} | chọn một mặt, cạnh hoặc góc quanh khối, theo bước một phần tám vòng (trình đọc màn hình sẽ nói là vị trí nào) |
| {{key:up}} / {{key:down}} | chọn một vị trí cao hơn hoặc thấp hơn, lên đến {{ui:Top}} hoặc xuống đến {{ui:Bottom}} |
| {{key:Enter}} hoặc {{key:Space}} | nhìn từ vị trí đã chọn |
| {{key:Shift+left}} / {{key:Shift+right}} | xoay khung nhìn một góc phần tư quanh trục thẳng đứng |
| {{key:Home}} | góc nhìn trang chủ |
| {{key:Esc}} | rời khỏi khối |

Phím nhấn trên khối sẽ ở lại với khối: chúng không khởi động các công cụ DetailCraft.

## Biểu tượng trục hoặc không gì

Mở {{ui:Settings}} ({{key:Mod+,}}), thẻ {{ui:DetailCraft}}, và đặt **Chỉ báo góc** thành {{ui:View cube}} (mặc định), {{ui:Axis icon}} (một dấu X, Y, Z nhỏ ở góc dưới bên trái: X đỏ, Y xanh lá, Z xanh dương) hoặc {{ui:None}}. Trình duyệt này ghi nhớ lựa chọn. Xem [Cài đặt DetailCraft](topic:settings#corner-indicator).
