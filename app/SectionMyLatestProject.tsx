"use client";

import { useEffect, useState } from "react";
import { assets } from "@/constant/assets";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import styles from "./home.module.css";

export const projectList = [
  {
    slug: "moonrace",
    title: "Moonrace",
    image: "https://assets.devfolio.co/hackathons/beea3a652dd04c86b1890bd76bca5451/projects/7670331dbcdd4c79a82948daa5b845c4/23205364-c73b-4678-8d49-17914011021e.png",
    repositoryUrl: "https://github.com/Jovian-Dsouza/moonrace-unfold24",
    demoUrl: "https://moonrace-unfold24.vercel.app/",
  },
  {
    slug: "haven",
    title: "Haven.fan",
    image: "/projects/haven.png",
    repositoryUrl: "https://github.com/Jovian-Dsouza/havedotfun-frontend",
    demoUrl: "https://haven.fan/",
  },
  {
    slug: "blinkify",
    title: "Blinkify (100xDevs hackathon winner 🎉)",
    image:
      "https://github.com/Jovian-Dsouza/blinkify/blob/main/images/blinkify_home.png?raw=true",
    repositoryUrl: "https://github.com/Jovian-Dsouza/blinkify",
    demoUrl: "https://www.blinkify.fun",
  },
  {
    slug: "lifafa",
    title: "LIfafa (Accepted for Blinks Grant 🎉)",
    image:
      "https://github.com/Jovian-Dsouza/lifafa-next-js/blob/main/images/lifafa_banner.png?raw=true",
    repositoryUrl: "https://github.com/Jovian-Dsouza/lifafa-next-js",
    demoUrl: "https://www.lifafa.fun/",
  },
  {
    slug: "AskAnon",
    title: "AskAnon (Blinkathon 2nd Place Winner 🎉)",
    image: "/projects/askanon.png",
    repositoryUrl: "https://github.com/candypay/askanon",
    demoUrl: "https://askanon.fun/@DsouzaJovian",
  },
  {
    slug: "picoplay",
    title: "Picoplay (Bonkathon 2nd Place Winner 🎉)",
    image: "/projects/picoplay.png",
    repositoryUrl: "https://github.com/Jovian-Dsouza/picoplay",
    demoUrl: "https://picoplay.vercel.app/",
  },
  {
    slug: "okto-rn-sdk",
    title: "Okto React Native SDK",
    image: "https://i3.ytimg.com/vi/d0VWSzRpm7U/maxresdefault.jpg",
    repositoryUrl: "https://github.com/okto-hq/okto-sdk-react-native",
    demoUrl: "https://youtu.be/d0VWSzRpm7U",
  },
  {
    slug: "bitbirdie",
    title: "BitBirdie (Solana Okto Track Winner 🎉)",
    image:
      "https://github.com/Jovian-Dsouza/bitbirdie-nextjs/blob/main/imgs/chat.png?raw=true",
    repositoryUrl: "https://github.com/Jovian-Dsouza/bitbirdie-nextjs",
    demoUrl: "https://bitbirdie.vercel.app/",
  },
  {
    slug: "paychatai",
    title: "PayChatAI (NEAR hackathon Winner 🎉)",
    image:
      "https://github.com/Jovian-Dsouza/paychatai/blob/main/imgs/paychatai_landing.png?raw=true",
    repositoryUrl: "https://github.com/Jovian-Dsouza/paychatai",
    demoUrl: "https://paychatai.vercel.app/",
  },
  {
    slug: "checknights",
    title: "ChecKnights",
    image:
      "https://github.com/Jovian-Dsouza/crypto-checkmate/blob/main/images/game-page.png?raw=true",
    repositoryUrl: "https://github.com/Jovian-Dsouza/crypto-checkmate/",
    demoUrl: "https://crypto-checkmate.vercel.app/",
  },
  {
    slug: "enigmapaste",
    title: "Enigma Paste",
    image:
      "https://github.com/Jovian-Dsouza/enigma-paste/blob/main/images/home.png?raw=true",
    repositoryUrl: "https://github.com/Jovian-Dsouza/enigma-paste",
    demoUrl: "https://enigma-paste.vercel.app/",
  },
  {
    slug: "ainft",
    title: "AI NFT",
    image:
      "https://github.com/Jovian-Dsouza/AI-nft/blob/dalle/images/demo_mint.png?raw=true",
    repositoryUrl: "https://github.com/Jovian-Dsouza/AI-nft",
    demoUrl: "https://ai-nft.joviandsouza.repl.co/",
  },
  {
    slug: "jovidex",
    title: "Jovi Dex",
    image: "https://iili.io/HPSE3Lx.jpg",
    repositoryUrl: "https://github.com/Jovian-Dsouza/jovi-dex",
    demoUrl: "https://jovi-dex.vercel.app/",
  },
];
const tabs = [
  {
    name: "Project",
    image: assets.home.myLatestProject.suitcase,
    data: projectList,
  },
];

