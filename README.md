## Getting Started

First, install using either of the two commands (yarn preferred instead of npm but either should work).

```bash
npm i
# or
yarn
```

Now you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Links

You can add link entries to your site by adding an entry to `config.json`'s `links` list.

```json
{
  ...
  "links": [
    ...
    },
    {
      "name": "My New Link",
      "link": "https://my-cool-site.com",
      "icon": "fa-brands fa-linkedin"
    }
  ]
}
```

Icons can be found on [FontAwesome's website](https://fontawesome.com/search) (Font Awesome v6 is used).

## Changing the style

The style of the whole site can be changed in the `style.css` file.
