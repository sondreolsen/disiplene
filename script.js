const disciples = [
  {
    name: "Simon Peter",
    born: "ca. 1 e.Kr.",
    died: "ca. 64–68 e.Kr.",
    death: "Tradisjonelt sagt korsfestet opp ned i Roma.",
    birthplace: "Betsaida i Galilea",
    books: "1. og 2. Petersbrev.",
    palette: ["#70503a", "#d3b27b", "#c78e53", "#ede0c4"],
    image: "Pictures/simonpeter.jpg",
    imagePosition: "center 12%"
  },
  {
    name: "Andreas",
    born: "ca. 5 e.Kr.",
    died: "ca. 60–70 e.Kr.",
    death: "Tradisjonelt sagt korsfestet i Patras i Hellas.",
    birthplace: "Betsaida i Galilea",
    books: "Ingen bibelbøker er regnet som skrevet av Andreas.",
    palette: ["#5e4437", "#cba675", "#b97a48", "#f2e3bf"],
    image: "Pictures/andreas.jpg",
    imagePosition: "center 18%"
  },
  {
    name: "Jakob, Sebedeus' sønn",
    born: "ca. 3 e.Kr.",
    died: "ca. 44 e.Kr.",
    death: "Henrettet med sverd i Jerusalem under Herodes Agrippa I.",
    birthplace: "Trolig Galilea",
    books: "Ingen bibelbøker er regnet som skrevet av denne Jakob.",
    palette: ["#604437", "#d1a86e", "#8b5a3e", "#f0dfc2"],
    image: "Pictures/jakob sebedeus sønn.jpg",
    imagePosition: "center 14%"
  },
  {
    name: "Johannes",
    born: "ca. 6 e.Kr.",
    died: "ca. 90–100 e.Kr.",
    death: "Tradisjonelt sagt å ha dødd av høy alder i Efesos.",
    birthplace: "Trolig Galilea",
    books: "Johannesevangeliet, 1., 2. og 3. Johannesbrev og Åpenbaringen tilskrives Johannes.",
    palette: ["#4f483e", "#cdb58f", "#9a6d47", "#f1e7cf"],
    image: "Pictures/Johannes.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Filip",
    born: "ca. 10 e.Kr.",
    died: "ca. 80 e.Kr.",
    death: "Tradisjonelt sagt martyrdrept i Hierapolis.",
    birthplace: "Betsaida i Galilea",
    books: "Ingen bibelbøker er regnet som skrevet av Filip.",
    palette: ["#544236", "#d0b07f", "#c48d58", "#f2e6ca"],
    image: "Pictures/filip.jpg",
    imagePosition: "center 14%"
  },
  {
    name: "Bartolomeus",
    born: "ca. 10 e.Kr.",
    died: "ca. 68 e.Kr.",
    death: "Tradisjonene varierer, ofte sagt flådd og deretter drept.",
    birthplace: "Tradisjonelt knyttet til Kana i Galilea",
    books: "Ingen bibelbøker er regnet som skrevet av Bartolomeus.",
    palette: ["#57473b", "#d1b07f", "#9f7149", "#f2e5cd"],
    image: "Pictures/Bartolomeus.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Tomas",
    born: "ca. 5–10 e.Kr.",
    died: "ca. 72 e.Kr.",
    death: "Tradisjonelt sagt drept med spyd i India.",
    birthplace: "Ukjent, trolig Galilea",
    books: "Ingen bibelbøker i Bibelen er regnet som skrevet av Tomas.",
    palette: ["#5d4334", "#d6b27a", "#b2754d", "#f5e7c7"],
    image: "Pictures/Tomas.jpg",
    imagePosition: "center 10%"
  },
  {
    name: "Matteus",
    born: "ca. 5 e.Kr.",
    died: "ca. 60–70 e.Kr.",
    death: "Tradisjonene varierer; ofte sagt å ha dødd som martyr.",
    birthplace: "Kapernaum eller området rundt Galilea",
    books: "Matteusevangeliet",
    palette: ["#5d483a", "#cfa976", "#8f603d", "#f1dfc0"],
    image: "Pictures/Matteus.jpg",
    imagePosition: "center 14%"
  },
  {
    name: "Jakob, Alfeus' sønn",
    born: "ca. 10 e.Kr.",
    died: "ca. 62 e.Kr.",
    death: "Tradisjonene varierer; ofte sagt å ha blitt steinet eller slått i hjel.",
    birthplace: "Ukjent, trolig Galilea",
    books: "Ingen bibelbøker kan sikkert knyttes til denne Jakob.",
    palette: ["#554337", "#cbb084", "#a46f46", "#efe1c4"],
    image: "Pictures/Jakob alfeus sønn.jpg",
    imagePosition: "center 15%"
  },
  {
    name: "Taddeus / Judas, Jakobs sønn",
    born: "ca. 10 e.Kr.",
    died: "ca. 65 e.Kr.",
    death: "Tradisjonelt sagt drept som martyr, ofte med kølle eller øks.",
    birthplace: "Ukjent, trolig Galilea",
    books: "Judasbrevet tilskrives tradisjonelt Judas.",
    palette: ["#5f4437", "#d4b585", "#c07d4c", "#f2e8d1"],
    image: "Pictures/Taddeus.jpg",
    imagePosition: "center 15%"
  },
  {
    name: "Simon Seloten",
    born: "ca. 10 e.Kr.",
    died: "ca. 65–74 e.Kr.",
    death: "Tradisjonene varierer; ofte sagt å ha lidd martyrdøden under misjon.",
    birthplace: "Ukjent, trolig Galilea",
    books: "Ingen bibelbøker er regnet som skrevet av Simon Seloten.",
    palette: ["#564336", "#d1aa75", "#956342", "#efe2c5"],
    image: "Pictures/Simon seloten.jpg",
    imagePosition: "center 15%"
  },
  {
    name: "Judas Iskariot",
    born: "ca. 1–5 e.Kr.",
    died: "ca. 30–33 e.Kr.",
    death: "Tok sitt eget liv etter å ha forrådet Jesus.",
    birthplace: "Muligens Keriot i Judea",
    books: "Ingen bibelbøker er regnet som skrevet av Judas Iskariot.",
    palette: ["#4c3b35", "#b08f69", "#7d5141", "#e8d8b7"],
    image: "Pictures/Judas Iskariot.jpg",
    imagePosition: "center 14%"
  }
];

