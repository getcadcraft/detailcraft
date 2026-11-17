---
title: Sao chép, dán và nhân bản
summary: Chọn nhiều cấu kiện, sao chép cùng lỗ, lỗ khoét và liên kết, rồi dán vào giao điểm lưới, theo độ dời, tại chỗ hoặc trong thẻ khác. Cắt, nhân bản, xóa và chọn tất cả.
keywords: sao chép, dán, cắt, nhân bản, bộ nhớ tạm, dán tại chỗ, chọn tất cả, bỏ chọn, chọn nhiều, shift nhấp chuột, nhiều, lặp lại một ô, sao chép một khung, độ dời, xóa nhiều, menu chỉnh sửa, menu thêm
from: f25f1829
---

Nhóm {{ui:Edit}} trên thanh công cụ có {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} và {{ui:Paste}}. Menu {{ui:More}} của nó chứa phần còn lại: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} và {{ui:Select none}}, mỗi mục kèm phím tắt. Nút hoặc mục menu không thể thực hiện lúc này sẽ bị làm mờ; di chuột lên để đọc lý do (ví dụ "chưa sao chép gì").

Mỗi lần dán, cắt, nhân bản và xóa là một bước: một lần {{key:Mod+Z}} sẽ hoàn tác tất cả.

## Chọn nhiều cấu kiện

- Nhấp vào một cấu kiện để chọn nó. Giữ {{key:Shift}} (hoặc {{key:Ctrl}}, hoặc {{key:Mod}}) và nhấp thêm cấu kiện để thêm vào vùng chọn; nhấp vào cấu kiện đã chọn theo cách tương tự để bỏ nó khỏi vùng chọn.
- {{key:Mod+A}} hoặc {{ui:Select all}} chọn mọi thanh, mối nối và móng.
- {{key:Esc}} hoặc {{ui:Select none}} xóa vùng chọn.

Khi có nhiều thứ được chọn, bảng {{ui:Properties}} có tiêu đề "4 đã chọn" (hoặc số khác) và liệt kê các cấu kiện theo loại, các mối nối, các móng và tổng trọng lượng thép, cùng các nút {{ui:Copy}}, {{ui:Duplicate}} và {{ui:Delete}}.

## Sao chép

1. Chọn các cấu kiện và móng bạn muốn.
2. Chọn {{ui:Copy}} hoặc nhấn {{key:Mod+C}}.

Những gì được sao chép theo:

- Mỗi cấu kiện đầy đủ: tiết diện, vật liệu, hai đầu, vị trí, góc xoay, tên, lỗ và lỗ khoét. Tiết diện tùy chỉnh mà nó dùng cũng được sao chép.
- Mỗi móng đầy đủ: kích thước, bê tông, lưới đáy và thép chờ.
- Bản đầu và bản chân cột, nhưng chỉ khi mọi cấu kiện mà một mối nối liên kết đều được sao chép: bản đầu của dầm cần có dầm và cột của nó. Thanh trạng thái cho biết có bao nhiêu mối nối bị bỏ lại. Để bỏ mối nối có chủ ý, bỏ chọn **Sao chép bản đầu và bản chân cột cùng với cấu kiện** trong [cài đặt DetailCraft](topic:settings).

