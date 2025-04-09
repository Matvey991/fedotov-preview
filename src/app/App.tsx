import { MainPage } from "@/pages"
import { Navbar } from "@/widgets/Navbar"
import './styles/index.scss'
import { useTheme } from "@/shared/hooks/useTheme/useTheme"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Suspense } from "react"

function App() {

  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <MainPage />
      </Suspense>
    </div>
  )
}

export default App
