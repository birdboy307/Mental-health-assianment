import Navbar from "./navbar";
import Padding from "./padding"

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <Padding />
        <main>{children}</main>
      </>
    )
}