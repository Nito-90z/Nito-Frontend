# Nito

> **프론트엔드 프로젝트 캠프: Next.js 3기 과정에서 진행한 똑똑한 개발자 기업 연계 프로젝트**  
> **개발 기간 : 2024.10.08 ~ 2024.11.01**

<br/>

## 👨‍👨‍👦‍👦 팀 소개

<div align="center">

|   <img src="https://github.com/GangHub1970.png" width="100">   |   <img src="https://github.com/yungiy.png" width="100">   |
| :------------------------------------------------------------: | :-------------------------------------------------------: |
|                               윤강(팀장)                         |                          양윤기                             |
|         [GangHub1970](https://github.com/GangHub1970)          |         [yungiy](https://github.com/yungiy)               |
| 회원가입 <br> 상품 리스트 조회 <br> 찜하기, 알림 설정 <br> 검색 <br> 퍼블리싱 |                  마이페이지 <br> 퍼블리싱                     |

</div>

<br/>

## 👀 서비스 소개

<div align="center">
  <img width="160" alt="회원가입" src="https://github.com/user-attachments/assets/70db6198-ca5d-4235-b2e1-f3fbec985468">
  <img width="160" alt="상품 리스트" src="https://github.com/user-attachments/assets/c99c42ea-5fd1-4a40-8037-df2f91322502">
  <img width="160" alt="찜한 상품 리스트" src="https://github.com/user-attachments/assets/dcbcac5f-d273-41c6-be9b-343133cfdc65">
  <img width="160" alt="검색" src="https://github.com/user-attachments/assets/1497402c-0220-45d7-9776-4d0b3dcda438">
  <img width="160" alt="니토 사용법" src="https://github.com/user-attachments/assets/ffca2577-8c22-4fb5-b8b7-3dfc68d5b9e2">
</div>

크롤링한 아마존 상품 데이터를 기반으로 역대최저가, 할인율 및 평균가 등의 가격 정보를 제공하여 사용자가 합리적인 소비를 할 수 있게 도움을 주는 서비스입니다.

<br/>

## 🚀 주요 기능

### 회원가입

- 사용자는 필수 약관 동의와 닉네임 입력으로 간단하게 회원가입을 할 수 있습니다.
- `access token`과 `refresh token`을 사용해 사용자의 정보를 안전하게 보호하고, 백그라운드에서 refresh를 진행함으로써 자동 로그인 연장 기능을 제공합니다.

### 상품 리스트 조회

- 사용자는 아마존의 상품을 카테고리 및 각종 필터를 적용해서 조회할 수 있습니다.
- 무한 스크롤을 사용하여 추가 데이터를 요청할 수 있습니다.

### 찜하기

- 사용자는 자신이 가격 정보를 더 살펴보고 싶은 상품을 찜할 수 있고, 찜한 상품을 삭제할 수 있습니다.
- 찜한 상품은 별도의 페이지에서 관리되며 해당 페이지 또한 각종 필터를 적용할 수 있습니다.

### 검색

- 사용자는 키워드를 사용해 상품을 검색할 수 있습니다.

### 마이페이지

- 사용자는 마이페이지에서 닉네임을 확인할 수 있고, 이용 약관 등을 살펴볼 수 있습니다.

<br/>

## 📌 구현 코드

### 회원가입 페이지 - 리다이렉트

<table align="center">
  <tr>
    <th>리다이렉트를 위한 middleware</th>
  </tr>
  <tr>
    <td><img width="300" alt="미들웨어 코드" src="https://github.com/user-attachments/assets/03bfe719-1f2a-4d6c-bd3e-93f870e55bab"></td>
  </tr>
</table>

- Next.js의 `middleware`를 사용해서 접근 권한이 없는 사용자가 권한이 필요한 페이지에 접근 시 회원가입 페이지로 리다이렉트 시켰습니다.
- 리다이렉트 과정에서 접근한 페이지의 URL을 `callbackUrl` 이라는 키를 가지는 query parameter로 넘겨주어 로그인 성공 시 해당 페이지로 리다이렉트 시켜주었습니다.

</br>

### Prefetch

<table align="center">
  <tr>
    <th colspan="2">추천 닉네임</th>
    <th colspan="2">카테고리</th>
  </tr>
  <tr>
    <th>적용 전</th>
    <th>적용 후</th>
    <th>적용 전</th>
    <th>적용 후</th>
  </tr>
  <tr>
    <td><img alt="미들웨어 코드" src="https://github.com/user-attachments/assets/5b9dae84-20a5-4b55-9d88-50a77a82b2c4"></td>
    <td><img alt="미들웨어 코드" src="https://github.com/user-attachments/assets/d061a274-7273-4e19-b1f1-c8df1c838c0a"></td>
    <td><img alt="미들웨어 코드" src="https://github.com/user-attachments/assets/3ec11f59-70fb-4959-82c7-dd2ffa352adf"></td>
    <td><img alt="미들웨어 코드" src="https://github.com/user-attachments/assets/804f9715-29cf-4ae3-bbea-99e8d1e407cd"></td>
  </tr>
</table>

- react-query의 `prefetch`와 `hydration`을 사용해서 데이터를 서버 사이드에서 받아오고 클라이언트 컴포넌트에서 사용함으로써 로딩 시간을 줄이고 더욱 좋은 사용자 경험을 제공하였습니다.
- 추천 닉네임 : 새로고침 이후 placeholder가 나타났다가 데이터 패칭 후 추천 닉네임 입력 -> 새로고침 직후 데이터가 포함된 상태로 렌더링
- 카테고리 : 무한 스크롤로 카테고리 데이터 추가 요청 -> 카테고리를 미리 가져와서 추가 데이터 요청 없이 카테고리 사용 가능 (20개씩 3페이지 이내의 데이터이고, 자주 변경되는 데이터가 아니라고 판단하여 다음과 같이 구현)

</br>

### 서버 사이드 렌더링에서의 Suspense

<table align="center">
  <tr>
    <th>SSRSafeSuspense 구현</th>
    <th>SSRSafeSuspense 적용</th>
  </tr>
  <tr>
    <td><img alt="SSRSafeSuspense 구현" src="https://github.com/user-attachments/assets/f05b951e-c45b-45f4-920f-ba81ace53402"></td>
    <td><img alt="SSRSafeSuspense 적용" src="https://github.com/user-attachments/assets/813cfdf2-6f42-4a5c-ac81-82e94c06831f"></td>
  </tr>
</table>

- 상품 상세 페이지의 로딩을 Suspense를 사용해서 선언적으로 처리했습니다.
- Next.js에서 초기 렌더링의 서버 사이드 렌더링 시에 쿠키값을 제대로 읽어오지 못하는 에러가 있어서 마운트 상황에 따라 suspense를 적용시켜 데이터 요청을 막아주는 `SSRSafeSuspense`를 구현하여 권한 에러를 해결했습니다.

</br>

### 상품 리스트 커스텀 훅

<table align="center">
  <tr>
    <th>SSRSafeSuspense 구현</th>
    <th>SSRSafeSuspense 적용</th>
  </tr>
  <tr>
    <td><img alt="상품 리스트 커스텀 훅" src="https://github.com/user-attachments/assets/ae696bbb-8888-4e0a-aceb-ceabde8b3c14"></td>
    <td><img alt="상품 상태 업데이트 커스텀 훅" src="https://github.com/user-attachments/assets/b4c58bb3-386e-4e87-a103-36816341d4c2"></td>
  </tr>
</table>

- 상품 리스트 데이터 요청 함수를 커스텀 훅으로 구현하여 재사용했습니다.
- 상품 상태 업데이트(찜하기, 알림 설정)의 경우 다양한 페이지에서 사용되므로 `queryKey`를 매개변수로 받아 해당 페이지에서 사용되는 데이터를 적절히 업데이트 시켜주었습니다.

<br/>

### Modal과 Toast

<table align="center">
  <tr>
    <th>Modal Portal</th>
    <th>Modal</th>
    <th>모달 사용</th>
  </tr>
  <tr>
    <td><img alt="Modal Portal 구현 코드" src="https://github.com/user-attachments/assets/32775587-f2ae-40bc-9686-bf11beb82675"></td>
    <td><img alt="Modal 구현 코드" src="https://github.com/user-attachments/assets/c6efcfb8-d09b-4e83-91d2-cb5d291e1d2c"></td>
    <td><img alt="모달 사용 코드" src="https://github.com/user-attachments/assets/008a5d32-53b7-468d-8abb-717da67ff447"></td>
  </tr>
</table>

- 모달과 토스트의 경우 react의 `Portal`을 사용해 구현해 코드 반복을 줄이고, 일정한 레이아웃을 적용시켜주었습니다.
- `Modal`과 `Toast` 컴포넌트로 모달이 가지는 기본 디자인을 적용시켜주었습니다.
- 모달과 토스트의 상태를 전역 상태로 관리하며 사용 시에는 콘텐츠만 포함하여 사용할 수 있게 구현했습니다.

</br>

## 🗂️ 디렉토리 구조

```
📦 src
┣ 📂 app - 페이지와 관련된 파일, route handler
┣ 📂 assets
┣ 📂 components
┣ 📂 constants
┣ 📂 contexts
┣ 📂 css
┣ 📂 fetchers - client <-> route handler
┣ 📂 hooks
┣ 📂 libs
┣ 📂 models
┣ 📂 services - route handler <-> backend
┣ 📂 stores
┣ 📂 utils
┗ 📜 middleware.ts - Next.js 미들웨어
```

- 클라이언트에서 백엔드로 직접 데이터를 요청하는 것보다 `route handler`를 거쳐 데이터를 요청하는 것이 백엔드의 API 엔드포인트를 노출하지 않고, 보안적으로 안전하다고 판단하여 route handler를 거쳐 데이터를 요청했습니다.
- client에서 route handler로의 요청 함수를 `fetchers` 폴더에서
- route handler에서 backend로의 요청 함수를 `services` 폴더에서 관리했습니다.

<br/>
