import { Roboto, Inter, Poppins } from 'next//font/google'
import localFont from 'next/font/local'

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto'
})

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-inter'
})

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-poppins'
})


export const sanFrancisco = localFont({ src: '@/../public/fonts/SFUIDisplay/SFUIDisplay-Medium.otf' })


export const roboto = roboto_init.variable
export const inter = inter_init.variable
export const poppins = poppins_init.variable