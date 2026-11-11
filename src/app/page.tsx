import Image from "next/image";

const products = [
  { number: "01", title: "E-books e materiais didáticos", text: "Conteúdos desenvolvidos em formato unitário ou como kits didáticos para apoiar diferentes jornadas de aprendizagem.", icon: "▤" },
  { number: "02", title: "Questões e estudos de caso", text: "Atividades contextualizadas, desafios colaborativos e questões para aprofundar o conhecimento.", icon: "◫" },
  { number: "03", title: "Slides, roteiros e jogos", text: "Recursos dinâmicos que tornam os conteúdos mais claros, envolventes e fáceis de aplicar.", icon: "✳" },
  { number: "04", title: "Atualização e tradução", text: "Revisamos e adaptamos materiais para acompanhar normas, regulamentações e tecnologias emergentes.", icon: "↗" },
];

const clients = [
  "Faculdade Prominas", "Faculdade Única", "Telesapiens", "FCE · Faculdade Campos Elíseos",
  "Anhanguera", "Unicesumar", "Unileste", "Belaprosa", "UBEC · União Brasileira de Educação Católica",
  "Unyleya", "Unigranrio", "Faculeste",
];

export default function HomePage() {
  return (
    <>
      <div className="topbar"><div className="container topbar-inner"><span><i /> Produção de conteúdo educacional desde 2016</span><span>São João da Boa Vista · SP</span></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Modular Criativo, início"><Image src="/logo-modular-criativo.png" alt="Modular Criativo" width={500} height={288} priority /></a>
          <nav aria-label="Navegação principal"><a href="#sobre">Quem somos</a><a href="#materiais">O que produzimos</a><a href="#parceiros">Parceiros</a></nav>
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

        <section className="numbers"><div className="container numbers-inner"><div><b>2016</b><span>início da nossa trajetória</span></div><i /><div><b>300<span>+</span></b><span>professores especialistas</span></div><i /><div><b>12</b><span>instituições parceiras</span></div><i /><div className="numbers-place"><b>SP</b><span>São João da Boa Vista</span></div></div></section>

        <section className="partners section-pad" id="parceiros">
          <div className="container partners-layout"><div className="partners-intro"><p className="eyebrow"><span /> CONFIANÇA QUE SE CONSTRÓI JUNTO</p><h2>Parcerias que<br /><em>ensinam e inspiram.</em></h2><p>Trabalhamos lado a lado com instituições para desenvolver soluções alinhadas às suas necessidades, com diálogo, transparência e compromisso.</p><a href="#contato" className="under-link">Seja nosso parceiro <span>→</span></a></div><div className="client-panel"><div className="client-panel-top"><span>ALGUMAS INSTITUIÇÕES PARCEIRAS</span><b>01 — 12</b></div><div className="client-grid">{clients.map((client, i) => <div className="client-name" key={client}><span>{String(i + 1).padStart(2, "0")}</span>{client}</div>)}</div></div></div>
        </section>

        <section className="leadership"><div className="container leadership-inner"><div className="leadership-brand"><Image src="/logo-modular.png" alt="Logo Modular Criativo" width={168} height={238} /></div><div><p className="eyebrow eyebrow--light"><span /> LIDERANÇA COM PROPÓSITO</p><h2>Educação, pesquisa<br />e compromisso social.</h2><p className="leader-name">Me. Silvia Cristina da Silva</p><p className="leader-bio">Mestre interdisciplinar em Educação, Ambiente e Sociedade pela UNIFAE, especialista em Educação a Distância e Docência do Ensino Superior, e graduada em Ciências Jurídicas e Sociais pela UNIFEB.</p></div><div className="leadership-mark">MODULAR<br /><b>CRIATIVO</b></div></div></section>

        <section className="contact section-pad" id="contato"><div className="container contact-inner"><div><p className="eyebrow"><span /> VAMOS CONVERSAR?</p><h2>Seu próximo projeto<br />começa com uma <em>boa ideia.</em></h2><p>Conte o que você precisa. Nossa equipe está pronta para construir uma solução educacional junto com você.</p></div><div className="contact-action"><span className="contact-city">São João da Boa Vista · São Paulo</span><a href="mailto:modularcriativo@gmail.com">modularcriativo@gmail.com</a><a href="mailto:silviaadvbidi@gmail.com">silviaadvbidi@gmail.com</a><a className="contact-phone" href="https://wa.me/5519995829872" target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa com a Modular Criativo no WhatsApp"><svg aria-hidden="true" viewBox="0 0 32 32"><path fill="currentColor" d="M16.04 2.67A13.28 13.28 0 0 0 4.62 22.73L2.7 29.33l6.75-1.77a13.28 13.28 0 1 0 6.59-24.89Zm0 24.15c-1.96 0-3.89-.53-5.57-1.54l-.4-.24-3.99 1.05 1.07-3.89-.26-.41a10.86 10.86 0 1 1 9.15 5.03Zm5.96-8.14c-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.24-.71.08-.33-.16-1.39-.51-2.64-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.54 5.62 4.96.79.34 1.41.55 1.89.7.79.25 1.51.22 2.08.13.63-.09 1.95-.8 2.23-1.56.27-.77.27-1.43.19-1.56-.08-.13-.3-.22-.63-.38Z" /></svg><span>(19) 99582-9872</span></a></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-main"><a href="#inicio" className="footer-logo"><Image src="/logo-modular-criativo.png" alt="Modular Criativo" width={500} height={288} /></a><p>Conteúdo com propósito.<br />Conhecimento em movimento.</p><div className="footer-links"><a href="#sobre">Quem somos</a><a href="#materiais">O que produzimos</a><a href="#parceiros">Parceiros</a></div><a className="back-top" href="#inicio">VOLTAR AO TOPO ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Modular Criativo</span><span>São João da Boa Vista · SP</span></div></footer>
    </>
  );
}
