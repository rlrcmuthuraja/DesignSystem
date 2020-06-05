module.exports = {
    title: 'Muthubox',
    status: 'wip',
    default: 'muthubox-foo',
    context: {
        title: null,
        content: null,
        classes: null
    },
    variants: [
        {
            name: 'muthubox-foo',
            label: 'Foo box',
            context: {
                title: 'Foo box made by Muthu',
                content: 'Some foo text',
                classes: ['mrx-someclass']
            }
        },
        {
            name: 'muthubox-bar',
            label: 'Bar box',
            context: {
                title: 'Bar box lkdsfj sdkfjg dlfgkj',
                content: 'kasjd fkaljsdf askjdhf akjhsdf aks'
            }
        },
        {
            name: 'muthubox-baz',
            label: 'Baz box',
            context: {
                title: 'Baz title',
                content: 'baz content',
                classes: ['mrx-some-cool-class']
            }
        }
    ]
};