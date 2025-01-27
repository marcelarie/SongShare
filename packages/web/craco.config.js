// const path = require('path');

// const purgecss = require('@fullhuman/postcss-purgecss')({
//     content: [
//         path.resolve(__dirname, '..', 'src', '**', '!(*.test).js'),
//         path.resolve(__dirname, '..', 'src', '**', '*.html'),
//     ],
//     // This extractor is used for tailwind classes.
//     // Read more here: https://tailwindcss.com/docs/controlling-file-size/
//     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
// });

module.exports = {
    style: {
        postcss: {
            plugins: [
                ...(process.env.NODE_ENV === 'production' ? [] : []),
            ],
        },
    },
};