Một mối nối riêng lẻ không thể sao chép; thay vào đó hãy chọn các cấu kiện của nó. Để áp dụng cùng liên kết cho các khớp khác, dùng {{ui:Similar}} (xem [Bản đầu](topic:end-plates#copy-it-to-every-similar-joint)).

Bản sao vẫn nằm trong trình duyệt này cho đến khi bạn sao chép thứ khác. Một thẻ hoặc cửa sổ DetailCraft khác trong cùng trình duyệt có thể dán nó, nên bạn có thể sao chép một khung từ mô hình này rồi dán vào mô hình khác.

## Dán vào giao điểm lưới

1. Chọn {{ui:Paste}} hoặc nhấn {{key:Mod+V}}.
2. Di chuyển con trỏ lên khung nhìn. Một đường viền nét đứt của bản sao sẽ đi theo giao điểm lưới gần con trỏ nhất.
3. Nhấp vào một giao điểm. Điểm gốc của bản sao (góc thấp nhất của nó: giá trị x, y và z nhỏ nhất trong mọi thứ được sao chép) sẽ đặt tại đó.

Các cấu kiện vừa dán sẽ được chọn sau đó, nên bạn có thể dán lại ở nơi khác hoặc chỉnh sửa chúng. {{key:Esc}} hủy việc dán; bản sao vẫn nằm trong bộ nhớ tạm. {{ui:Plan}} và {{ui:Elevation}} giúp nhắm đúng giao điểm dễ hơn.

:::tip
Để lặp lại một ô, chọn các cấu kiện của ô đó (hoặc mọi thứ bằng {{key:Mod+A}}), sao chép, dán, rồi nhấp vào giao điểm cách một ô dọc theo từ vị trí góc thấp nhất của bản sao.
:::

## Dán bằng bàn phím

Khi đang dán, bảng {{ui:Properties}} hiển thị nội dung bộ nhớ tạm và hai biểu mẫu:

- {{ui:Paste by offset (mm, from the original)}}: nhập x, y và z rồi chọn {{ui:Paste at this offset}}. Ban đầu nó lấy độ dời từ [cài đặt DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: chọn một lưới chữ, một lưới số và một cốt, rồi chọn {{ui:Paste here}}. Điểm gốc sẽ đặt tại đó.

## Dán tại chỗ

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) đặt bản sao đúng tọa độ mà nó đã được sao chép từ đó. Dùng sau {{ui:Cut}}, hoặc để đưa cấu kiện từ mô hình khác vào cùng vị trí. Nếu bản gốc vẫn còn, bản sao sẽ nằm chồng lên chúng và thanh trạng thái sẽ cảnh báo: di chuyển các bản sao theo {{ui:Start}} và {{ui:End}} trong {{ui:Properties}}, hoặc hoàn tác.

## Nhân bản

{{ui:Duplicate}} ({{key:Mod+D}}) sao chép vùng chọn và dán ngay, dời theo độ dời trong [cài đặt DetailCraft](topic:settings) (ban đầu là 6000 mm theo trục x). Nó không thay đổi nội dung bộ nhớ tạm. Các bản sao được chọn sau đó, nên nhấn {{key:Mod+D}} lần nữa sẽ tạo bản tiếp theo từ chúng.

## Cắt và xóa

- {{ui:Cut}} ({{key:Mod+X}}) sao chép vùng chọn rồi xóa nó. Dán nó vào đúng chỗ.
- {{ui:Delete}} ({{key:Delete}} hoặc {{key:Backspace}}) xóa vùng chọn. Xóa một cấu kiện cũng xóa các mối nối của nó.

## Số hiệu sau khi dán

Ký hiệu cấu kiện và ký hiệu lắp ráp không bao giờ được lưu trữ; DetailCraft đánh số lại từ mô hình sau mỗi thay đổi ([Cách đặt ký hiệu](topic:mark-rules)). Vì vậy:

- Bản sao giống hệt bản gốc (cùng tiết diện, cấp, chiều dài cắt, lỗ và lỗ khoét) sẽ dùng chung ký hiệu của bản gốc, và số đếm trong {{ui:Part marks}} cùng bảng khối lượng sẽ tăng.
- Bản sao khác đi sẽ có ký hiệu riêng. Ví dụ, một dầm được dán mà không có bản đầu sẽ không bị cắt lại, nên là một cấu kiện khác. Ký hiệu được đánh số lại trên toàn bộ mô hình, nên số của các cấu kiện khác cũng có thể thay đổi.

Mỗi cấu kiện, lỗ, lỗ khoét, mối nối và móng được dán đều nhận một mã định danh mới, nên không có gì trong mô hình được dùng chung giữa bản sao và bản gốc.

## Nếu bộ nhớ tạm bị từ chối

Nội dung bộ nhớ tạm được kiểm tra kỹ như một tệp mô hình khi bạn mở: mục nào không phải cấu kiện DetailCraft hợp lệ sẽ bị bỏ, và thanh trạng thái cho biết. Bộ nhớ tạm do DetailCraft mới hơn hoặc nguồn khác tạo ra sẽ bị từ chối kèm thông báo và không có gì được dán. Nếu cửa sổ riêng tư không thể lưu bản sao trong bộ nhớ trình duyệt, bản sao vẫn hoạt động trong thẻ đó.
