<template>
    <div>
        <div class="container" style="padding:10">
            <h2>contact me</h2>
            <form action="mailtto: real_address@email.com"
                method="post" enctype="text/plain"
            >
                <div class="form-group">
                    <input type="email" class="form-control" 
                        v-model="contact.email" placeholder="enter email"
                    >
                </div><!-- end form-group 1 -->
                <div class="form-group">
                    <textarea class="form-control" 
                        v-model="contact.message" rows="5" placeholder="write message">
                    </textarea>
                </div><!-- end form-group 2 -->
            </form>

            <button type="button" @click="submit" class="btn btn-primary btn-lg">
                contact
            </button>
        </div><!-- end div class container -->
    </div>    
</template>

<script lang="ts">
    export default {
        data(){
            return {
                contact: {
                    email: '',
                    message: ''
                }
            }
        },
        methods: {
            submit(){
                //validate form
                if(this.contact.email !="" && this.contact.message !=""){
                    //send details to email
                } else {
                    alert("Oops! All fields are needed before sending...")
                }
            }
        }
    }
</script>
