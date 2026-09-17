export const site = {
  name: "Hearth & Field Border Collies",
  wordmark: "Hearth & Field",
  location: "Madison County, Virginia",
  email: "hello@hearthandfield.example",
  phone: "(555) 010-0145",
  year: 2026,
  firstDog: "Maisie",
  dam: {
    name: "Briar",
    color: "Black & white working farm bitch",
    bio: "Steady on livestock, excellent mother, the one who teaches the pups that humans are safe. Soft off-switch in the house, precise on the job.",
    health:
      "OFA hips/elbows, CAER, CEA/TNS/CL/IGS/SN/MDR1/DM panel on file",
    passes: "biddability, a real off-switch, clean structure",
    image: "/images/parent-dam.jpg",
    slot: "Parent-Dam",
  },
  sire: {
    name: "Rowan",
    color: "Blue merle sport-and-farm dog",
    bio: "Thinks on his feet. Used on cattle and in weekend agility. Confident with strangers, not noisy, not sharp.",
    health: "OFA hips/elbows, CAER, same genetic panel, MDR1 clear",
    passes: "work ethic, clean movement, a brain that wants a job",
    image: "/images/parent-sire.jpg",
    slot: "Parent-Sire",
  },
  birthDate: "August 1, 2026",
  goHomeDate: "September 26, 2026",
  litterMonthYear: "August 2026",
  price: "$2,500",
  deposit: "$300",
  tagline: "Raised by hand. Bred for the work.",
} as const;

export type PuppyStatus = "available" | "reserved";
export type PuppySex = "female" | "male";

export type Puppy = {
  id: string;
  slot: string;
  name: string;
  sex: PuppySex;
  status: PuppyStatus;
  weight: string;
  age: string;
  color: string;
  temperament: string;
  idealHome: string;
  image: string;
};

export const puppies: Puppy[] = [
  {
    id: "lark",
    slot: "Puppy-1",
    name: "Lark",
    sex: "female",
    status: "available",
    weight: "4.6 lbs",
    age: "3 weeks",
    color: "Black & white, full collar",
    temperament:
      "Bold, first to the ball, watches the room.",
    idealHome: "Active family or sport home that will train.",
    image: "/images/puppy-1-lark.jpg",
  },
  {
    id: "moss",
    slot: "Puppy-2",
    name: "Moss",
    sex: "male",
    status: "available",
    weight: "5.1 lbs",
    age: "3 weeks",
    color: "Black & white, blaze",
    temperament:
      "Calm watcher. Last to the food, first to lean on your boot.",
    idealHome: "First-time owner with a training plan and a daily job.",
    image: "/images/puppy-2-moss.jpg",
  },
  {
    id: "pip",
    slot: "Puppy-3",
    name: "Pip",
    sex: "female",
    status: "available",
    weight: "4.4 lbs",
    age: "3 weeks",
    color: "Red & white",
    temperament: "Social butterfly. Invites every human to pick her up.",
    idealHome: "Family with children, people in and out of the house.",
    image: "/images/puppy-3-pip.jpg",
  },
  {
    id: "quill",
    slot: "Puppy-4",
    name: "Quill",
    sex: "male",
    status: "available",
    weight: "5.3 lbs",
    age: "3 weeks",
    color: "Black tri, tan points",
    temperament: "Independent thinker. Already figured out the gate latch.",
    idealHome: "Experienced handler, herding or sport home.",
    image: "/images/puppy-4-quill.jpg",
  },
  {
    id: "bramble",
    slot: "Puppy-5",
    name: "Bramble",
    sex: "female",
    status: "reserved",
    weight: "4.2 lbs",
    age: "3 weeks",
    color: "Blue merle, odd eyes",
    temperament: "Athletic, intense eye, needs a job.",
    idealHome: "Already matched to a working home.",
    image: "/images/puppy-5-bramble.jpg",
  },
  {
    id: "wren",
    slot: "Puppy-6",
    name: "Wren",
    sex: "female",
    status: "available",
    weight: "4.7 lbs",
    age: "3 weeks",
    color: "Black & white, split face",
    temperament: "Soft, adaptable, checks in.",
    idealHome: "Thoughtful first-time owner or older-child family.",
    image: "/images/puppy-6-wren.jpg",
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
    year: "2012",
    title: "The First Dog",
    image: "/images/story-2012.jpg",
    alt: "Maisie, a lean working Border Collie, among chickens in a green farmyard",
    body: `A retired farm Border Collie named ${site.firstDog} arrived skinny and unsure of houses. Within a week she was organizing the chickens and sleeping against the kitchen door. We were not breeders then — just two people who finally understood what kind of dog they were living with.`,
  },
  {
    year: "2016",
    title: "The Decision to Breed",
    image: "/images/story-2016.jpg",
    alt: "Pedigrees and veterinary folders stacked on a wooden farm desk",
    body: "After years of training, herding clinics, and watching too many high-drive pups go to homes that could not meet them, we started asking where the good ones come from. We spent eighteen months reading pedigrees, standing at trials, and learning what OFA, CAER, and a real genetic panel actually mean before we ever signed a breeding contract.",
  },
  {
    year: "2018",
    title: "Foundation Stock",
    image: "/images/story-2018.jpg",
    alt: "Briar and Rowan, two adult Border Collies, standing together in pasture",
    body: "We chose two dogs for brains, biddability, structure, and proven hips — not for color. One came from a working farm line. One came from a sport home that still let the dog think. Neither was a ribbon collection. Both were the kind of partner you would trust with livestock and with children.",
  },
  {
    year: "2020",
    title: "The Rituals",
    image: "/images/story-2020.jpg",
    alt: "Border Collie puppies on a rag rug with toys in a farmhouse kitchen",
    body: "Every puppy is weighed twice daily for the first two weeks. At day three, ENS begins — five exercises, sixty seconds each, every morning. At week three the noise protocol starts: thunder, traffic, children, power tools — played low while the pups eat. By week seven they startle at nothing.",
  },
] as const;

