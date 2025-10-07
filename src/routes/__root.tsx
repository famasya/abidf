import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Header from '../components/header'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Abid Famasya',
      },
      {
        name: 'description',
        content: 'Abid Famasya Personal Site',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="w-full">
        <div className="w-full max-w-4xl mx-auto">
          <Header />
          <main>
            {children}
          </main>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
