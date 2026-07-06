"use client";

import { useEffect, useState } from "react";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/data/portfolio";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
}

export default function Footer() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Hemantpatidar01")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setGithubData(data))
      .catch(() => null);
  }, []);

  return (
    <footer className="border-t border-white/5 bg-[#050816]/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {githubData && (
          <div className="mb-8 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-center">
              <p className="heading-font text-2xl font-bold gradient-text">
                {githubData.public_repos}
              </p>
              <p className="mt-1 text-xs text-slate-500">Repositories</p>
            </div>
            <div className="text-center">
              <p className="heading-font text-2xl font-bold gradient-text">
                {githubData.followers}
              </p>
              <p className="mt-1 text-xs text-slate-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="heading-font text-2xl font-bold gradient-text">
                {githubData.following}
              </p>
              <p className="mt-1 text-xs text-slate-500">Following</p>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#8B5CF6]">
              <span className="heading-font text-sm font-bold text-white">HP</span>
            </div>
            <div>
              <p className="heading-font font-semibold text-white">{personalInfo.name}</p>
              <p className="text-xs text-slate-500">{personalInfo.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-slate-500">
            Built with <Heart size={14} className="text-red-400" /> by {personalInfo.name} ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
