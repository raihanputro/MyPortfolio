export default {
    name: 'brands',
    title: 'Brand',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nama',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'Gambar Brand',
            type: 'image',
            opstions: {
                hotspot: true,
            },
        },
    ]
};