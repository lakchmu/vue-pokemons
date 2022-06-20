# Vue Pokemons

Hello world app with vue3 and pokeapi.co/


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Nginx Setup

### Restart nginx

```sh
systemctl restart nginx
```

### Status nginx

```sh
systemctl status nginx.service
```

### Display log nginx

```sh
tail -f /var/log/nginx/error.log
```

### Deploy nginx.conf

```sh
scp nginx.conf root@45.89.66.152:/etc/nginx/conf.d/www.pokemons.conf
```
