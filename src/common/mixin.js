import { debounce } from "./utils"
import backtop from "components/content/backtop/backtop"

export const imglistern = {
    data() {
        return {
            imglisterner: null,
            refresh: null,
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 500)
        this.imglisterner = () => {
            this.refresh()
        }
        this.$bus.$on('load', this.imglisterner)
            //console.log("混入")
    }
}

export const backtopp = {
    components: {
        backtop
    },
    data() {
        return {
            isshow: false
        }
    },
    methods: {
        backtop() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    }
}