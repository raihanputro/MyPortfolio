export default {
    name: 'skills',
    title: 'Kemampuan',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nama',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'Warna Background',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Ikon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
};