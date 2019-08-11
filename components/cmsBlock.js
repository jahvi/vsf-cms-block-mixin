import { parse } from 'node-html-parser';

export default {
  props: {
    id: {
      type: Number,
      default: null,
      required: false
    },
    identifier: {
      type: String,
      default: null,
      required: false
    }
  },
  created() {
    let queryKey = '';
    let queryValue = '';

    if (this.id) {
      queryKey = 'id';
      queryValue = this.id;
    } else if (this.identifier) {
      queryKey = 'identifier';
      queryValue = this.identifier;
    }

    if (queryKey && queryValue) {
      this.$store.dispatch('cmsBlock/single', {
        key: queryKey,
        value: queryValue
      });
    }
  },
  computed: {
    data() {
      if (this.id) {
        return this.$store.getters[`cmsBlock/cmsBlockId`](this.id);
      } else if (this.identifier) {
        return this.$store.getters[`cmsBlock/cmsBlockIdentifier`](
          this.identifier
        );
      }
    },
    parsedContent() {
      return parse(this.data.content);
    }
  }
};
