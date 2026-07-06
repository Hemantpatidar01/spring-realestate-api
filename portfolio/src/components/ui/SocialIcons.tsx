import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconBaseProps } from "react-icons";

export function GithubIcon(props: IconBaseProps) {
  return <FaGithub {...props} />;
}

export function LinkedinIcon(props: IconBaseProps) {
  return <FaLinkedin {...props} />;
}