export const clearances = [
  {
    label: "OFA Hip Dysplasia",
    note: "Both parents cleared",
    pill: "Excellent / Good",
  },
  {
    label: "OFA Elbow Dysplasia",
    note: "Both parents cleared",
    pill: "Normal",
  },
  {
    label: "CAER Eye Examination",
    note: "Annual exams on file",
    pill: "Clear",
  },
  {
    label: "Collie Eye Anomaly (CEA/CH)",
    note: "DNA tested",
    pill: "Clear",
  },
  {
    label: "Trapped Neutrophil Syndrome (TNS)",
    note: "DNA tested",
    pill: "Clear",
  },
  {
    label: "Neuronal Ceroid Lipofuscinosis (CL/NCL5)",
    note: "DNA tested",
    pill: "Clear",
  },
  {
    label: "Imerslund-Gräsbeck Syndrome (IGS)",
    note: "DNA tested",
    pill: "Clear",
  },
  {
    label: "Sensory Neuropathy (SN)",
    note: "DNA tested",
    pill: "Clear",
  },
  {
    label: "MDR1 Drug Sensitivity",
    note: "Sire & Dam",
    pill: "Normal / Normal",
  },
  {
    label: "Degenerative Myelopathy (DM)",
    note: "No at-risk puppies",
    pill: "Clear / Carrier",
  },
] as const;

export const curriculum = [
  {
    when: "Days 3–16",
    title: "ENS Protocol",
    body: "Early Neurological Stimulation — five exercises each morning. Builds stress resilience.",
  },
  {
    when: "Week 3",
    title: "Noise Desensitization",
    body: "Thunder, traffic, children, power tools — played softly while pups eat.",
  },
  {
    when: "Week 4",
    title: "Surface Introduction",
    body: "Carpet, tile, gravel, grass, mud. Confident footing before they leave the house.",
  },
  {
    when: "Week 5",
    title: "Human Handling",
    body: "Every puppy held by at least six different people. Nails trimmed, ears checked, mouths opened.",
  },
  {
    when: "Week 6",
    title: "Crate Introduction",
    body: "Open-door crates with warm bedding and meals inside. Never used as punishment.",
  },
  {
    when: "Week 7–8",
    title: "Temperament notes and matching",
    body: "We watch how each pup works a problem, meets a stranger, and settles in a crate. Placement recommendations come from that, not from coat color.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "She learned “that’ll do” before she learned her own name. We should have started with a Border Collie years ago.",
    who: "Megan & Tom",
    where: "Denver, CO",
    note: "Lark’s 2024 sister",
  },
  {
    quote:
      "I wanted a partner for weekend cattle, not a project. He clocked the job on day three and still sleeps on the kitchen rug.",
    who: "James",
    where: "Staunton, VA",
    note: `previous son of ${site.sire.name}`,
  },
  {
    quote:
      "We work from home. She does two training sessions and a walk before lunch and then she is done. That off-switch is real.",
    who: "Priya",
    where: "Montpelier, VT",
    note: "2024 bitch",
  },
] as const;

export const faqs = [
  {
    q: "When do they go home?",
    a: "Eight weeks. Not earlier.",
  },
  {
    q: "What comes with the puppy?",
    a: "Age-appropriate vaccines, deworming, microchip, written contract, health record, and a starter feeding guide.",
  },
  {
    q: "How much?",
    a: `${site.price}. A ${site.deposit} hold reserves the pup after we approve the home. The hold is arranged off this site — this page does not take payment.`,
  },
  {
    q: "Pickup or delivery?",
    a: "Pickup at the farm is preferred. Delivery within a reasonable drive can be discussed. We do not ship underage puppies.",
  },
  {
    q: "What is the health guarantee?",
    a: "Written guarantee covering specified genetic and congenital conditions. Full text is in the contract.",
  },
  {
    q: "Are Border Collies a good first dog?",
    a: "Only if you will train. They need a daily job — herding, sport, scent, advanced obedience — not a quiet apartment and a 20-minute walk.",
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
