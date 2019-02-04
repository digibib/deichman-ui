### Readme

Example layout

```jsx
import { Container, Block, Grid, GridItem } from '@digibib/deichman-ui';

<Container>
  <Block top={10}>
    <Grid>
      <GridItem large="one-half">
        <h1>Headline</h1>
      </GridItem>
      <GridItem large="one-half">
        <Block top={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum esse, fugiat sit
          distinctio reiciendis eos, doloremque ipsum veritatis repellendus delectus velit facilis
          fuga voluptas beatae! Quis id sit dignissimos.
        </Block>

        <Block top={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum esse, fugiat sit
          distinctio reiciendis eos, doloremque ipsum veritatis repellendus delectus velit facilis
          fuga voluptas beatae!
        </Block>

        <Block top={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum esse, fugiat sit
          distinctio reiciendis eos, doloremque ipsum veritatis.
        </Block>
      </GridItem>
    </Grid>
  </Block>
</Container>;
```

#### Without React:

```html
<main class="container">
  <section class="block block--top-10">
    <div class="grid">
      <div class="grid__item large--one-half">
        <div class="block block--top-4"><h1>Headline</h1></div>
      </div>

      <div class="grid__item large--one-half">
        <div class="block block--top-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum esse, fugiat
            sit distinctio reiciendis eos, doloremque ipsum veritatis repellendus delectus velit
            facilis fuga voluptas beatae! Quis id sit dignissimos.
          </p>
        </div>
        <div class="block block--top-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum esse, fugiat
            sit distinctio reiciendis eos, doloremque ipsum veritatis repellendus delectus velit
            facilis fuga voluptas beatae! Quis id sit dignissimos.
          </p>
        </div>
        <div class="block block--top-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum esse, fugiat
            sit distinctio reiciendis eos, doloremque ipsum veritatis repellendus delectus velit
            facilis fuga voluptas beatae! Quis id sit dignissimos.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
```
