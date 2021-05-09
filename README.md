# Project `<GetWanted/>` 👩🏻‍💻💼📇
## 🖥 Project Summary
- 2021.04.26 ~ 2021.05.07 까지 2주 간 진행
- 국내 채용 사이트인 원티드 클론 프로젝트
- Front(이예원, 김도희, 정새미)와 Back(원재연, 정재유, 이병재) 총 6명의 팀원으로 구성

## 👩🏻‍💻 Front-end Work Details
### 이예원
- `Resume Storage`: 이력서 관리 페이지
    - PDF 파일 형식의 이력서 업로드 기능
    - 파일 삭제, 수정, PDF 다운로드 기능
    - 사이트 자체 이력서 불러오기 기능
    - 동적 라우팅 기능
- `Resume`: 이력서 작성 폼 페이지
    - 필수 개인 정보 자동 완성 기능
    - 경력 추가 / 삭제 기능
    - 임시 저장 / 작성 완료 시 관리 페이지 업데이트 기능 
- `Job Details`: 공고 상세 & 지원하기 페이지
    - 기업 사진 캐러셀 구현
    - 카카오 맵 api 이용, 해당 기업 지도 나타내기 구현
    - Aside 메뉴인 지원하기 기능 구현
        - 이미 지원한 공고 알람 기능
        - 이력서 메뉴에서 업로드/작성했던 이력서 불러오기 기능
        - 제출 할 파일 복수 선택 기능
    
### 김도희
- `nav` : 공통 컴포넌트 nav 바
    - 페이지 연결
    - 로그인 토큰 발행시 프로필 이미지 변경
    - 로그아웃 기능
    - 검색창 기능

- `JobList` : 메인페이지로 쓰인 공고리스트 페이지
    - 상세페이지 동적 라우팅 기능
    - 좋아요 클릭시 사용자 유저정보 post
    - nav 검색창 검색시 검색된 api 호출
    - 해쉬태그별 해당되는 api 호출
    - 페이지 무한스크롤 기능 구현 page 별 api 호출
    - 해쉬태그박스 모달창 구현

- `Application` : 지원현황 페이지
    - 토큰 확인시 진입 가능
    - 지원한 목록 중 검색 기능 구현
    - 상세페이지에서 지원하기 버튼 시 담아지는 api 데이터 호출
    - 

### 정새미
- `Login` : 로그인 페이지
    - 이메일 회원가입 여부에 따른 페이지 연결
    - 소셜로그인 가입 메일 중복 체크 알림 기능
    - 백엔드API와 통신하여 이메일로 비밀번호 재설정 기능 구현 fetch method patch
    - 조건부 렌더링을 통한 비밀번호 재설정 컴포넌트로 render
    - usehistory,uselocation을 이용하여 state에 이메일 값 전달
    - 로컬스토리지에 토큰 저장

- `Signup`
    - 조건부 렌더링을 통한 모달창 구현
    - map 함수를 이용하여 input 값 관리
    - input 태그 각각 마다 onFocus,onBlur 이벤트
    - 정규식 표현 만족시 회원가입 버튼 활성화
    - 각각의 정규식에 대한 조건문을 이용하여 alert

- `Social Login`
    - 카카오 로그인 기능 구현
    - Redirect URI 등록
    - JavaScript SDK 적용
    - window 객체에서 Kakao API 가져오기
    - Kakao.Auth.login 함수 이용
    - 카카오 사용자 토큰 백엔드 서버로 전달
    - 백엔드 서버에서 받아온 새로운 토큰 로컬스토리지에 저장
    - 테스트를 위한 연결 끊기 기능 추가

## 🔧 Skills
- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## 🔧 Tools
- <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
- <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
- <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
- <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" />
- <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/>
- <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
## ✏️ Blogs
- 이예원 : https://jessywlee.medium.com
- 김도희 : https://velog.io/@_dodo_hee
- 정새미 : https://velog.io/@sammy1101

## ✏️ References
- 이 프로젝트는 를 참고하여 학습용으로 작업 되었습니다.
- 이 프로젝트에서 사용된 모든 무료 이미지는 Unsplash에서 가져왔습니다.
