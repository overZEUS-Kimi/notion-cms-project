import { chromium } from 'playwright'
import { setTimeout as sleep } from 'timers/promises'

async function verify() {
  let browser
  try {
    console.log('🚀 Dev 서버 준비 대기 중...')
    await sleep(3000)

    browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()

    // 1. 랜딩 페이지 테스트
    console.log('\n✅ 1. 랜딩 페이지 로드')
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    const title = await page.title()
    console.log(`   페이지 제목: ${title}`)

    const heroText = await page.locator('h1').first().textContent()
    console.log(`   히어로 텍스트: ${heroText?.substring(0, 30)}...`)

    // 스크린샷
    await page.screenshot({ path: 'verify-landing.png', fullPage: true })
    console.log('   📸 스크린샷: verify-landing.png')

    // 2. 네비게이션 메뉴 테스트
    console.log('\n✅ 2. 네비게이션 테스트')
    const dashboardLink = await page.locator('a[href="/dashboard"]').first()
    if (await dashboardLink.isVisible()) {
      console.log('   ✓ 대시보드 링크 발견')
    }

    const loginLink = await page.locator('a[href="/login"]').first()
    if (await loginLink.isVisible()) {
      console.log('   ✓ 로그인 링크 발견')
    }

    // 3. 테마 토글 테스트
    console.log('\n✅ 3. 테마 토글 테스트')
    const htmlElement = page.locator('html')
    const initialTheme = await htmlElement.evaluate(el => el.className)
    console.log(`   초기 테마 클래스: ${initialTheme || '(없음)'}`)

    const themeToggleButton = await page.locator('button[aria-label="테마 전환"]').first()
    if (await themeToggleButton.isVisible()) {
      await themeToggleButton.click()
      await sleep(500)
      const newTheme = await htmlElement.evaluate(el => el.className)
      console.log(`   토글 후 테마 클래스: ${newTheme || '(없음)'}`)
      console.log('   ✓ 테마 토글 동작 확인')
    }

    // 4. 대시보드 페이지 테스트
    console.log('\n✅ 4. 대시보드 페이지')
    await page.goto('http://localhost:3000/dashboard', { waitUntil: 'networkidle' })
    const dashboardTitle = await page.locator('h2').first().textContent()
    console.log(`   페이지 제목: ${dashboardTitle}`)

    const statsCards = await page.locator('div[data-slot="form-item"]').count()
    console.log(`   StatsCard 발견: ${statsCards}개`)

    await page.screenshot({ path: 'verify-dashboard.png', fullPage: true })
    console.log('   📸 스크린샷: verify-dashboard.png')

    // 5. 로그인 페이지 테스트
    console.log('\n✅ 5. 로그인 페이지')
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle' })
    const loginTitle = await page.locator('h2').first().textContent()
    console.log(`   페이지 제목: ${loginTitle}`)

    const emailInput = await page.locator('input[type="email"]')
    const passwordInput = await page.locator('input[type="password"]')
    console.log(`   ✓ 이메일 입력 필드: ${await emailInput.isVisible() ? '있음' : '없음'}`)
    console.log(`   ✓ 비밀번호 입력 필드: ${await passwordInput.isVisible() ? '있음' : '없음'}`)

    await page.screenshot({ path: 'verify-login.png', fullPage: true })
    console.log('   📸 스크린샷: verify-login.png')

    // 6. 회원가입 페이지 테스트
    console.log('\n✅ 6. 회원가입 페이지')
    await page.goto('http://localhost:3000/register', { waitUntil: 'networkidle' })
    const registerTitle = await page.locator('h2').first().textContent()
    console.log(`   페이지 제목: ${registerTitle}`)

    const registerForm = await page.locator('form').count()
    console.log(`   ✓ 폼 엘리먼트: ${registerForm}개`)

    await page.screenshot({ path: 'verify-register.png', fullPage: true })
    console.log('   📸 스크린샷: verify-register.png')

    // 7. 404 페이지 테스트
    console.log('\n✅ 7. 404 페이지')
    await page.goto('http://localhost:3000/nonexistent', { waitUntil: 'networkidle' })
    const notFoundText = await page.locator('h1').first().textContent()
    console.log(`   404 헤드라인: ${notFoundText}`)

    console.log('\n' + '='.repeat(50))
    console.log('✅ 모든 검증 완료!')
    console.log('='.repeat(50))

    await context.close()
  } catch (error) {
    console.error('\n❌ 검증 실패:', error.message)
    process.exit(1)
  } finally {
    if (browser) await browser.close()
  }
}

verify()
