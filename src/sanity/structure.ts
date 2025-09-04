import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog section
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ]),
        ),

      // Projects section
      S.listItem()
        .title('Projects')
        .child(
          S.list()
            .title('Projects')
            .items([S.documentTypeListItem('project').title('Projects')]),
        ),

      S.divider(),

      // Everything else
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['post', 'category', 'author', 'project'].includes(item.getId()!),
      ),
    ]);
