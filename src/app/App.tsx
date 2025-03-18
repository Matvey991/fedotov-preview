import { MainPage } from "@/pages"
import { Navbar } from "@/widgets/Navbar"
import './styles/index.scss'
import { useTheme } from "@/shared/hooks/useTheme/useTheme"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Suspense } from "react"
import { Footer } from "@/widgets/Footer"

function App() {

  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <MainPage />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
