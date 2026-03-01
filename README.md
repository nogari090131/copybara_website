# copybara_website

이 저장소는 `구암고 카피바라` 동아리 웹사이트 프로젝트입니다. Next.js, Tailwind CSS, Framer Motion 을 사용하여 구현합니다.


설치 및 실행 방법 (Vite):

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 빌드
npm run build

# 로컬 빌드 미리보기
npm run preview
```

의존성(주요): `react`, `react-dom`, `framer-motion`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`.

원하시면 제가 의존성 설치 및 개발 서버 실행을 대신 해 드릴 수 있습니다.

배포 자동화 (설정 완료):

- 이 저장소에 `main` 브랜치로 푸시하면 GitHub Actions가 자동으로 빌드하고 `gh-pages` 브랜치로 배포합니다.
- 배포 워크플로우 파일: `.github/workflows/deploy.yml`
- 배포 URL 형식 (빌드 완료 후): `https://<github-username>.github.io/copybara_website/`

배포 트리거 방법:

1. 변경 사항을 커밋하고 `main`으로 푸시하세요:

```bash
git add .
git commit -m "Deploy: configure GitHub Pages CI"
git push origin main
```

2. GitHub 액션이 실행되어 `gh-pages` 브랜치에 `dist`를 배포합니다. Actions 탭에서 진행 상태를 확인하세요.

원하시면 지금 제가 커밋 후 원격에 푸시해 드리겠습니다(권한 필요). 아니면 직접 푸시하셔도 됩니다.