tabs.push({
  name: "More",
  image: assets.home.myLatestProject.rocket,
  data: [],
});

export default function SectionMyLatestProject() {
  const [activeTab, setActiveTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab && parseInt(tab) < tabs.length - 1) {
      setActiveTab(parseInt(tab));
    }
  }, [activeTab]);

  return (
    <section
      ref={ref}
      className={`safe-x-padding ${styles.sectionDistance}`}
      aria-label="My Latest Project Section"
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          My Latest Project
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[706px] mx-auto`}
        >
          Take a look at something I&apos;ve worked on, such as a case study,
          real project, and more
        </motion.p>
      </div>
      <div className="mt-[50px] h-full">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-9">
          <div className="flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]">
            {tabs.map((tab, index) => (
              <motion.button
                key={index.toString()}
                className={`relative ${
                  activeTab === index ? "gradient-bg" : "bg-white"
                } w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  if (index === tabs.length - 1) {
                    router.push("/project");
                    return;
                  }
                  setActiveTab(index);
                  window.history.pushState({}, "", `?tab=${index}`);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={tab.image}
                  alt=""
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                  <p
                    className={`${
                      activeTab === index ? "text-white" : "text-accent"
                    } font-bold transition-colors duration-75 ease-in-out`}
                  >
                    {tab.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="overflow-hidden">
            <div className="bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto no-scrollbar">
              <div className="grid grid-flow-row grid-cols-12 gap-[26px]">
                {tabs.map((tab, tabIndex) =>
                  tab.data.map(
                    (item, dataIndex) =>
                      activeTab === tabIndex && (
                        <motion.div
                          key={dataIndex.toString()}
                          className="relative col-span-12 overflow-hidden group xl:col-span-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="col-span-6">
                            <motion.div
                              className="flex items-center justify-center bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-clip"
                              initial={{ opacity: 0, x: -50 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + dataIndex * 0.1,
                              }}
                            >
                              <img
                                className="object-contain h-full "
                                src={item.image}
                                alt=""
                              />
                            </motion.div>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/30 backdrop-blur-md rounded-2xl">
                            <div className="flex flex-col items-center justify-center w-full h-full select-none lg:select-auto">
                              <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">
                                {item.title}
                              </p>
                              <div className="flex flex-row gap-4 text-3xl">
                                {item.repositoryUrl && (
                                  <Link
                                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                    href={{
                                      pathname: item.repositoryUrl,
                                      query: {
                                        utm_source: "deri.my.id",
                                        utm_medium: "campaign",
                                        utm_campaign: "portfolio",
                                      },
                                    }}
                                    target="_blank"
                                    title="Repository"
                                  >
                                    {tabs[activeTab].name.toLowerCase() ===
                                    "project" ? (
                                      <BsGithub />
                                    ) : (
                                      <FiFigma />
                                    )}
                                  </Link>
                                )}
                                {item.demoUrl && (
                                  <Link
                                    className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                    href={{
                                      pathname: item.demoUrl,
                                      query: {
                                        utm_source: "deri.my.id",
                                        utm_medium: "campaign",
                                        utm_campaign: "portfolio",
                                      },
                                    }}
                                    target="_blank"
                                    title="Demo"
                                  >
                                    <IoMdOpen />
                                  </Link>
                                )}
                                <Link
                                  className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                  href={`/project/${item.slug}`}
                                  title={`Detail of ${item.title}`}
                                >
                                  <BsInfoCircle />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
