<template>
    <div>
        <section class="section">
            <div class="container-fluid">
                <img alt="Vue logo" class="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woman_1.jpg/220px-Woman_1.jpg">
                <h1>software developer</h1>
                <p>A project that I learned while learning vue.js and bootstrap</p>
                <button type="button" class="btn btn-primary btn-lg">
                    contact
                </button>
            </div>
        </section>
        <section>
            <h1>portfolio</h1>
            <p>Supposed sample projects</p>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo"
                                      class="rounded-circle img-custome" 
            src="https://www.wetechnology.cz/wp-content/uploads/2017/02/uxui.jpg">
                                <h2>web project</h2>
                            </div>
                                <hr>
                                <div class="card-body">
                                    <p> stuff and more stuff </p>
                                    <button type="button" class="btn btn-outline-secondary">
                                        More
                                    </button>
                                </div>
                        </div>
                        <br/>
                    </div>
                        <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo"
                                      class="rounded-circle img-custome" 
            src="https://www.wetechnology.cz/wp-content/uploads/2017/02/uxui.jpg">
                                <h2>web project</h2>
                            </div>
                                <hr>
                                <div class="card-body">
                                    <p> stuff and more stuff </p>
                                    <button type="button" class="btn btn-outline-secondary">
                                        More
                                    </button>
                                </div>
                        </div>
                        <br>/
                    </div>
                        <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo"
                                      class="rounded-circle img-custome" 
            src="https://www.wetechnology.cz/wp-content/uploads/2017/02/uxui.jpg">
                                <h2>web project</h2>
                            </div>
                                <hr>
                                <div class="card-body">
                                    <p> stuff and more stuff </p>
                                    <button type="button" class="btn btn-outline-secondary">
                                        More
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
                <!-- maybe put this somewhere else -->
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">contact</button>
            </div>
        </section>
        <section>
            <div class="modal fade bd-example-modal-lg" tabindex="-1"
                role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <contact/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import contact from './contact.vue'

export default {
    name: 'Lander',
    components: {
        contact
    }
}

/*
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
*/
</script>


<style lang="css" scoped>
    .section {
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .portfolio {
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;

    }

    .img-custom {
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }

</style>
