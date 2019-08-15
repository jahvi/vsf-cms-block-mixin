# Vue Storefront CMS Block Mixin

Vue Storefront mixin that parses CMS blocks content into queryable HTML elements.

## Installation

Run the following inside your VSF theme folder:

```
yarn add vsf-cms-block-mixin
```

## Usage

This mixin works in a similar way as the built in [CmsBlock](https://github.com/DivanteLtd/vue-storefront/blob/master/src/themes/default/components/core/blocks/Cms/Block.vue) component, the main difference is that it exposes a `parsedContent` property that can be used to query HTML elements using [node-html-parser](https://www.npmjs.com/package/node-html-parser).

Refer to [node-html-parse docs](https://www.npmjs.com/package/node-html-parser#api) for a list of the available query APIs.

### Example

```vue
<template>
  <div
    class="offer-container col-xs-12 col-sm-6 pb15"
    v-if="data"
  >
    <router-link :to="localizedRoute(link)">
      <div
        class="offer"
        v-lazy:background-image="image"
      >
        <h2 class="title m0 h1">
          {{ title }}
        </h2>
        <p class="subtitle m0 serif h3 uppercase">
          {{ subtitle }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import cmsBlock from 'vsf-cms-block-mixin/components/cmsBlock'

export default {
  name: 'LeftBanner',
  mixins: [
    cmsBlock
  ],
  computed: {
    title () {
      return this.parsedContent.querySelector('h2').rawText
    },
    subtitle () {
      return this.parsedContent.querySelector('p').rawText
    },
    link () {
      return this.parsedContent.querySelector('a').attributes['href']
    },
    image () {
      return this.parsedContent.querySelector('img').attributes['src']
    }
  }
}
</script>
```
