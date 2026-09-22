export const site = {
  name: "Torrence Family Border Collies",
  wordmark: "Torrence Family",
  location: "Hagerstown, Maryland",
  email: "aatkat1210@gmail.com",
  phone: "(951) 488-4008",
  year: 2026,
  dam: {
    name: "Riley",
    role: "Dam / Mom",
    about: "About Riley",
    color: "AKC registered red merle Border Collie",
    joined: "Came home in 2024",
    bio: "Riley came home in 2024 from a family who had lived with Border Collies for years. She is gentle in the house, watchful with the kids, and the reason this litter exists. She is a wonderful mother.",
    image: "/images/parent-dam.jpg",
    slot: "Parent-Dam",
    alt: "Riley, dam of the litter — AKC red merle Border Collie",
  },
  sire: {
    name: "Falcor",
    role: "Sire / Dad",
    about: "About Falcor",
    color: "Black and white Border Collie from an ABCA family",
    joined: "Came home in 2025",
    bio: "Falcor came home a year after Riley, from an ABCA family of Border Collies who herd and run until the sun goes down. He is loyal, fun, and hardworking. He loves to herd, run, and play with kids.",
    image: "/images/parent-sire.jpg",
    slot: "Parent-Sire",
    alt: "Falcor, sire of the litter — black and white Border Collie",
  },
  birthDate: "August 14, 2026",
  goHomeDate: "October 9, 2026",
  litterMonthYear: "August 2026",
  price: "$600",
  tagline: "Raised in our house. Loved by our kids.",
} as const;

export type PuppyStatus = "available" | "reserved";
export type PuppySex = "female" | "male";

export type Puppy = {
  id: string;
  slot: string;
  name: string;
  sex: PuppySex;
  status: PuppyStatus;
  color: string;
  temperament: string;
  idealHome: string;
  image: string;
  alt: string;
};

export const puppies: Puppy[] = [
  {
    id: "america",
    slot: "Puppy-1",
    name: "America",
    sex: "female",
    status: "available",
    color: "Red and white",
    temperament: "Bright and people-oriented. First to scramble into a lap.",
    idealHome: "A family that wants a red-and-white girl in the middle of everything.",
    image: "/images/puppy-1-lark.jpg",
    alt: "America, red and white female Border Collie puppy",
  },
  {
    id: "lavender",
    slot: "Puppy-2",
    name: "Lavender",
    sex: "female",
    status: "available",
    color: "Lilac tricolor merle",
    temperament: "Soft-coated and curious. Watches first, then joins the pile.",
    idealHome: "A home that will keep training fun and give her a daily outing.",
    image: "/images/puppy-2-moss.jpg",
    alt: "Lavender, lilac tricolor merle female Border Collie puppy",
  },
  {
    id: "aurora",
    slot: "Puppy-3",
    name: "Aurora",
    sex: "female",
    status: "available",
    color: "Lilac merle",
    temperament: "Gentle spark. Checks in with people, then goes back to play.",
    idealHome: "A family ready to raise a smart girl with patience and walks.",
    image: "/images/puppy-1-aurora.jpeg",
    alt: "Aurora, a merle Border Collie puppy on the patio",
  },
  {
    id: "tank",
    slot: "Puppy-4",
    name: "Tank",
    sex: "male",
    status: "available",
    color: "White, red, and slate merle",
    temperament:
      "Sturdy and confident. The one who barrels into his brothers and then falls asleep on a shoe.",
    idealHome: "Active family or someone who wants a solid boy with a big personality.",
    image: "/images/puppy-4-quill.jpg",
    alt: "Tank, white, red, and slate merle male Border Collie puppy",
  },
  {
    id: "thor",
    slot: "Puppy-5",
    name: "Thor",
    sex: "male",
    status: "available",
    color: "Red and lilac merle",
    temperament: "Bold, playful, always in the mix.",
    idealHome: "A home that will run, train, and laugh with him.",
    image: "/images/puppy-thor-upright.jpg",
    alt: "Thor, a pale merle Border Collie puppy looking up from the patio",
  },
  {
    id: "loki",
    slot: "Puppy-6",
    name: "Loki",
    sex: "male",
    status: "available",
    color: "Red and lilac merle",
    temperament: "Mischief with a good heart. Finds the toy you hid and brings it back.",
    idealHome: "A family that wants a funny, sharp boy and will give him a job.",
    image: "/images/puppy-loki-upright.jpg",
    alt: "Loki, a cream Border Collie puppy with blue eyes",
  },
];

export const availableCount = puppies.filter((p) => p.status === "available")
  .length;

export const navLinks = [
  { href: "#story", label: "Our Story" },
  { href: "#parents", label: "Parents" },
  { href: "#health", label: "Health" },
  { href: "#litter", label: "Litter" },
  { href: "#testimonials", label: "Families" },
] as const;

