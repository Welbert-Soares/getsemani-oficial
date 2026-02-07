import Link from "next/link";

export default function CellInviteSection() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-80 md:min-h-[400px] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch min-h-80 md:min-h-[400px] px-0 md:px-4 gap-3 md:gap-0">
          {/* Texto */}
          <div className="flex items-center justify-center md:justify-start px-4 py-8 md:px-0 md:py-0">
            <div className="flex flex-col justify-center md:items-start items-start text-left w-full max-w-md">
              <h2 className="text-black dark:text-white text-2xl md:text-3xl font-bold mb-2">
                AINDA NÃO FAZ PARTE DA CELULA?
              </h2>
              <p className="text-black dark:text-primary text-base mb-8">
                Sua colaboração é muito importante para o avanço do reino
              </p>
              <Link
                href="#"
                className="inline-block bg-primary-blue text-white font-bold px-8 py-3 rounded-xl text-lg md:text-xl shadow hover:bg-primary-blue/90 transition"
              >
                Células
              </Link>
            </div>
          </div>
          {/* Imagem à direita, ocupando toda a coluna */}
          <div className="relative w-full h-[220px] md:h-auto flex items-stretch">
            <img
              src="/imagens/slides/teste4.png"
              alt="Célula"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Overlay para garantir que a imagem vá até a borda direita da tela */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 pointer-events-none z-0">
          <img
            src="/imagens/slides/teste4.png"
            alt="Célula"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
