import { site } from "@/content/site";
import { BrandLogo } from "@/components/brand-logo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo compact />
        <nav aria-label="Navegação principal" className="desktop-nav">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="button button--small button--blue header-cta" href="#conteudos">
          Explorar materiais <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
