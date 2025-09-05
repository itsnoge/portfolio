import { defineQuery } from 'next-sanity';

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
  _id,
  title,
  slug,
  body,
  mainImage,
  hoverImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  hoverImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
  relatedPosts[]{
    _key,
    ...@->{_id, title, slug}
  }
}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)]|order(publishedAt desc){
    _id,
    title,
    slug,
    description,
    mainImage,
    hoverImage,
    liveUrl,
    repoUrl,
    publishedAt,
    categories,
    technologies,      
    keyFeatures,
    purpose,
    challenge,
    solution,
  }`);

export const PROJECTS_SLUGS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    mainImage,
    hoverImage,
    liveUrl,
    repoUrl,
    publishedAt,
    categories,
    technologies, 
    keyFeatures,
    purpose,
    challenge,
    solution,
    relatedProjects[]{
      _key, 
      ...@->{_id, title, slug} 
    }
  }`);
