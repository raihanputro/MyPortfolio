export default {
    name: 'abouts',
    title: 'Tentang',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Judul',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Deskripsi',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'Gambar',
            type: 'image',
            options: {
                hotsport: true,
            },
        },
    ]
};