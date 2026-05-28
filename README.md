# 개인 개발 블로그 (Notion CMS)

Notion을 CMS로 활용한 개인 기술 블로그입니다. Notion 데이터베이스에서 글을 작성하면 자동으로 블로그에 반영됩니다.

## 🚀 주요 기능

- **Notion API 연동**: Notion 데이터베이스에서 실시간 콘텐츠 조회
- **블로그 글 목록**: 최신순으로 발행된 글 목록 표시
- **글 상세 페이지**: 풍부한 Notion 블록 콘텐츠 렌더링
- **카테고리 필터링**: 카테고리별로 글 필터링
- **검색 기능**: 글 제목 및 태그 기반 검색
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

## 🛠 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/) - React 기반 풀스택 프레임워크
- **Language**: [TypeScript](https://www.typescriptlang.org/) - 타입 안정성
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) - 컴포넌트 기반 UI
- **Icons**: [Lucide React](https://lucide.dev/) - 아이콘 라이브러리
- **CMS API**: [@notionhq/client](https://github.com/makenotion/notion-sdk-js) - Notion API 클라이언트
- **Deployment**: [Vercel](https://vercel.com/) - 자동 배포

## 📋 Notion 데이터베이스 구조

Notion 데이터베이스는 다음 필드로 구성됩니다:

| 필드 | 타입 | 설명 |
|------|------|------|
| **Title** | Title | 블로그 글 제목 |
| **Category** | Select | 글의 카테고리 (React, TypeScript, Next.js 등) |
| **Tags** | Multi-select | 글 주제의 세부 태그 |
| **Published** | Date | 글 발행일 |
| **Status** | Select | 글 상태 (초안/발행됨) |
| **Content** | Page Content | 블로그 글의 본문 |

## 🚦 시작하기

### 전제 조건

- Node.js 18 이상
- Notion 계정 및 API 키
- Notion 데이터베이스

### 설치

1. 저장소 클론:
```bash
git clone <repository-url>
cd notion-cms-project
```

2. 의존성 설치:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. 환경 변수 설정 (`.env.local` 파일 생성):
```env
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_database_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Notion API 키 얻기**:
- [Notion Developers](https://www.notion.so/my-integrations) 페이지에서 새로운 integration 생성
- API 키 복사
- 데이터베이스에 integration 연결

### 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

## 📁 프로젝트 구조

```
notion-cms-project/
├── app/                    # Next.js 앱 디렉토리
│   ├── (marketing)/        # 마케팅 페이지
│   ├── (dashboard)/        # 대시보드
│   └── (auth)/            # 인증 페이지
├── components/            # React 컴포넌트
│   ├── landing/          # 랜딩 페이지 컴포넌트
│   ├── dashboard/        # 대시보드 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── providers/        # Context/Provider
├── lib/                   # 유틸리티 함수
├── hooks/                 # 커스텀 React Hooks
├── store/                 # Zustand 상태 관리
├── docs/                  # 프로젝트 문서
│   └── PRD.md            # 제품 요구사항 문서
└── public/                # 정적 파일
```

## 🎯 주요 페이지

- **홈** (`/`): 최근 글 목록 및 검색
- **글 상세** (`/posts/[slug]`): 개별 글 내용
- **카테고리** (`/category/[category]`): 카테고리별 글 목록
- **검색 결과** (`/search`): 검색 결과 표시

## 📖 상세 문서

- [PRD (Product Requirements Document)](./docs/PRD.md) - 프로젝트 요구사항 및 로드맵

## 🔄 배포

### Vercel에 배포

1. [Vercel](https://vercel.com)에 로그인
2. 저장소 연결
3. 환경 변수 설정
4. 배포 완료

```bash
vercel deploy
```

## 📝 개발 가이드

### 코드 스타일

- **들여쓰기**: 2칸 (EditorConfig 참고)
- **언어**: 코드는 영어, 주석은 한국어
- **TypeScript**: 모든 `.tsx`, `.ts` 파일에 타입 정의

### 커밋 메시지

한국어로 작성하며, 다음 형식을 따릅니다:

```
[타입] 제목

상세 설명 (선택)
```

예시:
```
[feat] Notion API 글 목록 조회 기능 추가

- 글 목록 페이지 구현
- SSG 설정
- 카테고리 필터링
```

## 🐛 버그 리포트

버그를 발견한 경우 [Issues](../../issues)에 보고해주세요.

## 📜 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

## 👨‍💻 저자

[@overzeus](https://github.com/overzeus)

---

**더 많은 정보**:
- [Notion API 문서](https://developers.notion.com/)
- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
