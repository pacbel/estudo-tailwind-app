"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-8 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Aprendendo Tailwind CSS com Next.js
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Explore exemplos práticos de estilização com Tailwind CSS.
        </p>
      </header>

      <main className="space-y-16">
        {/* Seção de Display e Visibilidade */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2">
            Display e Visibilidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-3">Display Block</h3>
              <div className="block bg-green-500 text-white p-3 rounded mb-2">
                Eu sou um elemento block.
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <code>.block</code> - Ocupa toda a largura disponível.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-3">Display Inline-Block</h3>
              <div className="inline-block bg-yellow-500 text-black p-3 rounded mb-2">
                Eu sou inline-block.
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <code>.inline-block</code> - Flui com o conteúdo, mas aceita
                largura/altura.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-3">Visibilidade</h3>
              <div className="invisible bg-red-500 text-white p-3 rounded mb-2">
                Estou invisível (mas ocupo espaço).
              </div>
              <div className="hidden bg-purple-500 text-white p-3 rounded">
                Estou escondido (não ocupo espaço).
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                <code>.invisible</code>, <code>.hidden</code>
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Flexbox */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-green-500 pb-2">
            Flexbox
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-3">Container Flex</h3>
            <div className="flex space-x-4 bg-gray-200 dark:bg-gray-700 p-4 rounded">
              <div className="flex-1 bg-blue-500 text-white p-3 rounded text-center">
                Item 1 (flex-1)
              </div>
              <div className="bg-blue-500 text-white p-3 rounded text-center">
                Item 2
              </div>
              <div className="flex-grow bg-blue-500 text-white p-3 rounded text-center">
                Item 3 (flex-grow)
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              <code>.flex</code>, <code>.space-x-4</code>, <code>.flex-1</code>, <code>.flex-grow</code>
            </p>
            <h3 className="text-xl font-medium mb-3 mt-6">Alinhamento e Justificação</h3>
            <div className="flex items-center justify-between h-32 bg-gray-200 dark:bg-gray-700 p-4 rounded">
              <div className="bg-red-500 text-white p-3 rounded">Start</div>
              <div className="bg-red-500 text-white p-3 rounded self-end">End (self)</div>
              <div className="bg-red-500 text-white p-3 rounded">Center</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              <code>.items-center</code>, <code>.justify-between</code>, <code>.self-end</code>
            </p>
          </div>
        </section>

        {/* Seção de Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2">
            Grid Layout
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-3">Grid Básico</h3>
            <div className="grid grid-cols-3 gap-4 bg-gray-200 dark:bg-gray-700 p-4 rounded">
              <div className="bg-purple-500 text-white p-3 rounded text-center">1</div>
              <div className="bg-purple-500 text-white p-3 rounded text-center">2</div>
              <div className="bg-purple-500 text-white p-3 rounded text-center">3</div>
              <div className="col-span-2 bg-purple-600 text-white p-3 rounded text-center">
                4 (col-span-2)
              </div>
              <div className="bg-purple-500 text-white p-3 rounded text-center">5</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              <code>.grid</code>, <code>.grid-cols-3</code>, <code>.gap-4</code>, <code>.col-span-2</code>
            </p>
          </div>
        </section>

        {/* Seção de Espaçamento (Padding e Margin) */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-red-500 pb-2">
            Espaçamento (Padding e Margin)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-3">Padding</h3>
              <div className="bg-indigo-500 text-white p-8 rounded">
                Padding de 8 (p-8)
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                <code>.p-8</code>, <code>.pt-4</code>, <code>.px-6</code>, etc.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-3">Margin</h3>
              <div className="bg-pink-500 text-white p-4 rounded mb-4">
                Elemento com margin bottom (mb-4)
              </div>
              <div className="bg-pink-500 text-white p-4 rounded ml-8">
                Elemento com margin left (ml-8)
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                <code>.mb-4</code>, <code>.ml-8</code>, <code>.mx-auto</code> (centralizar), etc.
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Bordas e Sombras */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-indigo-500 pb-2">
            Bordas e Sombras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-3">Bordas</h3>
              <div className="border-4 border-dashed border-teal-500 p-4 rounded mb-4">
                Borda tracejada (border-4 border-dashed border-teal-500)
              </div>
              <div className="border-2 border-solid border-orange-500 rounded-full p-4">
                Borda sólida arredondada (rounded-full)
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                <code>.border-2</code>, <code>.border-dashed</code>, <code>.rounded-lg</code>, <code>.rounded-full</code>
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl">
              <h3 className="text-xl font-medium mb-3">Sombras</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-md mb-4">
                Sombra Média (shadow-md)
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-xl">
                Sombra Extra Grande (shadow-xl)
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                <code>.shadow-sm</code>, <code>.shadow-md</code>, <code>.shadow-lg</code>, <code>.shadow-xl</code>, <code>.shadow-2xl</code>
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Cores e Background */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-pink-500 pb-2">
            Cores e Background
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-red-500 text-white p-4 rounded text-center">bg-red-500</div>
              <div className="bg-green-500 text-white p-4 rounded text-center">bg-green-500</div>
              <div className="bg-blue-700 text-white p-4 rounded text-center">bg-blue-700</div>
              <div className="bg-yellow-300 text-black p-4 rounded text-center">bg-yellow-300</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Texto com cor: <span className="text-purple-600 dark:text-purple-400 font-semibold">.text-purple-600</span>
            </p>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Background com gradiente:
              </p>
              <div className="h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                <code>.bg-gradient-to-r .from-cyan-500 .to-blue-500</code>
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Tipografia */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-purple-500 pb-2">
            Tipografia
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <p className="text-xs">Texto Pequeno (.text-xs)</p>
            <p className="text-sm">Texto Normal (.text-sm)</p>
            <p className="text-base">Texto Base (.text-base)</p>
            <p className="text-lg">Texto Grande (.text-lg)</p>
            <p className="text-xl">Texto XL (.text-xl)</p>
            <p className="text-2xl font-light">Texto 2XL Leve (.text-2xl .font-light)</p>
            <p className="text-3xl font-normal">Texto 3XL Normal (.text-3xl .font-normal)</p>
            <p className="text-4xl font-medium">Texto 4XL Médio (.text-4xl .font-medium)</p>
            <p className="text-5xl font-semibold">Texto 5XL Semi-Negrito (.text-5xl .font-semibold)</p>
            <p className="text-6xl font-bold">Texto 6XL Negrito (.text-6xl .font-bold)</p>
            <p className="text-7xl font-extrabold">Texto 7XL Extra-Negrito (.text-7xl .font-extrabold)</p>
            <p className="italic">Texto Itálico (.italic)</p>
            <p className="underline decoration-wavy decoration-red-500">
              Texto Sublinhado Ondulado (.underline .decoration-wavy .decoration-red-500)
            </p>
            <p className="text-center">Texto Centralizado (.text-center)</p>
            <p className="uppercase">Texto em Maiúsculas (.uppercase)</p>
            <p className="tracking-widest">Espaçamento Largo entre Letras (.tracking-widest)</p>
            <p className="leading-loose">Altura de Linha Solta (.leading-loose)</p>
          </div>
        </section>

        {/* Seção de Responsividade */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-teal-500 pb-2">
            Responsividade
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Redimensione a janela do navegador para ver os efeitos. As classes
              com prefixos (sm:, md:, lg:, xl:) são aplicadas em diferentes
              breakpoints.
            </p>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded">
              <p className="text-green-600 dark:text-green-400 sm:text-blue-600 sm:dark:text-blue-400 md:text-red-600 md:dark:text-red-400 lg:text-purple-600 lg:dark:text-purple-400">
                A cor deste texto muda com o tamanho da tela!
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                O tamanho da fonte também muda.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-teal-500 text-white p-3 rounded text-center">Coluna 1</div>
              <div className="bg-teal-500 text-white p-3 rounded text-center">Coluna 2</div>
              <div className="bg-teal-500 text-white p-3 rounded text-center sm:col-span-2 lg:col-span-1">
                Coluna 3 (ocupa 2 no sm, 1 no lg)
              </div>
              <div className="bg-teal-500 text-white p-3 rounded text-center">Coluna 4</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              Ex: <code>sm:text-blue-600</code>, <code>md:grid-cols-2</code>
            </p>
          </div>
        </section>

        {/* Seção de Estados (Hover, Focus, etc.) */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">
            Estados (Hover, Focus, Active, Disabled)
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Hover</h3>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
              >
                Passe o mouse sobre mim
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                <code>hover:bg-blue-700</code>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Focus</h3>
              <input
                type="text"
                placeholder="Clique aqui"
                className="border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-gray-700 dark:border-gray-600 p-2 rounded outline-none transition-all duration-300"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                <code>focus:border-green-500</code>, <code>focus:ring-2</code>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Active</h3>
              <button
                type="button"
                className="bg-purple-500 active:bg-purple-800 active:scale-95 text-white font-bold py-2 px-4 rounded transition-transform duration-150"
              >
                Clique e segure
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                <code>active:bg-purple-800</code>, <code>active:scale-95</code>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Disabled</h3>
              <button
                type="button"
                disabled
                className="bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 font-bold py-2 px-4 rounded cursor-not-allowed opacity-50"
              >
                Botão Desabilitado
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                <code>disabled</code> (atributo HTML), <code>opacity-50</code>, <code>cursor-not-allowed</code>
              </p>
            </div>
          </div>
        </section>

         {/* Seção de Dark Mode */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-gray-500 pb-2">
            Dark Mode
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-700 dark:text-gray-100">
              O Tailwind CSS suporta dark mode nativamente usando o prefixo <code>dark:</code>.
              Este site alterna entre temas claro e escuro com base na preferência do seu sistema.
            </p>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded">
              <p className="text-black dark:text-white">
                Este texto é preto no modo claro e branco no modo escuro.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <code>dark:text-white</code>
              </p>
            </div>
            <button
                type="button"
                className="mt-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold py-2 px-4 rounded transition-colors duration-300"
                onClick={() => {
                  if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                  } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                  }
                }}
              >
                Alternar Tema (Exemplo Manual)
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Nota: O Tailwind geralmente lida com isso via preferência do sistema ou uma classe no elemento `html`.
                Este botão é um exemplo de como você poderia controlá-lo manualmente.
              </p>
          </div>
        </section>

      </main>

      <footer className="mt-16 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
        <p>
          Feito com ❤️ para aprender Tailwind CSS.
        </p>
        <p className="text-sm mt-2">
          Explore o código em <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/app/page.tsx</code> para ver como cada seção foi estilizada.
        </p>
      </footer>
    </div>
  );
}
