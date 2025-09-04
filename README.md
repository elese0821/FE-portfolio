# FE-portfolio

### 배포 
`https://wy-fe-portfolio.vercel.app/`

### 사용스택
git + 소스트리

### 초기세팅
Vite + React + TypeScript + SWC + Tailwind + ESLint + Prettier

npm i -D tailwindcss @tailwindcss/vite
npx tailwindcss init

npm install -g pnpm

테일윈드 세팅까지 완료`https://tailwindcss.com/docs/installation/using-vite`


Monorepo


속도, 용량 최강 → 설치할 때 중복 패키지를 디스크에 한 번만 저장하고 링크만 걸어줌.
대규모 프로젝트/모노레포에서 특히 효율적.
설치 속도가 npm, yarn보다 훨씬 빠름.
node_modules가 깔끔하게 관리됨.

일부 스크립트/라이브러리에서 pnpm 호환성 이슈
CI/CD 환경에서 팀원들이 pnpm 설치해야 해서 세팅 조금 번거로움.
생태계 문서/예제가 npm, yarn보다 적음.










```markdown
# Admin Dashboard (B2B 관리 웹)

React 기반 최신 스택으로 구현한 **관리자 대시보드 프로젝트**입니다.  
B2B 환경에서 자주 사용하는 **로그인, 대시보드, CRUD, 차트, 테이블** 기능을 단기간에 구현하여  
React 및 최신 프론트엔드 트렌드에 대한 이해도를 보여주기 위한 포트폴리오 프로젝트입니다.

---

## 🚀 주요 기능

### ✅ 1차 완성 (7일 목표)
- **인증/사용자 관리**
  - JWT 기반 Mock API 로그인
  - 사용자 정보 조회
- **대시보드**
  - 매출 추이 차트
  - 사용자 증가 추이 차트
  - 사용자 리스트 테이블 (검색/정렬 지원)
- **CRUD 기능**
  - 고객 관리 (목록, 추가, 수정, 삭제)
- **UI/UX**
  - 반응형 레이아웃
  - 다크 모드 지원

### 🔥 2차 확장 (추가 예정)
- Electron 패키징 (윈도우 앱)
- 다국어(i18n) 지원
- 대시보드 위젯 드래그 앤 드롭
- 실시간 알림 (WebSocket)

---

## 🛠️ 기술 스택

- **Framework**: React 18 + Vite  
- **Language**: TypeScript  
- **상태 관리**:  
  - 서버 상태 → TanStack Query  
  - 클라이언트 상태 → Zustand  
- **UI**: TailwindCSS + shadcn/ui  
- **Form**: React Hook Form + Zod  
- **Charts**: Recharts  
- **Code Style**: ESLint + Prettier  
- **Collaboration**: GitHub, Notion  

---

## 📂 프로젝트 구조

```

src/
├─ api/               # API 함수들
│   └─ user.ts
│   └─ customer.ts
│
├─ components/        # 재사용 컴포넌트
│   └─ Chart.tsx
│   └─ Table.tsx
│   └─ Layout.tsx
│
├─ features/          # 도메인 단위
│   ├─ auth/
│   │   └─ LoginForm.tsx
│   ├─ dashboard/
│   │   └─ DashboardPage.tsx
│   ├─ customers/
│   │   ├─ CustomerList.tsx
│   │   ├─ CustomerForm.tsx
│   │   └─ CustomerDetail.tsx
│
├─ hooks/             # 커스텀 훅
│   └─ useAuth.ts
│
├─ store/             # Zustand 스토어
│   └─ authStore.ts
│
├─ pages/             # 라우팅 페이지
│   └─ Login.tsx
│   └─ Dashboard.tsx
│
├─ App.tsx
└─ main.tsx

````

---

## ⚡ 실행 방법

```bash
# 1. 프로젝트 클론
git clone https://github.com/your-username/admin-dashboard.git

# 2. 디렉토리 이동
cd admin-dashboard

# 3. 패키지 설치
npm install

# 4. 로컬 실행
npm run dev
````

---

## 🗓️ 개발 일정 (7일 플랜)

| Day | 목표                                                            |
| --- | ------------------------------------------------------------- |
| 1일차 | 프로젝트 세팅 (Vite + TS + Tailwind + ESLint/Prettier) / GitHub 초기화 |
| 2일차 | 로그인/회원 관리 기능 구현                                               |
| 3일차 | 대시보드 레이아웃 & 차트 2개 구현                                          |
| 4일차 | 테이블 컴포넌트 & 사용자 리스트 CRUD                                       |
| 5일차 | Zustand 상태 관리 + React Query 연동                                |
| 6일차 | 반응형 레이아웃 + 다크 모드                                              |
| 7일차 | 테스트, 코드 리팩토링, 문서화 (Notion + README)                           |

---

## 📌 협업 툴

* GitHub: 코드 관리 및 PR 리뷰
* Notion: 일정/기능 정의/아키텍처 정리

---

## 📄 라이선스

MIT License


