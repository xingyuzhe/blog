
Vue.component("stack", {
  props: ['items'],
  data: function() {
    return {
      allItems: this.items
    };
  },
  template: `
        <transition-group class="stack" name="stack" tag="div">
        <span v-for="item in allItems" v-bind:key="item" class="item">
        {{ item }}
        </span>
        </transition-group>
    `,

  watch: {
      items() {
          this.allItems = this.items
      }
  }
});


Vue.component("queue", {
    props: ['items'],
    data: function() {
      return {
          allItems: this.items
      };
    },
    template: `
          <transition-group class="queue" name="queue" tag="div">
            <span v-for="item in allItems" v-bind:key="item" class="item">
            {{ item }}
            </span>
          </transition-group>
      `,

    watch: {
        items() {
            this.allItems = this.items
        }
    }
  });


  Vue.component("column", {
    props: ['items'],
    data: function() {
      return {
          allItems: this.items
      };
    },
    template: `
          <transition-group class="column" name="column" tag="div">
            <span v-for="item in allItems" v-bind:key="item" class="item">
            {{ item }}
            </span>
          </transition-group>
      `,

    watch: {
        items() {
            this.allItems = this.items
        }
    }
  });  


var app = new Vue({
  el: "#app",
  data: {
    currentStep: 0,
    stepData,
    currentData: stepData[0]
  },
  computed: {
    curCodeStyle() {
        console.log(this.currentData.line)

        return {
            transform: `translateY(${this.currentData.line*21}px)`
        }
    }
  },
  methods: {
    test() {
        this.$refs.taskQueue.in('hello()')
    },
    test2() {
        this.$refs.taskQueue.out()
    },
    prev() {
        if (this.currentStep - 1 >= 0) {
            this.currentStep--
            const newData = this.stepData[this.currentStep]
            this.diffAndRun(this.currentData, newData)
        }
    },
    next() {
        if (this.currentStep + 1 < this.stepData.length) {
            this.currentStep++
            const newData = this.stepData[this.currentStep]
            this.diffAndRun(this.currentData, newData)

        } else {
            this.reset()
        }
    },
    reset() {
        this.currentStep = 0
        this.currentData = this.stepData[0]
    },
    diffAndRun(oldData, newData) {
        Object.keys(oldData).map(key => {
            if (!Array.isArray(oldData[key])) {
                oldData[key] = newData[key]
                return
            }

            if (newData[key].length > oldData[key].length) {
                oldData[key].push(newData[key][newData[key].length - 1])
            }

            if (newData[key].length < oldData[key].length) {
                oldData[key].pop()
            }
        })

        console.log(oldData)
    }
  }
});
