
### init


```
# build
npm run build:ssr
npm run serve:ssr

```


    "../libs/content-home/src/public_api.ts",
    "../libs/content-archives/src/public_api.ts",
    "../libs/content-about/src/public_api.ts"

### COMMAND

```sh
ng new gcc --style=scss --routing --new-project-root=libs
ng g library backend

ng g library content-home
ng g library content-archives
ng g library content-about



# ng add apollo-angular --project=backend
# https://www.apollographql.com/docs/angular/basics/setup.html
ng g service graphql/content --project=backend

ng g component top-page --project=content-home
ng g component content --project=content-archives

ng generate universal --client-project=gcc

```
