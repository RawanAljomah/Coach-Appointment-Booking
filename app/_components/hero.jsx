import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full lg:mt-10"> {/* Added lg:mt-10 */}
            <Image
              alt=""
              src="/N.webp"
              width={400}
              height={400}
              className="absolute inset-0 w-full  object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find & Book 
              <span className="text-blue-400"> Appointment </span>
              with your Fav <span className="text-blue-400"> Coaches</span>
            </h2>

            <p className="mt-4 text-gray-600">
              Take the first step towards entrepreneurial success. 
              Find and book your coach today! Get expert guidance, personalized plans,
              and valuable resources. Start your journey with a mentor who understands your vision and goals.
              Book now and pave the way to success!
            </p>

            <Button className="mt-10">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
