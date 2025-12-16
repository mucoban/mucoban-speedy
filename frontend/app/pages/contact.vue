<template>
    <div class="main-holder">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="medium-hl">Contact</div>
                    <div class="desc">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consect
                    </div>
                    <div class="contact-alert-message">Your message has been sent successfully</div>
                    <div class="contact-box">
                        <div class="line a">
                            <input placeholder="Name"/>
                            <div class="gap-bettwen"></div>
                            <input placeholder="Lastname" />
                        </div>
                        <div class="line a">
                            <input placeholder="E-mail" />
                        </div>
                        <div class="line a">
                            <input placeholder="Phone" />
                        </div>
                        <div class="line b">
                            <textarea placeholder="Message" rows="3"></textarea>
                        </div>
                        <div class="line c">
                            <button class="btn btn-primary cus">
                                Send
                                <i class="bi bi-arrow-up-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main-holder {
        margin-bottom: 50px;
    }

    .medium-hl {
        margin: 50px 0;
    }

    .desc {
        max-width: unset;

        img {
            max-width: 500px;
            float: right;
            margin-left: 20px;
        }
    }

    .contact-box {
        max-width: 500px;
        margin: 20px auto;

        .line {
            display: flex;
            margin-bottom: 10px;

            &.c {
                justify-content: flex-end;
            }
        }

        .gap-bettwen {
            width: 10px;
        }

        input, textarea { 
            background-color: #f7f7f7;
            border: 1px solid #ccc;
            flex-grow: 1;
        }

    }

    .contact-alert-message {
        background-color: green;
        display: inline-block;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        color: white;
        font-weight: 300;
    }
</style>