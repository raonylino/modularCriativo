import Image from "next/image";

const products = [
  { number: "01", title: "Videoaulas", text: "Produzimos videoaulas para o ensino fundamental, a educação técnica, a graduação e a pós-graduação.", icon: "▶" },
  { number: "02", title: "E-books e materiais didáticos", text: "Conteúdos desenvolvidos em formato unitário ou como kits didáticos para apoiar diferentes jornadas de aprendizagem.", icon: "▤" },
  { number: "03", title: "Questões e estudos de caso", text: "Atividades contextualizadas, desafios colaborativos e questões para aprofundar o conhecimento.", icon: "◫" },
  { number: "04", title: "Slides, roteiros e jogos", text: "Recursos dinâmicos que tornam os conteúdos mais claros, envolventes e fáceis de aplicar.", icon: "✳" },
  { number: "05", title: "Atualização e tradução", text: "Revisamos e adaptamos materiais para acompanhar normas, regulamentações e tecnologias emergentes.", icon: "↗" },
];

const clients = [
  "Faculdade Prominas", "Faculdade Única", "Telesapiens", "FCE · Faculdade Campos Elíseos",
  "Anhanguera", "Unicesumar", "Unileste", "Belaprosa", "UBEC · União Brasileira de Educação Católica",
  "Unyleya", "Unigranrio", "Faculeste", "Uniúnica",
];

const leaders = [
  {
    name: "Profa. Me. Sílvia Cristina da Silva",
    role: "CEO",
    image: "/silvia-cristina.png",
    alt: "Profa. Me. Sílvia Cristina da Silva",
    lattes: "http://lattes.cnpq.br/5911573541377266",
    summary: "Mestre em Educação, Ambiente e Sociedade pela UNIFAE e especialista em Docência do Ensino Superior, Direito/Educação e Educação a Distância.",
    biography: "Participou de atividades docentes e discentes no Mestrado em Análise do Discurso da Universidade Federal de Buenos Aires (UBA). É especialista pela Faculdade Campos Elíseos (FCE) e graduada em Ciências Jurídicas e Sociais pela UNIFEOB.",
  },
  {
    name: "Nathalia Ellen Silva Bezerra",
    role: "Assistente",
    image: "/nathalia-ellen.png",
    alt: "Nathalia Ellen Silva Bezerra",
    lattes: "http://lattes.cnpq.br/2051168044689617",
    summary: "Mestre em Administração pela UFCG, especialista em Direito do Trabalho e Previdenciário e bacharela em Direito pela UEPB.",
    biography: "É especialista em Direito do Trabalho e Previdenciário pelo Centro Universitário de Patos. Atuou como conciliadora jurídica no CEJUSC V do Tribunal de Justiça da Paraíba, em Campina Grande. Também atua como advogada e integrou a Comissão de Direito Previdenciário da OAB em Campina Grande. Tem interesse nas áreas de Direito Ambiental, Direitos Humanos, Direito Civil, do Trabalho, do Consumidor, Previdenciário, Constitucional e Administrativo.",
  },
  {
    name: "Ellen Thaynna Mara Delgado Brandão",
    role: "Assistente",
    image: "/ellen-thaynna.png",
    alt: "Ellen Thaynna Mara Delgado Brandão",
    lattes: "http://lattes.cnpq.br/7271695351178376",
    summary: "Professora conteudista, graduada em Direito, pós-graduada em Docência do Ensino Superior e Gestão Escolar, com experiência em educação e produção de videoaulas.",
    biography: "Graduou-se em Direito pela Faculdade de Ciências Sociais Aplicadas em 2017, concluiu pós-graduações em Docência do Ensino Superior e Gestão Escolar em 2026 e iniciou Licenciatura em Letras — Português no mesmo ano. Atua com ênfase em Direito Penal, Previdenciário, Constitucional, Trabalhista, Administrativo e Empresarial, além da Educação. Desde 2022, participa de projetos de gravação de videoaulas para cursos de pós-graduação, incluindo Unyleya, Faculeste e PetroShore Compliance Business School. Estuda Inteligência Artificial continuamente desde 2024, com interesse em seus impactos nos processos educacionais, profissionais e organizacionais. Também se dedica à gestão e ao desenvolvimento de pessoas.",
  },
];

const unyleyaCoursesUrl =
  "https://lp.unyleya.edu.br/modular?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVhXlhleHRuA2FlbQIxMQBwZG9mAmZkaWQWUSAdSqOyel5Bim8JMnI2z0d-W6Z9VHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp5jwyaBs8jh0gdwaQuR0P226qLZhFDc7OzdeN0aV5Xv44xpGI-lRAw3q7HXX_aem_P56mmMfDT-jGtqpN0ENlGA";

