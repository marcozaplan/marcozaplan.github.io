# marcozaplan.github.io

Live at https://marcozaplan.github.io/

Personal site for Marco Zaplan. Jekyll on GitHub Pages.

## Editing

| I want to...            | Edit this                                  |
|-------------------------|--------------------------------------------|
| Add a project           | `_data/projects.yml`                       |
| Add a research output   | `_data/research.yml`                       |
| Write a post            | new file in `_posts/YYYY-MM-DD-slug.md`    |
| Change about/contact    | `about.md` / `contact.md`                  |
| Change colours or type  | `assets/css/style.css` (tokens at the top) |
| Change name, links, URL | `_config.yml`                              |

Filter buttons on the portfolio and research pages are generated automatically
from the `tags:` field. Keep tags lowercase and hyphenated: `public-finance`,
not `Public Finance`.

## Local preview

```bash
bundle install
bundle exec jekyll serve --livereload
# http://127.0.0.1:4000
```
