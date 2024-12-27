export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white md:py-4 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" md:mb-0">
            <h3 className="text-xl font-semibold">SANKALPA</h3>
            <p className="text-sm">A Non-Profitable Public Charitable Trust</p>
          </div>
          <div className="text-center md:text-right hidden md:block">
            <p>&copy; {new Date().getFullYear()} SANKALPA. All rights reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  )
}

