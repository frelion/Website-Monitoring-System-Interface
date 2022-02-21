<template>
<div class="number-grow-warp">
    <span ref="numberGrow" :data-time="time" class="number-grow">0</span>
</div>
</template>

<script>
export default {
    props: {
        time: {
            type: Number,
            default: 1
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            
        }
    },
    mounted() {
        this.numberGrow(this.$refs.numberGrow)
    },
    methods: {
        numberGrow(ele) {
            let step = parseInt((this.value) / (this.time * 100))
            let current = 0
            let start = 0
            let t = setInterval(() => {
                start += step + 10
                if (start >= this.value) {
                    clearInterval(t)
                    start = this.value
                    t = null
                }
                if (current === start) {
                    return
                }
                current = start
                ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
            }, 10)
        }
    },
}
</script>