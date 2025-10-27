<template>
    <div>
        <h1>This is about page</h1>
        <p>Welcome to the about page of our application.</p>
        <button>Read more</button>
    </div>
</template>
<style lang="scss">
    h1 {
        color: red;
    }
    p {
        color: blue;
    }
    button {
        background-color: green;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        transform: scale(1);
        
        &:hover {
            background-color: darkgreen;
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        &:active {
            transform: scale(0.95);
        }
    }
</style>