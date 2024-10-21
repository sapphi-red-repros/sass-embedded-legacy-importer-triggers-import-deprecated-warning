import { render } from 'sass-embedded'
import { fileURLToPath } from 'node:url'

await new Promise((resolve, reject) => {
  render(
    {
      file: fileURLToPath(new URL('./foo.sass', import.meta.url)),
      indentedSyntax: true,
      importer: [
        function (url, prev) {
          /* noop */
        },
      ],
      silenceDeprecations: ['legacy-js-api'],
    },
    (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    },
  )
})
