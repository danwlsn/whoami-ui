export default function NameSearch({
  query,
  setQuery,
}: {
  query: string
  setQuery: Function
}) {
  return (
    <div className="form-control w-96">
      <label className="label">
        <span className="sr-only">Search names</span>
      </label>
      <input
        type="text"
        placeholder="name"
        className="input input-primary input-bordered"
        value={query}
        onInput={(e) => setQuery((e.target as HTMLTextAreaElement).value)}
        spellCheck="false"
      />
    </div>
  )
}
