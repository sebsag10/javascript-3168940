export let comic = {
  banners: [
    "./IMGS/banner_1.png",
    "./IMGS/banner_2.png",
    "./IMGS/banner_3.png",
    "./IMGS/banner_4.png",
  ],
  nombreComic: "El eco eterno",
  numeroCapitulos: 3,
  genero: "biográfico, drama épico",
  sinopsis:
    "Se narra el viaje espiritual y artístico de Elkin, un joven músico que lucha contra las injusticias y la censura en una sociedad dividida. A su lado, la Sombra y el Cuervo representan las voces internas del miedo y la libertad. Juntos encarnan la resistencia del arte frente al poder.",
  autores: ["Sebastián Acevedo González", "Ostin"],
  year: 2025,
  personajes: [
    {
      id: 1,
      nombre: "Elkin",
      descripcion:
        "La versión madura del artista que transforma el dolor en sabiduría. Porta su guitarra negra y guía su renacimiento, enfrentando desafíos mientras busca su voz artística.",
      subtexto: "Del dolor nace su música.",
      imagen: "./IMGS/elkin.png",
      clase: "elkin",
    },
    {
      id: 2,
      nombre: "La Sombra",
      descripcion:
        "Es el reflejo de sus miedos y heridas, pero también la fuente de su fuerza. Surge en momentos de conflicto para recordarle quién es, y transformar su sufrimiento en arte y conciencia.",
      subtexto: "Fuerza en su oscuridad.",
      imagen: "./IMGS/sombra.png",
    },
    {
      id: 3,
      nombre: "El Cuervo",
      descripcion:
        "Mensajero de libertad y sabiduría, guía a Elkin a través del velo del silencio. Su presencia une lo terrenal con lo espiritual, llevando la verdad donde las palabras no pueden llegar.",
      subtexto: "Guía entre sombra y luz.",
      imagen: "./IMGS/cuervo.png",
      clase: "cuervo",
    },
  ],

  capitulos: [
    {
      id: 1,
      nombre: "El origen",
      portada: "./IMGS/caps/cap_1.png",
      descripcion:
        "Elkin descubre su voz interior en medio del caos universitario. Entre dudas, sueños y rebeldía, nace la chispa de lo que se convertirá en una revolución musical.",
      subtexto:
        "Los inicios universitarios de Elkin y el nacimiento de su pasión musical.",
    },
    {
      id: 2,
      nombre: "La batalla",
      portada: "./IMGS/caps/cap_2.png",
      descripcion:
        "La banda enfrenta la represión del sistema. Entre protestas, discursos y guitarras encendidas, Elkin debe decidir entre la fama o la verdad.",
      subtexto:
        "Protestas, represión y la encrucijada entre fama y principios.",
    },
    {
      id: 3,
      nombre: "El legado",
      portada: "./IMGS/caps/cap_3.png",
      descripcion:
        "Elkin deja su mensaje para una nueva generación: el arte como resistencia y la voz como símbolo eterno. El espíritu de Arkana se convierte en inmortal.",
      subtexto:
        "El mensaje eterno de Elkin: arte como resistencia para el futuro.",
    },
  ],
};
