import Header from "~/components/header";
import type { Route } from "./+types/home";
import { Link, type LinksFunction } from "react-router";
import { motion } from "framer-motion";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Badge,
  Tabs,
} from "@chakra-ui/react";
import students from "/utils/students.png";
import lingosLogo from "/utils/lingosLogo.jpg";
import { FaCheck, FaLink, FaStar } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import BorderLink from "~/components/BorderLink";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const links: LinksFunction = () => {
  return [{ rel: "preload", href: "/utils/students.png", as: "image" }];
};

export default function Home() {
  const items = [
    {
      value: "1",
      title: "Czy ktoś dowie się, że korzystam z Waszych usług?",
      text: (
        <p>
          <b>Nie</b>,{" "}
          <strong className="text-primary-green">
            gwarantujemy pełną dyskrecję
          </strong>
          . Twoje dane i zlecenie są w 100% <b>poufne</b>.
        </p>
      ),
    },
    {
      value: "2",
      title: "Jakie platformy obłsugujecie?",
      text: (
        <p>
          Aktualnie obsługujemy tylko platformę{" "}
          <b className="text-primary-green">Lingos</b>, ale planujemy
          rozszerzenie oferty.
        </p>
      ),
    },
    {
      value: "3",
      title: "Jak mogę zapłacić?",
      text: <p>Do wymyślenia</p>,
    },
    {
      value: "4",
      title: "Czy mogę zrezygnować z usługi w trakcie jej realizacji?",
      text: (
        <p>
          Niestety,{" "}
          <strong className="text-primary-green">nie oferujemy</strong>{" "}
          możliwości zwrotu pieniędzy na rządanie użytkownika.
        </p>
      ),
    },
    {
      value: "5",
      title: "Co jeśli nie wywiążecie się z umowy?",
      text: (
        <p>
          W przypadku, gdy z jakiegoś powodu nie uda nam się wykonać zleconego
          zadania z naszej winy,{" "}
          <strong className="text-primary-green">zwrócimy Ci pieniądze</strong>{" "}
          za miesiąc w którym nie wywiązaliśmy się z umowy!
          <br />
          <br />W przypadku planu podstawowego, oddamy Ci <b>15PLN</b>.
          <br />
          <br /> W przypadku planu Premium, oddamy Ci <b>20PLN</b>.
          <br />
          <br />W przypadku planu Boss, oddamy Ci <b>20PLN</b> za miesiąc, w
          którym nie udało nam się wykonać zadania, jednak nie oferujemy zwrotu
          pełnej kwoty - 50PLN.
        </p>
      ),
    },
  ];
  const [value, setValue] = useState<string[]>([]);
  return (
    <div>
      <Header />
      {/* <div className="flex items-center justify-center gap-[20px] h-[100vh] flex-wrap">
        <div className="p-[10px] bg-[#2bc016]">#2bc016</div>
        <div className="p-[10px] bg-[#cffcff]">#cffcff</div>
        <div className="p-[10px] bg-[#aaefdf]">#aaefdf</div>
        <div className="p-[10px] bg-[#9ee37d]">#9ee37d</div>
        <div className="p-[10px] bg-[#63c132]">#63c132</div>
        <div className="p-[10px] bg-[#119822]">#119822</div>
        <div className="p-[10px] bg-[#2a7221]">#2a7221</div>
        <div className="p-[10px] bg-[#358600]">#358600</div>
        <div className="p-[10px] bg-[#1a1f16]">#1a1f16</div>
        <div className="p-[10px] bg-[#1e3f20]">#1e3f20</div>
        <div className="p-[10px] bg-[#345830]">#345830</div>
        <div className="p-[10px] bg-[#4a7856]">#4a7856</div>
      </div> */}
      <div className="mt-[50px] flex flex-col items-center justify-center gap-[30px] px-[20px]">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg 600:text-xl 800:text-2xl font-semibold text-center bg-green-gradient bg-clip-text text-transparent"
        >
          LingoBoss
        </motion.h1>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-3xl 600:text-4xl 800:text-5xl font-bold"
        >
          Twój pomocnik w nauce słówek. <br />
          Robimy za Ciebie, Ty zbierasz <br /> dobre oceny!
        </motion.h2>
        <div className="600:w-[532px] 800:w-[710px] grid grid-cols-[80%] 600:grid-cols-[200px_1fr] 800:grid-cols-[auto_1fr] gap-[30px] justify-center">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            src={students}
            alt="students"
            className="w-full max-h-[150px] 600:max-h-[300px] object-contain rounded-lg"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full"
          >
            <p className="text-sm 600:text-base 800:text-lg">
              <b className="text-primary-green">LingoBoss</b> to platforma,
              dzięki której <strong>zaoszczędzisz czas!</strong> <br />
              Nie będziesz musiał już dłużej pamiętać o robieniu sesji ze
              słówkami, ani przejmować się ocenami. <br />
              <br />
              Zainwestuj w swój czas, my zajmiemy się resztą!
            </p>
            <div className="flex items-center gap-[10px] mt-[20px] 800:gap-[20px] flex-wrap">
              <button className="bg-shiny-green text-white text-xs 600:text-sm 800:text-base p-[10px] py-[9px] 600:px-[15px] 600:py-[10px] rounded-lg font-bold hover:scale-110 transition-all duration-300">
                Dołącz do nas
              </button>
              <BorderLink to="#important">Dowiedz się więcej</BorderLink>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="important" className="mt-[80px] 320:px-[20px]">
        <h2 className="text-center text-2xl 600:text-3xl 800:text-4xl font-bold px-[20px]">
          To najważniejsze
        </h2>
        <div className="mt-[40px] flex items-center justify-center gap-[50px] 600:gap-[100px] text-center flex-wrap">
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <p className="text-lg 600:text-xl 800:text-2xl font-semibold bg-green-gradient bg-clip-text text-transparent">
              <strong>Zaufały nam</strong>
            </p>
            <p className="text-3xl 600:text-4xl 800:text-5xl font-bold text-primary-green">
              <b>3</b>
            </p>
            <p className="text-base 600:text-lg 800:text-xl font-semibold">
              Osoby
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <p className="text-lg 600:text-xl 800:text-2xl font-semibold bg-green-gradient bg-clip-text text-transparent">
              <strong>Mamy</strong>
            </p>
            <p className="text-3xl 600:text-4xl 800:text-5xl font-bold text-primary-green">
              <b>1</b>
            </p>
            <p className="text-base 600:text-lg 800:text-xl font-semibold">
              Opinię
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <p className="text-lg 600:text-xl 800:text-2xl font-semibold bg-green-gradient bg-clip-text text-transparent">
              <strong>Wspieramy</strong>
            </p>
            <p className="text-3xl 600:text-4xl 800:text-5xl font-bold text-primary-green">
              <b>1</b>
            </p>
            <p className="text-base 600:text-lg 800:text-xl font-semibold">
              Platformę
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="600:w-[532px] 800:w-[710px] mt-[40px]">
            <Tabs.Root
              fitted
              defaultValue="how-it-works"
              className="border-b-[2px] border-gray-600 pb-[20px]"
            >
              <Tabs.List className="border-b-[1px] border-gray-600 text-xs 600:text-sm 800:text-base">
                <Tabs.Trigger value="how-it-works">Jak to działa?</Tabs.Trigger>
                <Tabs.Trigger value="supported-platforms">
                  Wspierane platformy
                </Tabs.Trigger>
                <Tabs.Trigger value="privacy">Anonimowość</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="how-it-works" className="px-[20px] 320:px-0">
                <h3 className="text-lg 600:text-xl 800:text-2xl font-semibold">
                  Chcesz wiedzieć jak w skrócie wygląda współpraca z nami?
                </h3>
                <p className="my-[10px] 600:my-[20px] text-sm 600:text-base 800:text-lg">
                  Oto krótki opis:
                </p>
                <ol className="px-[20px] list-decimal marker:text-gray-600 text-xs 600:text-sm 800:text-base">
                  <li className="my-[10px]">
                    <p>
                      <a className="text-primary-green underline cursor-pointer">
                        Kontaktujesz
                      </a>{" "}
                      się z nami.
                    </p>
                  </li>
                  <li className="my-[10px]">
                    <p>
                      Wybierasz{" "}
                      <a className="text-primary-green underline cursor-pointer">
                        ofertę
                      </a>
                      .
                    </p>
                  </li>
                  <li className="my-[10px]">
                    <p>Podajesz nam dane do Logowania na wybraną platformę</p>
                  </li>
                  <li className="my-[10px]">
                    <p>
                      Po otrzymaniu płatności, zaczynamy robić sesje ze
                      słówkami.
                    </p>
                  </li>
                </ol>
                <div>
                  <p className="text-base 600:text-lg 800:text-xl font-medium mt-[10px]">
                    Jesteś zainteresowany?
                  </p>
                  <p className="text-xs 600:text-sm 800:text-base">
                    Wszystkiego dowiesz się klikając{" "}
                    <a className="text-primary-green underline cursor-pointer">
                      tutaj
                    </a>
                    .
                  </p>
                </div>
              </Tabs.Content>
              <Tabs.Content
                value="supported-platforms"
                className="px-[20px] 320:px-0"
              >
                <h3 className="text-lg 600:text-xl 800:text-2xl font-semibold">
                  Jakie platformy wspieramy?
                </h3>
                <p className="my-[10px] 600:my-[20px] text-sm 600:text-base 800:text-lg">
                  Obecnie wspieramy tylko jedną platformę -{" "}
                  <strong className="text-primary-green">Lingos'a</strong>.
                </p>
                <div>
                  <a
                    href="https://lingos.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={lingosLogo}
                      alt="Logo of the Lingos platform"
                      className="w-[60px] h-[60px] 600:w-[100px] 600:h-[100px] object-contain rounded-lg"
                    />
                  </a>
                </div>
              </Tabs.Content>
              <Tabs.Content value="privacy" className="px-[20px] 320:px-0">
                <h3 className="text-lg 600:text-xl 800:text-2xl font-semibold">
                  Czy jesteś z nami anonimowy?
                </h3>
                <p className="my-[10px] 600:my-[20px] text-base 600:text-lg 800:text-xl">
                  Odpowiedź jest prosta -{" "}
                  <strong className="text-primary-green">tak!</strong>
                </p>
                <p className="text-sm 600:text-base 800:text-lg">
                  <strong className="text-primary-green">Nigdy</strong> nie
                  udostępniamy Twoich danych osobowych innym osobom! Jeśli
                  zrezygnujesz z współpracy, komplet Twoich danych, które były
                  nam wcześniej potrzebne, zostanie{" "}
                  <strong className="text-primary-green">usunięty</strong>.
                </p>
              </Tabs.Content>
            </Tabs.Root>
            <div className="mt-[30px] px-[20px] 320:px-0">
              <h3 className="text-lg 600:text-xl 800:text-2xl font-semibold text-center">
                Chcesz wiedzieć więcej?
              </h3>
              <p className="text-sm 600:text-base 800:text-lg text-center mt-[10px]">
                Z każdym detalem zapoznasz się klikając w jeden z poniższych
                odnośników.
              </p>
              <div className="flex items-center justify-center gap-[20px] mt-[20px] flex-wrap">
                <BorderLink to="/how-it-works">Jak to działa?</BorderLink>
                <BorderLink to="#offer">Nasza oferta</BorderLink>
                <BorderLink to="#contact">Skontaktuj się z nami!</BorderLink>
                <BorderLink to="#opinions">Opinie</BorderLink>
                <BorderLink to="#faq">FAQ</BorderLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="offer" className="mt-[80px] px-[20px]">
        <h2 className="text-center text-2xl 600:text-3xl 800:text-4xl font-bold">
          Nasza oferta
        </h2>
        <div className="mt-[40px]">
          <div className="grid grid-cols-[1fr] 1150:grid-cols-[auto_auto_auto] justify-items-center gap-[20px]">
            <div className="max-w-[350px] 600:w-[350px] h-[350px] flex flex-col justify-evenly rounded-lg border-[2px] p-[15px] border-light hover:border-primary-green transition-all duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base 600:text-lg 800:text-xl font-semibold">
                  Podstawowy
                </h3>
                <Badge colorPalette="gray" size="md">
                  Najtańszy
                </Badge>
              </div>
              <p className="mt-[10px] text-gray-300">
                Dla tych najmniej wymagających.
              </p>
              <div className="mt-[20px]">
                <span className="flex items-end">
                  <p className="text-2xl 600:text-3xl 800:text-4xl font-medium">
                    <b>PLN</b>
                    <strong>15</strong>
                  </p>
                  <p className="font-semibold text-gray-300">/miesiąc</p>
                </span>
              </div>
              <ul className="mt-[20px] flex flex-col gap-[10px]">
                <li className="flex items-center gap-[10px]">
                  <FaCheck className="w-[20px] h-[20px] text-primary-green" />
                  <p>
                    <strong>1</strong> sesja dziennie
                  </p>
                </li>
                <li className="flex items-center gap-[10px]">
                  <FaCheck className="w-[20px] h-[20px] text-primary-green shrink-0" />
                  <p className="text-gray-300 shrink-1">
                    Wykonujemy sesje <strong>4 razy</strong> w tygodniu od
                    poniedziałku do czwartku.
                  </p>
                </li>
              </ul>
            </div>
            <div className="max-w-[350px] 600:w-[350px] h-[350px] flex flex-col justify-evenly rounded-lg border-[2px] p-[15px] border-light hover:border-primary-green transition-all duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base 600:text-lg 800:text-xl font-semibold">
                  Boss
                </h3>
                <Badge colorPalette="green" size="md">
                  Najbardziej opłacalny
                </Badge>
              </div>
              <p className="mt-[10px] text-gray-300">
                Najkorzystniejszy długoterminowo.
              </p>
              <div>
                <div className="mt-[20px]">
                  <span className="flex items-end">
                    <p className="text-2xl 600:text-3xl 800:text-4xl font-medium">
                      <b>PLN</b>
                      <strong>50</strong>
                    </p>
                    <p className="font-semibold text-gray-300">/3 miesiące</p>
                  </span>
                </div>
              </div>
              <ul className="mt-[20px] flex flex-col gap-[10px]">
                <li className="flex items-center gap-[10px]">
                  <FaCheck className="w-[20px] h-[20px] text-primary-green" />
                  <p>
                    <strong>3</strong> sesje dziennie
                  </p>
                </li>
                <li className="flex items-center gap-[10px]">
                  <FaCheck className="w-[20px] h-[20px] text-primary-green shrink-0" />
                  <p className="text-gray-300 shrink-1">
                    Wykonujemy sesje <strong>5 razy</strong> w tygodniu od
                    poniedziałku do piątku.
                  </p>
                </li>
              </ul>
            </div>
            <div className="max-w-[350px] 600:w-[350px] h-[350px] flex flex-col justify-evenly rounded-lg border-[2px] p-[15px] border-light hover:border-primary-green transition-all duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base 600:text-lg 800:text-xl font-semibold">
                  Premium
                </h3>
                <Badge colorPalette="purple" size="md">
                  Najpopularniejszy
                </Badge>
              </div>
              <p className="mt-[10px] text-gray-300">
                Idealny aby przetestować maksimum możliwości.
              </p>
              <div className="mt-[20px]">
                <span className="flex items-end">
                  <p className="text-2xl 600:text-3xl 800:text-4xl font-medium">
                    <b>PLN</b>
                    <strong>20</strong>
                  </p>
                  <p className="font-semibold text-gray-300">/miesiąc</p>
                </span>
              </div>
              <ul className="mt-[20px] flex flex-col gap-[10px]">
                <li className="flex items-center gap-[10px]">
                  <FaCheck className="w-[20px] h-[20px] text-primary-green" />
                  <p>
                    <strong>3</strong> sesje dziennie
                  </p>
                </li>
                <li className="flex items-center gap-[10px]">
                  <FaCheck className="w-[20px] h-[20px] text-primary-green shrink-0" />
                  <p className="text-gray-300 shrink-1">
                    Wykonujemy sesje <strong>5 razy</strong> w tygodniu od
                    poniedziałku do piątku.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="mt-[80px] px-[20px]">
        <h2 className="text-center text-2xl 600:text-3xl 800:text-4xl font-bold">
          Skontaktuj się z nami
        </h2>
        <p className="text-base 600:text-lg 800:text-xl text-center mt-[10px]">
          Jeśli chcesz się z nami skontatkować użyj jednej z poniższych metod!
        </p>
        <div className="mt-[40px] flex flex-grow-1 justify-center gap-[20px] flex-wrap">
          <div className="flex flex-col justify-center gap-[15px] border-[2px] border-light p-[15px] rounded-lg">
            <h3 className="text-base 600:text-lg 800:text-xl font-semibold">
              Napisz do nas na facebook'u
            </h3>
            <p className="underline flex flex-wrap items-center gap-[10px] text-xs 600:text-sm 800:text-base text-primary-green hover:text-shiny-green cursor-pointer transition-all duration-300">
              <FaLink className="w-[15px] h-[15px] 600:w-[20px] 600:h-[20px]" />
              <a
                href="https://www.facebook.com/lingoboss100/"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/lingoboss100/
              </a>
            </p>
            <p
              className="flex items-center gap-[10px] text-xs 600:text-sm 800:text-base text-gray-300 hover:text-white cursor-pointer transition-all duration-300"
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://www.facebook.com/lingoboss100/"
                );
              }}
            >
              <MdContentCopy className="w-[15px] h-[15px] 600:w-[20px] 600:h-[20px]" />
              <span>Skopiuj link</span>
            </p>
          </div>
          <div className="flex flex-col justify-center gap-[15px] border-[2px] border-light p-[15px] rounded-lg">
            <h3 className="text-base 600:text-lg 800:text-xl font-semibold">
              Wyślij mail'a
            </h3>
            <p className="underline flex items-center gap-[10px] text-xs 600:text-sm 800:text-base text-primary-green hover:text-shiny-green cursor-pointer transition-all duration-300">
              <FaLink className="w-[15px] h-[15px] 600:w-[20px] 600:h-[20px]" />
              <a href="mailto:lingoboss100@gmail.com">lingoboss100@gmail.com</a>
            </p>
            <p
              className="flex items-center gap-[10px] text-xs 600:text-sm 800:text-base text-gray-300 hover:text-white cursor-pointer transition-all duration-300"
              onClick={() => {
                navigator.clipboard.writeText("lingoboss100@gmail.com");
              }}
            >
              <MdContentCopy className="w-[15px] h-[15px] 600:w-[20px] 600:h-[20px]" />
              <span>Skopiuj e-mail</span>
            </p>
          </div>
        </div>
      </div>
      <div id="opinions" className="mt-[80px] px-[20px]">
        <h2 className="text-center text-2xl 600:text-3xl 800:text-4xl font-bold">
          Opinie
        </h2>
        <div className="mt-[40px] flex flex-col items-center gap-[20px]">
          <div className="600:w-[50vw] border-[2px] border-light p-[15px] rounded-lg">
            <div>
              <div className="flex items-center gap-[10px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className="w-[15px] h-[15px] 600:w-[20px] 600:h-[20px] text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-300 font-medium text-sm 600:text-base 800:text-lg mt-[10px]">
                Anonimowy użytkownik
              </p>
            </div>
            <p className="text-sm 600:text-base 800:text-lg mt-[10px]">
              Wszystko gites, robią to co trzeba, wszystko na czas i cena też
              spoko. Polecam
            </p>
          </div>
        </div>
      </div>
      <div id="faq" className="mt-[80px] pb-[100px] px-[20px]">
        <h2 className="text-center text-2xl 600:text-3xl 800:text-4xl font-bold">
          Najczęściej zadawane pytania
        </h2>
        <div className="mt-[40px] flex flex-col gap-[10px] items-center">
          <AccordionRoot
            value={value}
            collapsible
            onValueChange={(e) => setValue(e.value)}
            className="600:w-[50vw]"
          >
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value}
                className="border-b-[2px] border-gray-600 p-[15px]"
              >
                <AccordionItemTrigger
                  className={
                    value && value[0] === item.value
                      ? "flex items-center justify-between text-sm 600:text-base 800:text-lg font-semibold text-white transition-all duration-300"
                      : "flex items-center justify-between text-sm 600:text-base 800:text-lg font-semibold text-gray-300 transition-all duration-300"
                  }
                >
                  <p className="text-left">{item.title}</p>

                  <IoIosArrowForward
                    className={
                      value && value[0] === item.value
                        ? "w-[20px] h-[20px] flex-shrink-0 text-white rotate-90 transition-all duration-300"
                        : "w-[20px] h-[20px] flex-shrink-0 text-gray-600 transition-all duration-300"
                    }
                  />
                </AccordionItemTrigger>
                <AccordionItemContent>
                  <div className="px-[15px] pt-[15px] text-sm 800:text-base">
                    {item.text}
                  </div>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </div>
      </div>
    </div>
  );
}
