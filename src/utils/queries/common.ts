export const imageQuery = `...,
"lqip": asset -> metadata.lqip`;

export const postContent = `_id,
title,
body,
"slug": slug.current,
mainImage {
  ${imageQuery}
},
author -> {
  name,
  avatar {
    ${imageQuery}
  },
  "slug": slug.current,
},
categories[] -> {
  title,
  "slug": slug.current,
}`;
