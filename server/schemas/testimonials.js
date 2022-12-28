export default {
    name: 'testimonials',
    title: 'Testimoni',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nama',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Perusahaan',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'Gambar',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ]
}