---
title: Thao tác phím và chuột
summary: Mọi phím tắt, thao tác chuột, bàn di chuột và cảm ứng trong DetailCraft, lấy từ mã nguồn.
keywords: bàn phím, phím tắt, phím nóng, phím, chuột, bàn di chuột, cảm ứng, ctrl, command, bảng tra nhanh
from: 05a2dea0
---

Cách viết phím trong trợ giúp này: [Phím, chuột và bàn di chuột](common:keys). Trên Mac, {{key:Mod}} là phím Command; ở nơi khác là Ctrl.

## Công cụ

Các phím này hoạt động khi con trỏ không nằm trong ô văn bản hoặc ô số.

| Phím | Tác dụng |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:B}} | {{ui:Beam}} |
| {{key:C}} | {{ui:Column}} |
| {{key:R}} | {{ui:Brace}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Footing}} |
| {{key:S}} | {{ui:Stair}} |
| {{key:M}} | Di chuyển vùng chọn bằng cách chọn hai giao điểm lưới ([Chọn bằng khung, di chuyển, xoay, đối xứng, thay đổi nhiều](topic:select-and-change)) |
| {{key:Esc}} | Thả khung chọn đang kéo, hoặc đặt lại các cấu kiện đang kéo; hủy một lệnh di chuyển, điểm đầu của dầm, thanh giằng hoặc bản, hoặc một lần dán; nhấn lại để quay về {{ui:Select}}; trong {{ui:Select}}, xóa vùng chọn. Khi menu {{ui:More}} đang mở, đóng nó |
| {{key:Delete}} hoặc {{key:Backspace}} | Xóa vùng chọn (mọi thứ đã chọn, trong một bước hoàn tác) |

## Tệp và chỉnh sửa

| Phím | Tác dụng |
|---|---|
| {{key:Mod+S}} | Lưu mô hình (tải xuống). Hoạt động ngay cả khi đang gõ trong ô |
| {{key:Mod+O}} | Mở mô hình. Hoạt động ngay cả khi đang gõ trong ô |
| {{key:Mod+Z}} | Hoàn tác (ngoài ô văn bản; trong ô văn bản thì hoàn tác phần bạn vừa gõ) |
| {{key:Mod+Y}} hoặc {{key:Mod+Shift+Z}} | Làm lại |

## Sao chép và dán

Các phím này hoạt động khi con trỏ không nằm trong ô văn bản hoặc ô số (ở đó, chúng sao chép, dán và chọn văn bản của bạn như thường lệ). Mỗi lần dán, cắt, nhân bản hoặc xóa là một bước hoàn tác. Thêm: [Sao chép, dán và nhân bản](topic:copy-paste).

| Phím | Tác dụng |
|---|---|
| {{key:Mod+C}} | {{ui:Copy}} các thanh và móng đã chọn (kèm lỗ, cắt góc và liên kết của chúng) |
| {{key:Mod+X}} | {{ui:Cut}}: sao chép vùng chọn, rồi xóa nó |
| {{key:Mod+V}} | {{ui:Paste}}: bản sao đi theo con trỏ; nhấp vào một giao điểm lưới để đặt nó |
| {{key:Mod+Shift+V}} | {{ui:Paste in place}}: tại tọa độ nơi nó đã được sao chép |
| {{key:Mod+D}} | {{ui:Duplicate}}: tạo ngay một bản sao, được dời theo độ lệch trong [Cài đặt DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Select all}}: mọi thanh, liên kết và móng |
| {{key:Esc}} | {{ui:Select none}} |

Nếu bạn đã chọn văn bản trên trang (ví dụ trong một bảng báo cáo) và không có gì trong mô hình, {{key:Mod+C}} sao chép văn bản như thường lệ.

{{ui:New}}, {{ui:Sample}} và các lệnh xuất không có phím tắt; dùng thanh công cụ.

Không phím nào trong số này có tác dụng khi một hộp thoại (bản xem trước bản vẽ thi công xưởng hoặc một câu hỏi) đang mở.

## Ô nhập và bảng

| Phím | Tác dụng |
|---|---|
| {{key:Enter}} hoặc {{key:Tab}} | Áp dụng giá trị đã gõ (mỗi thay đổi là một bước hoàn tác) |
| {{key:Enter}} trong ô {{ui:Grids}}, {{ui:Levels}}, {{ui:Custom profile}}, lỗ hoặc cắt góc | Giống như chọn nút của biểu mẫu đó |
| {{key:Left}} {{key:Right}} | Di chuyển giữa các thẻ {{ui:Problems}}, {{ui:Bill of materials}} và {{ui:Bending schedule}} khi một thẻ đang có tiêu điểm |
| {{key:Esc}} | Đóng bản xem trước bản vẽ thi công xưởng hoặc một hộp thoại câu hỏi (giống {{ui:Cancel}}) |

## Màn hình và trợ giúp

