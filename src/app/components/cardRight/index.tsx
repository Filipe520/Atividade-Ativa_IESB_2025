import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  h2: string;
  p_1: string;
  p_2: string;
};

export default function CardRight({ src, alt, h2, p_1, p_2 }: Props) {
  return (
    <article
      className="bg-white bg-center bg-fixed bg-no-repeat bg-cover flex justify-start items-center rounded-3xl my-5 flex-wrap gap-5 w-full"
      style={{
        backgroundImage: "url('/imagens/fundoCard-01-about.jpg')",
      }}
    >
      <div className="bg-white/90 w-full p-5 rounded-2xl flex max-[500px]:flex-col">
        <section className="w-full flex items-center justify-center">
          <div>
            <Image src={src} alt={alt} width={300} height={300} />
          </div>
        </section>
        <section className="w-full">
          <h2 className="md:text-4xl text-3xl py-7 text-center">
            <strong>{h2}</strong>
          </h2>
          <p className="py-7">{p_1}</p>
          <p>{p_2}</p>
        </section>
      </div>
    </article>
  );
}
