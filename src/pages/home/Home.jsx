import Ney from '../../assets/face.png'
import Logo from '../../assets/logo-njr.png'
import About from '../../assets/ney-about.png'
import './Home.css'

export default function Home() {
  return (
    <>
      <body className='bg-black text-white font-[Poppins] flex justify-center items-center'>

        <header className='flex justify-end '>
          <img src={Logo} alt="logo" className='max-w-30 sm:max-w-34 w-full' />
        </header>

        <main className='flex flex-1 justify-center items-center text-center gap-6 mb-20 sm:gap-14 md:gp-32 lg:gap-40'>
          <img src={Ney} alt="" className='max-w-54  sm:max-w-60 md:max-w-70  w-full mr-10' />
          <h1 className='text-xl w-20 mr-6 sm:text-2xl md:3xl'>NEYMAR JUNIOR</h1>
        </main>

        <main className='flex flex-col md:flex-row md:items-start items-center gap-8 pr-4 pl-2'>
          <img src={About} alt="" className='max-w-54  sm:max-w-60 md:max-w-70  w-full' />
          <div className=' md:text-left '>
            <h1 className="flex text-xl mb-4 font-bold md:font-black md:text-2xl ">Sobre</h1>
            <p className='flex text-base max-w-md lg:max-w-xl w-full'>Neymar da Silva Santso Júnior, mais conhecido como Neymar Jr., naseu em
              5 de fevereiro de 1992, em Mogi das Cruzes, São Paulo. Revelado pelo Santos,
              brilhou na consquista da Libertadores de 2011 e logo foi ao Barcelona, onde fez
              história ao lado de Messi e Suárez. Depois, transferiu-se para o PSG, tornando-se
              a contratação mais cara do história do futebol. Com a Seleção Brasileira, venceu a Copa
              das Confederações e conquistou o inédito ouro olímpico em 2016. Reconhecido pelo
              seu drible, velocidade e habilidade. Neymar é um dos maiores jogadores da sua geração.
            </p>
          </div>
        </main>








      </body> 
    </>
  )
}

