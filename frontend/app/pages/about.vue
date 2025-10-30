<template>
    <div class="container">
        <div class="row">
            <div class="col py-3">
                <div class="text-section">
                    <h1>Text Bölümü Başlığı</h1>
                    <p class="description">Açıklama metni burada yer alacak.</p>
                    <button>Daha Fazla</button>
                </div>
            </div>
            <div class="col py-5">
                <div class="image-section">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/p1-img-01.png" alt="Travel Photo" class="feature-image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .text-section {
        flex: 1;
        padding: 2rem;

        h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color:  black;
            margin-bottom: 1.5rem;
        }

        .description {
            font-size: 1.1rem;
            line-height: 1.6;
            color: black;
            margin-bottom: 2rem;
        }

        button {
            background-color: green;
            color: white;
            border: none;
            padding: 1rem 2rem;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;

            &:hover {
                background-color: green;
                transform: translateY(-2px);
            }
        }
    }

    .image-section {
        flex: 1;
        
        .feature-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
    }
</style>