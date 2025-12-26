"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import {
  Heart,
  Building2,
  Smartphone,
  Shield,
  CheckCircle2,
} from "lucide-react";

export default function Donate() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: paraRef, isVisible: paraVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 text-black overflow-x-hidden">
      <Header />

      {/* Hero Section with Pattern */}
      <div className="relative py-20 px-4 mt-[10vh] overflow-hidden">
        {/* Decorative background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Heart Icon with Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-20 h-20 text-emerald-600 fill-emerald-100 animate-pulse" />
              <div className="absolute inset-0 bg-emerald-400 rounded-full filter blur-xl opacity-30 animate-ping"></div>
            </div>
          </div>

          <h1
            ref={titleRef}
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-on-scroll ${
              titleVisible ? "visible animate-slide-up" : ""
            }`}
          >
            Make a Difference Today
          </h1>
          <p
            ref={paraRef}
            className={`text-xl mb-8 text-slate-700 max-w-3xl mx-auto leading-relaxed animate-on-scroll ${
              paraVisible ? "visible animate-fade-in" : ""
            }`}
          >
            Your generous contribution empowers communities, transforms lives,
            and creates lasting positive change. Every rupee counts towards
            building a better tomorrow.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold text-slate-700">
                80G Certified
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold text-slate-700">
                12A Registered
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <CheckCircle2 className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-semibold text-slate-700">
                100% Transparent
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow pb-16 px-4">
        <div className="container mx-auto">
          {/* Payment Methods Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Bank Transfer Card */}
            <div
              ref={card1Ref}
              className={`group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-emerald-100 hover:border-emerald-300 overflow-hidden animate-on-scroll ${
                card1Visible ? "visible animate-slide-in-left" : ""
              }`}
            >
              {/* Decorative Corner Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-transparent rounded-bl-full opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-emerald-700">
                    Bank Transfer
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6 border border-emerald-100">
                  <table className="table-auto w-full">
                    <tbody className="space-y-3">
                      <tr className="border-b border-emerald-100">
                        <th className="px-2 py-3 text-left text-slate-600 font-semibold">
                          Banking Name:
                        </th>
                        <td className="px-2 py-3 text-right font-bold text-slate-800">
                          SANKALPA
                        </td>
                      </tr>
                      <tr className="border-b border-emerald-100">
                        <th className="px-2 py-3 text-left text-slate-600 font-semibold">
                          Bank:
                        </th>
                        <td className="px-2 py-3 text-right font-bold text-slate-800">
                          STATE BANK OF INDIA
                        </td>
                      </tr>
                      <tr className="border-b border-emerald-100">
                        <th className="px-2 py-3 text-left text-slate-600 font-semibold">
                          Account Number:
                        </th>
                        <td className="px-2 py-3 text-right font-mono font-bold text-slate-800">
                          43203653326
                        </td>
                      </tr>
                      <tr>
                        <th className="px-2 py-3 text-left text-slate-600 font-semibold">
                          IFSC Code:
                        </th>
                        <td className="px-2 py-3 text-right font-mono font-bold text-slate-800">
                          SBIN0011375
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    📧 Please send us an email at{" "}
                    <span className="font-bold text-emerald-700">
                      officialsankalpa@gmail.com
                    </span>{" "}
                    with your transaction details for receipt and
                    acknowledgment.
                  </p>
                </div>
              </div>
            </div>

            {/* UPI Payment Card */}
            <div
              ref={card2Ref}
              className={`group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-teal-100 hover:border-teal-300 overflow-hidden animate-on-scroll ${
                card2Visible ? "visible animate-slide-in-right" : ""
              }`}
            >
              {/* Decorative Corner Pattern */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-teal-100 to-transparent rounded-br-full opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-teal-700">
                    UPI Payment
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 mb-6 border border-teal-100 text-center">
                  <p className="text-lg mb-4 font-semibold text-slate-700">
                    UPI ID:
                  </p>
                  <p className="text-xl  font-bold  bg-white px-4 py-3 rounded-lg inline-block shadow-md">
                    sankalpa8283@sbi
                  </p>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                      <Image
                        src="/sankalpaupi.jpg"
                        alt="UPI QR Code"
                        width={220}
                        height={220}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    📱 Scan the QR code above with any UPI app to make an
                    instant donation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div
            ref={impactRef}
            className={`max-w-4xl mx-auto bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden animate-on-scroll ${
              impactVisible ? "visible animate-scale-in" : ""
            }`}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Your Impact
              </h3>
              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                Every donation helps us provide education, healthcare,
                environmental conservation, and empowerment to those in need.
                Together, we're building a sustainable future for underserved
                communities.
              </p>
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold mb-1">₹100</div>
                  <div className="text-sm opacity-90">Study Materials</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold mb-1">₹500</div>
                  <div className="text-sm opacity-90">Food Supplies</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold mb-1">₹1000</div>
                  <div className="text-sm opacity-90">Medical Aid</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold mb-1">₹5000</div>
                  <div className="text-sm opacity-90">Full Support</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
