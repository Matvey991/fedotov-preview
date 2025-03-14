import { MainPage } from "@/pages"
import { Navbar } from "@/widgets/Navbar"
import './styles/index.scss'
import { useTheme } from "@/shared/hooks/useTheme/useTheme"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Suspense } from "react"

const Components = () => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <>
      <button onClick={toggle}>{t('Перевод')}</button>
      <div>{t('Компонент')}</div>
    </>
  )
}

function App() {

  const { theme } = useTheme()



  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Components />
        <Navbar />
        <MainPage />
      </Suspense>
    </div>
  )
}

export default App
