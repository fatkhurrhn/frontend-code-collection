//data.mjs
const users = [
    {nama: 'Data 1', umur: 20, alamat: 'Jl. Data 1'},
    {nama: 'Data 2', umur: 21, alamat: 'J1. Data 2'}, 
    {nama: 'Data 3', umur: 22, alamat: 'J1. Data 3'}, 
    //buatkan sampai 10 data
]
    export default users;


    import { index, store, destroy } 
    from "./controller.mjs";
    const main = () => {
        //tambah dua data
        store(user);
        index();
        destroy();
    }
    main();

    
    //controller.mjs
    import users from "./data.mjs";
    const index = () => {
        // tampilkan data
    }
    const store = (user) => { 
        // tambahkan data 
    }
    const destroy = () => {
        // hapus data
    }
    export { index, store, destroy };