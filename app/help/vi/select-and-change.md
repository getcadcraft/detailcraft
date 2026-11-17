---
title: Chọn bằng cửa sổ, di chuyển, xoay, đối xứng, thay đổi nhiều
summary: Kéo một cửa sổ để chọn, kéo các chi tiết đã chọn để di chuyển, di chuyển, xoay hoặc đối xứng vùng chọn (hoặc một bản sao của nó), hoặc đổi tiết diện, vật liệu, vị trí hay góc xoay của nhiều thanh cùng lúc.
keywords: lasso, hàng rào, chọn tự do, kéo, kéo thả, di chuyển bằng cách kéo, bắt điểm, cửa sổ, chọn cắt, chọn hộp, kéo để chọn, chọn nhiều, di chuyển, xoay, đối xứng, lật, sao chép, thay đổi nhiều, nhiều thanh, tiết diện, vật liệu, vị trí, góc xoay, khác nhau, đường lưới
from: 50b16f9a
---

Mỗi thao tác này là một bước hoàn tác: một lần {{key:Mod+Z}} sẽ hoàn tác tất cả.

## Chọn bằng cửa sổ

- Trong {{ui:Mặt bằng}} và {{ui:Mặt đứng}}, kéo bằng nút trái từ một chỗ trống. Trong {{ui:3D}}, giữ {{key:Shift}} và kéo (kéo thường sẽ xoay mô hình).
- Kéo **sang phải** để tạo cửa sổ: nó lấy những gì nằm hoàn toàn bên trong, vẽ bằng một đường liền.
- Kéo **sang trái** để tạo cửa sổ chọn cắt: nó lấy mọi thứ nó chạm vào, vẽ bằng nét đứt.
- Giữ {{key:Shift}} khi bắt đầu kéo để thêm vào vùng chọn thay vì thay thế.
- Mặt bằng hay mặt đứng chỉ chọn những gì nó hiển thị: các phần bị cắt đi phía trên mặt bằng, hoặc cách đường lưới của mặt đứng hơn 1 m, không được chọn.
- Nhấn {{key:Esc}} khi đang kéo sẽ hủy cửa sổ.

### Lasso

Chọn **Lasso** dưới {{ui:Kéo để chọn}} trong [Cài đặt DetailCraft](topic:settings), và cùng thao tác kéo sẽ vẽ một đường tự do thay vì hình chữ nhật.

- Chuyển động ngang đầu tiên quyết định cách chọn: **sang phải**, lấy những gì nằm hoàn toàn bên trong (đường liền); **sang trái**, lấy những gì nó chạm (nét đứt).
- Nhấn {{key:Space}} khi đang kéo để chuyển giữa bên trong, chạm và **hàng rào**: một đường hở lấy bất cứ thứ gì nó cắt qua (chấm, màu cam).
- {{key:Shift}} để thêm và {{key:Esc}} để hủy hoạt động như với cửa sổ.

:::touch
Trên màn hình cảm ứng, một ngón tay vẫn di chuyển khung nhìn mặt bằng và mặt đứng như trước; chọn chi tiết bằng cách chạm vào chúng.
:::

Trong {{ui:Mặt bằng}} và {{ui:Mặt đứng}}, di chuyển khung nhìn bằng nút phải hoặc nút giữa khi công cụ {{ui:Chọn}} đang bật.

## Kéo chi tiết để di chuyển

1. Chọn các chi tiết trước (nhấp, {{key:Shift}}+nhấp hoặc cửa sổ).
2. Nhấn lên một trong các chi tiết đã chọn và kéo. Toàn bộ vùng chọn di chuyển; một đường viền nét đứt cho biết nó sẽ đi đâu.
3. Thả để đặt. {{key:Esc}} trước khi thả sẽ đưa mọi thứ về vị trí cũ.

