<template>
    <section>
        <div class="container">
            <SectionHeader :title="book.name" :text="book.author" />
            <button class="btn btn-success mb-3 d-inline-flex align-items-center justify-content-center" @click="goToBackBooks">
                <font-awesome-icon icon="arrow-left" size="2xl" style="color: white; cursor: pointer;" />
            </button>
            <div class="row mb-4">
                <div class="col-lg-6">
                    <img class="img-fluid card-img-top rounded-3" src="../../public/images/akaid-dersleri.jpg" alt="">
                </div>
                <div class="col-lg-6 details-wrapper">
                    <p class="lead description">{{ book.description }}</p>
                    <div class="mb-4">
                        <div class="row border-bottom pb-2 mb-2">
                            <div class="col-lg-6"><strong>Page</strong></div>
                            <div class="col-lg-6"><strong>{{ book.pages }}</strong></div>
                        </div>
                        <div class="row border-bottom pb-2 mb-2">
                            <div class="col-lg-6"><strong>Category</strong></div>
                            <div class="col-lg-6"><strong>Akaid</strong></div>
                        </div>
                        <div class="row border-bottom pb-2 mb-2">
                            <div class="col-lg-6"><strong>Rating</strong></div>
                            <div class="col-lg-6"><strong>{{ book.rating }}</strong></div>
                        </div>
                        <div class="row border-bottom pb-2 mb-2">
                            <div class="col-lg-6"><strong>Upload Date</strong></div>
                            <div class="col-lg-6"><strong>{{ book.date }}</strong></div>
                        </div>
                    </div>
                    <div class="comments-section">
                        <h3 class="display-6 mb-2">Comments</h3>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="fw-bold fst-italic">Ebu Hanzala</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" size="lg" />
                                        <p class="mb-0 px-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="fw-bold fst-italic">Ebu Hanzala</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" size="lg" />
                                        <p class="mb-0 px-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="fw-bold fst-italic">Ebu Hanzala</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" size="lg" />
                                        <p class="mb-0 px-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="fw-bold fst-italic">Ebu Hanzala</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" size="lg" />
                                        <p class="mb-0 px-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    import books from '@/db';
    export default {
        name: "BookDetailView",
        components: {
            SectionHeader,
        },
        data(){
            return {
                book: null,
            }
        },
        created(){
            const bookId = this.$route.params.id;
            this.book = books.find(book => book.id == parseInt(bookId));
        },
        methods: {
            goToBackBooks(){
                this.$router.push({ name: 'books' });
            }
        }
    }
</script>

<style scoped>
.details-wrapper{
    max-height: 740px;
    display: flex;
    flex-direction: column;
}
.comments-section{
    flex-grow: 1;
    overflow-y: auto;
}
.description{
    min-height: 150px;
    max-height: 250px;
    overflow-y: auto;
}

.back-link {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #155ad1;
    margin-bottom: 1rem;
}

.back-link:hover {
    text-decoration: underline;
}
</style>