export const storyChapters = [
  {
    year: "2024",
    title: "Riley comes home",
    image: "/images/story-2012.jpg",
    alt: "Riley, a red merle Border Collie, on the living-room rug",
    body: "Riley came home in 2024 from a family who had lived with Border Collies for years. She learned our kids’ names faster than we learned her habits. Gentle in the house, watchful at the door, she made the place feel finished.",
  },
  {
    year: "2025",
    title: "Then Falcor",
    image: "/images/story-2016.jpg",
    alt: "Falcor, a black and white Border Collie, standing in the backyard",
    body: "A year later Falcor arrived from an ABCA family of dogs who herd and run until the sun goes down. Loyal, fun, hardworking. He and Riley took to each other the way some people take to a kitchen table — like they had always been there.",
  },
  {
    year: "2025",
    title: "The house with kids",
    image: "/images/story-2018.jpg",
    alt: "Riley and Falcor standing together in the grass at home",
    body: "We are not a kennel. We are a family in Hagerstown with two Border Collies, a yard, and kids who leave toys on the floor. Riley and Falcor live in the house. They sleep where we sleep. They know the sound of the school backpack hitting the bench.",
  },
  {
    year: "2026",
    title: "This litter",
    image: "/images/hero-puppies-straw.jpeg",
    alt: "The litter piled together at home",
    body: "These six puppies were born in our house on August 14, 2026. We hold them every day. The kids help. They will be ready to go home October 9. If one of them is meant for you, write us — we would rather talk than sell a puppy off a webpage.",
  },
] as const;

export const clearances = [
  {
    label: "OFA Hip Dysplasia",
    note: "Riley and Falcor",
    pill: "On file",
  },
  {
    label: "OFA Elbow Dysplasia",
    note: "Riley and Falcor",
    pill: "On file",
  },
  {
    label: "Eye exam",
    note: "Ask us for the papers",
    pill: "On file",
  },
  {
    label: "Collie Eye Anomaly (CEA/CH)",
    note: "DNA tested",
    pill: "On file",
  },
  {
    label: "Trapped Neutrophil Syndrome (TNS)",
    note: "DNA tested",
    pill: "On file",
  },
  {
    label: "Neuronal Ceroid Lipofuscinosis (CL/NCL5)",
    note: "DNA tested",
    pill: "On file",
  },
  {
    label: "Imerslund-Gräsbeck Syndrome (IGS)",
    note: "DNA tested",
    pill: "On file",
  },
  {
    label: "Sensory Neuropathy (SN)",
    note: "DNA tested",
    pill: "On file",
  },
  {
    label: "MDR1 Drug Sensitivity",
    note: "Riley and Falcor",
    pill: "On file",
  },
  {
    label: "Degenerative Myelopathy (DM)",
    note: "Riley and Falcor",
    pill: "On file",
  },
] as const;

export const curriculum = [
  {
    when: "First two weeks",
    title: "In our arms",
    body: "We weigh them, hold them, and let them sleep in a quiet corner of the house. The kids visit in socks, one at a time.",
  },
  {
    when: "Week 3",
    title: "House sounds",
    body: "The dishwasher, the TV, backpacks, laughter. They eat through it. Nothing here is a kennel hallway.",
  },
  {
    when: "Week 4",
    title: "Floors and grass",
    body: "Kitchen tile, the rug, the backyard. They learn their feet before they leave us.",
  },
  {
    when: "Week 5",
    title: "Lots of hands",
    body: "Family, friends who stop by, kids who sit on the floor. Nails, ears, a look in the mouth — ordinary care.",
  },
  {
    when: "Week 6",
    title: "A crate with the door open",
    body: "A bed and a meal inside. Never a timeout. Just a place that feels like theirs.",
  },
  {
    when: "Week 7–8",
    title: "Who they are",
    body: "We watch who barrels in, who waits, who brings the toy back. That is how we talk with you about a match — not by coat color.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Riley leaned on my daughter’s knee the first time we came over. That was the whole introduction.",
    who: "A family friend",
    where: "Hagerstown",
    note: "met Riley at the house",
  },
  {
    quote:
      "Falcor ran until we were tired and then lay down in the kitchen like he had always lived there.",
    who: "Neighbors",
    where: "Washington County",
    note: "know Falcor from the yard",
  },
  {
    quote:
      "You can tell these dogs are in the house. The pups already know the sound of a fridge door.",
    who: "Someone who visited",
    where: "Maryland",
    note: "met the litter",
  },
] as const;

export const faqs = [
  {
    q: "When do they go home?",
    a: "October 9, 2026. Eight weeks. Not earlier.",
  },
  {
    q: "What comes with the puppy?",
    a: "First shots, deworming, a microchip, their health record, and what we have been feeding them. We will walk you through it.",
  },
  {
    q: "How much?",
    a: `${site.price}. We do not take payment on this page. Write us, come meet them, and we will talk.`,
  },
  {
    q: "Pickup or delivery?",
    a: "Pickup at our house in Hagerstown is what we prefer. A reasonable drive can be discussed. We do not ship young puppies.",
  },
  {
    q: "What about health?",
    a: "We will share Riley and Falcor’s vet records if you ask. There is a written health understanding in the papers you get at pickup.",
  },
  {
    q: "Are Border Collies a good first dog?",
    a: "If you will train and get outside. They need something to do — a walk with a purpose, a game, kids who will play. Not a quiet apartment and twenty minutes around the block.",
  },
] as const;

export const householdTypes = [
  { value: "family-with-children", label: "Family with children" },
  { value: "couple", label: "Couple" },
  { value: "single", label: "Single" },
  { value: "working-farm", label: "Working farm" },
  { value: "sport-home", label: "Sport home" },
] as const;

export const NO_PREFERENCE = "none";
