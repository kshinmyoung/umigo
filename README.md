# UMiGo (움이고) — 「움이를 찾아라」
2026 영남신학대학교 교수학습지원센터(CTL) 성과공유회 The UM Festival 캠퍼스 GPS·QR 게임.

| 주소 | 용도 |
|---|---|
| `/` (index.html) | 학생용 게임 |
| `/board.html` | 2층 세미나실 순위판 (프로젝터, 전체 화면) |
| `/admin.html` | 운영자: 경품 지급, 설정, 스테이션 좌표 |
| `/print.html` | 스테이션 QR 포스터 인쇄 (운영자 PIN 필요) |
| `/survey.html` | 스테이션 위치 답사 도구 |

- 기록: Supabase (`umigo` 스키마, `public.umigo_*` RPC). 브라우저는 RPC만 호출하고, QR 코드·퀴즈 정답은 서버에만 있어 이 저장소가 공개여도 보이지 않습니다.
- 지도: Leaflet + CARTO Voyager 타일. QR 인식: BarcodeDetector 또는 jsQR.
