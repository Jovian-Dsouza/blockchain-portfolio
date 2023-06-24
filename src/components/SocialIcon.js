import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { socialLinks } from "../contants";

const brandIcon = {
  linkedin: faLinkedin,
  github: faGithub,
};

export function SocialIcon({ className, type }) {
  return (
    <a href={socialLinks[type]}>
      <FontAwesomeIcon icon={brandIcon[type]} className={className} />
    </a>
  );
}