export default function HomePage() {
  return (
    <>
      <div className="topbar"><div className="container topbar-inner"><span className="topbar-desktop"><i /> Produção de conteúdo educacional desde 2016</span><span className="topbar-mobile"><i /> Conteúdo educacional desde 2016</span><span className="topbar-location">São João da Boa Vista · SP</span></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Modular Criativo, início"><Image src="/logo-principal.png" alt="Modular Criativo" width={414} height={216} priority /></a>
          <nav aria-label="Navegação principal"><a href="#sobre">Quem somos</a><a href="#materiais">O que produzimos</a><a href="#lideranca">Liderança</a><a href="#parceiros">Parceiros</a></nav>
          <a className="button button--outline" href="#contato">Fale com a gente <span>↗</span></a>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <picture className="hero-picture">
            <Image className="hero-cover" src="/capa-modular.jpg" alt="Estudante com livros ao lado de um laptop com páginas abertas" fill priority sizes="100vw" />
          </picture>
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span /> CONTEÚDO QUE TRANSFORMA APRENDIZAGEM</p>
              <h1>Conhecimento<br />bem construído<br /><em>move o futuro.</em></h1>
              <p className="hero-description">Criamos materiais educacionais e corporativos com rigor, criatividade e propósito — do planejamento à entrega.</p>
              <div className="hero-actions"><a className="button button--orange" href="#materiais">Conheça nossas soluções <span>↓</span></a><a className="hero-link" href="#sobre">Descubra a Modular <span>↗</span></a></div>
              <div className="hero-note"><b>2016</b><span>desde o início da nossa<br />trajetória educacional</span><i /></div>
            </div>
          </div>
          <div className="hero-edge"><span>CONTEÚDO</span><i /><span>EDUCAÇÃO</span><i /><span>CRIATIVIDADE</span></div>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="container about-grid">
            <div className="about-label"><p className="eyebrow"><span /> QUEM SOMOS</p><span className="about-since">DESDE<br /><b>2016</b></span></div>
            <div className="about-copy"><h2>Transformamos conhecimento em <em>experiências de aprendizagem.</em></h2><p>A Modular Criativo é uma empresa de produção de conteúdos educacionais em área multidisciplinar. Estamos em São João da Boa Vista, no interior de São Paulo, criando materiais para educação a distância na graduação e pós-graduação.</p><p>Nosso trabalho reúne uma rede com mais de 300 professores especialistas, mestres e doutores, em parceria com instituições de ensino e organizações.</p><a href="#materiais" className="under-link">Veja o que produzimos <span>→</span></a></div>
          </div>
        </section>

        <section className="products section-pad" id="materiais">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow"><span /> NOSSAS SOLUÇÕES</p><h2>Conteúdo sob medida.<br /><em>Aprendizagem que acontece.</em></h2></div><p>Desenvolvemos materiais didáticos como unidade ou em kits, de acordo com os objetivos de cada projeto.</p></div>
            <div className="product-grid">{products.map((product) => <article className="product-card" key={product.number}><div className="product-meta"><span>{product.number}</span><b aria-hidden="true">{product.icon}</b></div><div><h3>{product.title}</h3><p>{product.text}</p></div><a href="#contato" aria-label={`Fale conosco sobre ${product.title}`}>↗</a></article>)}</div>
            <div className="production-note"><span className="production-symbol">✳</span><p><b>Da ideia à entrega.</b> Conte com uma equipe especializada em cada etapa, do desenho pedagógico à produção e revisão do material.</p><a href="#contato">Vamos conversar <span>→</span></a></div>
          </div>
        </section>

        <section className="sales-partner" aria-labelledby="sales-partner-title">
          <div className="container sales-partner-inner">
            <div className="sales-partner-copy">
              <p className="eyebrow"><span /> PARCERIA DE VENDAS · UNYLEYA</p>
              <h2 id="sales-partner-title">Cursos para seguir <em>aprendendo.</em></h2>
              <p>A Modular Criativo é parceira de vendas da Unyleya para cursos de graduação e pós-graduação. Acesse a página para conhecer as opções disponíveis e fazer sua matrícula.</p>
            </div>
            <a className="button button--orange" href={unyleyaCoursesUrl} target="_blank" rel="noopener noreferrer">Ver cursos e se inscrever <span>↗</span></a>
          </div>
        </section>

        <section className="numbers"><div className="container numbers-inner"><div><b>2016</b><span>início da nossa trajetória</span></div><i /><div><b>300<span>+</span></b><span>professores especialistas</span></div><i /><div><b>13</b><span>instituições parceiras</span></div><i /><div className="numbers-place"><b>SP</b><span>São João da Boa Vista</span></div></div></section>

        <section className="partners section-pad" id="parceiros">
          <div className="container partners-layout"><div className="partners-intro"><p className="eyebrow"><span /> CONFIANÇA QUE SE CONSTRÓI JUNTO</p><h2>Parcerias que<br /><em>ensinam e inspiram.</em></h2><p>Trabalhamos lado a lado com instituições para desenvolver soluções alinhadas às suas necessidades, com diálogo, transparência e compromisso.</p><a href="#contato" className="under-link">Seja nosso parceiro <span>→</span></a></div><div className="client-panel"><div className="client-panel-top"><span>ALGUMAS INSTITUIÇÕES PARCEIRAS</span><b>01 — 13</b></div><div className="client-grid">{clients.map((client, i) => <div className="client-name" key={client}><span>{String(i + 1).padStart(2, "0")}</span>{client}</div>)}</div></div></div>
        </section>

        <section className="team section-pad" id="lideranca" aria-labelledby="team-title">
          <div className="container">
            <div className="team-heading"><div><p className="eyebrow"><span /> NOSSA LIDERANÇA</p><h2 id="team-title">Pessoas que dão forma<br /><em>à Modular Criativo.</em></h2></div><p>Conheça quem conduz e apoia a criação de experiências educacionais.</p></div>
            <div className="team-grid">
              {leaders.map((leader) => <article className="team-card" key={leader.name}>
                <div className="team-photo"><Image src={leader.image} alt={leader.alt} fill sizes="(max-width: 640px) 88vw, (max-width: 900px) 44vw, 360px" style={{ objectPosition: "center 25%" }} /></div>
                <div className="team-card-body"><span className="team-role">{leader.role}</span><h3>{leader.name}</h3><p>{leader.summary}</p><details><summary>Conheça a trajetória</summary><p>{leader.biography}</p></details><a className="team-lattes" href={leader.lattes} target="_blank" rel="noreferrer">Currículo Lattes <span>↗</span></a></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contato"><div className="container contact-inner"><div><p className="eyebrow"><span /> VAMOS CONVERSAR?</p><h2>Seu próximo projeto<br />começa com uma <em>boa ideia.</em></h2><p>Conte o que você precisa. Nossa equipe está pronta para construir uma solução educacional junto com você.</p></div><div className="contact-action"><span className="contact-city">São João da Boa Vista · São Paulo</span><a href="mailto:modularcriativo@gmail.com">modularcriativo@gmail.com</a><a href="mailto:silviaadvbidi@gmail.com">silviaadvbidi@gmail.com</a><a className="contact-phone" href="https://wa.me/5519995829872" target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa com a Modular Criativo no WhatsApp"><svg aria-hidden="true" viewBox="0 0 32 32"><path fill="currentColor" d="M16.04 2.67A13.28 13.28 0 0 0 4.62 22.73L2.7 29.33l6.75-1.77a13.28 13.28 0 1 0 6.59-24.89Zm0 24.15c-1.96 0-3.89-.53-5.57-1.54l-.4-.24-3.99 1.05 1.07-3.89-.26-.41a10.86 10.86 0 1 1 9.15 5.03Zm5.96-8.14c-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.24-.71.08-.33-.16-1.39-.51-2.64-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.54 5.62 4.96.79.34 1.41.55 1.89.7.79.25 1.51.22 2.08.13.63-.09 1.95-.8 2.23-1.56.27-.77.27-1.43.19-1.56-.08-.13-.3-.22-.63-.38Z" /></svg><span>(19) 99582-9872</span></a><a className="contact-instagram" href="https://www.instagram.com/modularcriativo/" target="_blank" rel="noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" className="instagram-dot" /></svg><span>@modularcriativo</span></a></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-main"><a href="#inicio" className="footer-logo"><Image src="/logo-principal.png" alt="Modular Criativo" width={414} height={216} /></a><p>Conteúdo com propósito.<br />Conhecimento em movimento.</p><div className="footer-links"><a href="#sobre">Quem somos</a><a href="#materiais">O que produzimos</a><a href="#lideranca">Liderança</a><a href="#parceiros">Parceiros</a></div><a className="back-top" href="#inicio">VOLTAR AO TOPO ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Modular Criativo</span><span>São João da Boa Vista · SP</span></div></footer>
    </>
  );
}
