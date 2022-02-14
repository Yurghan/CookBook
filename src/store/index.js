import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: 'm1',
          image: 'https://cdn.galleries.smcloud.net/t/photos/gf-n4vp-XMnG-9Bbs_spaghetti-w-pomidorowym-sosie-w-5-minut-z-piekarnika-bez-gotowania-makaronu.jpg',
          title: 'Delicious Spaghetti',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, consectetur similique maxime quasi excepturi molestias natus eum eligendi accusamus accusantium!',
        },
        {
          id: 'm2',
          image: 'https://media.kaufland.com/images/PPIM/AP_Content_2708/std.lang.all/79/68/Asset_817968.jpg',
          title: 'Great Pizza!',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, consectetur similique maxime quasi excepturi molestias natus eum eligendi accusamus accusantium!',
        },
        {
          id: 'm3',
          image:
            'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7baa3045-a2f9-4c88-bb67-499c9647bb94/Derivates/e4e6c739-369f-4c28-a3d8-499ec857f96c.jpg',
          title: 'Healthy Meatballs',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, consectetur similique maxime quasi excepturi molestias natus eum eligendi accusamus accusantium!',
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    },
  },

  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
