import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div>
      
      <nav>
        <ul>
          <Link href="/"><a><li><Image src='/assets/logo.png' width={194} height={133}/></li></a></Link>
          <li>O instituto</li>
          <li>Quem somos</li>
          <li>Eventos</li>
          <li>Serviços</li>
          <li>Projetos de pesquisa</li>
          <li>Biotecando</li>
          <li>Vídeos e entrevistas</li>
          <li>Publicações</li>
          <li>Contato</li>
          <li>História</li>
          <li>Missão</li>
          <li>Na mídia</li>
          <li></li>
          {/* */ }
        </ul>
      </nav>  
        
    </div>
  )
}
