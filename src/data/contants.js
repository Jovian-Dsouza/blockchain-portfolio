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
    name: "Jovi Token",
    images: [
      "https://github.com/Jovian-Dsouza/JoviTokenIco-contracts/blob/main/images/screenshot.png?raw=true",
    ],
    desc: "JoviToken is an ERC20-based token deployed on Ethereum's Goerli test network. It includes smart contracts for a minted, capped, and timed crowdsale with individual contribution caps and refund options. The project also features token time vesting, distribution, and comprehensive test cases.",
    github: "https://github.com/Jovian-Dsouza/JoviTokenIco-contracts",
    demo: "https://jovitokenico.joviandsouza.repl.co/",
    techStack: ["Hardhat", "Solidity", "OpenZeppelin"],
  },
];
