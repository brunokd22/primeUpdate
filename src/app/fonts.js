import { Nunito_Sans, Poppins } from "next/font/google";
export const nunito_sans_init = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito_sans",
  weight: "300",
});
export const poppins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "600"],
});
export const nunito_sans = nunito_sans_init.variable;
export const poppins = poppins_init.variable;
