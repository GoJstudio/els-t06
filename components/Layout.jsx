import Header from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout