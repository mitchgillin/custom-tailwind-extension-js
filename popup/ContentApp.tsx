
// Component that rendrs grid items of the custom tailwind primary and secondary colors
export default function ContentApp() {
  return (
    <div className="mx-auto max-w-7xl md:px-0 lg:p-6">
      <h1 className="text-3xl font-bold">Tailwind Demo</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary-500 p-4">Primary</div>
        <div className="bg-secondary-500 p-4">Secondary</div>
        <div className="bg-primary-600 p-4">Primary</div>
        <div className="bg-secondary-600 p-4">Secondary</div>
      </div>
    </div>
  )
}
