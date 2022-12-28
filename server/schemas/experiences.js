export default {
    name: 'experiences',
    title: 'Pengalaman',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nama',
            type: 'string'
        },
        {
            name: 'projects',
            title: 'Projek',
            type: 'array',
            of: [
                {
                    type: 'workExperience'
                }
            ]
        }
    ]
}