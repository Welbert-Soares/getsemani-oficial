import Link from "next/link";

export default function CellInviteSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-80 md:min-h-[400px] gap-6 md:gap-0">
          {/* Coluna do Texto */}
          <div className="flex items-center px-4 md:px-0 py-8 md:py-0">
            <div className="w-full max-w-md">
              <h2 className="text-black dark:text-white text-2xl md:text-3xl font-bold mb-2">
                AINDA NÃO FAZ PARTE DA CÉLULA?
              </h2>
              <p className="text-black dark:text-gray-600 text-base mb-6">
                Sua colaboração é muito importante para o avanço do reino
              </p>
              <Link
                href="#"
                className="inline-block bg-[#1a365d] text-white font-bold px-8 py-3 rounded-xl text-lg hover:bg-[#1a365d]/90 transition-colors"
              >
                CÉLULAS
              </Link>
            </div>
          </div>

          {/* Coluna da Imagem - se estende até a borda direita */}
          <div className="relative h-[280px] md:h-[400px] -mr-4 md:mr-0">
            {/* Wrapper que se estende além do container em desktop */}
            <div className="absolute inset-0 md:left-0 md:right-[calc(-50vw+50%)]">
              <img
                src="/imagens/slides/teste4.png"
                alt="Grupo de célula em atividade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
