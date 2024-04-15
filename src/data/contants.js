import htmlSvg from "../images/skills/html.svg";
import javascriptSvg from "../images/skills/javascript.svg";
import reactSvg from "../images/skills/react.svg";
import tailwindSvg from "../images/skills/tailwind.svg";

export const navLinks = ["home", "about", "projects", "contact"];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/joviandsouza",
  github: "https://github.com/Jovian-Dsouza",
};

export const techStacks = [htmlSvg, javascriptSvg, reactSvg, tailwindSvg];

export const projectSampleList = [
  {
    name: "BitBirdie",
    images: [
      "https://github.com/Jovian-Dsouza/bitbirdie-nextjs/blob/main/imgs/chat.png?raw=true",
    ],
    desc: "BitBirdie is an AI-powered cryptocurrency wallet designed to simplify web3 transactions using natural language processing. Built with Okto wallet and AI technology, BitBirdie aims to make crypto accessible to all.",
    github: "https://github.com/Jovian-Dsouza/bitbirdie-nextjs",
    demo: "https://bitbirdie.vercel.app/",
    techStack: ["Next.js", "Solana", "Tailwind", "LLM"],
  },
  {
    name: "PayChatAI (NEAR hackathon Winner)",
    images: [
      "https://github.com/Jovian-Dsouza/paychatai/blob/main/imgs/paychatai_landing.png?raw=true",
    ],
    desc: "PayChatAI is a platform that empowers users to create, instruct, and monetize GPT models effortlessly. With our user-friendly interface, you can seamlessly craft and fine-tune your own ChatGPT-like models tailored to your specific needs. Leveraging Nevermind's integrated payment widget, creators can monetize their models with ease.",
    github: "https://github.com/Jovian-Dsouza/paychatai",
    demo: "https://paychatai.vercel.app/",
    techStack: ["Next.js", "Avalance", "Tailwind", "Payments"],
  },
  {
    name: "ChecKnights",
    images: [
      "https://github.com/Jovian-Dsouza/crypto-checkmate/blob/main/images/game-page.png?raw=true",
    ],
    desc: "The decentralized chess game on the Flow blockchain provides a secure, transparent, and fair gaming platform. It allows players to enjoy chess against AI, friends, or random opponents without the need for wallets, simplifying user access and asset management, making chess accessible to everyone.",
    github: "https://github.com/Jovian-Dsouza/crypto-checkmate/",
    demo: "https://crypto-checkmate.vercel.app/",
    techStack: ["Flow", "Ably", "Next.js"],
  },
  {
    name: "Enigma Paste",
    images: [
      "https://github.com/Jovian-Dsouza/enigma-paste/blob/main/images/home.png?raw=true",
    ],
    desc: "Enigma Paste is a decentralized pastebin platform that prioritizes privacy, security, and collaboration. It ensures user data control, confidential sharing with encryption, simplified code sharing, tamper-proof records, and integrates with Web3 technologies. It provides a secure and resilient solution for decentralized information sharing and storage",
    github: "https://github.com/Jovian-Dsouza/enigma-paste",
    demo: "https://enigma-paste.vercel.app/",
    techStack: ["Next.js", "Tailwindcss", "solidity"],
  },

  {
    name: "AI NFT",
    images: [
      "https://github.com/Jovian-Dsouza/AI-nft/blob/dalle/images/demo_mint.png?raw=true",
    ],
    desc: "AI-NFT is an ERC721-based NFT Contract on Ethereum's Goerli test network. It utilizes AI to generate unique NFTs from text-to-image models like DALL-E. These NFTs can be minted, traded, and showcased on the OpenSea platform. A learning project with cool features.",
    github: "https://github.com/Jovian-Dsouza/AI-nft",
    demo: "https://ai-nft.joviandsouza.repl.co/",
    techStack: ["React", "Express", "OpenZeppelin"],
  },

  {
    name: "Jovi Dex",
    images: ["https://iili.io/HPSE3Lx.jpg"],
    desc: "Created a visually captivating DEX platform with Next.js, incorporating the 1inch API for seamless token swapping. Successfully tackled blockchain transaction and API integration challenges, ensuring a user-friendly experience.",
    github: "https://github.com/Jovian-Dsouza/jovi-dex",
    demo: "https://jovi-dex.vercel.app/",
    techStack: ["NextJs", "TailwindCSS", "Morallis"],
  },

  // {
  //   name: "Jovi Token",
  //   images: [
  //     "https://github.com/Jovian-Dsouza/JoviTokenIco-contracts/blob/main/images/screenshot.png?raw=true",
  //   ],
  //   desc: "JoviToken is an ERC20-based token deployed on Ethereum's Goerli test network. It includes smart contracts for a minted, capped, and timed crowdsale with individual contribution caps and refund options. The project also features token time vesting, distribution, and comprehensive test cases.",
  //   github: "https://github.com/Jovian-Dsouza/JoviTokenIco-contracts",
  //   demo: "https://jovitokenico.joviandsouza.repl.co/",
  //   techStack: ["Hardhat", "Solidity", "OpenZeppelin"],
  // },
];
