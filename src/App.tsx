import Layout from "./components/Layout"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"



type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
