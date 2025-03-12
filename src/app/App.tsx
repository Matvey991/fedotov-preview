import { MainPage } from "@/pages"
import { Navbar } from "@/widgets/Navbar"
import './styles/index.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { useTheme } from "@/shared/hooks/useTheme/useTheme"

function App() {

  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <MainPage />
    </div>
  )
}

export default App
