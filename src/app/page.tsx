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
          </a>
        </div>
      </header>
      <main>
        <div className="pt-[130px] sm:pt-[190px]">
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
      </main>
    </div>
  );
}
