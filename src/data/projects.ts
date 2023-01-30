export type Project = {
  title: string;
  tagline: string;
  description?: string;
  images: string[];
  tags: string[];
  url: string;
};

export const projects: Project[] = [
  {
    title: "QF Flash Game",
    tagline: "Burner wallet and quadratic funding experiment.",
    images: ["/qflash/qflash.png"],
    tags: ["project"],
    url: "",
  },
  {
    title: "spotless.wave",
    tagline: "Hypercerts and regenerative inititives.",
    images: ["/spotless.wave/create.png"],
    tags: ["project"],
    url: "",
  },
  {
    title: "CHFTY",
    tagline: "Web3App for restaurants and chefs.",
    images: ["/chfty/chfty.main.png"],
    tags: ["project"],
    url: "",
  },
  {
    title: "Freeflow Escrow",
    tagline: "Agreements for freelancers and clients.",
    images: ["/escrow/escrow.png"],
    tags: ["project"],
    url: "",
  },

  {
    title: "Fluid DAO",
    tagline: "5 Page DAO built from Figma designs.",
    images: ["/fluid/fluid.auction.png"],
    tags: ["project"],
    url: "",
  },
  {
    title: "b0tt0",
    tagline:
      "Point-of-Sale and digital queuing for food trucks and street vendors.",
    images: ["/botto/merchant.png"],
    tags: ["project"],
    url: "",
  },
  {
    title: "Q-Link",
    tagline: "Digital queue tickets.",
    description:
      "Digital queuing for cafés, food trucks, restaurants, event hosts, waitlists, etc. The owners can easily notify their customers when it's their turn and verify tickets and payment by scanning the ticket QR code.",
    images: ["/qlink/admin.queue.png"],
    tags: ["project"],
    url: "",
  },

  {
    title: "Kaly",
    tagline: "Web3 calendar and scheduling app for DAOs built with Ceramic.",
    images: ["/kaly/kaly.png"],
    tags: ["hackathon"],
    url: "",
  },
  {
    title: "Skulptur",
    tagline: "Decentralized Google Forms platform with Ceramic Network",
    images: ["/skulptur/skulptur.png"],
    tags: ["hackathon"],
    url: "",
  },
  {
    title: "Reef Payment",
    tagline: "Merchant payment gateway with REEF",
    images: ["/reef/reef.shop.png"],
    tags: ["hackathon"],
    url: "",
  },
  {
    title: "Atoll IDO",
    tagline: "Launchpad platform with token staking.",
    images: ["/atoll/atoll.png"],
    tags: ["hackathon"],
    url: "",
  },
  {
    title: "Conviction Voting",
    tagline: "Off-chain continuous decision making.",
    images: ["/ceramic_voting/ceramic_voting.png"],
    tags: ["hackathon"],
    url: "",
  },
];
