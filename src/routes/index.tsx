import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="space-y-2">
      <p>
        Currently, I lead computer nerds as the CTO of Trustmedis, a health-tech company that helps healthcare providers to serve millions of patients across Indonesia.
      </p>
      <p>
        Reach me out on <a href="https://twitter.com/famasya">Twitter</a>, <a href="https://linkedin.com/in/abid-famasya">Linkedin</a>, or just drop me an email at contact@abidf.com
      </p>
    </div>
  )
}
