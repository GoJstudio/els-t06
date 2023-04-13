import Link from 'next/link';

const Products = () => {
  return (
    <div>
      <h2>This is the products page</h2>
      <Link href='/products/solarpanels'>Solar Panels</Link>
    </div>
  )
}

export default Products