| Phím | Tác dụng |
|---|---|
| {{key:Ctrl+Shift+F}} | Chuyển vòng qua: bình thường, toàn màn hình, toàn màn hình với các thanh bị ẩn. Ctrl trên mọi máy tính, kể cả Mac |
| {{key:Mod+,}} | Mở {{ui:Settings}} ([Cài đặt DetailCraft](topic:settings)) |
| {{key:Esc}} | Thoát toàn màn hình |
| {{key:F1}} | Mở trợ giúp này |

## Chuột

| Thao tác | Trong 3D | Trong Mặt bằng và Mặt đứng |
|---|---|---|
| Nhấp | Chọn một cấu kiện, hoặc đặt tại giao điểm gần nhất khi công cụ đặt đang bật (hoặc dán tại đó khi đang dán) | Giống vậy |
| {{key:Shift}}, {{key:Ctrl}} hoặc {{key:Mod}} và nhấp | Thêm cấu kiện vào vùng chọn, hoặc bỏ ra | Giống vậy |
| Nhấn lên một cấu kiện đã chọn và kéo | Di chuyển vùng chọn qua tầng; khi giữ {{key:Mod}}, di chuyển lên và xuống | Di chuyển vùng chọn (trong mặt đứng: dọc theo nó và lên xuống) |
| Kéo bằng nút trái | Xoay mô hình | Với {{ui:Select}}: khung chọn (sang phải: nằm hoàn toàn bên trong; sang trái: chạm vào). Khi đang đặt: di chuyển khung nhìn |
| {{key:Shift}} và kéo bằng nút trái | Với {{ui:Select}}: khung chọn, thêm vào vùng chọn. Khi đang đặt: di chuyển khung nhìn | Với {{ui:Select}}: khung chọn, thêm vào vùng chọn |
| {{key:Ctrl}} hoặc {{key:Mod}} và kéo bằng nút trái | Di chuyển khung nhìn | Không có gì |
| Kéo bằng nút phải | Di chuyển khung nhìn | Di chuyển khung nhìn |
| Con lăn | Thu phóng về phía giữa khung nhìn | Thu phóng |
| Kéo bằng nút giữa | Thu phóng | Với {{ui:Select}}: di chuyển khung nhìn. Nếu không thì thu phóng |
| Thả tệp `.detailcraft.json` vào ứng dụng | Mở tệp | Mở tệp |

Một lần nhấp chỉ được tính nếu con trỏ di chuyển ít hơn khoảng 5 điểm ảnh giữa lúc nhấn và lúc thả; di chuyển dài hơn là một lần kéo.

## Bàn di chuột

| Thao tác | Tác dụng |
|---|---|
| Vuốt lên hoặc xuống bằng hai ngón tay, hoặc chụm | Thu phóng |
| Nhấn và kéo | Xoay (3D) hoặc di chuyển (Mặt bằng và Mặt đứng) |
| {{key:Shift}} và nhấn và kéo | Di chuyển trong 3D |
| Nhấp bằng hai ngón tay | Nhấp chuột phải (không có menu trong khung nhìn) |

## Cảm ứng

Trên máy tính bảng hoặc màn hình cảm ứng:

| Thao tác | Tác dụng |
|---|---|
| Chạm | Chọn một cấu kiện, hoặc đặt tại giao điểm lưới gần nhất khi công cụ đặt đang bật (một lần chạm trong khoảng bề rộng ngón tay tính) |
| Nhấn giữ lên một cấu kiện | Thêm vào vùng chọn, hoặc bỏ ra (việc mà {{key:Shift}}+nhấp làm với chuột) |
| Một ngón tay trên cấu kiện đã chọn, rồi kéo | Di chuyển vùng chọn, bắt vào các giao điểm lưới |
| Một ngón tay ở nơi khác | Xoay mô hình (3D) hoặc di chuyển khung nhìn (Mặt bằng và Mặt đứng) |
| Hai ngón tay | Chụm để thu phóng, di chuyển cùng nhau để di chuyển khung nhìn |

Nút, danh sách và ô nhập lớn hơn khi màn hình chỉ có cảm ứng. Khung chọn cần chuột; với ngón tay, dùng chạm và nhấn giữ.

## Phím do trình duyệt giữ lại

Một số phím tắt thuộc về trình duyệt và không trang nào dùng được, ví dụ {{key:Mod+W}} (đóng thẻ), {{key:Mod+T}} (thẻ mới) và {{key:Mod+N}} (cửa sổ mới). Nếu {{key:Mod+Y}} mở lịch sử trình duyệt thay vì làm lại, dùng {{key:Mod+Shift+Z}}.

Phím tắt chỉ đến được DetailCraft khi trang có tiêu điểm bàn phím. Nếu một phím không làm gì, hoặc trình duyệt xử lý nó thay, trước tiên nhấp vào một vùng trống của cửa sổ DetailCraft (ví dụ sau khi gõ trong thanh địa chỉ).

## Lệnh Di chuyển nằm ở đâu

Không có lệnh Di chuyển: chọn một cấu kiện và kéo nó qua tầng (giữ {{key:Mod}} để kéo lên và xuống), hoặc sửa {{ui:Start}} và {{ui:End}} trong {{ui:Properties}}.
