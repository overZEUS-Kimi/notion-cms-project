# 개인 개발 블로그 PRD (Product Requirements Document)

## 1. 프로젝트 개요

### 프로젝트명
개인 개발 블로그

### 목적
Notion을 CMS(Content Management System)로 활용하여 개인 기술 블로그를 운영하는 웹 애플리케이션

### CMS 선택 이유
- Notion 데이터베이스에서 글을 작성하면 자동으로 블로그에 반영되는 간편한 콘텐츠 관리
- 별도의 관리자 대시보드 구축 없이 Notion의 직관적인 인터페이스 활용
- 낮은 운영 비용으로 안정적인 콘텐츠 관리 가능

---

## 2. 주요 기능

### 2.1 핵심 기능
1. **Notion 데이터베이스 연동**
   - Notion API를 통한 실시간 글 목록 조회
   - 정기적인 데이터 동기화

2. **블로그 글 목록 페이지**
   - Notion 데이터베이스에서 발행된 글 목록 조회
   - 최신순 정렬

3. **개별 글 상세 페이지**
   - 글 제목, 작성일, 카테고리, 태그 표시
   - Notion 블록 콘텐츠 렌더링
   - 이전/다음 글 네비게이션

4. **카테고리별 필터링**
   - 카테고리별로 글 필터링
   - 카테고리 페이지 자동 생성

5. **검색 기능**
   - 글 제목 및 태그 기반 검색
   - 실시간 검색 결과 제공

6. **반응형 디자인**
   - 데스크톱, 태블릿, 모바일 최적화
   - Tailwind CSS를 이용한 반응형 레이아웃

---

## 3. 기술 스택

| 계층 | 기술 |
|------|------|
| **Framework** | Next.js 15 |
| **언어** | TypeScript |
| **스타일링** | Tailwind CSS, shadcn/ui |
| **아이콘** | Lucide React |
| **CMS API** | Notion API (@notionhq/client) |
| **배포** | Vercel |

---

## 4. Notion 데이터베이스 구조

### 데이터베이스 필드 정의

| 필드명 | 타입 | 설명 | 필수 |
|--------|------|------|------|
| **Title** | Title | 블로그 글 제목 | ✅ |
| **Category** | Select | 글의 카테고리 (예: React, TypeScript, Next.js) | ✅ |
| **Tags** | Multi-select | 글 주제의 세부 태그 | ✅ |
| **Published** | Date | 글 발행일 | ✅ |
| **Status** | Select | 글 상태 (초안/발행됨) | ✅ |
| **Content** | Page Content | 블로그 글의 본문 (Notion 블록) | ✅ |

### Status 값
- `초안` (Draft): 발행하지 않은 글
- `발행됨` (Published): 블로그에 표시할 글

---

## 5. 화면 구성

### 5.1 홈 화면 (/)
- 전체 발행된 글의 최신순 목록
- 글 카드: 제목, 카테고리, 발행일, 미리보기 텍스트
- 검색 바
- 카테고리 필터 (사이드바 또는 탭)

### 5.2 글 상세 페이지 (/posts/[slug])
- 글 제목, 발행일, 카테고리, 태그
- 글 본문 (Notion 블록 렌더링)
- 이전/다음 글 네비게이션
- 공유 버튼 (선택사항)

### 5.3 카테고리 페이지 (/category/[category])
- 해당 카테고리의 글 목록
- 카테고리 필터링된 결과 표시
- 홈으로 돌아가기 링크

### 5.4 검색 결과 페이지 (/search)
- 검색 쿼리 입력 필드
- 매칭된 글 목록 표시
- 결과 없음 처리

---

## 6. 데이터 흐름

```
Notion Database
      ↓
  Notion API (@notionhq/client)
      ↓
Next.js API Routes / Server Components
      ↓
React Components
      ↓
User Browser
```

### 데이터 가져오기 전략
- **SSG (Static Generation)**: 글 목록 및 상세 페이지 미리 생성
- **ISR (Incremental Static Regeneration)**: 일정 시간마다 업데이트
- **동적 라우팅**: [slug] 패턴으로 동적 글 페이지 생성

---

## 7. MVP 범위

### 포함되는 기능
- ✅ Notion API 기본 연동
- ✅ 글 목록 페이지 (발행된 글만)
- ✅ 글 상세 페이지
- ✅ 기본 Notion 블록 렌더링 (텍스트, 제목, 이미지, 코드블록)
- ✅ 카테고리 필터링
- ✅ 반응형 디자인
- ✅ 기본 검색 기능

### 제외되는 기능 (향후 개선)
- ❌ 댓글 기능
- ❌ 조회수 통계
- ❌ 사용자 로그인
- ❌ 고급 Notion 블록 렌더링 (임베드, 데이터베이스 등)
- ❌ SEO 최적화 (기본만 포함)
- ❌ 다국어 지원

---

## 8. 구현 로드맵

### Phase 1: 프로젝트 초기 설정
- [ ] Next.js 15 프로젝트 생성
- [ ] TypeScript 설정
- [ ] Tailwind CSS, shadcn/ui 설정
- [ ] 환경 변수 설정 (Notion API Key, Database ID)

### Phase 2: Notion API 연동
- [ ] @notionhq/client 설치
- [ ] Notion 데이터베이스 생성 및 API 키 설정
- [ ] API 유틸리티 함수 작성
  - 글 목록 조회
  - 개별 글 조회
  - 카테고리 목록 조회

### Phase 3: 글 목록 및 상세 페이지
- [ ] 글 목록 페이지 구현 (/posts)
- [ ] 글 상세 페이지 구현 (/posts/[slug])
- [ ] Notion 블록 렌더링
- [ ] SSG/ISR 설정

### Phase 4: 필터링 및 검색
- [ ] 카테고리별 필터링
- [ ] 검색 기능 구현
- [ ] 카테고리 페이지 구현

### Phase 5: 디자인 및 최적화
- [ ] 기본 스타일링 (shadcn/ui 활용)
- [ ] 반응형 디자인 (모바일, 태블릿, 데스크톱)
- [ ] 성능 최적화 (이미지 최적화, 코드 스플리팅)
- [ ] SEO 기본 설정 (메타 태그 등)

### Phase 6: 배포 및 운영
- [ ] Vercel 배포 설정
- [ ] 도메인 연결
- [ ] 모니터링 및 로그 설정

---

## 9. 성공 지표

- [ ] 블로그 페이지 로딩 시간 < 2초
- [ ] Notion과의 자동 동기화 정상 작동
- [ ] 모든 주요 브라우저에서 정상 표시
- [ ] 모바일 반응형 디자인 정상 작동
- [ ] Notion 글 등록 후 블로그 반영까지 시간 < 5분 (ISR)

---

## 10. 개발 환경 및 의존성

### 필수 설치 항목
```bash
# Node.js 18+ 필요
node --version

# 패키지 설치
npm install
# or
yarn install
# or
pnpm install
```

### 필수 환경 변수
```
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_database_id
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 주요 의존성
- `next`: ^15.0.0
- `@notionhq/client`: ^latest
- `tailwindcss`: ^latest
- `shadcn/ui`: ^latest
- `lucide-react`: ^latest

---

## 11. 문서 및 참고 자료

- [Notion API 문서](https://developers.notion.com/)
- [Next.js 15 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com/)

---

**작성일**: 2026-05-28
**프로젝트 상태**: 기획 단계
