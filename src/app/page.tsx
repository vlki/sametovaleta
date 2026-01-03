import Image from "next/image";

import sectionsSeparatorBgMobile from "../../public/sections-separator-bg-mobile.svg";
import sectionsSeparatorBgDesktop from "../../public/sections-separator-bg-desktop.svg";
import practicalIconAlarm from "../../public/practical-icon-alarm.svg";
import practicalIconAssignment from "../../public/practical-icon-assignment.svg";
import practicalIconCalendar from "../../public/practical-icon-calendar.svg";
import practicalIconCheckroom from "../../public/practical-icon-checkroom.svg";
import practicalIconCottage from "../../public/practical-icon-cottage.svg";
import practicalIconMultipleStop from "../../public/practical-icon-multiple-stop.svg";
import practicalIconPerson from "../../public/practical-icon-person.svg";
import practicalIconSell from "../../public/practical-icon-sell.svg";

export default function Home() {
  return (
    <div>
      <header>
        <div className="mx-auto max-w-[1280px]">
          <a
            href=""
            className="absolute mt-[22px] ml-[22px] block size-[120px] sm:mt-[52px] sm:ml-[52px] sm:size-[185px]"
          >
            <img src="logo-sametovaleta.svg" alt="Logo Sametová léta" />
            <h1 className="hidden">Sametová léta</h1>
          </a>
        </div>
      </header>
      <main>
        <div className="pt-[130px] pb-[140px] sm:pt-[190px] sm:pb-[125px]">
          <div className="relative mx-auto max-w-[390px] sm:hidden">
            <img src="hero-title-mobile.svg" alt="Sametová léta" />
            <img
              src="hero-subtitle-mobile.svg"
              alt="1984, 1988, 1992"
              className="absolute right-[4%] bottom-[6%] w-[66.9%]"
            />
          </div>
          <div className="relative mx-auto hidden max-w-[796px] sm:block">
            <img src="hero-title-desktop.svg" alt="Sametová léta" />
            <img
              src="hero-subtitle-desktop.svg"
              alt="1984, 1988, 1992"
              className="absolute right-[3.5%] bottom-[15%] w-[41%]"
            />
          </div>
          <div className="sm:mx-auto sm:max-w-[796px]">
            <p className="mx-auto mt-[45px] max-w-[390px] px-[22px] text-[24px]/[1.2] font-medium sm:-mt-[27px] sm:-mr-[30px]">
              obsahový larp o životě na přelomu 80. a 90. let ve třech
              dovolenkových obrazech
            </p>
          </div>
          <div className="mx-auto mt-[100px] max-w-[390px] px-[22px] sm:max-w-[486px] sm:px-0">
            <p className="text-[24px]/[1.2] font-medium">
              chceš se dozvědět, až se otevře přihlašování?
            </p>
            <a
              href="https://rolling.cz/newsletter/"
              className="mt-[38px] block w-full rounded-2xl border-[3px] border-[#934541] bg-[#F9F3EC] py-[22px] text-center font-rubik text-[28px]/[1] font-black text-[#934541] shadow-[8px_8px_0px_0px_rgba(147,69,65,1.00)]"
            >
              Odebírat newsletter
            </a>
          </div>
        </div>

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-rubik text-[40px]/[1.2] font-black text-[#934541] uppercase">
            O čem hra je
          </h2>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Sametová léta jsou civilní obsahová rolová hra (tzv. larp) zasazená
            do 80. a 90. let minulého století v Československu a vytvořená pod
            záštitou spolku{" "}
            <ExternalLink href="https://rolling.cz/">Rolling</ExternalLink>.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Příběh sleduje spletité osudy několika rodin z jedné fabriky, které
            spolu každoročně jezdí na podnikovou dovolenou. Společná rekreace
            nabízí nejen prostor k lenošení a utužení kolektivu, ale také k
            poučným výletům do přírody, aférkám během večerního mejdanu,
            poslechu nelegálních desek, experimentům a nebo zapůsobení na ty
            správné lidi, aby člověk vyšel štěstí u bytové komise trochu
            naproti. Dovolená zkrátka není jen o přátelství, ale je o životě. A
            o tom si u táboráku v pokročilé hodině konečně od plic vyříkat, co
            že si to teda o ostatních upřímně myslíte.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Hra je dělená do tří částí - tří dovolených stejné party v letech
            1984, 1988 a 1992. Zobrazuje příběhy obyčejných lidí z různých
            společenských vrstev a to, jaký dopad mají jejich osobní a pracovní
            rozhodnutí na jejich osudy. Ty se odehrávají na pozadí dějin, ve
            kterých nikdo z postav není velkým hráčem, ale před kterými není
            úniku ani v rekreačním středisku u fotbálku. Povaha hry je velmi
            civilní, osobní příběhy slouží k vykreslení širších společenských
            trendů, které provázely změny společnosti v souvislosti s pádem
            režimu.
          </p>
          <p className="mt-[16px] min-h-[130px] text-[24px]/[1.2]">
            <img
              src="about-lounger.svg"
              alt="Lehátko"
              className="float-right mt-[22px] mb-[22px] ml-[22px]"
            />
            Sametová léta jsou hrou vhodnou jak pro zkušené hráče, tak i pro ty,
            kteří by si rádi zahráli svůj první larp. Zkrátka jako každá dobrá
            chatková dovolená.
          </p>
        </div>

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-rubik text-[40px]/[1.2] font-black text-[#934541] uppercase">
            Praktické
          </h2>

          <div className="mt-[20px] flex flex-col gap-[20px] sm:flex-row sm:gap-[60px]">
            <ul className="flex flex-col gap-[20px] sm:grow-1 sm:basis-0 sm:gap-[32px]">
              <li className="flex items-start gap-[16px]">
                <Image src={practicalIconCalendar} alt="Ikona kalendáře" />
                <div className="text-[24px]/[1.2]">
                  Hra bude mít dvě uvedení, a to v termínech 22.–25.10. 2026 a
                  29.10.–1.11. 2026. Předherní příprava začíná ve čtvrtek večer
                  a hra končí v sobotu v pozdních hodinách.
                </div>
              </li>
              <li className="flex items-start gap-[16px]">
                <Image src={practicalIconCottage} alt="Ikona chaty" />
                <div className="text-[24px]/[1.2]">
                  Hra proběhne v rekreačním středisku{" "}
                  <ExternalLink href="https://www.totemuj.cz/o-nas/rekreacni-stredisko-peira/">
                    Peira
                  </ExternalLink>{" "}
                  u Rakovníka.
                </div>
              </li>
              <li className="flex items-start gap-[16px]">
                <Image src={practicalIconPerson} alt="Ikona člověka" />
                <div className="text-[24px]/[1.2]">
                  Hra je určena pro 22 ženských a 22 mužských rolí a mohou se jí
                  zúčastnit pouze hráči starší 18 let.
                </div>
              </li>
              <li className="flex items-start gap-[16px]">
                <Image src={practicalIconAlarm} alt="Ikona budíku" />
                <div className="text-[24px]/[1.2]">
                  Přihlašování bude spuštěno 15. 3. 2026.
                </div>
              </li>
              <li className="flex items-start gap-[16px]">
                <Image src={practicalIconSell} alt="Ikona cenovky" />
                <div className="text-[24px]/[1.2]">
                  Cena za hráčský lístek je{" "}
                  <strong>3 500 Kč + vratná záloha 500 Kč</strong> na úklid,
                  kterou vám rádi vrátíme, když nám v neděli po hře pomůžete s
                  úklidem.
                </div>
              </li>
            </ul>
            <ul className="flex flex-col gap-[20px] sm:grow-1 sm:basis-0 sm:gap-[32px]">
              <li className="flex items-start gap-[16px]">
                <Image
                  src={practicalIconMultipleStop}
                  alt="Ikona šipka tam a zpět"
                />
                <div className="text-[24px]/[1.2]">
                  Je také možné se přihlásit jako Rezervista: pošlete nám{" "}
                  <strong>500 Kč</strong> a počítáme s tím, že přijedete. Na
                  místě si pak zahrajete některou z rolí odpadlých na poslední
                  chvíli. Pokud nikdo neodpadne, pomůžete nám uvést hru (žádná
                  těžká práce) a vašich <strong>500 Kč</strong> vám rádi
                  vrátíme.
                </div>
              </li>
              <li className="flex items-start gap-[16px]">
                <Image src={practicalIconAssignment} alt="Ikona instrukce" />
                <div className="text-[24px]/[1.2]">
                  Hráčstvo od nás dostane: účast na hře, zpracovanou postavu,
                  klíčové prvky kostýmu, rekvizity, jídlo 3x denně
                  (vegetariánské) a pití, ubytování a zázemí v chatkovém
                  rekreačním zařízení.
                </div>
              </li>
              <li className="flex items-start gap-[16px]">
                <Image src={practicalIconCheckroom} alt="Ikona ramínka" />
                <div className="text-[24px]/[1.2]">
                  Hráčstvo si musí přivézt vlastní: vhodné boty a základ kostýmu
                  (kalhoty nebo sukni, košili nebo blůzu, sako nebo bundu,
                  vhodné doplňky) sladěné s atmosférou larpu.
                </div>
              </li>
            </ul>
          </div>

          <p className="mt-[24px] text-[24px]/[1.2] sm:mt-[32px]">
            <strong>
              Hra je kompletně tvořena a uváděna dobrovolníky, autoři ani
              organizátoři nemají ze hry žádný vlastní zisk.
            </strong>{" "}
            Cenu lístku se snažíme přizpůsobit tak, aby se hry mohlo účastnit co
            nejvíce lidí, a pokrývá pouze nejnutnější náklady. Pokud se chcete
            zúčastnit hry, ale cena je pro Vás překážkou, napište nám na{" "}
            <a
              href="mailto:sametovaleta@rolling.cz"
              className="underline hover:text-[#934541] focus-visible:text-[#934541]"
            >
              sametovaleta@rolling.cz
            </a>
            .
          </p>

          <h3 className="mt-[24px] text-[24px]/[1.2] font-bold">
            Storno podmínky
          </h3>

          <p className="mt-[16px] text-[24px]/[1.2]">
            Po termínu zaplacení je storno poplatek 10 % uhrazeného účastnického
            poplatku. Při odhlášení 3 měsíce před hrou je storno poplatek 50 %
            uhrazeného účastnického poplatku, při stornu 1 měsíc před hrou 100 %
            uhrazeného účastnického poplatku. Pokud je na odhlášené místo
            nalezen platící účastník, lze vrátit i částku převyšující storno
            poplatek, maximálně však do výše 90 % uhrazeného účastnického
            poplatku.
          </p>
        </div>
      </main>
    </div>
  );
}

const SectionsSeparator = () => {
  return (
    <div>
      <div
        className="h-[46px] w-full bg-repeat-x sm:hidden"
        style={{ backgroundImage: `url(${sectionsSeparatorBgMobile.src})` }}
      />
      <div
        className="hidden h-[58px] w-full bg-repeat-x sm:block"
        style={{
          backgroundImage: `url(${sectionsSeparatorBgDesktop.src})`,
        }}
      />
    </div>
  );
};

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="underline hover:text-[#934541] focus-visible:text-[#934541]"
    >
      {children}
    </a>
  );
};
