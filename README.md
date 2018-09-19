# Create Amido App

Fork of `create-react-app` with customized `react-scripts`.


## Differences

Compared to the original `react-scripts`, we include the following changes:

* Add styled components
* Include extended `.eslintrc` (primarily adds [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb))
* Include `.editorconfig`


## Usage

You still use `create-react-app`, just pointing to the Amido fork of `react-scripts`. This can be done like so:

```sh
create-react-app my-app --scripts-version=amido-react-scripts
```

You may want to set up an alias, for example add to your `.zshrc`:

```sh
alias create-amido-app="create-react-app --scripts-version=amido-react-scripts"
```

This will allow you to create a new Amido-customised React app with just the following command:

```sh
create-amido-app my-app
```

Woo!


## Releasing

From the `packages/react-scripts` folder

* `npm version [major|minor|patch]`
* commit and push
* `npm publish`

Check out the [original README.md](https://github.com/facebookincubator/create-react-app/blob/master/README.md) for Getting Started, User Guide, and a whole lot of other documentation around `create-react-app`.
