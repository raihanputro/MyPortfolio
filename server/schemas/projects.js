export default {
    name: 'projects',
    title: 'Projek',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Judul',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Deskirpsi',
            type: 'string'
        },
        {
            name: 'projectLink',
            title: 'Link Projek',
            type: 'string'
        },
        {
            name: 'codeLink',
            title: 'Link Kode',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'Gambar Projek',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tag-tag Projek',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ],
        },
    ],
};