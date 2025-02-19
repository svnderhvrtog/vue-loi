<template>
    <div>
        <h3>Bezoekers van vandaag zijn:</h3>
        <ul>
            <li>{{ visitor1 }}</li>
            <li>{{ visitor2 }}</li>
        </ul>
        <br>
        <h3>Hartelijk dank voor jullie bezoek!</h3>
    </div>
</template>

<script setup>
defineProps({
    visitor1: {
        type: String,
        required: true,
    },
    visitor2: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
div {
    text-align: center;
}

h3 {
    color: chartreuse;
}
</style>