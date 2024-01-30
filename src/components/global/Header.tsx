"use client";
import { ImageBlock } from "@components/modules/ImageBlock";
import { LinkObject } from "@components/modules/LinkObject";
import { IconSelector } from "@components/utility/IconSelector";
import { GlobalProps, ImageProps } from "@utils/types";
import * as Icon from "@phosphor-icons/react";
import { NavMenu } from "@components/modules/NavMenu";

const socialIcon = (link: string) => {
  const socialPlatforms: { [key: string]: string } = {
    facebook: "FacebookLogo",
    instagram: "InstagramLogo",
    twitter: "TwitterLogo",
    youtube: "YoutubeLogo",
    linkedin: "LinkedinLogo",
    pinterest: "PinterestLogo",
    tiktok: "TiktokLogo",
    spotify: "SpotifyLogo",
    dribbble: "DribbbleLogo",
  };

  const platform = Object.keys(socialPlatforms).find((platform) =>
    link.includes(platform),
  );

  return platform ? socialPlatforms[platform] : null;
};

export const Header = ({
  title,
  social,
  logo,
  categories,
  authors,
}: {
  title: string;
  social: string[];
  logo: ImageProps;
  categories: GlobalProps["categories"];
  authors: GlobalProps["authors"];
}) => {
  const allCategories = categories.map((category) => {
    return {
      href: `/blog/category/${category.slug}`,
      copy: category.title,
    };
  });

  const allAuthors = authors.map((author) => {
    return {
      href: `/blog/author/${author.slug}`,
      copy: author.name,
    };
  });

  return (
    <header>
      <div className="container">
        <ImageBlock image={logo} width={100} />
        <NavMenu
          id="main-menu"
          items={[
            { href: "/", copy: "Home" },
            {
              href: "/blog",
              copy: "Blog",
            },
            {
              href: "#",
              copy: "Categories",
              subItems: allCategories,
            },
            {
              href: "#",
              copy: "Authors",
              subItems: allAuthors,
            },
          ]}
        />
        {social.map((link) => {
          return (
            <LinkObject href={link} key={link}>
              <IconSelector icon={socialIcon(link) as keyof typeof Icon} />
            </LinkObject>
          );
        })}
      </div>
    </header>
  );
};