const template = document.querySelector("#disciple-card-template");
const grid = document.querySelector("#disciples-grid");

function createPortraitSvg(name, palette) {
  const [robe, skin, hair, bg] = palette;
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" role="img" aria-label="${name}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg}" />
          <stop offset="100%" stop-color="#f9f0db" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" rx="28" fill="url(#bg)" />
      <circle cx="200" cy="168" r="92" fill="${skin}" />
      <path d="M116 160c8-70 56-114 96-114s86 42 95 112c-20-14-42-21-66-23-24 29-63 48-111 54-10-8-12-15-14-29Z" fill="${hair}" />
      <path d="M144 242c19 28 42 42 56 42s37-14 56-42c-12 4-29 8-56 8s-44-4-56-8Z" fill="${hair}" opacity="0.94" />
      <ellipse cx="168" cy="174" rx="9" ry="6" fill="#3a2b21" />
      <ellipse cx="233" cy="174" rx="9" ry="6" fill="#3a2b21" />
      <path d="M184 212c10 9 23 9 34 0" stroke="#6e4731" stroke-width="6" stroke-linecap="round" fill="none" />
      <path d="M112 420c15-87 56-129 88-129s73 42 88 129" fill="${robe}" />
      <path d="M126 420h148v46H126z" fill="${robe}" opacity="0.88" />
      <text x="200" y="456" text-anchor="middle" font-size="44" font-family="Georgia, serif" fill="#f9eed7" opacity="0.85">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildDetailMarkup(disciple) {
  return `
    <strong>Født:</strong> ${disciple.born}<br>
    <strong>Døde:</strong> ${disciple.died}<br>
    <strong>Dødsårsak:</strong> ${disciple.death}<br>
    <strong>Fødested:</strong> ${disciple.birthplace}<br>
    <strong>Bøker:</strong> ${disciple.books}
  `;
}

disciples.forEach((disciple, index) => {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".disciple-card");
  const button = fragment.querySelector(".card-toggle");
  const portrait = fragment.querySelector(".portrait");
  const names = fragment.querySelectorAll(".disciple-name");
  const detail = fragment.querySelector(".disciple-detail");

  if (disciple.image) {
    portrait.src = disciple.image;
    portrait.alt = `Portrett av ${disciple.name}`;
  } else {
    portrait.src = createPortraitSvg(disciple.name, disciple.palette);
    portrait.alt = `Illustrert portrett av ${disciple.name}`;
  }

  if (disciple.imagePosition) {
    portrait.style.setProperty("--portrait-position", disciple.imagePosition);
  }

  if (disciple.imageScale) {
    portrait.style.setProperty("--portrait-scale", disciple.imageScale);
  }

  portrait.decoding = "async";
  portrait.loading = index < 6 ? "eager" : "lazy";
  if (index < 2) {
    portrait.fetchPriority = "high";
  }

  portrait.addEventListener("error", () => {
    portrait.src = createPortraitSvg(disciple.name, disciple.palette);
    portrait.alt = `Illustrert portrett av ${disciple.name}`;
  }, { once: true });

  names.forEach((nameEl) => {
    nameEl.textContent = disciple.name;
  });
  detail.innerHTML = buildDetailMarkup(disciple);

  button.setAttribute("aria-label", `Vis informasjon om ${disciple.name}`);
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    const isFlipped = card.classList.toggle("is-flipped");
    button.setAttribute("aria-pressed", String(isFlipped));
  });

  grid.appendChild(fragment);
});
