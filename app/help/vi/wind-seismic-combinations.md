---
title: Tổ hợp gió, địa điểm động đất và ASCE 7
summary: Tạo trường hợp tải gió cho công trình kín, cứng, xác định giá trị thiết kế động đất cho địa điểm và tạo tổ hợp ASCE 7, trong thẻ Phân tích.
keywords: gió, tải gió, asce 7, phương pháp hướng, địa hình, mức độ kín, động đất, loại địa điểm, ss, s1, sds, sd1, usgs, phổ thiết kế, tổ hợp tải, lrfd, asd, kzt, kd, hệ số giật
from: 676fcbf3
---

Ba khối trong thẻ {{ui:Analysis}} tạo đầu vào gió và động đất cho một khung và tổ hợp chúng: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} và {{ui:ASCE 7 load combinations}}. Đây là công cụ hỗ trợ: **không phải kiểm tra theo tiêu chuẩn; kỹ sư của bạn xem xét kết quả.**

## Bạn sẽ làm gì

Tạo trường hợp tải gió cho một công trình kín, cứng, lấy giá trị động đất cho một địa điểm, và tạo các tổ hợp dùng chúng. Mô hình cần có các sàn, nên hãy chạy phân tích trước (xem [Nội lực, phản lực và độ võng](topic:frame-analysis)).

## Các bước

1. Mở thẻ {{ui:Analysis}} và chọn {{ui:Run}}, để biết các sàn và kích thước công trình. Nếu một khối báo không có sàn, chọn {{ui:Find floors}} trong khối đó.
2. Trong {{ui:Wind loads (ASCE 7 directional procedure)}}, chọn {{ui:Edition}}, nhập {{ui:Basic wind speed V}} từ bản đồ gió của bạn và chọn {{ui:Speed unit}}, sau đó là {{ui:Exposure}} và {{ui:Enclosure}}. Kzt, Kd, G, cao độ mặt đất, Cp phía khuất gió, độ lệch tâm và hướng cũng có ở đó.
3. Đọc áp lực tại mỗi sàn và lực trên mỗi sàn trong bảng, rồi chọn {{ui:Make wind cases}}. Các trường hợp là +X, -X, +Y và -Y.
4. Trong {{ui:Seismic site and system (ASCE 7)}}, chọn phiên bản và nhập Ss và S1 (SMS, SM1 và S1 cho ASCE 7-22), loại địa điểm từ A đến D, nhóm rủi ro và hệ kết cấu chịu lực động đất. Hoặc nhập vĩ độ và kinh độ rồi chọn {{ui:Look up from USGS (online)}}; dịch vụ trực tuyến chỉ được hỏi khi bạn nhấn nút.
5. Đọc Fa, Fv, SDS và SD1, R, Cd và Omega0 cùng phổ thiết kế, rồi chọn {{ui:Use in the Seismic block}}. Nhấn {{ui:Make seismic cases}} trong khối động đất (xem [Kiểm tra cấu kiện bê tông và tạo tải động đất](topic:concrete-and-seismic)).
6. Trong {{ui:ASCE 7 load combinations}}, chọn {{ui:Method}} (LRFD hoặc ASD) và chọn {{ui:Make ASCE 7 combinations}}. Chạy phân tích lại.

## Điều cần biết

- Gió: chỉ dành cho công trình kín, cứng, theo phương pháp hướng. Công trình mềm cần hệ số giật từ tiêu chuẩn, mà DetailCraft không tạo.
- Loại địa điểm E và F cần khảo sát địa điểm và chưa được xây dựng.
- Một danh sách nguồn ở cuối các khối cho biết mỗi số lấy từ đâu và những gì đã bị bỏ qua.
- Tra cứu USGS đã được kiểm thử trên một dịch vụ thay thế, không phải dịch vụ trực tuyến thật.
