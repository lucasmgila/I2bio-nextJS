import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className="menuWrapper">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>
                <Image src="/assets/logo.png" width={194} height={133} />
              </a>
            </Link>
          </li>
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
          {/* */}
        </ul>
      </nav>
    </div>
  )
}
