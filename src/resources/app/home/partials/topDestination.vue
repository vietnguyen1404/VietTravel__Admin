<template>
    <b-card>
        <h5 class="mb-3">Top Destinations</h5>
        <ul>
            <li v-for="des,index in destinations" :key="des.id">
                <div class="number" :style="styleBackground(index + 1)">{{ index + 1 }}</div>
                <div class="destination-name" :style="styleBackground(index + 1)"><span>{{ des.name }}</span></div>
            </li>
        </ul>
    </b-card>
</template>
<script>
export default {
    data : () => ({
        destinations : [
            {
                id : 1,
                name : "Huế"
            },
            {
                id : 2 ,
                name : 'Sài Gòn'
            },
            {
                id : 3 ,
                name : 'Hà Nội'
            }
        ]
    }),
    methods : {
        styleBackground(number) {
            switch (number) {
                case 1:
                    return 'backgroundColor : rgb(183, 249, 84)'
                case 2 : 
                    return 'backgroundColor : #ffb98a'
                case 3 :
                    return 'backgroundColor : #a3a3e6'
                case 4 : 
                    return 'backgroundColor : pink'
                default:
                    break;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
h5 {
    font-family: sans-serif;
    font-weight: bold;
}
ul {
    padding: 0;
    list-style: none;
}
li {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
}

.number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10px ;
    height: 10px;
    padding: 12px;
    border-radius: 50%;
    margin-right: 10px;
}
.destination-name {
    display: flex;
    align-items: center;
    width: 70%;
    border-radius: 6px;
    padding: 6px 20px;
}
</style>