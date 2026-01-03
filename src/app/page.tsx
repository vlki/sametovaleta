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

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-rubik text-[40px]/[1.2] font-black text-[#934541] uppercase">
            Jak přistupujeme k historii
          </h2>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Sametová léta nejsou přehlídkou nostalgie, ani snahou vyřknout jasný
            soud nad problematikou komunistického režimu v Československu.
            Chceme vykreslit širší společenské trendy, které provázely přelom
            80. a 90. let, prostřednictvím každodenních životů obyčejných lidí.
            Klíčovými tématy hry jsou kdo získá byt, kdo se dostane na školu,
            komu se rozpadne vztah nebo kdo jak vyjde z přelomové doby konce
            osmdesátých let. Součástí hry jsou i další společenská témata doby
            jako postavení Romů v československé společnosti, ekologická hnutí
            nebo vývoj drogové scény. Všechny postavy ve hře jsou fiktivní – a
            jejich příběhy se mohou rozvinout mnoha různými směry.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            V rámci hry budete pracovat s informacemi z reálných historických
            materiálů. Mnohé z nich, jak oficiální (např. státní televize), tak
            neoficiální, mohou být nespolehlivé. Stejně jako si ve svém životě
            každý vybíráme, které informace jsou podle nás důvěryhodné, a jak je
            interpretovat, bude na hrajících, aby je interpretovali v rolích
            svých postav.
          </p>
        </div>

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-rubik text-[40px]/[1.2] font-black text-[#934541] uppercase">
            Paralelní osudy
          </h2>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Na dovolenou přijede pokaždé 22 postav, jedna parta z jedné fabriky.
            Ta prožije své životy, volby, radosti i trápení. Hra samotná ale
            běží paralelně pro více poboček patřících pod podnik: na podzim 2026
            budou dva běhy po dvou pobočkách. Většinu hry spolu jako postavy
            nebudete interagovat – jsou to cizí lidé na podnikové dovolené, se
            kterými je možné prohodit pár slov ve frontě na oběd, ale těžiště
            vaší hry v nich neleží.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Pro vás jako pro hráče ale zajímaví jsou. Všechny pobočky se totiž
            ve skutečnosti skládají ze stejných postav. Ve specifických chvílích
            se potkáte se svým protějškem z jiné pobočky. Budete se moci
            poradit, reflektovat spolu své osudy a nejspíš se i podivit, jak
            odlišné nebo naopak podobné životy vy nebo vaši blízcí teď na
            základě svých rozhodnutí žijete. Jeden z vás možná bude ředitel
            podniku a druhý kotelník, jeden šťastně zamilovaný a druhý trpce
            osamělý. Úvodní pozici máte stejnou, ale toto je jeden z nástrojů,
            kterými zdůrazňujeme téma zlomové doby, která zpřeházela zaběhnuté
            vztahy a pořádky.
          </p>
        </div>

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-rubik text-[40px]/[1.2] font-black text-[#934541] uppercase">
            Co je to larp?
          </h2>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Sametová léta jsou larp, tj. hraní rolí naživo (z anglického
            “live-action roleplaying”. Jedná se několikadenní hru, během které
            skupina hráčů zaujme role předpřipravených postav dodaných
            organizátory (určujících jejich minulost, rodinné vztahy, ale třeba
            i ambice a strachy) a společně nechají ožít příběh běžných lidí na
            dovolené na pozadí 80. – 90. let minulého století v Československu.
            Výchozí body postav jsou dané a každá z nich má připravené od
            organizátorů obsah k řešení, ale veškeré volby, průběh a to, jak
            příběh dané postavy nakonec dopadne, je plně v rukách hráčů.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Na hru se bude možné přihlásit pomocí online formuláře, ve kterém
            vyplníš své preference o tom, co na hře chceš a nechceš zažít.
            Hráčům vybraným na hru pak podle jejich odpovědí přidělíme postavu,
            kterou budou během hry ztvárňovat. Detailní informace o postavě
            dostaneš několik týdnů před začátkem hry.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Během hry pak v roli své postavy budeš uvádět v život její činy,
            rozhodnutí, interagovat s ostatními postavami a užívat si radosti i
            strasti podnikové dovolené.{" "}
            <strong>Není potřeba ovládat herectví, ani mít trému.</strong> Hra
            nemá žádné diváky, vítěze a poražené. Cílem také není hru vyhrát,
            ale zažít zajímavé situace, zábavu a trochu té lidskosti. Jako hráče
            tě nečeká žádné nepohodlí nad rámec “bydlím v chatce”, nebudeš se s
            jinými hráči bít ani střílet a hra ani nepracuje s žádným skutečným
            intimním kontaktem mezi hráči.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Platí, že <strong>hráč není postava</strong>. Např. hráč Jan Novák,
            voják, hraje postavu Tomáše Černého, oblíbeného obchodního náměstka
            podniku. Pokud je Tomáš na tvoji postavu celou hru nepříjemný,
            neznamená to, že je takový Jan. A platí to i obráceně – pokud Tomáš
            a tvoje postava prožívali během hry romantický vztah, neznamená to,
            že tento vztah mezi Janem a tebou bude pokračovat i po hře.
          </p>
        </div>

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-rubik text-[40px]/[1.2] font-black text-[#934541] uppercase">
            Bezpečnost na hře
          </h2>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Nevyhnutelnou součástí hry je, že postavy budou ve svých životech
            prožívat mnohdy náročné nebo nepříjemné situace. Proto je pro nás
            zároveň prioritou, abychom udělali maximum pro duševní i fyzické
            bezpečí hráčstva. Kromě těžkých životních situací se hra dotýká i
            témat jako postavení Romů v československé společnosti, ekologická
            hnutí nebo vývoj drogové scény. Sexuální násilí není tématem hry.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Před začátkem hry proběhnou povinné workshopy, kde si společně
            probereme, jak hru hrát a co nejvíce si ji užít. Stejně tak si na
            nich ukážeme, že každý má v případě potřeby možnost herní situaci
            kdykoliv opustit, a jak to udělat. Platí, že účast na hře je po
            celou její dobu dobrovolná, a že zdraví má vždy prioritu před hrou.
          </p>
          <p className="mt-[16px] text-[24px]/[1.2]">
            Po celou dobu akce bude hráčstvu k dispozici
            organizátor/organizátorka na konzultace či krizovou intervenci a
            zdravotník/zdravotnice. Během hry je povolena konzumace alkoholu v
            rozumné míře, tedy aby neovlivnila hru. Obsluha baru se v případě
            potřeby může kdykoliv rozhodnout někomu alkohol nenalít.
          </p>
        </div>

        <SectionsSeparator />

        <div className="mx-auto max-w-[1144px] px-[22px] pt-[85px] pb-[100px] sm:px-[52px]">
          <h2 className="font-rubik text-[40px]/[1.2] font-black text-[#934541] uppercase">
            Autorstvo
          </h2>

          <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row sm:gap-[60px]">
            <ul className="flex flex-col gap-[24px] sm:grow-1 sm:basis-0 sm:gap-[36px]">
              <li>
                <h3 className="font-rubik text-[24px]/[1.2] font-black text-[#934541] uppercase">
                  David František Wagner
                </h3>
                <p className="mt-[8px] text-[24px]/[1.2]">
                  První larp uvedl v 16, tento chystá v 37. Někde mezitím se
                  vyučil učitelem a historikem, pracuje jako politický poradce a
                  manažer a snaží se být dobrým vedoucím projektu Sametová léta.
                  Upřímně věří, že larp je smysluplný nástroj vyprávění o dané
                  době.
                </p>
              </li>
              <li>
                <h3 className="font-rubik text-[24px]/[1.2] font-black text-[#934541] uppercase">
                  Lucie Chlumská
                </h3>
                <p className="mt-[8px] text-[24px]/[1.2]">
                  Kdysi byla hrdou členkou Jisker, pak přišla revoluce a
                  skončila v Rollingu. Vystudovala psychologii a speciální
                  pedagogiku, což se jí hodí při práci personalistky a při
                  organizování larpů (např. Legie: Sibiřský příběh, Národ sobě,
                  Příliš krátká neděle). Na tomto projektu může konečně využít
                  svou lásku k lampionovým průvodům a nenávist k organizovanému
                  programu na rekreačních akcích.
                </p>
              </li>
              <li>
                <h3 className="font-rubik text-[24px]/[1.2] font-black text-[#934541] uppercase">
                  Jan Holan
                </h3>
                <p className="mt-[8px] text-[24px]/[1.2]">
                  Minulý režim nezažil a poslední pobyt v rekreačním středisku
                  absolvoval s traumatem a újmou na plyšovém psovi. Dlouhá léta
                  se věnuje všem odstínům game designu, vystudoval tvorbu
                  videoher a kreativně se jako člen Rollingu podílel například
                  na larpu 97 Poets of Revachol.
                </p>
              </li>
              <li>
                <h3 className="font-rubik text-[24px]/[1.2] font-black text-[#934541] uppercase">
                  Kamila Wagner
                </h3>
                <p className="mt-[8px] text-[24px]/[1.2]">
                  Revoluci prožila jako buclaté batole a velmi rychle poté se
                  stala fanouškem takových klenotů české kinematografie jako
                  Dovolená s Andělem a Anděl na horách. Těší se, že díky larpu
                  Sametová léta uvidí, jak by podobná dovolená probíhala
                  doopravdy. Vedle vedení GenAI/ML projektů jí v poslední době
                  život z(ne)příjemňuje právě tvorba a organizace larpů - 
                  podílela se na 97 Poets of Revachol a redesignu Čistek.
                </p>
              </li>
            </ul>
            <ul className="flex flex-col gap-[24px] sm:grow-1 sm:basis-0 sm:gap-[36px]">
              <li>
                <h3 className="font-rubik text-[24px]/[1.2] font-black text-[#934541] uppercase">
                  Michal Kunc
                </h3>
                <p className="mt-[8px] text-[24px]/[1.2]">
                  Narodil se až ve federativním Československu, a tak přelomovou
                  dobu 80. a 90. let zná pouze z vyprávění. Na podnikovou
                  dovolenou by se ale někdy moc rád podíval, protože
                  strukturovanou zábavu má ve velké oblibě. Ta ho ostatně
                  zavedla i k larpům a Rollingu. Na 97 Poets of Revachol poprvé
                  jako hráče, na Purges/Čistky jako organizátora
                </p>
              </li>
              <li>
                <h3 className="font-rubik text-[24px]/[1.2] font-black text-[#934541] uppercase">
                  Adéla Kundrátová
                </h3>
                <p className="mt-[8px] text-[24px]/[1.2]">
                  Patří ke generaci Z, takže zná sametovou revoluci pouze z
                  barvitého vyprávění rodičů a zkresleného blábolení politiků.
                  Má přehršel bláznivých nápadů, horkých úchopů a silných
                  názorů. V reálném životě se věnuje sociologii, hudbě, boulderu
                  a skotačení s přáteli.
                </p>
              </li>
              <li>
                <h3 className="font-rubik text-[24px]/[1.2] font-black text-[#934541] uppercase">
                  Lucie Zelinka
                </h3>
                <p className="mt-[8px] text-[24px]/[1.2]">
                  V přelomovém období život ji potkává mnoho poprvé, včetně
                  prvního podílu na tvorbě larpu. V týmu může využívat toho, že
                  s řadou dobových situací má významně bližší zkušenosti a může
                  tak zúročit skutečnost, že její dospívání probíhalo v době,
                  kdy se hra odehrává..
                </p>
              </li>
            </ul>
          </div>
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
