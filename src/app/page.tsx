
import Head from 'next/head'
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <div id='contato' className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/fundo1.png')" }}>
        <Head>
          <title>Landing Page</title>
        </Head>

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>

        <div className="relative container mx-auto px-6 py-8 lg:px-16 text-left">
       
       <img src="/img/logo.png" alt="Logo" className="absolute top-7 left-22 w-47" />

      <div className="flex flex-col items-start justify-center h-full space-y-6 mt-32 ml-8 lg:ml-16">
         
    <h1 className="text-3xl text-white font-semibold">
      Quanto dias para você <br /> aprender passo a passo <br /> de como faturar
      <span className="text-pink-500"> R$10.000</span> <br /> todos os meses com a Estética
    </h1>

   
    <p className="text-sm text-white">
      Inscreva-se abaixo para descobrir a formula <br /> oculta ultilizanda por grandes empresarios <br /> bem sucedidas na area de estetica.
    </p>

  
    <div className="flex items-center justify-start space-x-2 text-white text-sm">
      <p>20 a 30 de setembro / Ao vivo às 19h00 <br />Evento 100% Online e gratuito </p>
    </div>

    
    <div className="flex flex-col space-y-4 items-start">
      <input
        type="text"
        placeholder="Seu Nome"
        className="w-80 px-4 py-2 border border-pink-500 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        placeholder="WhatsApp com DD"
        className="w-80 px-4 py-2 border border-pink-500 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="email"
        placeholder="Seu Email"
        className="w-80 px-4 py-2 border border-pink-500 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>

    
      <button className="mt-6 bg-pink-500 text-white px-8 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
        Fazer meu cadastro
      </button>
      </div>
        </div>

      </div>

      <div  className="bg-pink-500 py-8">
        <div className="container mx-auto text-center px-4">
          
          <h2 className="text-white text-3xl font-semibold mb-5 text-left sm:text-center">
           Um evento online e gratuito que vai te mostrar <br /> o passo exato de como viver da Estética
          </h2>

       
       <p className="text-black font-bold text-sm mb-8">
      Faltam para o evento:
       </p>

       
      <div className="flex justify-center gap-1 flex-wrap w-full">
        <div className="bg-white text-center p-4 rounded-md shadow-md w-20 sm:w-24">
        <p className="text-lg font-bold text-pink-500">5</p>
        <p className="text-lg font-bold text-pink-500">Dias</p>
        </div>

        <div className="bg-white text-center p-4 rounded-md shadow-md w-20 sm:w-24">
        <p className="text-lg font-bold text-pink-500">12</p>
        <p className="text-lg font-bold text-pink-500">Horas</p>
        </div>

        <div className="bg-white text-center p-4 rounded-md shadow-md w-20 sm:w-27">
        <p className="text-2xl font-bold text-pink-500">36</p>
        <p className="text-xs sm:text-lg font-bold text-pink-500">Minutos</p>
        </div>

        <div className="bg-white text-center p-4 rounded-md shadow-md w-20 sm:w-27">
        <p className="text-2xl font-bold text-pink-500">29</p>
        <p className="text-xs sm:text-lg font-bold text-pink-500">Segundos</p>
        </div>
    </div>
        </div>
      </div>

      <section id='servico' className="relative">   
      <div className="absolute inset-0">
        <Image 
          src="/img/fundo2.png"
          alt="Imagem de Fundo" 
          layout="fill" 
          objectFit="cover"
          className="z-0" 
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-65"></div>

      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white">
        
        <h1 className="text-2xl md:text-3xl mt-8 font-semibold mb-10 text-center">
         O evento é para você que:
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div className="flex flex-col items-center">
            <Image src="/img/cadeira.jpg" alt="Imagem 1" width={200} height={200} className="rounded-lg shadow-lg" />
            <p className="mt-4 text-center">Quer iniciar na área da <br/> estética mas não sabe o que <br/> fazer e nem por onde começar.</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/img/empe.jpg" alt="Imagem 2" width={280} height={280} className="rounded-lg shadow-lg" />
            <p className="mt-4 text-center">Já Trabalha em alguma <br/> área da estética mas ainda <br/> não ganha o suficiente.</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/img/sentada.jpg" alt="Imagem 3" width={220} height={220} className="rounded-lg shadow-lg" />
            <p className="mt-4 mb-4 text-center">Já ganha algum dinheiro <br/> mas não consegue faturar <br/> R$ 10.000 todos os meses.</p>
          </div>
        </div>
      </div>
      </section>

      <section id='sobre' className="relative py-16">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/fundo2.png" 
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
          className="opacity-95" 
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6">
        
        <div className="text-left text-white max-w-lg space-y-6 ml-8 md:ml-16">
          <h2 className="text-4xl font-bold mb-4">Larrisa Jordão</h2>
          <p>
            Este é o primeiro parágrafo. Aqui, você pode inserir um texto de introdução sobre a Larrisa Jordão. O texto é alinhado à esquerda e a cor é branca.
            Este é o primeiro parágrafo. Aqui, você pode inserir um texto de introdução sobre a Larrisa Jordão. O texto é alinhado à esquerda e a cor é branca.
          </p>
          <p>
           Este é o segundo parágrafo. O layout garante que o texto fique bem visível e legível, mesmo sobre a imagem de fundo.
           Garante que o texto fique bem visível e legível, mesmo sobre a imagem de fundo.
          </p>
          <p>
           Este é o terceiro parágrafo. Continue o conteúdo de forma clara e concisa, utilizando o espaço da seção.
           Este é o terceiro parágrafo. Continue o conteúdo de forma clara e concisa, utilizando o espaço da seção.
          </p>
        </div>
        <div className="w-full md:w-1/2 mb-5 mr-8 mt-8 md:mt-15 md:ml-8">
         <Image src="/img/duas.png" alt="Imagem 1" width={400} height={400} />
        </div>
      </div>
      </section>

      <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            
            <a href="#sobre" className="text-lg font-semibold hover:text-pink-500 mb-2">Sobre</a>
            <a href="#servico" className="text-lg font-semibold hover:text-pink-500 mb-2">Serviços</a>
            <a href="#contato" className="text-lg font-semibold hover:text-pink-500">Contato</a>
          </div>

          
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-white hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.076C22 6.479 17.522 2 12 2 6.478 2 2 6.479 2 12.076c0 5.103 3.663 9.362 8.438 9.975v-7.041H7.073v-2.934h3.365V9.616c0-3.381 2.004-5.263 5.135-5.263 1.497 0 3.046.111 3.46.164v3.66h-2.352c-2.332 0-3.091 1.34-3.091 2.721v2.925h5.213l-.839 2.934h-4.374v7.06C18.337 21.437 22 17.179 22 12.076z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-white hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.659c-.793.35-1.646.585-2.544.693a4.491 4.491 0 0 0 1.97-2.486c-.838.497-1.768.855-2.758 1.049-.791-.843-1.92-1.37-3.165-1.37-2.401 0-4.354 1.96-4.354 4.355 0 .34.039.674.112.993C7.738 8.09 4.1 6.34 1.671 3.619c-.457.785-.717 1.698-.717 2.672 0 1.84 1.26 3.384 2.948 3.94-.555-.017-1.08-.17-1.534-.416v.042c0 2.575 1.83 4.73 4.253 5.225-.444.121-.914.186-1.394.186-.341 0-.674-.033-.998-.098.675 2.104 2.634 3.643 4.936 3.683-1.819 1.426-4.11 2.277-6.59 2.277-.428 0-.854-.025-1.277-.073 2.373 1.518 5.191 2.4 8.16 2.4 9.791 0 15.129-8.104 15.129-15.128 0-.23-.004-.459-.014-.688A10.593 10.593 0 0 0 22 5.659z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-white hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.162c3.486 0 3.884.013 5.25.076 1.44.059 2.688.305 3.603 1.22.915.915 1.161 2.163 1.22 3.603.064 1.366.076 1.764.076 5.25s-.013 3.884-.076 5.25c-.059 1.44-.305 2.688-1.22 3.603-.915.915-2.163 1.161-3.603 1.22-1.366.064-1.764.076-5.25.076s-3.884-.013-5.25-.076c-1.44-.059-2.688-.305-3.603-1.22-.915-.915-1.161-2.163-1.22-3.603-.064-1.366-.076-1.764-.076-5.25s.013-3.884.076-5.25c.059-1.44.305-2.688 1.22-3.603.915-.915 2.163-1.161 3.603-1.22 1.366-.064 1.764-.076 5.25-.076zM12 0C8.736 0 8.333.012 6.951.075 5.577.136 4.467.451 3.667 1.25 2.867 2.05 2.552 3.16 2.491 4.534 2.428 6.198 2.416 6.601 2.416 12s.012 5.802.075 7.465c.061 1.374.376 2.484 1.167 3.284.8.8 1.91 1.115 3.284 1.167 1.364.064 1.767.076 7.465.076s6.101-.012 7.465-.076c1.374-.061 2.484-.376 3.284-1.167.8-.8 1.115-1.91 1.167-3.284.064-1.366.076-1.769.076-7.465s-.012-5.802-.075-7.465c-.061-1.374-.376-2.484-1.167-3.284-.8-.8-1.91-1.115-3.284-1.167-1.366-.064-1.768-.076-7.465-.076zM12 5.838c-3.399 0-6.162 2.763-6.162 6.162 0 3.399 2.763 6.162 6.162 6.162 3.399 0 6.162-2.763 6.162-6.162 0-3.399-2.763-6.162-6.162-6.162zm0 9.303c-1.736 0-3.121-1.385-3.121-3.121s1.385-3.121 3.121-3.121c1.736 0 3.121 1.385 3.121 3.121s-1.385 3.121-3.121 3.121z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Cria Web. Todos os direitos reservados.</p>
        </div>
      </div>
      </footer>
    </>
  );
}
