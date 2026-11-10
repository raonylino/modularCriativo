import Image from "next/image";
import { collections, site } from "@/content/site";

export function ResourceCollections() {
  return (
    <section className="collections section-pad" id="conteudos" aria-labelledby="collections-title">
      <div className="container">
        <div className="collections-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark" /> BIBLIOTECA DIGITAL</p>
            <h2 id="collections-title">Escolha um tema.<br /><em>Comece a explorar.</em></h2>
          </div>
          <p>Materiais reunidos por assunto para você encontrar seu próximo ponto de partida.</p>
        </div>
        <div className="collection-grid">
          {collections.map((collection, index) => (
            <article className="collection-card" key={collection.title}>
              <a className="collection-cover" href={site.driveUrl} target="_blank" rel="noreferrer" aria-label={`Abrir a coleção ${collection.title} no Google Drive`}>
                <Image src={collection.cover} alt={collection.alt} fill sizes="(max-width: 640px) 88vw, (max-width: 900px) 42vw, 360px" priority={index === 0} />
                <span className="collection-open" aria-hidden="true">↗</span>
              </a>
              <div className="collection-info">
                <span className="collection-tag">{collection.tag}</span>
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
                <a className="collection-link" href={site.driveUrl} target="_blank" rel="noreferrer">Explorar materiais <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
