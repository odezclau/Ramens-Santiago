import { Footer, Navbar, TopMenu } from "../layouts"

export const LayoutContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      <TopMenu />
      {children}
      <Footer />
    </>
  )
}
