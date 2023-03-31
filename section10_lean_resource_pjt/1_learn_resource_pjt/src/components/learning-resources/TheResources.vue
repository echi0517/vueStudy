<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="seletedTab"></component>
    </keep-alive>
  </div>
</template>
<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: { StoredResources, AddResource },
  computed: {
    storedResButtonMode() {
      return this.seletedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.seletedTab === "add-resource" ? null : "flat";
    },
  },
  data() {
    return {
      seletedTab: "stored-resources",
      storedResources: [
        {
          id: "offce-guide",
          title: "Officeal Guide",
          description: "vuejs documentation",
          link: "https://vuejs.org/",
        },
        {
          id: "google",
          title: "Google",
          description: "google",
          link: "https://google.com/",
        },
      ],
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.seletedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.seletedTab = "stored-resources";
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(x => x.id === resId)
      this.storedResources.splice(resIndex, 1)
      console.log(this.storedResources)
    }
  },
};
</script>