- Trong {{ui:3D}} và {{ui:Mặt bằng}}, các chi tiết di chuyển trên cùng một tầng. Giữ {{key:Mod}} khi bắt đầu kéo trong {{ui:3D}} để di chuyển chúng lên xuống.
- Trong {{ui:Mặt đứng}}, chúng di chuyển trong mặt đứng: dọc theo đường lưới và lên xuống.
- Chi tiết bạn đang giữ bắt vào giao điểm lưới khi đầu của nó đến gần trong vài pixel (giao điểm sáng lên và thanh trạng thái ghi tên nó). Ở nơi khác, việc di chuyển theo bước 10 mm.
- Nhấn vào một chi tiết không được chọn sẽ xoay hoặc di chuyển khung nhìn, nên một thao tác kéo không bao giờ di chuyển thứ gì ngoài ý muốn.
- Thao tác kéo là một bước hoàn tác, giống như {{ui:Di chuyển}}. Các liên kết đi theo thanh của chúng.

## Đổi một thuộc tính trên nhiều thanh

Chọn hai thanh trở lên. Dưới **Thay đổi trên tất cả** trong bảng {{ui:Thuộc tính}}:

- {{ui:Tiết diện}}, {{ui:Vị trí}}: cho các dầm, cột và thanh giằng trong số đó.
- {{ui:Độ dày bản (mm)}} và {{ui:Chiều rộng bản (mm)}}: cho các bản.
- {{ui:Vật liệu}} và {{ui:Xoay (°)}}: cho tất cả.

Một ô hiển thị **Khác nhau** khi các thanh không giống nhau. Chọn hoặc nhập một giá trị và mọi thanh mà giá trị đó áp dụng được sẽ nhận nó; thanh trạng thái ghi có bao nhiêu thanh đã thay đổi và bao nhiêu thanh giữ giá trị riêng.

Các ô số trong bảng {{ui:Thuộc tính}} cũng nhận phép tính: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Phép tính không đọc được sẽ bị từ chối, và thanh trạng thái ghi rõ lỗi nằm ở đâu.

## Di chuyển, xoay hoặc đối xứng

Chọn thanh và móng (một chiếc cũng được), rồi dùng **Di chuyển, xoay, đối xứng** trong bảng {{ui:Thuộc tính}}. Liên kết không tự di chuyển: chúng đi theo thanh của mình. Nếu bạn di chuyển một dầm mà không di chuyển cột của nó, thanh trạng thái ghi có bao nhiêu liên kết giờ nối một thanh đã di chuyển với một thanh đứng yên, và [Vấn đề](topic:troubleshooting) cho biết chúng có còn khớp hay không.

- **Di chuyển:** nhập x, y và z tính bằng milimét rồi chọn {{ui:Di chuyển}}. Hoặc chọn {{ui:Chọn hai điểm}} (hoặc nhấn {{key:M}}): nhấp giao điểm lưới để di chuyển từ đó, rồi giao điểm đến. Một đường viền nét đứt đi theo con trỏ.
- **Xoay trên mặt bằng:** nhập góc (ngược chiều kim đồng hồ, nhìn từ trên xuống) và chọn trục xoay: tâm của vùng chọn, hoặc một giao điểm lưới. Cột xoay theo khung.
- **Đối xứng:** chọn một đường lưới. Ảnh đối xứng là cùng tiết diện được xoay theo chiều ngược lại: thép chữ I giữ nguyên cánh, thép chữ C quay mặt khác (trên và dưới hoán đổi), và lỗ và cắt góc đi cùng chi tiết.
- Đánh dấu **Giữ bản gốc (tạo bản sao)** để giữ vùng chọn tại chỗ và di chuyển, xoay hoặc đối xứng một bản sao. Các liên kết của nó đi theo khi {{ui:Sao chép bản đầu và bản chân cột cùng cấu kiện}} được bật trong [Cài đặt DetailCraft](topic:settings).

Xoay quanh một đường thẳng đứng và đối xứng nằm trong một mặt phẳng đứng, nên các tầng vẫn phẳng và móng vẫn thẳng đứng.
