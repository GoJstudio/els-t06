import Link from 'next/link';

const SolarPanels = () => {
  return (
    <div>
      <h2>This is the Solar Panels page</h2>
      <Link href='/products'>Products</Link>
      <Link href='/products/powersystem'>Power System</Link>
    </div>
  )
}

export default SolarPanels