import sectionsSeparatorBgMobile from "../../public/sections-separator-bg-mobile.svg";
import sectionsSeparatorBgDesktop from "../../public/sections-separator-bg-desktop.svg";

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
              className="mt-[38px] block w-full rounded-2xl border-[3px] border-[#934541] bg-[#F9F3EC] py-[22px] text-center font-bold text-[28px]/[1] font-black text-[#934541] shadow-[8px_8px_0px_0px_rgba(147,69,65,1.00)]"
            >
              Odebírat newsletter
            </a>
          </div>
        </div>

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-bold text-[40px]/[1.2] font-black text-[#934541] uppercase">
            O čem hra je
          </h2>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Sametová léta jsou civilní obsahová rolová hra (tzv. larp) zasazená
            do 80. a 90. let minulého století v Československu a vytvořená pod
            záštitou spolku{" "}
            <a
              href="https://rolling.cz/"
              target="_blank"
              className="underline hover:text-[#934541] focus-visible:text-[#934541]"
            >
              Rolling
            </a>
            .
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
