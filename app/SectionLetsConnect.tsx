"use client";

import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/constant/assets';
import styles from './home.module.css';

const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/joviandsouza/",
  instagram: "https://www.instagram.com/jovian.dsouza.19/",
  github: "https://github.com/Jovian-Dsouza",
  twitter: "https://twitter.com/DsouzaJovian",
  mail: "mailto:dsouzajovian123@gmail.com",
};

export default function SectionLetsConnect() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const socialMediaLinks = [
      {
        initial: { y: 50, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : {},
        transition: { duration: 0.5, delay: 0.4 },
        whileHover: { scale: 1.1, transition: { duration: 0.2 } },
        className:
          "hidden lg:block absolute top-14 left-14 xl:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
        src: assets.home.letsConnect.linkedin,
        alt: "LinkedIn",
        width: 168,
        height: 168,
        href: socialLinks.linkedIn,
        ariaLabel: "Connect with Jovian on LinkedIn",
      },
      {
        initial: { y: 50, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : {},
        transition: { duration: 0.5, delay: 0.6 },
        whileHover: { scale: 1.1, transition: { duration: 0.2 } },
        className:
          "hidden lg:block absolute top-14 right-14 xl:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
        src: assets.home.letsConnect.instagram,
        alt: "Instagram",
        width: 168,
        height: 168,
        href: socialLinks.instagram,
        ariaLabel: "Follow Jovian on Instagram",
      },
      {
        initial: { y: -50, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : {},
        transition: { duration: 0.5, delay: 1 },
        whileHover: { scale: 1.1, transition: { duration: 0.2 } },
        className:
          "hidden lg:block absolute bottom-14 right-36 xl:right-44 md:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
        src: assets.home.letsConnect.github,
        alt: "GitHub",
        width: 168,
        height: 168,
        href: socialLinks.github,
        ariaLabel: "View Jovian's code on GitHub",
      },
      {
        initial: { y: -50, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : {},
        transition: { duration: 0.5, delay: 0.8 },
        whileHover: { scale: 1.1, transition: { duration: 0.2 } },
        className:
          "hidden lg:block absolute bottom-14 left-36 xl:left-44 md:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
        src: assets.home.letsConnect.twitter,
        alt: "Twitter",
        width: 168,
        height: 168,
        href: socialLinks.twitter,
        ariaLabel: "Follow Jovian on Twitter",
      },
      {
        initial: { y: 100, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : {},
        transition: { duration: 0.5, delay: 0 },
        whileHover: { scale: 1.1, transition: { duration: 0.2 } },
        className:
          "hidden lg:block absolute -bottom-64 w-10 h-10 md:w-[310px] md:h-[310px] z-10",
        src: assets.home.letsConnect.gmail,
        alt: "Email",
        width: 310,
        height: 310,
        href: socialLinks.mail,
        ariaLabel: "Send Jovian an email",
      },
    ];

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance} overflow-y-hidden lg:h-[1000px]`} aria-label="Let's Connect Section">
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>Let&apos;s Connect</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[730px] mx-auto`}>Do you have any questions or a project in mind? Let&apos;s connect! I am here to help and excited to hear from you. You can also take a look at my work.</motion.p>
            </div>
            <div className='h-full mt-4'>
                <div className='relative flex flex-col items-center justify-center'>
                    <div className="hidden lg:block absolute animate-ping -z-[2]">
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: .5, delay: 1 }} className="rounded-full gradient-bg h-96 w-96"></motion.div>
                    </div>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Image
                            className='w-52 h-52 md:w-[330px] md:h-[330px] lg:w-[530px] lg:h-[530px] rounded-full bg-gray lg:bg-transparent'
                            src={assets.home.letsConnect.avatarBigSmile}
                            alt='Jovian Dsouza'
                            width={530}
                            height={530}
                            priority
                        />
                    </motion.div>
                    {socialMediaLinks.map((link, index) => (
                        <motion.a
                            key={index.toString()}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={link.ariaLabel}
                            className={link.className}
                            initial={link.initial}
                            animate={link.animate}
                            transition={link.transition}
                            whileHover={link.whileHover}
                        >
                            <Image
                                src={link.src}
                                alt={link.alt}
                                width={link.width}
                                height={link.height}
                            />
                        </motion.a>
                    ))}
                    <div className='flex flex-row flex-wrap items-center justify-center gap-3 mt-4 lg:hidden'>
                        <motion.a
                            href={socialLinks.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect with Jovian on LinkedIn"
                            initial={{ y: 50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            className="z-[1] w-[100px] h-[100px]"
                        >
                            <Image src={assets.home.letsConnect.linkedin} alt="LinkedIn" width={100} height={100} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow Jovian on Twitter"
                            initial={{ y: -50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            className="z-[1] w-[100px] h-[100px]"
                        >
                            <Image src={assets.home.letsConnect.twitter} alt="Twitter" width={100} height={100} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.mail}
                            aria-label="Send Jovian an email"
                            initial={{ y: 100, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            className="z-[1] w-[100px] h-[100px]"
                        >
                            <Image src={assets.home.letsConnect.gmail} alt="Email" width={100} height={100} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow Jovian on Instagram"
                            initial={{ y: 50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            className="z-[1] w-[100px] h-[100px]"
                        >
                            <Image src={assets.home.letsConnect.instagram} alt="Instagram" width={100} height={100} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Jovian's code on GitHub"
                            initial={{ y: -50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            className="z-[1] w-[100px] h-[100px]"
                        >
                            <Image src={assets.home.letsConnect.github} alt="GitHub" width={100} height={100} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    )
}
