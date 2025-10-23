import Link from "next/link";
import { Icon } from "@iconify/react"
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <p className="text-white text-sm lg:max-w-1/5">
            Подпишитесь на нашу рассылку и получайте новости о разработке электроники и новых технологиях
          </p>
          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3">
            <div className="flex gap-2 lg:order-1 order-2">
              <input type="email" placeholder="Ваш Email" className="rounded-full py-4 px-6 bg-white/10 placeholder:text-white text-white focus-visible:outline-0" />
              <button className="text-dark bg-white py-4 px-8 font-semibold rounded-full hover:bg-primary hover:text-white duration-300 hover:cursor-pointer">
                Подписаться
              </button>
            </div>
            <p className="text-white/40 text-sm lg:max-w-[45%] order-1 lg:order-2">
              Подписываясь, вы соглашаетесь получать наши новости. Отписаться можно в любой момент.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://t.me/sinertek" target="_blank">
              <Icon icon="ph:telegram-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#" target="_blank">
              <Icon icon="ph:github-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#" target="_blank">
              <Icon icon="simple-icons:habr" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
          </div>
        </div>
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Начните путь к успеху - свяжитесь с нами
              </h2>
              <Link href="/contactus" className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer">
                Связаться с нами
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm ">
            ©2025 SINERTEK - Прикладное оборудование под ключ
          </p>
          <div className="flex gap-8 items-center">
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Условия использования
            </Link>
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;