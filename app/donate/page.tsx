"use client"
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black overflow-x-hidden">
      <Header />
      <main className="flex-grow py-16 px-4 mt-[10vh]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-green-700">Donate to SANKALPA</h1>
          <p className="text-lg mb-8 text-gray-700">
            Your support helps us continue our mission to provide relief to the poor, support education, offer medical relief, and advance other charitable purposes.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-green-100 p-8 rounded-lg shadow-md w-full md:w-1/2 flex flex-col justify-between">
              <div className='flex flex-col justify-start'>
                <h2 className="text-2xl font-semibold mb-6 text-green-700">Bank Transfer</h2>
                <table className="table-auto w-full text-left">
                  <tbody>
                    <tr>
                      <th className="px-4 py-2">Banking Name:</th>
                      <td className="px-4 py-2">SANKALPA</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2">Bank:</th>
                      <td className="px-4 py-2">STATE BANK OF INDIA</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2">Account Number:</th>
                      <td className="px-4 py-2">43203653326</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2">IFSC Code:</th>
                      <td className="px-4 py-2">SBIN0011375</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Please send us an email at <b>officialsankalpa@gmail.com</b> with your transaction details for receipt and acknowledgment.
              </p>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg shadow-md w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">UPI Payment</h2>
                <p className="mb-2">UPI ID: sankalpa8283@sbi</p>
                <div className="flex justify-center mb-4 mt-2">
                  <Image
                    src="/sankalpaupi.jpg"
                    alt="UPI QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Scan the QR code above to make a donation via UPI.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
