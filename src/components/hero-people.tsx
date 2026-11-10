import Image from "next/image";

const people = [
  { src: "/home/pessoa1.jpg", alt: "Estudante sorrindo com cadernos coloridos", position: "center 36%" },
  { src: "/home/pessoa2.jpg", alt: "Estudante consultando o celular", position: "center 29%" },
  { src: "/home/pessoa3.jpg", alt: "Estudante sorrindo com livros e mochila", position: "center 30%" },
  { src: "/home/pessoa4.jpg", alt: "Estudante com notebook", position: "center 31%" },
  { src: "/home/pessoa5.jpg", alt: "Estudante usando o celular", position: "center 30%" },
  { src: "/home/pessoa6.jpg", alt: "Estudante sorrindo e fazendo um sinal de positivo", position: "center 28%" },
];

export function HeroPeople() {
  return (
    <div className="hero-art">
      <div className="people-grid" role="group" aria-label="Composição com retratos de pessoas">
        {people.map((person, index) => (
          <div className={`person-card person-card--${index + 1}`} key={person.src}>
            <Image
              src={person.src}
              alt={person.alt}
              fill
              sizes="(max-width: 640px) 28vw, (max-width: 900px) 22vw, 180px"
              priority={index < 3}
              style={{ objectPosition: person.position }}
            />
          </div>
        ))}
      </div>
      <span className="people-dot people-dot--yellow" aria-hidden="true" />
      <span className="people-dot people-dot--coral" aria-hidden="true" />
      <span className="people-dot people-dot--green" aria-hidden="true" />
    </div>
  );
}
